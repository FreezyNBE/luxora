"use client";

import BackButton from "@/app/components/min/BackButton";
import { InputSearch } from "@/app/components/misc/Input";
import { ChevronLeft, ChevronRight, Eye, Info, Search, SquareM, Trash2, Users, X } from "lucide-react";
import Link from "next/link";

export default function WishlistPage() {
    return (
        <div className="w-full space-y-2">
            <BackButton url="/" text="Back to Home" />

            <div>
                <h1 className="text-3xl tracking-wide">Wishlist</h1>
                <span className="text-gray-600 text-sm">
                    View and managed your saved rooms anytime. Remove any room from your wishlist whenever you like.
                </span>
            </div>

            <div className="w-full space-y-5 p-4 bg-cream border border-border-gray rounded-md">
                <InputSearch id="wishlist_search" name="wishlist_search" placeholder="Search any wishlisted room by name...">
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
                                    Image
                                </th>
                                <th scope="col" className="p-3 font-medium truncate">
                                    Room
                                </th>
                                <th scope="col" className="p-3 font-medium truncate">
                                    Type
                                </th>
                                <th scope="col" className="p-3 font-medium truncate">
                                    View
                                </th>
                                <th scope="col" className="p-3 font-medium truncate">
                                    Room Size (sq.)
                                </th>
                                <th scope="col" className="p-3 font-medium truncate">
                                    Max Guests
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
                                        <div className="w-32 h-auto aspect-video rounded-lg overflow-hidden">
                                            {room % 2 ? (
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
                                            <div className="w-full max-w-45 text-xs text-muted-light truncate">
                                                Relax in our Deluxe Room featuring elegant interios and all the essential
                                                amenities.
                                            </div>
                                        </div>
                                    </td>
                                    <td scope="row" className="p-3 text-gray-500 font-medium whitespace-nowrap">
                                        Deluxe
                                    </td>
                                    <td scope="row" className="p-3 text-gray-500 font-medium whitespace-nowrap">
                                        Ocean View
                                    </td>
                                    <td scope="row" className="p-3 text-gray-500 font-medium whitespace-nowrap">
                                        <SquareM size="1rem" className="inline-block" />
                                        <div className="inline-block align-middle ms-1 text-xs font-medium">
                                            28 <span className="font-semibold">&#13217;</span>
                                        </div>
                                    </td>
                                    <td scope="row" className="p-3 text-gray-500 font-medium whitespace-nowrap">
                                        <Users size={"1rem"} className="inline-block" />
                                        <span className="inline-block align-middle ms-2">2</span>
                                    </td>
                                    <td scope="row" className="p-3 text-gray-500 font-medium whitespace-nowrap">
                                        {room % 2 ? (
                                            <span className="px-3.5 py-1 text-xs bg-green-500/20 text-green-700 hover:bg-green-600/30 rounded-full cursor-pointer transition-colors duration-100">
                                                Available
                                            </span>
                                        ) : (
                                            <span className="px-3.5 py-1 text-xs bg-gray-500/20 text-gray-700 hover:bg-gray-600/30 rounded-full cursor-pointer transition-colors duration-100">
                                                Unavailable
                                            </span>
                                        )}
                                    </td>
                                    <td scope="row" className="p-3 text-gray-500 font-medium whitespace-nowrap">
                                        $150
                                    </td>
                                    <td scope="row" className="p-3 text-gray-500 font-medium whitespace-nowrap">
                                        <div className="flex flex-col items-start gap-1">
                                            <div className="flex items-center justify-center gap-1 px-2 py-1 border border-transparent hover:text-gray-700 hover:bg-gray-500/20 rounded-full cursor-pointer transition-colors duration-100">
                                                <Eye size={"1rem"} />
                                                <span>View</span>
                                            </div>
                                            <div className="flex items-center justify-center gap-1 px-2 py-1 border border-transparent hover:text-white hover:bg-red-700 rounded-full cursor-pointer transition-colors duration-100">
                                                <X size={"1rem"} />
                                                <span>Remove</span>
                                            </div>
                                        </div>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
                <div className="flex items-start justify-between">
                    <div className="text-gray-500 text-xs font-medium">Showing 1-8 of 8 rooms wishlisted</div>
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
