"use client";

import { Calendar, Gem, Heart, Menu, User, X } from "lucide-react";
import Link from "next/link";
import React, { useState } from "react";
import { Button } from "./misc/Button";
import { useGlobal } from "../context/GlobalContext";

function Navigation() {
    const { disableBodyOverflow, enableBodyOverflow } = useGlobal();
    const [navMobileStatus, setNavMobileStatus] = useState<boolean>(false);
    const [navMobileVisible, setNavMobileVisible] = useState<boolean>(false);

    const openMenu = () => {
        setNavMobileVisible(true);

        // Let the element mount first
        requestAnimationFrame(() => {
            setNavMobileStatus(true);
            disableBodyOverflow();
        });
    };

    const closeMenu = () => {
        setNavMobileStatus(false);

        // Wait for animation to finish before removing it
        setTimeout(() => {
            setNavMobileVisible(false);
            enableBodyOverflow();
        }, 300);
    };

    return (
        <div className="text-white">
            <nav className="absolute inset-0 w-full h-fit flex items-center justify-between gap-4 px-10 py-5 z-10 backdrop-blur-md">
                <h1 className="flex items-center justify-center gap-1 text-2xl font-bold cursor-default">
                    <Gem size={"1.5rem"} className="text-gold-light" />
                    <span>Luxora</span>
                </h1>
                {!navMobileVisible && (
                    <ul className="flex uppercase text-sm max-lg:hidden gap-6 xl:gap-10">
                        <li>
                            <Link
                                href="/"
                                className="py-2 border-b-2 border-b-transparent hover:border-b-gold hover:text-gold-light transition duration-100 ease-in"
                            >
                                Home
                            </Link>
                        </li>
                        <li>
                            <Link
                                href="/"
                                className="py-2 border-b-2 border-b-transparent hover:border-b-gold hover:text-gold-light transition duration-100 ease-in"
                            >
                                Rooms
                            </Link>
                        </li>
                        <li>
                            <Link
                                href="/"
                                className="py-2 border-b-2 border-b-transparent hover:border-b-gold hover:text-gold-light transition duration-100 ease-in"
                            >
                                Facilities
                            </Link>
                        </li>
                        <li>
                            <Link
                                href="/"
                                className="py-2 border-b-2 border-b-transparent hover:border-b-gold hover:text-gold-light transition duration-100 ease-in"
                            >
                                Offers
                            </Link>
                        </li>
                        <li>
                            <Link
                                href="/"
                                className="py-2 border-b-2 border-b-transparent hover:border-b-gold hover:text-gold-light transition duration-100 ease-in"
                            >
                                Gallery
                            </Link>
                        </li>
                        <li>
                            <Link
                                href="/"
                                className="py-2 border-b-2 border-b-transparent hover:border-b-gold hover:text-gold-light transition duration-100 ease-in"
                            >
                                Contact
                            </Link>
                        </li>
                    </ul>
                )}
                <div className="flex items-center gap-4">
                    <div className="flex justify-center items-center gap-3 cursor-pointer hover:underline">
                        <User className="max-lg:hidden hover:opacity-70" />
                        <Heart className="max-lg:hidden hover:opacity-70" />
                        <Calendar className="max-lg:hidden hover:opacity-70" />
                        <div onClick={navMobileVisible ? closeMenu : openMenu}>
                            <Menu className="lg:hidden hover:opacity-70" />
                        </div>
                    </div>
                    <Link href={"/"}>
                        <Button className="text-sm uppercase">Book now</Button>
                    </Link>
                </div>
            </nav>

            {/* Mobile navigation */}
            {navMobileVisible && (
                <div className="fixed inset-0 w-full h-full bg-black/50 z-20" onClick={closeMenu}>
                    <div
                        className={`w-full h-full overflow-auto fixed top-0 left-0 backdrop-blur-xl border-r border-r-border-dark px-5 ${navMobileStatus ? "translate-x-0" : "-translate-x-full"} transform duration-300 ease-in`}
                        onClick={(event: React.MouseEvent<HTMLDivElement>) => event.stopPropagation()}
                    >
                        <div className="w-full">
                            <div className="py-2">
                                <h1 className="relative flex items-center justify-between mb-5">
                                    <div className="flex items-center gap-2 text-3xl font-bold cursor-default">
                                        <Gem size={"1.5rem"} className="text-gold-light" />
                                        <span>Luxora</span>
                                    </div>
                                    <div className="hover:opacity-50 cursor-pointer" onClick={closeMenu}>
                                        <X />
                                    </div>
                                </h1>

                                <div className="w-full h-[0.5] bg-border-dark" />

                                <div className="flex flex-col justify-center gap-3 my-5">
                                    <Link
                                        href="/"
                                        className="w-fit py-2 border-b-2 border-b-transparent hover:border-b-gold hover:text-gold-light transition duration-100 ease-in"
                                    >
                                        <span>Home</span>
                                    </Link>
                                    <Link
                                        href="/"
                                        className="w-fit py-2 border-b-2 border-b-transparent hover:border-b-gold hover:text-gold-light transition duration-100 ease-in"
                                    >
                                        <span>Rooms</span>
                                    </Link>
                                    <Link
                                        href="/"
                                        className="w-fit py-2 border-b-2 border-b-transparent hover:border-b-gold hover:text-gold-light transition duration-100 ease-in"
                                    >
                                        <span>Facilities</span>
                                    </Link>
                                    <Link
                                        href="/"
                                        className="w-fit py-2 border-b-2 border-b-transparent hover:border-b-gold hover:text-gold-light transition duration-100 ease-in"
                                    >
                                        <span>Offers</span>
                                    </Link>
                                    <Link
                                        href="/"
                                        className="w-fit py-2 border-b-2 border-b-transparent hover:border-b-gold hover:text-gold-light transition duration-100 ease-in"
                                    >
                                        <span>Gallery</span>
                                    </Link>
                                    <Link
                                        href="/"
                                        className="w-fit py-2 border-b-2 border-b-transparent hover:border-b-gold hover:text-gold-light transition duration-100 ease-in"
                                    >
                                        <span>Contact</span>
                                    </Link>
                                </div>
                            </div>

                            <div className="w-full h-[0.5] bg-border-dark" />

                            <div className="space-y-3 py-5 text-sm">
                                <Link href={"/"} className="flex items-center gap-2 hover:opacity-70">
                                    <User />
                                    <span>My Account</span>
                                </Link>
                                <Link href={"/"} className="flex items-center gap-2 hover:opacity-70">
                                    <Heart />
                                    <span>My Wishlist</span>
                                </Link>
                                <Link href={"/"} className="flex items-center gap-2 hover:opacity-70">
                                    <Calendar />
                                    <span>My Bookings</span>
                                </Link>
                            </div>

                            <div className="w-full h-[0.5] bg-border-dark" />

                            <div className="my-5">
                                <Link href={"/"}>
                                    <Button className="text-sm uppercase bg-gold-dark hover:opacity-70">Book now</Button>
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
