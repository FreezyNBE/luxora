"use client";
import { AlertError } from "@/app/components/alert/AlertError";
import { AlertSuccess } from "@/app/components/alert/AlertSuccess";
import BackButton from "@/app/components/min/BackButton";
import Knob from "@/app/components/min/Knob";
import { ButtonMin } from "@/app/components/misc/Button";
import { Input, InputDate, Select, Textarea } from "@/app/components/misc/Input";
import { Amenity } from "@/generated/prisma/client";
import { RoomType, RoomView } from "@/generated/prisma/enums";
import { useCurrentSession } from "@/lib/auth-session";
import { formatDate, getAllowTypePictures, isAmountDecimal, isValidDate } from "@/utils/_functions";
import {
    ALLOWED_PICTURE_TYPES,
    API_URL,
    listMockAmenities,
    MAX_DOORS_PER_FLOOR,
    MAX_FLOORS,
    MAX_IMAGE_SIZE,
    MAX_ROOM_GUESTS,
    MAX_ROOM_NIGHTS,
    MAX_IMAGE_SIZE_MB,
    MIN_ROOM_NAME,
    MAX_ROOM_NAME,
    MIN_ROOM_DESCRIPTION,
    MAX_ROOM_DESCRIPTION,
    MAX_ROOM_SIZE,
} from "@/utils/_variables";
import { Camera, Download, Info, SquarePen, X } from "lucide-react";
import { useEffect, useState, useTransition } from "react";

export type NewRoomData = {
    name: string;
    type: RoomType;
    description: string;
    images?: {
        main?: {
            file?: any;
            previewSourceBlob?: string;
        };
        gallery?: {
            file?: any;
            previewSourceBlob?: string;
        }[];
    };
    maxGuests?: number;
    roomSize?: number;
    roomView: RoomView;
    floor?: number;
    door?: number;
    amenities?: Amenity[];
    pricePerNight?: string;
    maxNights?: number;
    status: boolean;
    availableFrom?: {
        value?: Date | undefined;
        error?: string | undefined;
    };
    availableUntil?: {
        value?: Date | undefined;
        error?: string | undefined;
    };
};

export type AddNewRoomResponse = {
    success: boolean;
    message: string;
};

const initialState = {
    name: "",
    type: RoomType.Standard,
    description: "",
    roomView: RoomView.None,
    status: false,
};

export default function CreateRoomPage() {
    const session = useCurrentSession();
    const [newRoomData, setNewRoomData] = useState<NewRoomData>(initialState);
    const [success, setSuccess] = useState<string>("");
    const [error, setError] = useState<string>("");
    const [isPending, startTransition] = useTransition();

    if (!session?.user) return;

    useEffect(() => {
        if (success.length || error.length) {
            window.scrollTo({
                top: 0,
                behavior: "smooth",
            });
        }
    }, [success, error]);

    const setRoomPrice = (e: React.ChangeEvent<HTMLInputElement>) => {
        setNewRoomData((prev) => {
            const value = e.target.value;

            if (isAmountDecimal(value)) {
                return {
                    ...prev,
                    pricePerNight: e.target.value,
                };
            }

            return prev;
        });
    };

    const setRoomStatus = () => {
        setNewRoomData((prev) => {
            return {
                ...prev,
                status: !prev.status,
            };
        });
    };

    const uploadMainImage = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (!e.target.files) return;
        if (e.target.files.length !== 1) return;

        const file = e.target.files[0];
        if (!ALLOWED_PICTURE_TYPES.includes(file.type)) {
            setError(`Only .${getAllowTypePictures(ALLOWED_PICTURE_TYPES)} types are acceptable.`);
            return;
        }

        setError("");

        setNewRoomData((prev) => {
            return {
                ...prev,
                images: {
                    ...prev.images,
                    main: {
                        file,
                        previewSourceBlob: URL.createObjectURL(file),
                    },
                },
            };
        });
    };

    const removeMainImage = () => {
        // Prevent memory leaks
        if (newRoomData.images?.main?.previewSourceBlob) {
            URL.revokeObjectURL(newRoomData.images.main.previewSourceBlob);
        }

        setNewRoomData((prev) => {
            return {
                ...prev,
                images: {
                    ...prev.images,
                    main: undefined,
                },
            };
        });
    };

    const uploadGalleryImage = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (!e.target.files) return;
        if (e.target.files.length !== 1) return;

        const file = e.target.files[0];
        if (!ALLOWED_PICTURE_TYPES.includes(file.type)) {
            setError(`Only .${getAllowTypePictures(ALLOWED_PICTURE_TYPES)} types are acceptable.`);
            return;
        }

        setError("");

        setNewRoomData((prev) => {
            return {
                ...prev,
                images: {
                    ...prev.images,
                    gallery: [
                        ...(prev.images?.gallery ?? []),
                        {
                            file,
                            previewSourceBlob: URL.createObjectURL(file),
                        },
                    ],
                },
            };
        });
    };

    const removeGalleryImage = (i: number) => {
        const image = newRoomData.images?.gallery?.[i];

        if (image?.previewSourceBlob) {
            URL.revokeObjectURL(image.previewSourceBlob);
        }

        setNewRoomData((prev) => {
            return {
                ...prev,
                images: {
                    ...prev.images,
                    gallery: prev.images?.gallery?.filter((_, index) => index !== i),
                },
            };
        });
    };

    const addNewRoom = async () => {
        if (isPending) return;

        if (
            !newRoomData.name ||
            !newRoomData.description ||
            !newRoomData.maxGuests ||
            !newRoomData.roomSize ||
            !newRoomData.floor ||
            !newRoomData.door ||
            !newRoomData.pricePerNight ||
            !newRoomData.maxNights ||
            !newRoomData.availableFrom?.value ||
            !newRoomData.availableUntil?.value
        ) {
            setError("Required fields are missing.");
            return;
        }

        if (newRoomData.images?.main?.file instanceof File) {
            if (newRoomData.images.main.file.size > MAX_IMAGE_SIZE) {
                setError(`Main image must be ${MAX_IMAGE_SIZE_MB} MB or smaller.`);
                return;
            }
        }

        newRoomData.images?.gallery?.forEach((image) => {
            if (image.file instanceof File) {
                if (image.file.size > MAX_IMAGE_SIZE) {
                    setError(`Gallery images must be ${MAX_IMAGE_SIZE_MB} MB or smaller.`);
                    return;
                }
            }
        });

        if (newRoomData.name.length < MIN_ROOM_NAME || newRoomData.name.length > MAX_ROOM_NAME) {
            setError(`Room name length must be between ${MIN_ROOM_NAME} and ${MAX_ROOM_NAME} characters.`);
            return;
        }

        if (newRoomData.description.length < MIN_ROOM_DESCRIPTION || newRoomData.description.length > MAX_ROOM_DESCRIPTION) {
            setError(`Room description length must be between ${MIN_ROOM_DESCRIPTION} and ${MAX_ROOM_DESCRIPTION} characters.`);
            return;
        }

        if (
            !Number.isSafeInteger(newRoomData.maxGuests) ||
            newRoomData.maxGuests < 1 ||
            newRoomData.maxGuests > MAX_ROOM_GUESTS
        ) {
            setError(`Max guests must be between 1 and ${MAX_ROOM_GUESTS}.`);
            return;
        }

        if (!Number.isSafeInteger(newRoomData.roomSize) || newRoomData.roomSize < 1 || newRoomData.roomSize > MAX_ROOM_SIZE) {
            setError(`Room size (sq) must be between 1 and ${MAX_ROOM_SIZE}.`);
            return;
        }

        if (!Number.isSafeInteger(newRoomData.floor) || newRoomData.floor < 1 || newRoomData.floor > MAX_FLOORS) {
            setError(`Invalid floor number (1-${MAX_FLOORS}).`);
            return;
        }

        if (
            !Number.isSafeInteger(newRoomData.door) ||
            newRoomData.door < 1 ||
            newRoomData.door > MAX_FLOORS * MAX_DOORS_PER_FLOOR
        ) {
            setError(`Invalid door number (1-${MAX_FLOORS * MAX_DOORS_PER_FLOOR}).`);
            return;
        }

        if (
            !Number.isSafeInteger(newRoomData.maxNights) ||
            newRoomData.maxNights < 1 ||
            newRoomData.maxNights > MAX_ROOM_NIGHTS
        ) {
            setError(`Maximum stays (nights) must be between 1 and ${MAX_ROOM_NIGHTS}.`);
            return;
        }

        if (!isAmountDecimal(newRoomData.pricePerNight)) {
            setError("Price per night is not decimal (eg: 100.00).");
            return;
        }

        if (Number(newRoomData.pricePerNight) < 1 || Number(newRoomData.pricePerNight) >= 500.0) {
            setError("Invalid price per night (acceptable value must be between 1 and 500.00).");
            return;
        }

        const from = new Date(newRoomData.availableFrom.value);
        const until = new Date(newRoomData.availableUntil.value);

        if (!isValidDate(from) || !isValidDate(until)) {
            setError("Invalid availability dates.");
            return;
        }

        if (from >= until) {
            setError("The available-from date must be before available-until date.");
            return;
        }

        if (confirm("Add new room?")) {
            const formData = new FormData();
            formData.append("userId", session.user.id);

            formData.append("name", newRoomData.name);
            formData.append("type", newRoomData.type);
            formData.append("description", newRoomData.description);

            if (newRoomData.images?.main) {
                formData.append("mainImage", newRoomData.images?.main?.file);
            }

            newRoomData.images?.gallery?.forEach((image) => {
                if (image.file instanceof File) {
                    formData.append("images", image.file);
                }
            });

            formData.append("maxGuests", newRoomData.maxGuests?.toString());
            formData.append("roomSize", newRoomData.roomSize?.toString());
            formData.append("roomView", newRoomData.roomView);
            formData.append("floor", newRoomData.floor?.toString());
            formData.append("door", newRoomData.door?.toString());
            formData.append("pricePerNight", newRoomData.pricePerNight?.toString());
            formData.append("maxNights", newRoomData.maxNights?.toString());
            formData.append("availableFrom", newRoomData.availableFrom.value.toString());
            formData.append("availableUntil", newRoomData.availableUntil.value.toString());
            formData.append("isActive", newRoomData.status ? "1" : "0");

            startTransition(async () => {
                try {
                    const request = await fetch(`${API_URL}/admin/room/create`, {
                        method: "POST",
                        body: formData,
                    });

                    const response: AddNewRoomResponse = await request.json();

                    if (!response.success) {
                        setError(response.message ?? "Failed to add new room.");
                        return;
                    }

                    setError("");
                    setSuccess(response.message);
                    setNewRoomData(initialState);
                } catch {
                    setError("Something went wrong. Failed to add new room.");
                }
            });
        }
    };

    return (
        <>
            <BackButton url="/admin/rooms" text="Back to Rooms" />
            <div>
                <h1 className="text-3xl tracking-wide">Add New Room</h1>
                <span className="text-gray-600 text-sm">Fill in the details below to add a new room to your hotel.</span>
            </div>
            <div className="space-y-2">
                {error && <AlertError closeBtn={() => setError("")}>{error}</AlertError>}
                {success && <AlertSuccess closeBtn={() => setSuccess("")}>{success}</AlertSuccess>}
            </div>
            {/* Container - Basic Information */}
            <div className="w-full space-y-5 p-4 bg-cream border border-border-gray rounded-md">
                <div className="flex flex-col gap-y-1">
                    <span>Basic Information</span>
                    <span className="text-xs text-gray-600 font-medium">Enter the main details about the room</span>
                </div>
                <div className="w-full flex flex-col lg:flex-row items-start gap-10">
                    {/* Fields on the left */}
                    <div className="flex-1 w-full space-y-5">
                        <div className="flex flex-col gap-2">
                            <Input
                                type="text"
                                id="room_name"
                                name="room_name"
                                placeholder="Enter room name"
                                value={newRoomData.name}
                                onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                                    setNewRoomData((prev) => {
                                        return { ...prev, name: e.target.value };
                                    })
                                }
                                min={MIN_ROOM_NAME}
                                max={MAX_ROOM_NAME}
                                required
                            >
                                Room Name <span className="text-rose-700">*</span>
                            </Input>
                        </div>
                        <div className="flex flex-col gap-2">
                            <Select
                                id="room_type"
                                name="room_type"
                                options={Object.values(RoomType)}
                                onChange={(e: React.ChangeEvent<HTMLSelectElement>) =>
                                    setNewRoomData((prev) => {
                                        return { ...prev, type: e.target.value as RoomType };
                                    })
                                }
                                required
                            >
                                Room Type is <span className="text-rose-700">*</span>
                            </Select>
                        </div>
                        <div className="flex flex-col gap-2">
                            <Textarea
                                id="room_description"
                                name="room_description"
                                placeholder="Enter a short description of this room..."
                                className="h-15 lg:h-25 max-h-35"
                                label={true}
                                value={newRoomData.description}
                                onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) =>
                                    setNewRoomData((prev) => {
                                        return { ...prev, description: e.target.value };
                                    })
                                }
                                minLength={MIN_ROOM_DESCRIPTION}
                                maxLength={MAX_ROOM_DESCRIPTION}
                                required
                            >
                                Description <span className="text-rose-700">*</span>
                            </Textarea>
                        </div>
                    </div>
                    {/* Main Image on the right */}
                    <div className="flex-1 w-full lg:max-w-120 space-y-2">
                        <div className="heading">
                            Main Image <span className="text-rose-700">*</span>
                        </div>
                        {newRoomData.images?.main?.previewSourceBlob ? (
                            <div className="relative w-full h-auto rounded-md overflow-hidden">
                                <img
                                    src={newRoomData.images.main.previewSourceBlob}
                                    alt="Main Image"
                                    className="object-cover rounded-md aspect-video"
                                />
                                <div
                                    onClick={removeMainImage}
                                    className="absolute top-1 right-1 p-0.5 bg-black/50 hover:bg-rose-600 cursor-pointer rounded-full transition-colors duration-100"
                                >
                                    <X size={"1rem"} className="text-white" />
                                </div>
                            </div>
                        ) : (
                            <div className="w-full min-h-64 flex items-center justify-center border border-dashed border-gray-300 rounded-md text-gray-500">
                                <span className="text-sm">No Image</span>
                            </div>
                        )}
                        <div className="w-full border border-border-gray p-2.5 rounded-md hover:bg-border-gray cursor-pointer transition-all duration-100">
                            <input type="file" id="main_image" name="main_image" onChange={uploadMainImage} hidden />
                            <label htmlFor="main_image" className="flex items-center justify-center gap-2 cursor-pointer">
                                <Download size={"1rem"} className="text-gray-700" />
                                <span className="text-xs text-gray-600">
                                    {newRoomData.images?.main?.previewSourceBlob ? "Change Main Image" : "Add Main Image"}
                                </span>
                            </label>
                        </div>
                        <span className="text-xs text-gray-500 font-medium">
                            Recommanded size: 1200 &times; 800 (JPG, PNG).
                        </span>
                    </div>
                </div>
            </div>
            {/* Container - Gallery Images */}
            <div className="w-full space-y-5 p-4 bg-cream border border-border-gray rounded-md">
                <div className="flex flex-col gap-y-1">
                    <span>Gallery Images</span>
                    <span className="text-xs text-gray-600 font-medium">
                        Add multiple images of the room to showcase its features.
                    </span>
                </div>
                <div className="w-full space-y-2">
                    <div className="flex flex-wrap gap-4">
                        {newRoomData.images?.gallery?.map((g, index) => (
                            <div key={index} className="relative w-64 h-35 rounded-md overflow-hidden group">
                                <img
                                    src={g.previewSourceBlob}
                                    alt={`Gallery Image ${index + 1}`}
                                    className="object-cover rounded-md aspect-video"
                                />
                                <div
                                    onClick={() => removeGalleryImage(index)}
                                    className="absolute top-1 right-1 p-0.5 bg-black/50 hover:bg-rose-600 cursor-pointer rounded-full transition-colors duration-100"
                                >
                                    <X size={"1rem"} className="text-white" />
                                </div>
                            </div>
                        ))}
                        <div className="w-64 h-35 flex items-center justify-center border border-dashed border-gray-300 rounded-md text-gray-500 cursor-pointer hover:border-gold hover:text-gold">
                            <input type="file" id="gallery_image" name="gallery_image" onChange={uploadGalleryImage} hidden />
                            <label
                                htmlFor="gallery_image"
                                className="flex flex-col items-center justify-center gap-2 cursor-pointer"
                            >
                                <Camera />
                                <span className="text-sm">
                                    {newRoomData.images?.gallery?.length ? "Add More Images" : "Add Images"}
                                </span>
                            </label>
                        </div>
                    </div>
                    <span className="text-xs text-gray-500 font-medium">
                        You can upload up to 10 images (JPG, PNG). Recommanded size: 1200 &times; 800.
                    </span>
                </div>
            </div>
            {/* Container - Room Details */}
            <div className="w-full space-y-5 p-4 bg-cream border border-border-gray rounded-md">
                <div className="flex flex-col gap-y-1">
                    <span>Room Details</span>
                    <span className="text-xs text-gray-600 font-medium">Set the capacity, size and key features.</span>
                </div>
                <div className="w-full flex flex-col lg:flex-row items-start gap-5 lg:gap-20">
                    <div className="flex-1 w-full space-y-5">
                        <div className="flex flex-col gap-2">
                            <Input
                                type="number"
                                id="max_guests"
                                name="max_guests"
                                placeholder="2"
                                value={newRoomData.maxGuests ?? ""}
                                onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                                    setNewRoomData((prev) => {
                                        return {
                                            ...prev,
                                            maxGuests: Number(e.target.value),
                                        };
                                    })
                                }
                                min={1}
                                max={MAX_ROOM_GUESTS}
                                required
                            >
                                Max Guests <span className="text-rose-700">*</span>
                            </Input>
                        </div>
                        <div className="flex flex-col gap-2">
                            <Input
                                type="number"
                                id="room_size"
                                name="room_size"
                                placeholder="eg: 30"
                                value={newRoomData.roomSize ?? ""}
                                onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                                    setNewRoomData((prev) => {
                                        return {
                                            ...prev,
                                            roomSize: Number(e.target.value),
                                        };
                                    })
                                }
                                min={1}
                                max={MAX_ROOM_SIZE}
                                required
                            >
                                Room Size (sq. ft.) <span className="text-rose-700">*</span>
                            </Input>
                        </div>
                        <div className="flex flex-col gap-2">
                            <Select
                                id="room_viewtype"
                                name="room_viewtype"
                                options={Object.values(RoomView)}
                                onChange={(e: React.ChangeEvent<HTMLSelectElement>) =>
                                    setNewRoomData((prev) => {
                                        return { ...prev, roomView: e.target.value as RoomView };
                                    })
                                }
                                required
                            >
                                Room View <span className="text-rose-700">*</span>
                            </Select>
                        </div>
                    </div>
                    <div className="flex-1 w-full space-y-5">
                        <div className="flex flex-col gap-2">
                            <Input
                                type="number"
                                id="room_floor"
                                name="room_floor"
                                placeholder="eg: 8"
                                value={newRoomData.floor ?? ""}
                                onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                                    setNewRoomData((prev) => {
                                        return {
                                            ...prev,
                                            floor: Number(e.target.value),
                                        };
                                    })
                                }
                                min={1}
                                max={MAX_FLOORS}
                                required
                            >
                                Floor <span className="text-rose-700">*</span>
                            </Input>
                        </div>
                        <div className="flex flex-col gap-2">
                            <Input
                                type="number"
                                id="room_door"
                                name="room_door"
                                placeholder="eg: 12"
                                value={newRoomData.door ?? ""}
                                onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                                    setNewRoomData((prev) => {
                                        return {
                                            ...prev,
                                            door: Number(e.target.value),
                                        };
                                    })
                                }
                                min={1}
                                max={MAX_FLOORS * MAX_DOORS_PER_FLOOR}
                                required
                            >
                                Door <span className="text-rose-700">*</span>
                            </Input>
                        </div>
                    </div>
                </div>
            </div>
            {/* Container - Amenities */}
            <div className="w-full space-y-5 p-4 bg-cream border border-border-gray rounded-md">
                <div className="flex flex-col gap-y-1">
                    <span>Amenities</span>
                    <span className="text-xs text-gray-600 font-medium">Select the amenities available in this room.</span>
                </div>
                <div className="w-full flex flex-wrap gap-2">
                    {listMockAmenities.map((a, index) => (
                        <div key={index} className="flex flex-1/2 sm:flex-1/3 md:flex-1/4 items-center">
                            <input type="checkbox" id={a} name={a} className="accent-yellow-700/80" />
                            <label htmlFor={a} className="select-none ms-2 text-xs font-medium text-heading">
                                {a}
                            </label>
                        </div>
                    ))}
                </div>
            </div>
            {/* Container - Pricing & Availability */}
            <div className="w-full space-y-5 p-4 bg-cream border border-border-gray rounded-md">
                <div className="flex flex-col gap-y-1">
                    <span>Pricing &#038; Availability</span>
                    <span className="text-xs text-gray-600 font-medium">Set the price and availability for this room.</span>
                </div>
                <div className="w-full flex flex-col lg:flex-row items-start gap-5 lg:gap-20">
                    <div className="flex-1 w-full space-y-5">
                        <div className="flex flex-col gap-2">
                            <Input
                                type="text"
                                id="room_price"
                                name="room_price"
                                inputMode="decimal"
                                placeholder="eg: 100.99"
                                value={newRoomData.pricePerNight ?? ""}
                                onChange={setRoomPrice}
                            >
                                Price (per night) <span className="text-rose-700">*</span>
                            </Input>
                        </div>
                        <div className="flex flex-col gap-2">
                            <Input
                                type="number"
                                id="max_nights"
                                name="max_nights"
                                placeholder="1"
                                value={newRoomData.maxNights ?? ""}
                                onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                                    setNewRoomData((prev) => {
                                        return {
                                            ...prev,
                                            maxNights: Number(e.target.value),
                                        };
                                    })
                                }
                                min={1}
                                max={MAX_ROOM_NIGHTS}
                                required
                            >
                                Maximum stays (nights) <span className="text-rose-700">*</span>
                            </Input>
                        </div>
                        <div className="flex flex-col gap-2">
                            <span className="heading">Status</span>
                            <div className="flex items-start gap-3">
                                <Knob onClick={setRoomStatus} status={newRoomData.status} />
                                <div className="flex flex-col gap-2">
                                    <span className="heading">{newRoomData.status ? "Available" : "Unavailable"}</span>
                                    <span className="text-xs text-gray-500/70">
                                        {newRoomData.status
                                            ? "Make this room be shown and available for booking."
                                            : "Disable this room to be shown and available for booking."}
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="flex-1 w-full space-y-5">
                        <div className="flex flex-col gap-2">
                            <InputDate
                                id="available_from"
                                name="available_from"
                                value={newRoomData.availableFrom?.value ? formatDate(newRoomData.availableFrom.value) : ""}
                                onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                                    setNewRoomData((prev) => {
                                        const value = e.target.value;

                                        if (value) {
                                            const newValue = new Date(`${value}T00:00:00`);

                                            if (prev.availableUntil?.value && prev.availableUntil?.value <= newValue) {
                                                return {
                                                    ...prev,
                                                    availableFrom: {
                                                        value: undefined,
                                                        error: "Available-from date must be before Available-until date.",
                                                    },
                                                };
                                            }

                                            return {
                                                ...prev,
                                                // using new Date("y-m-d") parses the date as UTC, which can cause the calendar day to shift in some timezones when displayed locally.
                                                // using new Date("y-m-dT00:00:000") avoids that particular issue by creating local midnight.
                                                availableFrom: {
                                                    value: new Date(`${value}T00:00:00`),
                                                    error: undefined,
                                                },
                                            };
                                        }

                                        return prev;
                                    })
                                }
                                required
                            >
                                Available from <span className="text-rose-700">*</span>
                            </InputDate>
                            {newRoomData.availableFrom?.error && (
                                <div className="flex items-center gap-1 text-xs text-rose-700 font-medium">
                                    <Info size={"1rem"} />
                                    <span>{newRoomData.availableFrom.error}</span>
                                </div>
                            )}
                        </div>
                        <div className="flex flex-col gap-2">
                            <InputDate
                                id="available_until"
                                name="available_until"
                                value={newRoomData.availableUntil?.value ? formatDate(newRoomData.availableUntil.value) : ""}
                                onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                                    setNewRoomData((prev) => {
                                        const value = e.target.value;

                                        if (value) {
                                            const newValue = new Date(`${value}T00:00:00`);

                                            if (prev.availableFrom?.value && prev.availableFrom?.value >= newValue) {
                                                return {
                                                    ...prev,
                                                    availableUntil: {
                                                        value: undefined,
                                                        error: "Available-until date must be after Available-from date.",
                                                    },
                                                };
                                            }

                                            return {
                                                ...prev,
                                                // using new Date("y-m-d") parses the date as UTC, which can cause the calendar day to shift in some timezones when displayed locally.
                                                // using new Date("y-m-dT00:00:000") avoids that particular issue by creating local midnight.
                                                availableUntil: {
                                                    value: new Date(`${value}T00:00:00`),
                                                    error: undefined,
                                                },
                                            };
                                        }

                                        return prev;
                                    })
                                }
                                required
                            >
                                Available until <span className="text-rose-700">*</span>
                            </InputDate>
                            {newRoomData.availableUntil?.error && (
                                <div className="flex items-center gap-1 text-xs text-rose-700 font-medium">
                                    <Info size={"1rem"} />
                                    <span>{newRoomData.availableUntil.error}</span>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
            <div className="w-full space-y-5 p-4 bg-cream border border-border-gray rounded-md">
                <div className="flex flex-col gap-3">
                    <span className="block text-xs text-gray-600 font-medium">Click the button to add this room.</span>
                    <ButtonMin onClick={addNewRoom} className="flex items-center justify-center gap-2">
                        <SquarePen size={"1.25rem"} className="text-white" />
                        <span className="text-white">Add New Room</span>
                    </ButtonMin>
                </div>
            </div>
        </>
    );
}
