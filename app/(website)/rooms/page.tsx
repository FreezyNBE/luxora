"use client";

import { Button, ButtonMask, ButtonMin } from "@/app/components/misc/Button";
import { Select } from "@/app/components/misc/Input";
import SliderPriceRange from "@/app/components/misc/SliderPriceRange";
import TopLayout from "@/app/components/TopLayout";
import {
    Eye,
    ListChevronsDownUp,
    ListChevronsUpDown,
    MoveLeft,
    MoveRight,
    SlidersHorizontal,
    SquareDashedMousePointer,
    SquareKanban,
    Users,
} from "lucide-react";
import Link from "next/link";
import { useState } from "react";

export default function TestRoomsPage() {
    const [showFilters, setShowFilters] = useState(false);

    return (
        <>
            <TopLayout
                imgUrl="/img/hero.png"
                title="Our Rooms"
                description="Discover our thoughtfully designed rooms and suites, where comfort meets elegance. Each space is crafted to give you a memorable stay."
            >
                <div className="flex items-center gap-2">
                    <SquareDashedMousePointer size={"1.25rem"} />
                    <span className="text-sm">Select your room</span>
                </div>
            </TopLayout>
            <main className="bg-cream">
                <div className="w-full flex flex-col lg:flex-row p-5 max-lg:gap-y-5 gap-x-10">
                    {/* Filters */}
                    <div className="w-full lg:max-w-80 h-fit text-sm bg-cream-soft border border-border-gray rounded-md p-3">
                        <h1 className="flex flex-col min-[340px]:flex-row items-start min-[340px]:items-center justify-between gap-y-2 font-medium cursor-default lg:pt-2">
                            <div>
                                <SlidersHorizontal className="inline-block text-gold" />
                                <span className="inline-block align-middle ms-3 text-xl tracking-wide">Filter Rooms</span>
                            </div>
                            <div
                                onClick={() => setShowFilters((prev) => !prev)}
                                className="lg:hidden -ms-2 px-2 py-1.5 rounded-md border border-transparent font-medium text-gray-500 hover:text-gold hover:bg-gray-400/10 hover:border-gray-400/20 cursor-pointer transition-all duration-100"
                            >
                                <div className="flex items-center gap-2">
                                    {!showFilters ? (
                                        <>
                                            <ListChevronsUpDown size={"1.25rem"} />
                                            <span>Show Filters</span>
                                        </>
                                    ) : (
                                        <>
                                            <ListChevronsDownUp size={"1.25rem"} />
                                            <span>Hide Filters</span>
                                        </>
                                    )}
                                </div>
                            </div>
                        </h1>

                        <div
                            className={
                                showFilters
                                    ? "grid grid-rows-[1fr] transition-[grid-template-rows] duration-300 ease-in-out"
                                    : "grid grid-rows-[0fr] lg:grid-rows-[1fr] transition-[grid-template-rows] duration-300 ease-in-out"
                            }
                        >
                            <div className="min-h-0 overflow-hidden space-y-5">
                                <div className="border-t border-t-border-gray pt-5 mt-5">
                                    <h1 className="font-medium uppercase cursor-default">Price Range</h1>
                                    <div className="my-2">
                                        <SliderPriceRange min={100} max={1000} step={10} />
                                    </div>
                                </div>

                                <div className="flex flex-col gap-y-2 border-t border-t-border-gray pt-5">
                                    <h1 className="font-medium uppercase cursor-default">Room Type</h1>
                                    <div className="space-y-2">
                                        <div className="w-fit flex items-center cursor-pointer *:cursor-pointer hover:*:text-gold">
                                            <input
                                                type="checkbox"
                                                name="all_room_types"
                                                id="all_room_types"
                                                className="accent-yellow-700/80"
                                            />
                                            <label
                                                htmlFor="all_room_types"
                                                className="select-none ms-2 text-sm font-medium text-heading"
                                            >
                                                All Room Types
                                            </label>
                                        </div>
                                        <div className="w-fit flex items-center cursor-pointer *:cursor-pointer hover:*:text-gold">
                                            <input
                                                type="checkbox"
                                                name="standard_room"
                                                id="standard_room"
                                                className="accent-yellow-700/80"
                                            />
                                            <label
                                                htmlFor="standard_room"
                                                className="select-none ms-2 text-sm font-medium text-heading"
                                            >
                                                Standard Room
                                            </label>
                                        </div>
                                        <div className="w-fit flex items-center cursor-pointer *:cursor-pointer hover:*:text-gold">
                                            <input
                                                type="checkbox"
                                                name="deluxe_room"
                                                id="deluxe_room"
                                                className="accent-yellow-700/80"
                                            />
                                            <label
                                                htmlFor="deluxe_room"
                                                className="select-none ms-2 text-sm font-medium text-heading"
                                            >
                                                Deluxe Room
                                            </label>
                                        </div>
                                        <div className="w-fit flex items-center cursor-pointer *:cursor-pointer hover:*:text-gold">
                                            <input
                                                type="checkbox"
                                                name="executive_room"
                                                id="executive_room"
                                                className="accent-yellow-700/80"
                                            />
                                            <label
                                                htmlFor="executive_room"
                                                className="select-none ms-2 text-sm font-medium text-heading"
                                            >
                                                Executive Room
                                            </label>
                                        </div>
                                        <div className="w-fit flex items-center cursor-pointer *:cursor-pointer hover:*:text-gold">
                                            <input type="checkbox" name="suite" id="suite" className="accent-yellow-700/80" />
                                            <label
                                                htmlFor="suite"
                                                className="select-none ms-2 text-sm font-medium text-heading"
                                            >
                                                Suite
                                            </label>
                                        </div>
                                    </div>
                                </div>

                                <div className="flex flex-col gap-y-2 border-t border-t-border-gray pt-5">
                                    <h1 className="font-medium uppercase cursor-default">Amenties</h1>
                                    <div className="space-y-2">
                                        <div className="w-fit flex items-center cursor-pointer *:cursor-pointer hover:*:text-gold">
                                            <input
                                                type="checkbox"
                                                name="breakfast_included"
                                                id="breakfast_included"
                                                className="accent-yellow-700/80"
                                            />
                                            <label
                                                htmlFor="breakfast_included"
                                                className="select-none ms-2 text-sm font-medium text-heading"
                                            >
                                                Breakfast Included
                                            </label>
                                        </div>
                                        <div className="w-fit flex items-center cursor-pointer *:cursor-pointer hover:*:text-gold">
                                            <input
                                                type="checkbox"
                                                name="air_conditioning"
                                                id="air_conditioning"
                                                className="accent-yellow-700/80"
                                            />
                                            <label
                                                htmlFor="air_conditioning"
                                                className="select-none ms-2 text-sm font-medium text-heading"
                                            >
                                                Air Conditioning
                                            </label>
                                        </div>
                                        <div className="w-fit flex items-center cursor-pointer *:cursor-pointer hover:*:text-gold">
                                            <input type="checkbox" name="tv" id="tv" className="accent-yellow-700/80" />
                                            <label htmlFor="tv" className="select-none ms-2 text-sm font-medium text-heading">
                                                TV
                                            </label>
                                        </div>
                                        <div className="w-fit flex items-center cursor-pointer *:cursor-pointer hover:*:text-gold">
                                            <input
                                                type="checkbox"
                                                name="balcony"
                                                id="balcony"
                                                className="accent-yellow-700/80"
                                            />
                                            <label
                                                htmlFor="balcony"
                                                className="select-none ms-2 text-sm font-medium text-heading"
                                            >
                                                Balcony
                                            </label>
                                        </div>
                                    </div>
                                </div>

                                <div className="flex flex-col items-start justify-center gap-2.5 border-t border-t-border-gray pt-5">
                                    <ButtonMin width="btn-w-full">Apply Filters</ButtonMin>
                                    <ButtonMask width="btn-w-full">Reset</ButtonMask>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* n Rooms found */}
                    <div className="w-full space-y-5">
                        <div className="flex items-center justify-between">
                            <div>
                                <span className="text-sm font-medium cursor-default select-none">8 rooms available</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <span className="text-sm font-medium cursor-default select-none">Sort by:</span>
                                <div className="w-52 flex items-center text-sm">
                                    <Select
                                        id="sortby"
                                        name="sortby"
                                        options={["Recommanded", "Raitings", "High price", "Low price"]}
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="w-full grid grid-cols-1 md:grid-cols-2 2xl:grid-cols-3 gap-5">
                            {[0, 1, 2, 3, 4, 5].map((room) => (
                                <div
                                    key={room}
                                    className="relative w-full text-gray-700 border border-border-gray rounded-xl overflow-hidden group"
                                >
                                    {room < 2 && (
                                        <div className="absolute top-3 left-3 z-2">
                                            <span className="px-3.5 py-1 text-xs bg-orange-100/85 text-gray-800 font-medium tracking-wide hover:bg-cream-dark rounded-full cursor-pointer transition-colors duration-100">
                                                {(room + 1) % 2 ? "Best Value" : "Popular"}
                                            </span>
                                        </div>
                                    )}
                                    <Link href={`/rooms/${room}`} className="relative">
                                        <img
                                            src={(room + 1) % 2 ? "/img/hero2.png" : "/img/img5.jpg"}
                                            alt={`Deluxe Room`}
                                            className="w-full aspect-video overflow-hidden object-cover"
                                        />
                                        <div
                                            className="opacity-0 group-hover:opacity-100 absolute inset-0 transition-all duration-300 ease-in"
                                            style={{
                                                background:
                                                    "linear-gradient(90deg, rgba(255, 255, 255, 0.10) 0%, rgba(255, 255, 255, 0.10) 100%, rgba(255, 255, 255, 0.10) 35%, transparent 82%)",
                                            }}
                                        />
                                    </Link>
                                    <div className="p-3 space-y-2">
                                        <div className="w-fit hover:text-gold transition-colors duration-100">
                                            <Link href={`/rooms/${room}`}>
                                                <h1 className="text-xl font-medium">Standard Room</h1>
                                            </Link>
                                        </div>
                                        <div className="flex items-center gap-6 md:gap-4 xl:gap-6 text-xs font-medium text-gray-600">
                                            <div className="flex items-center gap-2">
                                                <Users size={"1.25rem"} />
                                                <span>2 Guests</span>
                                            </div>
                                            <div className="flex items-center gap-2">
                                                <Eye size={"1.25rem"} />
                                                <span>Ocean View</span>
                                            </div>
                                            <div className="flex items-center gap-2">
                                                <SquareKanban size={"1.25rem"} />
                                                <span>36 m&sup2;</span>
                                            </div>
                                        </div>
                                        <div className="max-md:max-w-125 text-xs tracking-wide text-gray-600 py-2">
                                            A comfortable and stylish room with modern amenities and a relaxing atmosphere.
                                            Perfect for couples or solo travelers.
                                        </div>
                                        <div className="w-full flex items-center justify-between pt-5">
                                            <div className="w-full space-x-1">
                                                <div className="inline-block text-xl font-medium">$120</div>
                                                <div className="inline-block text-xs font-medium tracking-wide"> / night</div>
                                            </div>
                                            <Link href={`/rooms/${room}`}>
                                                <Button className="h-10 flex items-center justify-center gap-2">
                                                    <span className="text-xs">View Details</span>
                                                    <MoveRight size={"1.25rem"} />
                                                </Button>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                        <div className="w-full flex items-center justify-center gap-5">
                            {/* Arrow Back */}
                            <Link href="/" className="text-gray-400/70 hover:text-gold transition-colors duration-100">
                                <MoveLeft size={"1.25rem"} />
                            </Link>
                            <div className="flex items-center gap-3">
                                <div className="flex items-center gap-1">
                                    <Link
                                        href="/"
                                        className="w-8 h-8.5 flex items-center justify-center text-white bg-gold hover:bg-gold-dark rounded-sm transition-colors duration-100"
                                    >
                                        <span className="text-sm font-medium">1</span>
                                    </Link>
                                </div>
                                <div className="flex items-center gap-1">
                                    <Link
                                        href="/"
                                        className="w-8 h-8.5 flex items-center justify-center text-gray-500 bg-gray-300/40 hover:bg-gray-300/70 rounded-sm transition-colors duration-100"
                                    >
                                        <span className="text-sm font-medium">2</span>
                                    </Link>
                                </div>
                            </div>
                            <Link href="/" className="text-gray-400/70 hover:text-gold transition-colors duration-100">
                                <MoveRight size={"1.25rem"} />
                            </Link>
                        </div>
                    </div>
                </div>
            </main>
        </>
    );
}
