"use client";

import BackButton from "@/app/components/min/BackButton";
import Knob from "@/app/components/min/Knob";
import { ButtonMin } from "@/app/components/misc/Button";
import { InputSearch, Select } from "@/app/components/misc/Input";
import { AmenityModel } from "@/types/_amenities";
import { Ellipsis, Pencil, Plus, Search, Trash2 } from "lucide-react";
import Link from "next/link";
import AdminPagination from "../../AdminPagination";
import { useState, useTransition } from "react";
import { useCurrentSession } from "@/lib/auth-session";
import { AlertError } from "@/app/components/alert/AlertError";
import { AlertSuccess } from "@/app/components/alert/AlertSuccess";
import editAmenityStatus from "@/app/action/admin/amenity/edit-status.action";

type ListAmenityProps = {
    amenities: AmenityModel[];
    page: number;
    totalAmenities: number;
    totalPages: number;
};

export type EditAmenityStatusResponse = {
    success: boolean;
    message: string;
};

export default function AdminListAmenity({ amenities, page, totalAmenities, totalPages }: ListAmenityProps) {
    const session = useCurrentSession();
    const [isPending, startTransition] = useTransition();
    const [error, setError] = useState("");
    const [success, setSuccess] = useState("");

    const handleAmenityStatus = async (id: number, newStatus: boolean) => {
        if (isPending) return;
        const amenity = amenities.find((a) => a.id === id);

        if (
            amenity &&
            amenity.status !== newStatus &&
            confirm(`${newStatus ? `Activate ${amenity.name}?` : `Disable ${amenity.name}?`}`)
        ) {
            startTransition(async () => {
                const result: EditAmenityStatusResponse = await editAmenityStatus(amenity, newStatus);

                if (!result.success) {
                    setError(result.message ?? "Failed to update the amenity.");
                    return;
                }

                setError("");
                setSuccess(result.message);
            });
        }
    };

    return (
        <>
            <BackButton url="/admin" text="Dashboard" />
            <div className="w-full flex flex-col md:flex-row gap-5 max-md:mb-5 items-start justify-between">
                <div>
                    <h1 className="text-3xl tracking-wide">Amenities</h1>
                    <span className="text-gray-600 text-sm">
                        Manage hotel amenities. Add new amenities and keep track of what's available.
                    </span>
                </div>
                <div className="w-full md:w-64">
                    <Link href="/admin/amenities/add">
                        <ButtonMin width="btn-w-full" className="flex items-center justify-center gap-2">
                            <Plus />
                            <span>Add New Amenity</span>
                        </ButtonMin>
                    </Link>
                </div>
            </div>
            <div className="space-y-2">
                {error && <AlertError closeBtn={() => setError("")}>{error}</AlertError>}
                {success && <AlertSuccess closeBtn={() => setSuccess("")}>{success}</AlertSuccess>}
            </div>
            <div className="w-full space-y-5 p-4 bg-cream border border-border-gray rounded-md">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-3">
                    <div>
                        <InputSearch id="amenity_search" name="amenity_search" placeholder="Search amenities...">
                            <Search size={"1.25rem"} />
                        </InputSearch>
                    </div>
                    <div>
                        <Select id="amenity_status" name="amenity_status" options={["All Status", "Active", "Disabled"]} />
                    </div>
                </div>
                <div className="w-full overflow-x-auto border border-border-gray rounded-md">
                    <table className="w-full text-left text-sm">
                        <thead className="bg-neutral-500/10 h-5">
                            <tr className="cursor-default">
                                <th scope="col" className="p-3 font-medium truncate">
                                    #
                                </th>
                                <th scope="col" className="p-3 font-medium truncate">
                                    Amenity Name
                                </th>
                                <th scope="col" className="p-3 font-medium truncate">
                                    Status
                                </th>
                                <th scope="col" className="p-3 font-medium truncate">
                                    Actions
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            {amenities.map((amenity) => (
                                <tr key={amenity.id} className="hover:bg-neutral-100/50 border-t border-border-light">
                                    <td scope="row" className="p-3 text-gray-500 font-medium whitespace-nowrap">
                                        {amenity.id}.
                                    </td>
                                    <td scope="row" className="p-3 text-gray-500 font-medium whitespace-nowrap">
                                        <div className="space-y-1">
                                            <div className="font-medium text-heading">{amenity.name}</div>
                                            <div className="text-xs text-muted-light">{amenity.description}</div>
                                        </div>
                                    </td>
                                    <td scope="row" className="p-3 text-gray-500 font-medium whitespace-nowrap">
                                        <Knob
                                            disabled={isPending}
                                            onClick={() => handleAmenityStatus(amenity.id, !amenity.status)}
                                            status={amenity.status}
                                        />
                                    </td>
                                    <td scope="row" className="p-3 text-gray-500 font-medium whitespace-nowrap">
                                        <div className="flex items-center gap-1">
                                            <Link
                                                href={`/admin/amenities/edit/${amenity.id}`}
                                                className="px-2 py-1 border border-transparent hover:text-blue-700 hover:bg-blue-500/20 rounded-full cursor-pointer transition-colors duration-100"
                                            >
                                                <Pencil size={"1rem"} />
                                            </Link>
                                            <div className="px-2 py-1 border border-transparent hover:text-red-700 hover:bg-red-500/20 rounded-full cursor-pointer transition-colors duration-100">
                                                <Trash2 size={"1rem"} />
                                            </div>
                                            <div className="px-2 py-1 border border-transparent hover:text-gray-700 hover:bg-gray-500/20 rounded-full cursor-pointer transition-colors duration-100">
                                                <Ellipsis size={"1rem"} />
                                            </div>
                                        </div>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
                <AdminPagination
                    itemName="amenities"
                    page={page}
                    itemsOnPage={amenities.length}
                    totalItems={totalAmenities}
                    totalPages={totalPages}
                />
            </div>
        </>
    );
}
