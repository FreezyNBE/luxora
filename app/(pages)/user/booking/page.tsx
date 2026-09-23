"use client";

import { Button, ButtonOutline } from "@/app/components/misc/Button";
import { Calendar, Clock, User } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

type tabTypes = "upcoming" | "completed" | "canceled";

function getTabIndex(tabs: tabTypes) {
    let value = 0;

    switch (tabs) {
        case "upcoming":
            value = 0;
            break;
        case "completed":
            value = 1;
            break;
        case "canceled":
            value = 2;
            break;
        default:
            value = 0;
            break;
    }

    return value;
}

export default function MyBookingsPage() {
    const [currentTab, setCurrentTab] = useState<tabTypes>("upcoming");

    return (
        <div className="w-full space-y-5">
            <div className="w-fit">
                <div className="relative block text-lg font-medium tracking-wide group cursor-pointer">
                    <span>My Bookings</span>
                    <div className="absolute bottom-0 w-0 group-hover:w-full h-0.5 bg-gold-light transition-all duration-300 ease-in" />
                </div>
            </div>

            <div className="w-full space-y-5">
                {/* Tabs */}
                <div className="relative flex overflow-x-auto">
                    <div className="w-40 px-10 pb-2 border-b border-b-border-light" onClick={() => setCurrentTab("upcoming")}>
                        <span
                            className={`font-semibold ${currentTab === "upcoming" ? "text-gold" : "text-ink"} cursor-pointer hover:text-gold-dark`}
                        >
                            Upcoming
                        </span>
                    </div>
                    <div className="w-40 px-10 pb-2 border-b border-b-border-light" onClick={() => setCurrentTab("completed")}>
                        <span
                            className={`font-semibold ${currentTab === "completed" ? "text-gold" : "text-ink"} cursor-pointer hover:text-gold-dark`}
                        >
                            Completed
                        </span>
                    </div>
                    <div className="w-40 px-10 pb-2 border-b border-b-border-light" onClick={() => setCurrentTab("canceled")}>
                        <span
                            className={`font-semibold ${currentTab === "canceled" ? "text-gold" : "text-ink"} cursor-pointer hover:text-gold-dark`}
                        >
                            Canceled
                        </span>
                    </div>
                    <div
                        className={`absolute bottom-0 left-0 w-40 h-0.5 bg-gold-light transition-all duration-500 ease-in`}
                        style={{ transform: `translateX(${160 * getTabIndex(currentTab)}px)` }}
                    />
                </div>
                {/* Items */}
                <div className="w-full flex flex-col items-center justify-center gap-5">
                    {[0, 1, 2, 3, 4, 5].map((i, index) => (
                        <div
                            key={index}
                            className="w-full max-w-400 flex flex-col lg:flex-row h-full border border-border-light shadow-lg rounded-lg overflow-hidden"
                        >
                            {/* <img
                                src="/img/tmp2.png"
                                alt={`Deluxe Room`}
                                className="w-full lg:w-65 max-lg:max-h-30 h-auto object-cover"
                            /> */}
                            <div className="w-full flex flex-col lg:flex-row gap-y-3 lg:gap-y-0 lg:ms-5 py-2 ps-2 lg:ps-0">
                                <div className="w-full flex flex-col items-start justify-center">
                                    <h1 className="text-2xl font-semibold">Deluxe Room</h1>
                                    <p className="w-5/6 max-w-xs text-muted-light text-xs font-medium">Booking ID: #LX23232</p>
                                    <div className="flex flex-col sm:flex-row gap-x-8 mt-5">
                                        <div className="text-muted-light">
                                            <Calendar size="1rem" className="inline-block" />
                                            <span className="inline-block align-middle ms-1 text-xs font-medium">
                                                May 24, 2026
                                            </span>
                                        </div>
                                        <div className="text-muted-light">
                                            <Calendar size="1rem" className="inline-block" />
                                            <span className="inline-block align-middle ms-1 text-xs font-medium">
                                                June, 15, 2026
                                            </span>
                                        </div>
                                        <div className="text-muted-light">
                                            <User size="1rem" className="inline-block" />
                                            <span className="inline-block align-middle ms-1 text-xs font-medium">2 Guests</span>
                                        </div>
                                    </div>
                                    <div className="flex flex-col lg:flex-row items-center gap-2 mt-5">
                                        <div className="w-45 text-center py-1 border-2 border-border-dark/20 rounded-sm cursor-pointer hover:bg-black group transition-all duration-75">
                                            <span className="text-muted text-sm font-medium group-hover:text-white transition-all duration-75">
                                                View details
                                            </span>
                                        </div>
                                        <div className="w-45 text-center py-1 border-2 border-border-dark/20 rounded-sm cursor-pointer hover:bg-red-800 hover:border-transparent group transition-all duration-75">
                                            <span className="text-muted text-sm font-medium group-hover:text-white transition-all duration-75">
                                                Cancel booking
                                            </span>
                                        </div>
                                    </div>
                                    <div className="flex items-start lg:items-center lg:justify-center gap-3 mt-5">
                                        <div className="text-xs text-muted-light font-medium">
                                            <span className="text-ink text-lg font-semibold">$150</span> / night
                                        </div>
                                        {i % 2 ? (
                                            <div className="w-fit py-1 px-3 bg-green-100 text-green-600 font-semibold text-sm rounded-full">
                                                Confirmed
                                            </div>
                                        ) : (
                                            <div className="w-fit py-1 px-3 bg-blue-100 text-blue-600 font-semibold text-sm rounded-full">
                                                Upcoming
                                            </div>
                                        )}
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
