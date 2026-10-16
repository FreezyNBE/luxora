"use client";
import BackButton from "@/app/components/min/BackButton";
import Knob from "@/app/components/min/Knob";
import { ButtonMin } from "@/app/components/misc/Button";
import { Input, InputDate, Select, Textarea } from "@/app/components/misc/Input";
import { listMockAmenities, listViewRoomTypes } from "@/utils/_variables";
import { Camera, Download, SquarePen, X } from "lucide-react";
import { useState } from "react";

export default function CreateRoomPage() {
    const [activeRoom, setActiveRoom] = useState(false);

    return (
        <>
            <BackButton url="/admin/rooms" text="Back to Rooms" />
            <div>
                <h1 className="text-3xl tracking-wide">Add New Room</h1>
                <span className="text-gray-600 text-sm">Fill in the details below to add a new room to your hotel.</span>
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
                            <Input type="text" id="room_name" name="room_name" placeholder="Deluxe Ocean View Room">
                                Room Name <span className="text-rose-700">*</span>
                            </Input>
                        </div>
                        <div className="flex flex-col gap-2">
                            <Select id="room_type" name="room_type" options={["Deluxe", "Optionous"]}>
                                Room Type <span className="text-rose-700">*</span>
                            </Select>
                        </div>
                        <div className="flex flex-col gap-2">
                            <Textarea
                                id="room_description"
                                name="room_description"
                                placeholder="Enter a short description of this room..."
                                className="h-15 lg:h-25 max-h-35"
                            >
                                Description <span className="text-rose-700">*</span>
                            </Textarea>
                        </div>
                    </div>
                    {/* Main Image on the right */}
                    <div className="flex-1 lg:max-w-120 space-y-2">
                        <div className="heading">
                            Main Image <span className="text-rose-700">*</span>
                        </div>
                        <div className="relative w-full h-auto rounded-md overflow-hidden">
                            <img src="/img/tmp3.png" alt="Main Image" className="object-cover rounded-md aspect-video" />
                            <div className="absolute top-1 right-1 p-0.5 bg-black/50 hover:bg-rose-600 cursor-pointer rounded-full transition-colors duration-100">
                                <X size={"1rem"} className="text-white" />
                            </div>
                        </div>
                        <button className="w-full flex items-center justify-center gap-2 border border-border-gray p-2.5 rounded-md hover:bg-border-gray cursor-pointer transition-all duration-100">
                            <Download size={"1rem"} className="text-gray-700" />
                            <span className="text-xs text-gray-600">Change Main Image</span>
                        </button>
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
                        <div className="relative w-64 h-35 rounded-md overflow-hidden group">
                            <img src="/img/hero2.png" alt="Main Image" className="object-cover rounded-md aspect-video" />
                            <div className="absolute top-1 right-1 p-0.5 bg-black/50 hover:bg-rose-600 cursor-pointer rounded-full transition-colors duration-100">
                                <X size={"1rem"} className="text-white" />
                            </div>
                        </div>
                        <div className="relative w-64 h-35 rounded-md overflow-hidden group">
                            <img src="/img/hero.png" alt="Main Image" className="object-cover rounded-md aspect-video" />
                            <div className="absolute top-1 right-1 p-0.5 bg-black/50 hover:bg-rose-600 cursor-pointer rounded-full transition-colors duration-100">
                                <X size={"1rem"} className="text-white" />
                            </div>
                        </div>
                        <div className="relative w-64 h-35 rounded-md overflow-hidden group">
                            <img src="/img/tmp3.png" alt="Main Image" className="object-cover rounded-md aspect-video" />
                            <div className="absolute top-1 right-1 p-0.5 bg-black/50 hover:bg-rose-600 cursor-pointer rounded-full transition-colors duration-100">
                                <X size={"1rem"} className="text-white" />
                            </div>
                        </div>
                        <div className="w-64 h-35 flex flex-col items-center justify-center gap-2 border border-dashed border-gray-300 rounded-md text-gray-500 cursor-pointer hover:border-gold hover:text-gold">
                            <Camera />
                            <span className="text-sm">Add More Images</span>
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
                            <Input type="text" id="max_guests" name="max_guests" placeholder="2">
                                Max Guests <span className="text-rose-700">*</span>
                            </Input>
                        </div>
                        <div className="flex flex-col gap-2">
                            <Input type="text" id="room_size" name="room_size" placeholder="eg: 30">
                                Room Size (sq. ft.) <span className="text-rose-700">*</span>
                            </Input>
                        </div>
                        <div className="flex flex-col gap-2">
                            <Select id="room_viewtype" name="room_viewtype" options={listViewRoomTypes}>
                                Room Type <span className="text-rose-700">*</span>
                            </Select>
                        </div>
                    </div>
                    <div className="flex-1 w-full space-y-5">
                        <div className="flex flex-col gap-2">
                            <Input type="text" id="room_floor" name="room_floor" placeholder="eg: 8">
                                Floor <span className="text-rose-700">*</span>
                            </Input>
                        </div>
                        <div className="flex flex-col gap-2">
                            <Input type="text" id="room_door" name="room_door" placeholder="eg: 12">
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
                            <Input type="text" id="room_price" name="room_price" placeholder="eg: 100">
                                Price (per night) <span className="text-rose-700">*</span>
                            </Input>
                        </div>
                        <div className="flex flex-col gap-2">
                            <Input type="text" id="room_min_nights" name="room_min_nights" placeholder="1">
                                Minimum stays (nights) <span className="text-rose-700">*</span>
                            </Input>
                        </div>
                        <div className="flex flex-col gap-2">
                            <span className="heading">Status</span>
                            <div className="flex items-start gap-3">
                                <Knob onClick={() => setActiveRoom((prev) => !prev)} status={activeRoom} />
                                <div className="flex flex-col gap-2">
                                    <span className="heading">{activeRoom ? "Available" : "Unavailable"}</span>
                                    <span className="text-xs text-gray-500/70">
                                        {activeRoom
                                            ? "Make this room be shown and available for booking."
                                            : "Disable this room to be shown and available for booking."}
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="flex-1 w-full space-y-5">
                        <div className="flex flex-col gap-2">
                            <InputDate id="available_from" name="available_from">
                                Available from <span className="text-rose-700">*</span>
                            </InputDate>
                        </div>
                        <div className="flex flex-col gap-2">
                            <InputDate id="available_until" name="available_until">
                                Available until <span className="text-rose-700">*</span>
                            </InputDate>
                        </div>
                    </div>
                </div>
            </div>
            <div className="w-full space-y-5 p-4 bg-cream border border-border-gray rounded-md">
                <div className="flex flex-col gap-3">
                    <span className="block text-xs text-gray-600 font-medium">Click the button to add this room.</span>
                    <ButtonMin className="flex items-center justify-center gap-2">
                        <SquarePen size={"1.25rem"} className="text-white" />
                        <span className="text-white">Add New Room</span>
                    </ButtonMin>
                </div>
            </div>
        </>
    );
}
