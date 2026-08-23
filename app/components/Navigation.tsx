"use client";

import { Calendar, Gem, Heart, Menu, User, X } from "lucide-react";
import Link from "next/link";
import React, { useState } from "react";
import { Button } from "./misc/Button";

function Navigation() {
    const [navMobileStatus, setNavMobileStatus] = useState<boolean>(false);
    const [navMobileVisible, setNavMobileVisible] = useState<boolean>(false);

    const openMenu = () => {
        setNavMobileVisible(true);

        // Let the element mount first
        requestAnimationFrame(() => {
            setNavMobileStatus(true);
        });
    };

    const closeMenu = () => {
        setNavMobileStatus(false);

        // Wait for animation to finish before removing it
        setTimeout(() => {
            setNavMobileVisible(false);
        }, 200);
    };

    return (
        <div className="absolute inset-0 text-white">
            <nav className="relative w-full flex items-center justify-between gap-4 px-10 py-5 z-10">
                <h1 className="flex items-center justify-center gap-1 text-2xl font-bold cursor-default">
                    <Gem size={"1.5rem"} className="text-gold-light" />
                    <span>Luxora</span>
                </h1>
                {!navMobileVisible && (
                    <ul className="flex uppercase text-sm max-lg:hidden xl:gap-6">
                        <li>
                            <Link href="/" className="px-4 py-2 hover:opacity-70">
                                Home
                            </Link>
                        </li>
                        <li>
                            <Link href="/" className="px-4 py-2 hover:opacity-70">
                                Rooms
                            </Link>
                        </li>
                        <li>
                            <Link href="/" className="px-4 py-2 hover:opacity-70">
                                Facilities
                            </Link>
                        </li>
                        <li>
                            <Link href="/" className="px-4 py-2 hover:opacity-70">
                                Offers
                            </Link>
                        </li>
                        <li>
                            <Link href="/" className="px-4 py-2 hover:opacity-70">
                                Gallery
                            </Link>
                        </li>
                        <li>
                            <Link href="/" className="px-4 py-2 hover:opacity-70">
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
                            <Menu className="lg:hidden hover:text-gold-light" />
                        </div>
                    </div>
                    <Link href={"/"}>
                        <Button className="text-sm uppercase">Book now</Button>
                    </Link>
                </div>
            </nav>

            {/* Mobile navigation */}
            {navMobileVisible && (
                <div className="absolute inset-0 w-full h-full bg-black/50 overflow-auto z-20" onClick={closeMenu}>
                    <div
                        className={`w-xs h-full absolute top-0 left-0 backdrop-blur-xl border-r border-r-border-dark px-5 ${navMobileStatus ? "translate-x-0" : "-translate-x-full"} transform duration-200 ease-in`}
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

                                <div className="w-fit flex flex-col justify-center gap-6 my-5">
                                    <Link href="/" className="hover:opacity-70">
                                        <span>Home</span>
                                    </Link>
                                    <Link href="/" className="hover:opacity-70">
                                        <span>Rooms</span>
                                    </Link>
                                    <Link href="/" className="hover:opacity-70">
                                        <span>Facilities</span>
                                    </Link>
                                    <Link href="/" className="hover:opacity-70">
                                        <span>Offers</span>
                                    </Link>
                                    <Link href="/" className="hover:opacity-70">
                                        <span>Gallery</span>
                                    </Link>
                                    <Link href="/" className="hover:opacity-70">
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

                            <div className="text-center mt-5">
                                <Link href={"/"}>
                                    <Button className="w-full text-sm uppercase bg-gold-dark hover:opacity-70">Book now</Button>
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
