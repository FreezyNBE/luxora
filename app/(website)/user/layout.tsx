"use client";

import BreadCrumbs from "@/app/components/Breadcrumbs";
import { useCurrentSession } from "@/lib/auth-session";
import { Bookmark, CreditCard, Heart, LogOut, User } from "lucide-react";
import Link from "next/link";
import { redirect, usePathname } from "next/navigation";

export default function RoomPageLayout({ children }: { children: React.ReactNode }) {
    const pathname = usePathname();
    const session = useCurrentSession();

    if (!session?.user) {
        return redirect("/login");
    }

    return (
        <div className="relative w-full min-h-151 h-full bg-cream-soft border-t border-t-border-light">
            <div className="flex max-lg:flex-col items-start gap-5 bg-cream-dark">
                <div className="lg:absolute inset-0 w-full lg:w-82 lg:min-h-150 bg-cream-dark flex flex-col gap-y-1 gap-x-5 border-b border-b-border-gray lg:border-r lg:border-r-border-gray px-2.5 py-5">
                    <Link
                        href="/user/profile"
                        className={
                            pathname === "/user/profile"
                                ? "p-2 bg-gray-400/10 border border-gray-400/20 rounded-md cursor-pointer transition-all duration-100 group"
                                : "p-2 border border-transparent rounded-md hover:bg-gray-400/10 hover:border-gray-400/20 cursor-pointer transition-all duration-100 group"
                        }
                    >
                        <User size={"1.25rem"} className="inline-block text-gold-dark" />
                        <span className="inline-block align-middle ms-3 text-gray-500 text-sm group-hover:text-gold">
                            My Profile
                        </span>
                    </Link>
                    <Link
                        href="/user/booking"
                        className={
                            pathname === "/user/booking"
                                ? "p-2 bg-gray-400/10 border border-gray-400/20 rounded-md cursor-pointer transition-all duration-100 group"
                                : "p-2 border border-transparent rounded-md hover:bg-gray-400/10 hover:border-gray-400/20 cursor-pointer transition-all duration-100 group"
                        }
                    >
                        <Bookmark size={"1.25rem"} className="inline-block text-gold-dark" />
                        <span className="inline-block align-middle ms-3 text-gray-500 text-sm group-hover:text-gold">
                            My bookings
                        </span>
                    </Link>
                    <Link
                        href="/user/wishlist"
                        className={
                            pathname === "/user/wishlist"
                                ? "p-2 bg-gray-400/10 border border-gray-400/20 rounded-md cursor-pointer transition-all duration-100 group"
                                : "p-2 border border-transparent rounded-md hover:bg-gray-400/10 hover:border-gray-400/20 cursor-pointer transition-all duration-100 group"
                        }
                    >
                        <Heart size={"1.25rem"} className="inline-block text-gold-dark" />
                        <span className="inline-block align-middle ms-3 text-gray-500 text-sm group-hover:text-gold">
                            Wishlist
                        </span>
                    </Link>
                    <Link
                        href="/user/payment"
                        className={
                            pathname === "/user/payment"
                                ? "p-2 bg-gray-400/10 border border-gray-400/20 rounded-md cursor-pointer transition-all duration-100 group"
                                : "p-2 border border-transparent rounded-md hover:bg-gray-400/10 hover:border-gray-400/20 cursor-pointer transition-all duration-100 group"
                        }
                    >
                        <CreditCard size={"1.25rem"} className="inline-block text-gold-dark" />
                        <span className="inline-block align-middle ms-3 text-gray-500 text-sm group-hover:text-gold">
                            Payment Methods
                        </span>
                    </Link>
                    <Link
                        href="/user/logout"
                        className={
                            pathname === "/user/logout"
                                ? "p-2 bg-gray-400/10 border border-gray-400/20 rounded-md cursor-pointer transition-all duration-100 group"
                                : "p-2 border border-transparent rounded-md hover:bg-gray-400/10 hover:border-gray-400/20 cursor-pointer transition-all duration-100 group"
                        }
                    >
                        <LogOut size={"1.25rem"} className="inline-block text-gold-dark" />
                        <span className="inline-block align-middle ms-3 text-gray-500 text-sm group-hover:text-gold">
                            Logout
                        </span>
                    </Link>
                </div>
            </div>
            <div className="min-w-0 flex-1 lg:ms-82 p-5 bg-cream-soft">{children}</div>
        </div>
    );
}
