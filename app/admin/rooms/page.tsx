"use client";

import BackButton from "@/app/components/min/BackButton";
import { ButtonMin } from "@/app/components/misc/Button";
import { InputSearch, Select } from "@/app/components/misc/Input";
import { ChevronLeft, ChevronRight, Ellipsis, Pencil, Plus, Search, Trash2, Users } from "lucide-react";
import Link from "next/link";

export default function ListRoomsPage() {
    return (
        <>
            <BackButton url="/admin" text="Dashboard" />
            <div className="w-full flex flex-col md:flex-row gap-5 max-md:mb-5 items-start justify-between">
                <div>
                    <h1 className="text-3xl tracking-wide">Rooms</h1>
                    <span className="text-gray-600 text-sm">
                        Manage all hotel rooms. Add, edit or remove rooms from your property.
                    </span>
                </div>
                <div className="w-full md:w-64">
                    <Link href="/admin/rooms/add">
                        <ButtonMin width="btn-w-full" className="flex items-center justify-center gap-2">
                            <Plus />
                            <span>Add New Room</span>
                        </ButtonMin>
                    </Link>
                </div>
            </div>
            <div className="w-full space-y-5 p-4 bg-cream border border-border-gray rounded-md">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-3">
                    <div>
                        <InputSearch id="room_search" name="room_search" placeholder="Search rooms by name, type...">
                            <Search size={"1.25rem"} />
                        </InputSearch>
                    </div>
                    <div>
                        <Select
                            id="room_type"
                            name="room_type"
                            options={["All Room Types", "Standard", "Suite", "Deluxe", "Premium"]}
                        />
                    </div>
                    <div>
                        <Select id="room_status" name="room_status" options={["All status", "Available", "Unavailable"]} />
                    </div>
                    <div>
                        <Select id="room_sortby" name="room_sortby" options={["Newest", "Oldest", "High Price", "Low Price"]} />
                    </div>
                </div>
                <div className="w-full overflow-x-auto border border-border-gray rounded-md">
                    <table className="w-full text-left text-sm">
                        <thead className="bg-neutral-500/10 h-5">
                            <tr className="cursor-default">
                                <th scope="col" className="px-3 pb-3 pt-3.5 font-medium truncate">
                                    <input type="checkbox" id="select_all" name="select_all" className="accent-yellow-700/80" />
                                </th>
                                <th scope="col" className="p-3 font-medium truncate">
                                    Image
                                </th>
                                <th scope="col" className="p-3 font-medium truncate">
                                    Room Name
                                </th>
                                <th scope="col" className="p-3 font-medium truncate">
                                    Type
                                </th>
                                <th scope="col" className="p-3 font-medium truncate">
                                    Capacity
                                </th>
                                <th scope="col" className="p-3 font-medium truncate">
                                    Price / Night
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
                            {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((room, index) => (
                                <tr key={index} className="hover:bg-neutral-100/50 border-t border-border-light">
                                    <td scope="row" className="p-3 text-gray-500 font-medium whitespace-nowrap">
                                        <input type="checkbox" id="room_1" name="room_1" className="accent-yellow-700/80" />
                                    </td>
                                    <td scope="row" className="p-3 text-gray-500 font-medium whitespace-nowrap">
                                        <div className="w-32 h-auto aspect-video rounded-lg overflow-hidden">
                                            {room + (index % 2) ? (
                                                <img
                                                    src="/img/tmp3.png"
                                                    alt="Deluxe Ocean View Room"
                                                    className="object-cover"
                                                />
                                            ) : (
                                                <img
                                                    src="/img/img4.jpg"
                                                    alt="Deluxe Ocean View Room"
                                                    className="object-cover"
                                                />
                                            )}
                                        </div>
                                    </td>
                                    <td scope="row" className="p-3 text-gray-500 font-medium whitespace-nowrap">
                                        <div className="space-y-1">
                                            <div className="font-medium text-heading">Deluxe Ocean View Room</div>
                                            <div className="text-xs text-muted-light">#RM-001</div>
                                        </div>
                                    </td>
                                    <td scope="row" className="p-3 text-gray-500 font-medium whitespace-nowrap">
                                        Deluxe
                                    </td>
                                    <td scope="row" className="p-3 text-gray-500 font-medium whitespace-nowrap">
                                        <Users size={"1rem"} className="inline-block" />
                                        <span className="inline-block align-middle ms-2">2</span>
                                    </td>
                                    <td scope="row" className="p-3 text-gray-500 font-medium whitespace-nowrap">
                                        $299
                                    </td>
                                    <td scope="row" className="p-3 text-gray-500 font-medium whitespace-nowrap">
                                        {room % 2 ? (
                                            <span className="px-3.5 py-1 text-xs bg-green-500/20 text-green-700 hover:bg-green-600/30 rounded-full cursor-pointer transition-colors duration-100">
                                                Active
                                            </span>
                                        ) : (
                                            <span className="px-3.5 py-1 text-xs bg-gray-500/20 text-gray-700 hover:bg-gray-600/30 rounded-full cursor-pointer transition-colors duration-100">
                                                Unavailable
                                            </span>
                                        )}
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
                    <div className="text-gray-500 text-xs font-medium">Showing 1-8 of 8 rooms</div>
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
