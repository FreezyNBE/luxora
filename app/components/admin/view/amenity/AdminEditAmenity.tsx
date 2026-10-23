"use client";
import editAmenityAction from "@/app/action/admin/amenity/edit.action";
import { AlertError } from "@/app/components/alert/AlertError";
import { AlertSuccess } from "@/app/components/alert/AlertSuccess";
import BackButton from "@/app/components/min/BackButton";
import Knob from "@/app/components/min/Knob";
import { ButtonMin } from "@/app/components/misc/Button";
import { Input, Textarea } from "@/app/components/misc/Input";
import { AmenityModel } from "@/types/_amenities";
import { MAX_AMENITY_DESCRIPTION, MAX_AMENITY_NAME, MIN_AMENITY_DESCRIPTION, MIN_AMENITY_NAME } from "@/utils/_variables";
import { ListCheck } from "lucide-react";
import React, { useState, useTransition } from "react";
import z from "zod";

type NewAmenityData = {
    name: {
        value: string;
        error?: string | null;
    };
    description: {
        value: string;
        error?: string | null;
    };
    status: boolean;
};

export type EditAmenityResponse = {
    success: boolean;
    message: string;
    amenity?: AmenityModel;
};

const initialValue = (amenity: AmenityModel) => {
    return {
        name: { value: amenity.name },
        description: { value: amenity.description },
        status: amenity.status,
    };
};

const editAmenitySchema = z.object({
    name: z.string().min(MIN_AMENITY_NAME).max(MAX_AMENITY_NAME),
    description: z.string().min(MIN_AMENITY_DESCRIPTION).max(MAX_AMENITY_DESCRIPTION),
    status: z.boolean(),
});

export default function AdminEditAmenity({ amenityData }: { amenityData: AmenityModel }) {
    const [amenity, setAmenity] = useState<NewAmenityData>(initialValue(amenityData));
    const [error, setError] = useState("");
    const [success, setSuccess] = useState("");
    const [isPending, startTransition] = useTransition();

    const editAmenity = () => {
        if (isPending) return;

        const result = editAmenitySchema.safeParse({
            name: amenity.name.value,
            description: amenity.description.value,
            status: amenity.status,
        });

        if (!result.success) {
            setError("Complete all the fields with correct values.");
            return;
        }

        if (confirm("Save changes?")) {
            startTransition(async () => {
                try {
                    const result = await editAmenityAction(amenityData, {
                        name: amenity.name.value,
                        description: amenity.description.value,
                        status: amenity.status,
                    });

                    if (!result.success) {
                        setError(result.message ?? "Failed to add new amenity.");
                        return;
                    }

                    setError("");
                    setSuccess(result.message);
                    setAmenity(initialValue(result.amenity!));
                } catch {
                    setError("Something went wrong. Failed to add new amenity.");
                }
            });
        }
    };

    return (
        <>
            <BackButton url="/admin/amenities" text="Back to Amenities" />
            <div>
                <h1 className="text-3xl tracking-wide">Edit Amenity</h1>
                <span className="text-gray-600 text-sm">Edit current amenity below.</span>
            </div>
            <div className="space-y-2">
                {error && <AlertError closeBtn={() => setError("")}>{error}</AlertError>}
                {success && <AlertSuccess closeBtn={() => setSuccess("")}>{success}</AlertSuccess>}
            </div>
            {/* Container - Basic Information */}
            <div className="w-full space-y-5 p-4 bg-cream border border-border-gray rounded-md">
                <div className="flex flex-col gap-y-1">
                    <span>Amenity Details</span>
                </div>
                <div className="w-full space-y-5">
                    <div className="flex flex-col gap-2">
                        <Input
                            type="text"
                            id="amenity_name"
                            name="amenity_name"
                            placeholder="eg: Wi-Fi"
                            value={amenity.name.value}
                            onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                                setAmenity((prev) => ({
                                    ...prev,
                                    name: { value: e.target.value },
                                }));
                            }}
                            onBlur={(e: React.FocusEvent<HTMLInputElement>) => {
                                const value = e.target.value;
                                if (value.length < MIN_AMENITY_NAME || value.length > MAX_AMENITY_NAME) {
                                    setAmenity((prev) => ({
                                        ...prev,
                                        name: {
                                            ...prev.name,
                                            error: `Name length must between ${MIN_AMENITY_NAME} and ${MAX_AMENITY_NAME}.`,
                                        },
                                    }));
                                }
                            }}
                            error={amenity?.name?.error ? amenity.name.error : null}
                            required
                        >
                            Name <span className="text-rose-700">*</span>
                        </Input>
                    </div>
                    <div className="flex flex-col gap-2">
                        <Textarea
                            id="amenity_description"
                            name="amenity_description"
                            placeholder="Enter a short description of this amenity..."
                            className="h-15 lg:h-25 max-h-35"
                            label={true}
                            value={amenity.description.value}
                            onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) => {
                                setAmenity((prev) => ({
                                    ...prev,
                                    description: { value: e.target.value },
                                }));
                            }}
                            onBlur={(e: React.FocusEvent<HTMLTextAreaElement>) => {
                                const value = e.target.value;
                                if (value.length < MIN_AMENITY_DESCRIPTION || value.length > MAX_AMENITY_DESCRIPTION) {
                                    setAmenity((prev) => ({
                                        ...prev,
                                        description: {
                                            ...prev.description,
                                            error: `Description length must between ${MIN_AMENITY_DESCRIPTION} and ${MAX_AMENITY_DESCRIPTION}.`,
                                        },
                                    }));
                                }
                            }}
                            error={amenity?.description?.error ? amenity.description.error : null}
                            required
                        >
                            Description <span className="text-rose-700">*</span>
                        </Textarea>
                    </div>
                    <div className="flex flex-col gap-2">
                        <span className="heading">Status</span>
                        <div className="flex items-start gap-3">
                            <Knob
                                status={amenity.status}
                                onClick={() => {
                                    setAmenity((prev) => ({ ...prev, status: !prev.status }));
                                }}
                            />
                            <div className="flex flex-col gap-2">
                                <span className="heading">{amenity.status ? "Active" : "Disabled"}</span>
                                <span className="text-xs text-gray-500/70">
                                    {amenity.status
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
                    <span className="block text-xs text-gray-600 font-medium">Save changes?</span>
                    <ButtonMin disabled={isPending} onClick={editAmenity} className="flex items-center justify-center gap-2">
                        <ListCheck size={"1.25rem"} className="text-white" />
                        <span className="text-white">Save</span>
                    </ButtonMin>
                </div>
            </div>
        </>
    );
}
