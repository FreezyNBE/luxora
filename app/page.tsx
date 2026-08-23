import Link from "next/link";
import { Button } from "./components/misc/Button";
import { CalendarRange, ChevronDown, CircleCheck } from "lucide-react";

export default function Home() {
    return (
        <>
            {/* Hero section */}
            <section className="relative w-full h-300 text-white">
                {/* Background image */}
                <img src="/img/hero.png" alt="Hotel Room" className="absolute inset-0 w-full h-full object-cover" />

                {/* Dark overlay */}
                <div className="absolute inset-0 bg-linear-to-r from-black/20 via-black/30 to-transparent after:absolute after:inset-0 after:bg-linear-to-r after:from-black/30 after:to-transparent" />

                {/* Content */}
                <div className="relative h-2/3 flex items-center ml-5 lg:ml-20 pl-2">
                    <div className="max-w-sm lg:max-w-lg space-y-5 cursor-default">
                        <div className="w-3xs text-xs uppercase">
                            Welcome to <span className="text-gold-light">Luxora</span> Hotel
                        </div>

                        <h1 className="text-3xl lg:text-6xl font-semibold leading-9 lg:leading-17">
                            Experience, Comfort, Indulge in Luxury
                        </h1>

                        <p className="w-full max-w-3xs text-sm">
                            Where every stay is a memorable escape tailored just for you.
                        </p>

                        <div className="w-full max-w-50 gap-2 flex items-center">
                            <div className="w-full h-0.5 flex-8 bg-gray-300/80" />
                            <div className="w-full h-0.5 flex-7 bg-gray-300/60" />
                            <div className="w-full h-0.5 flex-5 bg-gray-300/50" />
                            <div className="w-full h-0.5 flex-3 bg-gray-300/40" />
                            <div className="w-full h-0.5 flex-2 bg-gray-300/30" />
                        </div>

                        <Link href={"/"}>
                            <Button className="text-sm uppercase">Book your stay</Button>
                        </Link>
                    </div>
                </div>
            </section>

            {/* Checkin availability */}
            <div className="relative w-full z-1 bg-transparent flex items-center justify-center py-5">
                <div className="relative -top-18 w-full lg:w-5/6 flex max-lg:flex-col items-center bg-cream-soft border border-border rounded-lg shadow-xl mx-2 lg:mx-5">
                    <div className="w-full lg:flex-1/2 p-5 space-y-1">
                        <div className="text-muted-light text-xs font-semibold uppercase pl-2 cursor-default">Check-In</div>
                        <div className="w-full text-ink cursor-pointer hover:opacity-80 hover:text-gold-dark group border-2 p-2 rounded-full border-transparent hover:border-gold-dark hover:bg-gold-light/10 transition duration-100 ease-in">
                            <span className="text-sm font-semibold">May 24, 2026</span>
                            <span className="inline-block align-middle float-right text-muted-light group-hover:text-gold-dark duration-100 ease-in">
                                <CalendarRange size={"1.25rem"} />
                            </span>
                        </div>
                    </div>
                    <div className="w-full lg:flex-1/2 p-5 space-y-1">
                        <div className="text-muted-light text-xs font-semibold uppercase pl-2 cursor-default">Check-Out</div>
                        <div className="w-full text-ink cursor-pointer hover:opacity-80 hover:text-gold-dark group border-2 p-2 rounded-full border-transparent hover:border-gold-dark hover:bg-gold-light/10 transition duration-100 ease-in">
                            <span className="text-sm font-semibold">May 25, 2026</span>
                            <span className="inline-block align-middle float-right text-muted-light group-hover:text-gold-dark">
                                <CalendarRange size={"1.25rem"} />
                            </span>
                        </div>
                    </div>
                    <div className="w-full lg:flex-1/2 p-5 space-y-1">
                        <div className="text-muted-light text-xs font-semibold uppercase pl-2 cursor-default">Quests</div>
                        <div className="w-full text-ink cursor-pointer hover:opacity-80 hover:text-gold-dark group border-2 p-2 rounded-full border-transparent hover:border-gold-dark hover:bg-gold-light/10 transition duration-100 ease-in">
                            <span className="text-sm font-semibold">2 Adults, 0 Children</span>
                            <span className="inline-block align-middle float-right pt-0.5 text-muted-light group-hover:text-gold-dark">
                                <ChevronDown size={"1.25rem"} />
                            </span>
                        </div>
                    </div>
                    <div className="max-lg:w-full px-5 py-2 space-y-1">
                        <Button className="w-full flex items-center justify-center gap-1 bg-gold hover:bg-gold-dark">
                            <CircleCheck />
                            <span>Check Availability</span>
                        </Button>
                    </div>
                </div>
            </div>
        </>
    );
}
