"use client";

import BreadCrumbs from "@/app/components/Breadcrumbs";
import { Bookmark, BrickWallShield, CreditCard, Heart, LogOut, MapPin, User } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function RoomPageLayout({ children }: { children: React.ReactNode }) {
    const pathname = usePathname();

    return (
        <div className="w-full min-h-150 px-10 py-5 border-t border-t-border-light bg-cream">
            {/* Breadcrumb */}
            <BreadCrumbs
                links={[
                    {
                        name: "My Profile",
                        url: "/user/profile",
                    },
                ]}
            />

            <div className="flex max-lg:flex-col items-start gap-5">
                <div className="max-lg:w-full flex flex-col gap-y-1 gap-x-5">
                    {pathname === "/user/profile" ? (
                        <Link
                            href={"/user/profile"}
                            className="w-full lg:w-56 flex items-center gap-x-2 ps-3 py-2 rounded-sm bg-orange-200/50 cursor-pointer hover:bg-orange-200/80 transition-all duration-75"
                        >
                            <User size={"1.25rem"} className="text-orange-800/80" />
                            <span className="text-orange-800/80 font-semibold text-sm">My Profile</span>
                        </Link>
                    ) : (
                        <Link
                            href={"/user/profile"}
                            className="w-full lg:w-56 flex items-center gap-x-2 ps-3 py-2 rounded-sm bg-transparent cursor-pointer hover:bg-orange-300/20 transition-all duration-75 group"
                        >
                            <User size={"1.25rem"} className="text-muted group-hover:text-orange-800/60" />
                            <span className="text-muted group-hover:text-orange-800/60 font-semibold text-sm">My Profile</span>
                        </Link>
                    )}
                    {pathname === "/user/booking" ? (
                        <Link
                            href={"/user/bookmark"}
                            className="w-full lg:w-56 flex items-center gap-x-2 ps-3 py-2 rounded-sm bg-orange-200/50 cursor-pointer hover:bg-orange-200/80 transition-all duration-75"
                        >
                            <Bookmark size={"1.25rem"} className="text-orange-800/80" />
                            <span className="text-orange-800/80 font-semibold text-sm">My bookings</span>
                        </Link>
                    ) : (
                        <Link
                            href={"/user/booking"}
                            className="w-full lg:w-56 flex items-center gap-x-2 ps-3 py-2 rounded-sm bg-transparent cursor-pointer hover:bg-orange-300/20 transition-all duration-75 group"
                        >
                            <Bookmark size={"1.25rem"} className="text-muted group-hover:text-orange-800/60" />
                            <span className="text-muted group-hover:text-orange-800/60 font-semibold text-sm">My bookings</span>
                        </Link>
                    )}
                    {pathname === "/user/wishlist" ? (
                        <Link
                            href={"/user/wishlist"}
                            className="w-full lg:w-56 flex items-center gap-x-2 ps-3 py-2 rounded-sm bg-orange-200/50 cursor-pointer hover:bg-orange-200/80 transition-all duration-75"
                        >
                            <Heart size={"1.25rem"} className="text-orange-800/80" />
                            <span className="text-orange-800/80 font-semibold text-sm">Wishlist</span>
                        </Link>
                    ) : (
                        <Link
                            href={"/user/wishlist"}
                            className="w-full lg:w-56 flex items-center gap-x-2 ps-3 py-2 rounded-sm bg-transparent cursor-pointer hover:bg-orange-300/20 transition-all duration-75 group"
                        >
                            <Heart size={"1.25rem"} className="text-muted group-hover:text-orange-800/60" />
                            <span className="text-muted group-hover:text-orange-800/60 font-semibold text-sm">Wishlist</span>
                        </Link>
                    )}
                    {pathname === "/user/payment" ? (
                        <Link
                            href={"/user/payment"}
                            className="w-full lg:w-56 flex items-center gap-x-2 ps-3 py-2 rounded-sm bg-orange-200/50 cursor-pointer hover:bg-orange-200/80 transition-all duration-75"
                        >
                            <CreditCard size={"1.25rem"} className="text-orange-800/80" />
                            <span className="text-orange-800/80 font-semibold text-sm">Payment Methods</span>
                        </Link>
                    ) : (
                        <Link
                            href={"/user/payment"}
                            className="w-full lg:w-56 flex items-center gap-x-2 ps-3 py-2 rounded-sm bg-transparent cursor-pointer hover:bg-orange-300/20 transition-all duration-75 group"
                        >
                            <CreditCard size={"1.25rem"} className="text-muted group-hover:text-orange-800/60" />
                            <span className="text-muted group-hover:text-orange-800/60 font-semibold text-sm">
                                Payment Methods
                            </span>
                        </Link>
                    )}
                    <div className="w-full lg:w-56 flex items-center gap-x-2 ps-3 py-2 rounded-sm bg-transparent cursor-pointer hover:bg-orange-300/20 transition-all duration-75 group">
                        <LogOut size={"1.25rem"} className="text-muted group-hover:text-orange-800/60" />
                        <span className="text-muted group-hover:text-orange-800/60 font-semibold text-sm">Logout</span>
                    </div>
                </div>

                {children}
            </div>
        </div>
    );
}
