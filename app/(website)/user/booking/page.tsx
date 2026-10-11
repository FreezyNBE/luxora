"use client";

import BackButton from "@/app/components/min/BackButton";
import { InputSearch } from "@/app/components/misc/Input";
import { CalendarCheck, CalendarDays, ChevronLeft, ChevronRight, Eye, Info, Search, Users, X } from "lucide-react";
import Link from "next/link";

export default function MyBookingsPage() {
    return (
        <div className="w-full space-y-2">
            <BackButton url="/" text="Back to Home" />

            <div>
                <h1 className="text-3xl tracking-wide">My Bookings</h1>
                <span className="text-gray-600 text-sm">Here you can view or remove any bookings of yours.</span>
            </div>

            <div className="w-full space-y-5 p-4 bg-cream border border-border-gray rounded-md">
                <InputSearch id="booking_search" name="booking_search" placeholder="Search any booking by room name...">
                    <Search size={"1.25rem"} />
                </InputSearch>
                <div className="w-full overflow-x-auto border border-border-gray rounded-md">
                    <table className="w-full text-left text-sm">
                        <thead className="bg-neutral-500/10 h-5">
                            <tr className="cursor-default">
                                <th scope="col" className="px-3 pb-3 pt-3.5 font-medium truncate">
                                    Booking ID
                                </th>
                                <th scope="col" className="p-3 font-medium truncate">
                                    Room
                                </th>
                                <th scope="col" className="p-3 font-medium truncate">
                                    Type
                                </th>
                                <th scope="col" className="p-3 font-medium truncate">
                                    Guests
                                </th>
                                <th scope="col" className="p-3 font-medium truncate">
                                    Check-In
                                </th>
                                <th scope="col" className="p-3 font-medium truncate">
                                    Check-Out
                                </th>
                                <th scope="col" className="p-3 font-medium truncate">
                                    Status
                                </th>
                                <th scope="col" className="p-3 font-medium truncate">
                                    Price / Night
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
                                        <div className="text-xs text-muted-light">#RM-001</div>
                                    </td>
                                    <td scope="row" className="p-3 text-gray-500 font-medium whitespace-nowrap">
                                        <div className="font-medium text-heading">Deluxe Ocean View Room</div>
                                    </td>
                                    <td scope="row" className="p-3 text-gray-500 font-medium whitespace-nowrap">
                                        Deluxe
                                    </td>
                                    <td scope="row" className="p-3 text-gray-500 font-medium whitespace-nowrap">
                                        <Users size={"1rem"} className="inline-block" />
                                        <span className="inline-block align-middle ms-2">2</span>
                                    </td>
                                    <td scope="row" className="p-3 text-gray-500 font-medium whitespace-nowrap">
                                        <CalendarDays size={"1rem"} className="inline-block" />
                                        <span className="inline-block align-middle ms-2">May 24, 2026</span>
                                    </td>
                                    <td scope="row" className="p-3 text-gray-500 font-medium whitespace-nowrap">
                                        <CalendarCheck size={"1rem"} className="inline-block" />
                                        <span className="inline-block align-middle ms-2">June, 15, 2026</span>
                                    </td>
                                    <td scope="row" className="p-3 text-gray-500 font-medium whitespace-nowrap">
                                        {room % 2 ? (
                                            <span className="px-3.5 py-1 text-xs bg-green-500/20 text-green-700 hover:bg-green-600/30 rounded-full cursor-pointer transition-colors duration-100">
                                                Confirmed
                                            </span>
                                        ) : (
                                            <>
                                                {room == 0 || room == 4 ? (
                                                    <span className="px-3.5 py-1 text-xs bg-blue-500/20 text-blue-700 hover:bg-blue-600/30 rounded-full cursor-pointer transition-colors duration-100">
                                                        Upcoming
                                                    </span>
                                                ) : (
                                                    <span className="px-3.5 py-1 text-xs bg-gray-500/20 text-gray-700 hover:bg-gray-600/30 rounded-full cursor-pointer transition-colors duration-100">
                                                        Canceled
                                                    </span>
                                                )}
                                            </>
                                        )}
                                    </td>
                                    <td scope="row" className="p-3 text-gray-500 font-medium whitespace-nowrap">
                                        $150
                                    </td>
                                    <td scope="row" className="p-3 text-gray-500 font-medium whitespace-nowrap">
                                        <div className="flex items-center gap-1">
                                            <div className="flex items-center justify-center gap-1 px-2 py-1 border border-transparent hover:text-gray-700 hover:bg-gray-500/20 rounded-full cursor-pointer transition-colors duration-100">
                                                <Eye size={"1rem"} />
                                                <span>View</span>
                                            </div>
                                            <div className="flex items-center justify-center gap-1 px-2 py-1 border border-transparent hover:text-white hover:bg-red-700 rounded-full cursor-pointer transition-colors duration-100">
                                                <X size={"1rem"} />
                                                <span>Cancel</span>
                                            </div>
                                        </div>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
                <div className="flex items-start justify-between">
                    <div className="text-gray-500 text-xs font-medium">Showing 1-8 of 8 bookings</div>
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
        </div>
    );
}
