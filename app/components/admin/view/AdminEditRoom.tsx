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
import { RoomModel } from "@/types/_rooms";
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

export type RoomData = {
    name: string;
    type: RoomType;
    description: string;
    image: string | null;
    images: string[];
    uploadImages?: {
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
        value?: Date | null;
        error?: string | null;
    };
    availableUntil?: {
        value?: Date | null;
        error?: string | null;
    };
};

export type EditRoomResponse = {
    success: boolean;
    message: string;
    room?: RoomModel;
};

const initialState = (room: RoomModel): RoomData => {
    return {
        name: room.name,
        type: room.type,
        description: room.description ?? "",
        maxGuests: room.maxGuests,
        roomSize: room.areaSqm,
        roomView: room.view,
        floor: room.floorNumber,
        door: room.doorNumber,
        pricePerNight: room.pricePerNight,
        maxNights: room.maxNights,
        status: room.isActive,
        availableFrom: {
            value: room.availableFrom ? new Date(room.availableFrom) : null,
        },
        availableUntil: {
            value: room.availableUntil ? new Date(room.availableUntil) : null,
        },
        image: room.image,
        images: room.images,
    };
};

export default function AdminEditRoom({ room }: { room: RoomModel }) {
    const session = useCurrentSession()!;
    const [roomData, setRoomData] = useState<RoomData>(initialState(room));
    const [success, setSuccess] = useState<string>("");
    const [error, setError] = useState<string>("");
    const [isPending, startTransition] = useTransition();

    useEffect(() => {
        if (success.length || error.length) {
            window.scrollTo({
                top: 0,
                behavior: "smooth",
            });
        }
    }, [success, error]);

    const setRoomPrice = (e: React.ChangeEvent<HTMLInputElement>) => {
        setRoomData((prev) => {
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
        setRoomData((prev) => {
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

        removeMainImageDB();

        setError("");

        setRoomData((prev) => {
            return {
                ...prev,
                uploadImages: {
                    ...prev.uploadImages,
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
        if (roomData.uploadImages?.main?.previewSourceBlob) {
            URL.revokeObjectURL(roomData.uploadImages.main.previewSourceBlob);
        }

        setRoomData((prev) => {
            return {
                ...prev,
                uploadImages: {
                    ...prev.uploadImages,
                    main: undefined,
                },
            };
        });
    };

    const removeMainImageDB = () => {
        setRoomData((prev) => ({ ...prev, image: null }));
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

        setRoomData((prev) => {
            return {
                ...prev,
                uploadImages: {
                    ...prev.uploadImages,
                    gallery: [
                        ...(prev.uploadImages?.gallery ?? []),
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
        const image = roomData.uploadImages?.gallery?.[i];

        if (image?.previewSourceBlob) {
            URL.revokeObjectURL(image.previewSourceBlob);
        }

        setRoomData((prev) => {
            return {
                ...prev,
                uploadImages: {
                    ...prev.uploadImages,
                    gallery: prev.uploadImages?.gallery?.filter((_, index) => index !== i),
                },
            };
        });
    };

    const removeGalleryImageDB = (i: number) => {
        setRoomData((prev) => {
            return {
                ...prev,
                images: prev.images.filter((_, index) => index !== i),
            };
        });
    };

    const editRoom = async () => {
        if (isPending) return;

        if (
            !roomData.name ||
            !roomData.description ||
            !roomData.maxGuests ||
            !roomData.roomSize ||
            !roomData.floor ||
            !roomData.door ||
            !roomData.pricePerNight ||
            !roomData.maxNights ||
            !roomData.availableFrom?.value ||
            !roomData.availableUntil?.value
        ) {
            setError("Required fields are missing.");
            return;
        }

        if (roomData.uploadImages?.main?.file instanceof File) {
            if (roomData.uploadImages.main.file.size > MAX_IMAGE_SIZE) {
                setError(`Main image must be ${MAX_IMAGE_SIZE_MB} MB or smaller.`);
                return;
            }
        }

        roomData.uploadImages?.gallery?.forEach((image) => {
            if (image.file instanceof File) {
                if (image.file.size > MAX_IMAGE_SIZE) {
                    setError(`Gallery images must be ${MAX_IMAGE_SIZE_MB} MB or smaller.`);
                    return;
                }
            }
        });

        if (roomData.name.length < MIN_ROOM_NAME || roomData.name.length > MAX_ROOM_NAME) {
            setError(`Room name length must be between ${MIN_ROOM_NAME} and ${MAX_ROOM_NAME} characters.`);
            return;
        }

        if (roomData.description.length < MIN_ROOM_DESCRIPTION || roomData.description.length > MAX_ROOM_DESCRIPTION) {
            setError(`Room description length must be between ${MIN_ROOM_DESCRIPTION} and ${MAX_ROOM_DESCRIPTION} characters.`);
            return;
        }

        if (!Number.isSafeInteger(roomData.maxGuests) || roomData.maxGuests < 1 || roomData.maxGuests > MAX_ROOM_GUESTS) {
            setError(`Max guests must be between 1 and ${MAX_ROOM_GUESTS}.`);
            return;
        }

        if (!Number.isSafeInteger(roomData.roomSize) || roomData.roomSize < 1 || roomData.roomSize > MAX_ROOM_SIZE) {
            setError(`Room size (sq) must be between 1 and ${MAX_ROOM_SIZE}.`);
            return;
        }

        if (!Number.isSafeInteger(roomData.floor) || roomData.floor < 1 || roomData.floor > MAX_FLOORS) {
            setError(`Invalid floor number (1-${MAX_FLOORS}).`);
            return;
        }

        if (!Number.isSafeInteger(roomData.door) || roomData.door < 1 || roomData.door > MAX_FLOORS * MAX_DOORS_PER_FLOOR) {
            setError(`Invalid door number (1-${MAX_FLOORS * MAX_DOORS_PER_FLOOR}).`);
            return;
        }

        if (!Number.isSafeInteger(roomData.maxNights) || roomData.maxNights < 1 || roomData.maxNights > MAX_ROOM_NIGHTS) {
            setError(`Maximum stays (nights) must be between 1 and ${MAX_ROOM_NIGHTS}.`);
            return;
        }

        if (!isAmountDecimal(roomData.pricePerNight)) {
            setError("Price per night is not decimal (eg: 100.00).");
            return;
        }

        if (Number(roomData.pricePerNight) < 1 || Number(roomData.pricePerNight) >= 500.0) {
            setError("Invalid price per night (acceptable value must be between 1 and 500.00).");
            return;
        }

        const from = new Date(roomData.availableFrom.value);
        const until = new Date(roomData.availableUntil.value);

        if (!isValidDate(from) || !isValidDate(until)) {
            setError("Invalid availability dates.");
            return;
        }

        if (from >= until) {
            setError("The available-from date must be before available-until date.");
            return;
        }

        if (confirm("Save changes?")) {
            const formData = new FormData();
            formData.append("userId", session.user.id);
            formData.append("roomId", room.id);

            formData.append("name", roomData.name);
            formData.append("type", roomData.type);
            formData.append("description", roomData.description);

            if (roomData.image) {
                formData.append("keepOriginalMainImage", "1");
            } else if (!roomData.image && roomData.uploadImages?.main) {
                formData.append("mainImageUploaded", roomData.uploadImages?.main?.file);
            }

            roomData.images.forEach((i) => {
                formData.append("originalGalleryImages", i);
            });

            roomData.uploadImages?.gallery?.forEach((image) => {
                if (image.file instanceof File) {
                    formData.append("galleryImagesUploaded", image.file);
                }
            });

            formData.append("maxGuests", roomData.maxGuests?.toString());
            formData.append("roomSize", roomData.roomSize?.toString());
            formData.append("roomView", roomData.roomView);
            formData.append("floor", roomData.floor?.toString());
            formData.append("door", roomData.door?.toString());
            formData.append("pricePerNight", roomData.pricePerNight?.toString());
            formData.append("maxNights", roomData.maxNights?.toString());
            formData.append("availableFrom", roomData.availableFrom.value.toString());
            formData.append("availableUntil", roomData.availableUntil.value.toString());
            formData.append("isActive", roomData.status ? "1" : "0");

            startTransition(async () => {
                try {
                    const request = await fetch(`${API_URL}/admin/room/edit`, {
                        method: "POST",
                        body: formData,
                    });

                    const response: EditRoomResponse = await request.json();

                    if (!response.success) {
                        setError(response.message ?? "Failed to save the changes.");
                        return;
                    }

                    setError("");
                    setSuccess(response.message);

                    setRoomData({
                        name: response.room!.name,
                        type: response.room!.type,
                        description: response.room!.description ?? "",
                        maxGuests: response.room!.maxGuests,
                        roomSize: response.room!.areaSqm,
                        roomView: response.room!.view,
                        floor: response.room!.floorNumber,
                        door: response.room!.doorNumber,
                        pricePerNight: response.room!.pricePerNight,
                        maxNights: response.room!.maxNights,
                        status: response.room!.isActive,
                        availableFrom: {
                            value: response.room!.availableFrom ? new Date(response.room!.availableFrom) : null,
                        },
                        availableUntil: {
                            value: response.room!.availableUntil ? new Date(response.room!.availableUntil) : null,
                        },
                        image: response.room!.image,
                        images: response.room!.images,
                    });
                } catch {
                    setError("Something went wrong. Failed to save the changes room.");
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
                                value={roomData.name}
                                onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                                    setRoomData((prev) => {
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
                                value={roomData.type}
                                onChange={(e: React.ChangeEvent<HTMLSelectElement>) =>
                                    setRoomData((prev) => {
                                        return { ...prev, type: e.target.value as RoomType };
                                    })
                                }
                                required
                            >
                                Room Type <span className="text-rose-700">*</span>
                            </Select>
                        </div>
                        <div className="flex flex-col gap-2">
                            <Textarea
                                id="room_description"
                                name="room_description"
                                placeholder="Enter a short description of this room..."
                                className="h-15 lg:h-25 max-h-35"
                                label={true}
                                value={roomData.description}
                                onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) =>
                                    setRoomData((prev) => {
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
                        {roomData.uploadImages?.main?.previewSourceBlob ? (
                            <div className="relative w-full h-auto rounded-md overflow-hidden">
                                <img
                                    src={roomData.uploadImages.main.previewSourceBlob}
                                    alt="Main Room Image"
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
                            <>
                                {roomData.image ? (
                                    <div className="relative w-full h-auto rounded-md overflow-hidden">
                                        <img
                                            src={roomData.image}
                                            alt="Main Room Image"
                                            className="object-cover rounded-md aspect-video"
                                        />
                                        <div
                                            onClick={removeMainImageDB}
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
                            </>
                        )}
                        <div className="w-full border border-border-gray p-2.5 rounded-md hover:bg-border-gray cursor-pointer transition-all duration-100">
                            <input type="file" id="main_image" name="main_image" onChange={uploadMainImage} hidden />
                            <label htmlFor="main_image" className="flex items-center justify-center gap-2 cursor-pointer">
                                <Download size={"1rem"} className="text-gray-700" />
                                <span className="text-xs text-gray-600">
                                    {roomData.uploadImages?.main?.previewSourceBlob || roomData.image
                                        ? "Change Main Image"
                                        : "Add Main Image"}
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
                        {roomData.images?.map((g, index) => (
                            <div key={index} className="relative w-64 h-35 rounded-md overflow-hidden group">
                                <img
                                    src={g}
                                    alt={`Gallery Image ${index + 1}`}
                                    className="object-cover rounded-md aspect-video"
                                />
                                <div
                                    onClick={() => removeGalleryImageDB(index)}
                                    className="absolute top-1 right-1 p-0.5 bg-black/50 hover:bg-rose-600 cursor-pointer rounded-full transition-colors duration-100"
                                >
                                    <X size={"1rem"} className="text-white" />
                                </div>
                            </div>
                        ))}
                        {roomData.uploadImages?.gallery?.map((g, index) => (
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
                                    {roomData.uploadImages?.gallery?.length || roomData.images.length
                                        ? "Add More Images"
                                        : "Add Images"}
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
                                value={roomData.maxGuests ?? ""}
                                onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                                    setRoomData((prev) => {
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
                                value={roomData.roomSize ?? ""}
                                onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                                    setRoomData((prev) => {
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
                                value={roomData.roomView}
                                onChange={(e: React.ChangeEvent<HTMLSelectElement>) =>
                                    setRoomData((prev) => {
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
                                value={roomData.floor ?? ""}
                                onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                                    setRoomData((prev) => {
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
                                value={roomData.door ?? ""}
                                onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                                    setRoomData((prev) => {
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
                                value={roomData.pricePerNight ?? ""}
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
                                value={roomData.maxNights ?? ""}
                                onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                                    setRoomData((prev) => {
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
                                <Knob onClick={setRoomStatus} status={roomData.status} />
                                <div className="flex flex-col gap-2">
                                    <span className="heading">{roomData.status ? "Available" : "Unavailable"}</span>
                                    <span className="text-xs text-gray-500/70">
                                        {roomData.status
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
                                value={roomData.availableFrom?.value ? formatDate(roomData.availableFrom.value) : ""}
                                onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                                    setRoomData((prev) => {
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
                            {roomData.availableFrom?.error && (
                                <div className="flex items-center gap-1 text-xs text-rose-700 font-medium">
                                    <Info size={"1rem"} />
                                    <span>{roomData.availableFrom.error}</span>
                                </div>
                            )}
                        </div>
                        <div className="flex flex-col gap-2">
                            <InputDate
                                id="available_until"
                                name="available_until"
                                value={roomData.availableUntil?.value ? formatDate(roomData.availableUntil.value) : ""}
                                onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                                    setRoomData((prev) => {
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
                            {roomData.availableUntil?.error && (
                                <div className="flex items-center gap-1 text-xs text-rose-700 font-medium">
                                    <Info size={"1rem"} />
                                    <span>{roomData.availableUntil.error}</span>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
            <div className="w-full space-y-5 p-4 bg-cream border border-border-gray rounded-md">
                <div className="flex flex-col gap-3">
                    <span className="block text-xs text-gray-600 font-medium">Save changes?</span>
                    <ButtonMin onClick={editRoom} className="flex items-center justify-center gap-2">
                        <SquarePen size={"1.25rem"} className="text-white" />
                        <span className="text-white">Save</span>
                    </ButtonMin>
                </div>
            </div>
        </>
    );
}
