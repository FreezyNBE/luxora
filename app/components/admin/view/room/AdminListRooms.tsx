"use client";

import BackButton from "@/app/components/min/BackButton";
import { ButtonMin } from "@/app/components/misc/Button";
import { InputSearch, Select } from "@/app/components/misc/Input";
import { RoomModel } from "@/types/_rooms";
import { Ellipsis, Pencil, Plus, Search, Trash2, Users, X } from "lucide-react";
import Link from "next/link";
import AdminPagination from "../../AdminPagination";

type AdminListProps = {
    rooms: RoomModel[];
    page: number;
    totalRooms: number;
    totalPages: number;
};

export default function AdminListRooms({ rooms, page, totalRooms, totalPages }: AdminListProps) {
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
                            {rooms.map((room) => (
                                <tr key={room.id} className="hover:bg-neutral-100/50 border-t border-border-light">
                                    <td scope="row" className="p-3 text-gray-500 font-medium whitespace-nowrap">
                                        <input type="checkbox" id="room_1" name="room_1" className="accent-yellow-700/80" />
                                    </td>
                                    <td scope="row" className="p-3 text-gray-500 font-medium whitespace-nowrap">
                                        {room.image ? (
                                            <div className="w-32 h-auto aspect-video rounded-lg overflow-hidden">
                                                <img src={room.image} alt={room.name} className="object-cover" />
                                            </div>
                                        ) : (
                                            <>
                                                <X size={"1.25rem"} className="text-neutral-800" />
                                            </>
                                        )}
                                    </td>
                                    <td scope="row" className="p-3 text-gray-500 font-medium whitespace-nowrap">
                                        <div className="space-y-1">
                                            <div className="font-medium text-heading">{room.name}</div>
                                            <div className="text-xs text-muted-light">{room.id}</div>
                                        </div>
                                    </td>
                                    <td scope="row" className="p-3 text-gray-500 font-medium whitespace-nowrap">
                                        {room.type}
                                    </td>
                                    <td scope="row" className="p-3 text-gray-500 font-medium whitespace-nowrap">
                                        <Users size={"1rem"} className="inline-block" />
                                        <span className="inline-block align-middle ms-2">{room.maxGuests}</span>
                                    </td>
                                    <td scope="row" className="p-3 text-gray-500 font-medium whitespace-nowrap">
                                        {Number(room.pricePerNight).toLocaleString("en-US", {
                                            style: "currency",
                                            currency: "USD",
                                        })}
                                    </td>
                                    <td scope="row" className="p-3 text-gray-500 font-medium whitespace-nowrap">
                                        {room.isActive ? (
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
                                            <Link
                                                href={`/admin/rooms/edit/${room.id}`}
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
                    itemName="rooms"
                    page={page}
                    itemsOnPage={rooms.length}
                    totalItems={totalRooms}
                    totalPages={totalPages}
                />
            </div>
        </>
    );
}
