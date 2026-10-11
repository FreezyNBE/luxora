"use client";

import BackButton from "@/app/components/min/BackButton";
import Knob from "@/app/components/min/Knob";
import { ButtonMin } from "@/app/components/misc/Button";
import { InputSearch, Select } from "@/app/components/misc/Input";
import { ChevronLeft, ChevronRight, Ellipsis, Pencil, Plus, Search, Trash2, Users } from "lucide-react";
import Link from "next/link";

export default function ListAmenitiesPage() {
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
                            {[0, 1].map((amenity, index) => (
                                <tr key={index} className="hover:bg-neutral-100/50 border-t border-border-light">
                                    <td scope="row" className="p-3 text-gray-500 font-medium whitespace-nowrap">
                                        {index + 1}.
                                    </td>
                                    <td scope="row" className="p-3 text-gray-500 font-medium whitespace-nowrap">
                                        <div className="space-y-1">
                                            <div className="font-medium text-heading">Wi-Fi</div>
                                            <div className="text-xs text-muted-light">
                                                High speed internet access throught the hotel.
                                            </div>
                                        </div>
                                    </td>
                                    <td scope="row" className="p-3 text-gray-500 font-medium whitespace-nowrap">
                                        {amenity % 2 ? <Knob status={false} /> : <Knob status={true} />}
                                    </td>
                                    <td scope="row" className="p-3 text-gray-500 font-medium whitespace-nowrap">
                                        <div className="flex items-center gap-1">
                                            <div className="px-2 py-1 border border-transparent hover:text-blue-700 hover:bg-blue-500/20 rounded-full cursor-pointer transition-colors duration-100">
                                                <Pencil size={"1rem"} />
                                            </div>
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
                <div className="flex items-start justify-between">
                    <div className="text-gray-500 text-xs font-medium">Showing 1-12 of 12 amenities</div>
                    {/* Pages */}
                    <div className="flex items-center gap-1">
                        {/* Arrow Back */}
                        <Link
                            href="/"
                            className="w-8 h-8 flex items-center justify-center text-gray-400 bg-gray-300/10 border border-gray-400/20 hover:text-gray-500 hover:bg-gold-light/20 hover:border-gold/50 rounded-md"
                        >
                            <ChevronLeft size={"1.25rem"} />
                        </Link>
                        <div className="flex items-center gap-1">
                            <Link
                                href="/"
                                className="w-8 h-8 flex items-center justify-center text-gray-500 bg-gray-300/30 border border-gray-500/20 hover:bg-gold-light/20 hover:border-gold/50 rounded-md"
                            >
                                <span>1</span>
                            </Link>
                        </div>
                        <Link
                            href="/"
                            className="w-8 h-8 flex items-center justify-center text-gray-400 bg-gray-300/10 border border-gray-400/20 hover:text-gray-500 hover:bg-gold-light/20 hover:border-gold/50 rounded-md"
                        >
                            <ChevronRight size={"1.25rem"} />
                        </Link>
                    </div>
                </div>
            </div>
        </>
    );
}
