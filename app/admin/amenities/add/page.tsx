"use client";
import BackButton from "@/app/components/min/BackButton";
import Knob from "@/app/components/min/Knob";
import { ButtonMin } from "@/app/components/misc/Button";
import { Input, Textarea } from "@/app/components/misc/Input";
import { ListCheck } from "lucide-react";
import { useState } from "react";

export default function CreateAmenityPage() {
    const [amenityStatus, setAmenityStatus] = useState(false);

    return (
        <>
            <BackButton url="/admin/amenities" text="Back to Amenities" />
            <div>
                <h1 className="text-3xl tracking-wide">Add New Amenity</h1>
                <span className="text-gray-600 text-sm">Create a new amenity to make your guests stay more comfortable.</span>
            </div>
            {/* Container - Basic Information */}
            <div className="w-full space-y-5 p-4 bg-cream border border-border-gray rounded-md">
                <div className="flex flex-col gap-y-1">
                    <span>Amenity Details</span>
                </div>
                <div className="w-full space-y-5">
                    <div className="flex flex-col gap-2">
                        <Input type="text" id="amenity_name" name="amenity_name" placeholder="eg: Wi-Fi">
                            Name <span className="text-rose-700">*</span>
                        </Input>
                    </div>
                    <div className="flex flex-col gap-2">
                        <Textarea
                            id="amenity_description"
                            name="amenity_description"
                            placeholder="Enter a short description of this amenity..."
                            className="h-15 lg:h-25 max-h-35"
                        >
                            Description <span className="text-rose-700">*</span>
                        </Textarea>
                    </div>
                    <div className="flex flex-col gap-2">
                        <span className="heading">Status</span>
                        <div className="flex items-start gap-3">
                            <Knob onClick={() => setAmenityStatus((prev) => !prev)} status={amenityStatus} />
                            <div className="flex flex-col gap-2">
                                <span className="heading">{amenityStatus ? "Active" : "Disabled"}</span>
                                <span className="text-xs text-gray-500/70">
                                    {amenityStatus
                                        ? "Make this amenity available for rooms."
                                        : "This amenity will not be displayed in rooms."}
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="w-full space-y-5 p-4 bg-cream border border-border-gray rounded-md">
                <div className="flex flex-col gap-3">
                    <span className="block text-xs text-gray-600 font-medium">Click the button to add this amenity.</span>
                    <ButtonMin className="flex items-center justify-center gap-2">
                        <ListCheck size={"1.25rem"} className="shrink-0 text-white" />
                        <span className="text-white">Add Amenity</span>
                    </ButtonMin>
                </div>
            </div>
        </>
    );
}
