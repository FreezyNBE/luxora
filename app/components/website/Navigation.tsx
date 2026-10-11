"use client";

import {
    Bed,
    Calendar,
    CalendarDays,
    Gem,
    Headphones,
    Heart,
    Home,
    LayoutList,
    LogOut,
    Menu,
    MoveRight,
    Plus,
    Tags,
    User,
    X,
} from "lucide-react";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { useGlobal } from "@/app/context/GlobalContext";
import { usePathname, useRouter } from "next/navigation";
import { useCurrentSession } from "@/lib/auth-session";
import { authClient } from "@/lib/auth-client";
import toast from "react-hot-toast";
import { Button, ButtonMin } from "../misc/Button";

function Navigation() {
    const { disableBodyOverflow, enableBodyOverflow } = useGlobal();
    const [navMobileStatus, setNavMobileStatus] = useState<boolean>(false);
    const [navMobileVisible, setNavMobileVisible] = useState<boolean>(false);
    const pathname = usePathname();
    const router = useRouter();

    const session = useCurrentSession();

    useEffect(() => {
        if (navMobileStatus) {
            closeMenu(false);
        }
    }, [pathname]);

    const openMenu = () => {
        setNavMobileVisible(true);

        // Let the element mount first
        requestAnimationFrame(() => {
            setNavMobileStatus(true);
            disableBodyOverflow();
        });
    };

    const closeMenu = (showAnimation: boolean = true) => {
        setNavMobileStatus(false);

        // Wait for animation to finish before removing it
        setTimeout(
            () => {
                setNavMobileVisible(false);
                enableBodyOverflow();
            },
            showAnimation ? 300 : 10,
        );
    };

    const logoutUser = async () => {
        await authClient.signOut({
            fetchOptions: {
                onSuccess: () => {
                    toast.success("Logged out.");
                    router.push("/login");
                },
            },
        });
    };

    return (
        <div className={`h-(--navbar-height) ${pathname === "/" ? "text-white" : "text-heading"}`}>
            <nav className="relative inset-0 w-full h-fit flex items-center justify-between gap-4 px-5 sm:px-10 py-5 z-10">
                <Link href="/">
                    <h1 className="flex items-center justify-center gap-1 text-2xl tracking-widest cursor-default">
                        <Gem size={"1.5rem"} className="text-gold" />
                        <span className={pathname === "/" ? "text-white" : "text-heading"}>Luxora</span>
                    </h1>
                </Link>
                {!navMobileVisible && (
                    <ul className="flex uppercase text-sm max-lg:hidden gap-6 xl:gap-10">
                        <li>
                            <Link href="/" className="after-effect">
                                Home
                            </Link>
                        </li>
                        <li>
                            <Link href="/rooms" className="after-effect">
                                Rooms
                            </Link>
                        </li>
                        <li>
                            <Link href="/facilities" className="after-effect">
                                Facilities
                            </Link>
                        </li>
                        <li>
                            <Link href="/offers" className="after-effect">
                                Offers
                            </Link>
                        </li>
                        <li>
                            <Link href="/contact" className="after-effect">
                                Contact
                            </Link>
                        </li>
                    </ul>
                )}
                <div className="flex items-center gap-4">
                    <div className="flex items-center justify-center gap-3 cursor-pointer">
                        {session?.user ? (
                            <>
                                <Link href="/user/profile" className="max-lg:hidden hover:opacity-70">
                                    <User />
                                </Link>
                                <Link href="/user/wishlist" className="max-lg:hidden hover:opacity-70">
                                    <Heart />
                                </Link>
                                <Link href="/user/booking" className="max-lg:hidden hover:opacity-70">
                                    <Calendar />
                                </Link>
                            </>
                        ) : (
                            <>
                                <Link href="/login" className="max-lg:hidden after-effect">
                                    Login
                                </Link>
                                <Link href="/register" className="max-lg:hidden after-effect ms-2">
                                    Register
                                </Link>
                            </>
                        )}
                        <div onClick={() => (navMobileVisible ? closeMenu() : openMenu())}>
                            <Menu className="lg:hidden hover:opacity-70" />
                        </div>
                    </div>
                    <Link href="/rooms" className="hidden sm:block w-45">
                        <ButtonMin width="btn-w-full" className="flex items-center justify-center gap-2 uppercase">
                            <span>Book now</span>
                            <MoveRight />
                        </ButtonMin>
                    </Link>
                </div>
            </nav>

            {/* Mobile navigation */}
            {navMobileVisible && (
                <div
                    className="lg:hidden fixed inset-0 w-full h-full bg-black/50 z-20 text-heading"
                    onClick={() => closeMenu()}
                >
                    <div
                        className={`w-(--navbar-width) h-full fixed top-0 left-0 backdrop-blur-xl bg-cream-dark border-r border-r-gray-400/10 px-5 ${navMobileStatus ? "overflow-auto translate-x-0" : "overflow-hidden -translate-x-full"} transform duration-300 ease-in bg-black/90`}
                        onClick={(event: React.MouseEvent<HTMLDivElement>) => event.stopPropagation()}
                    >
                        <div className="w-full">
                            <div className="py-2">
                                <div className="w-full flex items-center justify-between text-center py-2 px-5">
                                    <h1 className="flex items-center justify-center gap-1 text-2xl tracking-widest cursor-default">
                                        <Gem size={"1.5rem"} className="text-gold" />
                                        <span>Luxora</span>
                                    </h1>
                                    <div
                                        onClick={() => closeMenu()}
                                        className="p-1 rounded-md border border-transparent hover:bg-gray-400/10 hover:border-gray-400/20 cursor-pointer transition-all duration-100"
                                    >
                                        <X size={"1.25rem"} className="text-gold-dark" />
                                    </div>
                                </div>

                                <div className="w-full h-[0.5] bg-gray-500/20" />

                                <div className="flex flex-col justify-center gap-1.5 my-5">
                                    <Link
                                        href="/"
                                        className={
                                            pathname === "/"
                                                ? "p-2 bg-gray-400/10 border border-gray-400/20 rounded-md cursor-pointer transition-all duration-100 group"
                                                : "p-2 border border-transparent rounded-md hover:bg-gray-400/10 hover:border-gray-400/20 cursor-pointer transition-all duration-100 group"
                                        }
                                    >
                                        <Home size={"1.25rem"} className="inline-block text-gold-dark" />
                                        <span className="inline-block align-middle ms-3 text-gray-500 text-sm group-hover:text-gold">
                                            Home
                                        </span>
                                    </Link>
                                    <Link
                                        href="/rooms"
                                        className={
                                            pathname.match("/rooms")
                                                ? "p-2 bg-gray-400/10 border border-gray-400/20 rounded-md cursor-pointer transition-all duration-100 group"
                                                : "p-2 border border-transparent rounded-md hover:bg-gray-400/10 hover:border-gray-400/20 cursor-pointer transition-all duration-100 group"
                                        }
                                    >
                                        <Bed size={"1.25rem"} className="inline-block text-gold-dark" />
                                        <span className="inline-block align-middle ms-3 text-gray-500 text-sm group-hover:text-gold">
                                            Rooms
                                        </span>
                                    </Link>
                                    <Link
                                        href="/facilities"
                                        className={
                                            pathname.match("/facilities")
                                                ? "p-2 bg-gray-400/10 border border-gray-400/20 rounded-md cursor-pointer transition-all duration-100 group"
                                                : "p-2 border border-transparent rounded-md hover:bg-gray-400/10 hover:border-gray-400/20 cursor-pointer transition-all duration-100 group"
                                        }
                                    >
                                        <LayoutList size={"1.25rem"} className="inline-block text-gold-dark" />
                                        <span className="inline-block align-middle ms-3 text-gray-500 text-sm group-hover:text-gold">
                                            Facilities
                                        </span>
                                    </Link>
                                    <Link
                                        href="/offers"
                                        className={
                                            pathname.match("/offers")
                                                ? "p-2 bg-gray-400/10 border border-gray-400/20 rounded-md cursor-pointer transition-all duration-100 group"
                                                : "p-2 border border-transparent rounded-md hover:bg-gray-400/10 hover:border-gray-400/20 cursor-pointer transition-all duration-100 group"
                                        }
                                    >
                                        <Tags size={"1.25rem"} className="inline-block text-gold-dark" />
                                        <span className="inline-block align-middle ms-3 text-gray-500 text-sm group-hover:text-gold">
                                            Offers
                                        </span>
                                    </Link>
                                    <Link
                                        href="/contact"
                                        className={
                                            pathname.match("/contact")
                                                ? "p-2 bg-gray-400/10 border border-gray-400/20 rounded-md cursor-pointer transition-all duration-100 group"
                                                : "p-2 border border-transparent rounded-md hover:bg-gray-400/10 hover:border-gray-400/20 cursor-pointer transition-all duration-100 group"
                                        }
                                    >
                                        <Headphones size={"1.25rem"} className="inline-block text-gold-dark" />
                                        <span className="inline-block align-middle ms-3 text-gray-500 text-sm group-hover:text-gold">
                                            Contact
                                        </span>
                                    </Link>
                                </div>
                            </div>

                            <div className="w-full h-[0.5] bg-gray-500/20" />

                            <div className="flex flex-col gap-1.5 py-5 text-sm">
                                {session?.user ? (
                                    <>
                                        <Link
                                            href="/user/profile"
                                            className={
                                                pathname.match("/user/profile")
                                                    ? "p-2 bg-gray-400/10 border border-gray-400/20 rounded-md cursor-pointer transition-all duration-100 group"
                                                    : "p-2 border border-transparent rounded-md hover:bg-gray-400/10 hover:border-gray-400/20 cursor-pointer transition-all duration-100 group"
                                            }
                                        >
                                            <User size={"1.25rem"} className="inline-block text-gold-dark" />
                                            <span className="inline-block align-middle ms-3 text-gray-500 text-sm group-hover:text-gold">
                                                My Account
                                            </span>
                                        </Link>
                                        <Link
                                            href="/user/wishlist"
                                            className={
                                                pathname.match("/user/wishlist")
                                                    ? "p-2 bg-gray-400/10 border border-gray-400/20 rounded-md cursor-pointer transition-all duration-100 group"
                                                    : "p-2 border border-transparent rounded-md hover:bg-gray-400/10 hover:border-gray-400/20 cursor-pointer transition-all duration-100 group"
                                            }
                                        >
                                            <Heart size={"1.25rem"} className="inline-block text-gold-dark" />
                                            <span className="inline-block align-middle ms-3 text-gray-500 text-sm group-hover:text-gold">
                                                My Wishlist
                                            </span>
                                        </Link>
                                        <Link
                                            href="/user/booking"
                                            className={
                                                pathname.match("/user/booking")
                                                    ? "p-2 bg-gray-400/10 border border-gray-400/20 rounded-md cursor-pointer transition-all duration-100 group"
                                                    : "p-2 border border-transparent rounded-md hover:bg-gray-400/10 hover:border-gray-400/20 cursor-pointer transition-all duration-100 group"
                                            }
                                        >
                                            <CalendarDays size={"1.25rem"} className="inline-block text-gold-dark" />
                                            <span className="inline-block align-middle ms-3 text-gray-500 text-sm group-hover:text-gold">
                                                My Bookings
                                            </span>
                                        </Link>
                                        <div
                                            onClick={logoutUser}
                                            className="p-2 border border-transparent rounded-md hover:bg-gray-400/10 hover:border-gray-400/20 cursor-pointer transition-all duration-100 group"
                                        >
                                            <LogOut size={"1.25rem"} className="inline-block text-gold-dark" />
                                            <span className="inline-block align-middle ms-3 text-gray-500 text-sm group-hover:text-gold">
                                                Logout
                                            </span>
                                        </div>
                                    </>
                                ) : (
                                    <>
                                        <Link href={"/login"} className="flex items-center gap-2 hover:opacity-70">
                                            <User />
                                            <span>Login</span>
                                        </Link>
                                        <Link href={"/register"} className="flex items-center gap-2 hover:opacity-70">
                                            <Plus />
                                            <span>Register</span>
                                        </Link>
                                    </>
                                )}
                            </div>

                            <div className="w-full h-[0.5] bg-gray-500/20" />

                            <div className="my-5">
                                <Link href="/rooms">
                                    <ButtonMin className="flex items-center justify-center gap-2 uppercase">
                                        <span>Book now</span>
                                        <MoveRight />
                                    </ButtonMin>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}

export default Navigation;
