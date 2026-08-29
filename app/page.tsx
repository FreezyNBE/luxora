import Link from "next/link";
import { Button } from "./components/misc/Button";
import {
    Bed,
    BedSingle,
    CalendarRange,
    ChevronDown,
    CircleCheck,
    Grid3X3,
    Hotel,
    MapPin,
    Medal,
    StarCheck,
    ThumbsUp,
    Trophy,
    Users,
} from "lucide-react";

export default function Home() {
    return (
        <main>
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
            <div className="relative w-full z-1 bg-transparent flex items-center justify-center">
                <div className="relative -top-18 w-full lg:w-5/6 flex max-lg:flex-col items-center bg-cream-soft border border-border rounded-lg shadow-xl mx-2 lg:mx-5">
                    <div className="w-full lg:flex-1/2 p-5 space-y-1">
                        <div className="text-muted-light text-xs font-semibold uppercase pl-2 cursor-default">Check-In</div>
                        <div className="w-full text-ink cursor-pointer hover:opacity-80 hover:text-gold-dark group border-b-2 p-2 border-b-transparent hover:border-b-gold-dark transition-all duration-100 ease-in">
                            <span className="text-sm font-semibold">May 24, 2026</span>
                            <span className="inline-block align-middle float-right text-muted-light group-hover:text-gold-dark transition-all duration-100 ease-in">
                                <CalendarRange size={"1.25rem"} />
                            </span>
                        </div>
                    </div>
                    <div className="w-full lg:flex-1/2 p-5 space-y-1">
                        <div className="text-muted-light text-xs font-semibold uppercase pl-2 cursor-default">Check-Out</div>
                        <div className="w-full text-ink cursor-pointer hover:opacity-80 hover:text-gold-dark group border-b-2 p-2 border-b-transparent hover:border-b-gold-dark transition-all duration-100 ease-in">
                            <span className="text-sm font-semibold">May 25, 2026</span>
                            <span className="inline-block align-middle float-right text-muted-light group-hover:text-gold-dark transition-all duration-100 ease-in">
                                <CalendarRange size={"1.25rem"} />
                            </span>
                        </div>
                    </div>
                    <div className="w-full lg:flex-1/2 p-5 space-y-1">
                        <div className="text-muted-light text-xs font-semibold uppercase pl-2 cursor-default">Quests</div>
                        <div className="w-full text-ink cursor-pointer hover:opacity-80 hover:text-gold-dark group border-b-2 p-2 border-b-transparent hover:border-b-gold-dark transition-all duration-100 ease-in">
                            <span className="text-sm font-semibold">2 Adults, 0 Children</span>
                            <span className="inline-block align-middle float-right pt-0.5 text-muted-light group-hover:text-gold-dark transition-all duration-100 ease-in">
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

            {/* Notices */}
            <section className="flex items-center justify-center text-center">
                <div className="w-full lg:w-5/6 py-3 space-y-3">
                    <div className="uppercase text-sm">Why choose us</div>
                    <h1 className="font-bold text-3xl">Timeless Elegance, Modern Comfort</h1>
                    <div className="flex max-lg:flex-wrap items-center justify-center max-lg:gap-y-5 lg:gap-x-5 mt-6">
                        <div className="flex-1/2">
                            <div className="w-full flex items-center justify-center">
                                <div className="flex flex-col items-center justify-center gap-2 border border-transparent rounded-lg px-4 xl:px-16 py-2 hover:bg-gold-dark/20 hover:border-gold-dark cursor-pointer transition duration-75 ease-in-out">
                                    <MapPin className="text-gold-light" size={"2rem"} />
                                    <span className="font-semibold text-sm text-ink">Prime Location</span>
                                    <p className="max-w-46 text-xs text-muted">
                                        Located in the heart of the city, close to attractions and business hubs.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="flex-1/2">
                            <div className="w-full flex items-center justify-center">
                                <div className="flex flex-col items-center justify-center gap-2 border border-transparent rounded-lg px-4 xl:px-16 py-2 hover:bg-gold-dark/20 hover:border-gold-dark cursor-pointer transition duration-75 ease-in-out">
                                    <BedSingle className="text-gold-light" size={"2rem"} />
                                    <span className="font-semibold text-sm text-ink">Exceptional Comfort</span>
                                    <p className="max-w-46 text-xs text-muted">
                                        Well-appointed rooms with modern amenities for a relaxing stay.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="flex-1/2">
                            <div className="w-full flex items-center justify-center">
                                <div className="flex flex-col items-center justify-center gap-2 border border-transparent rounded-lg px-4 xl:px-16 py-2 hover:bg-gold-dark/20 hover:border-gold-dark cursor-pointer transition duration-75 ease-in-out">
                                    <ThumbsUp className="text-gold-light" size={"2rem"} />
                                    <span className="font-semibold text-sm text-ink">World Class Service</span>
                                    <p className="max-w-46 text-xs text-muted">
                                        Our dedicated team is here to ensure your stay is perfect in every way.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="flex-1/2">
                            <div className="w-full flex items-center justify-center">
                                <div className="flex flex-col items-center justify-center gap-2 border border-transparent rounded-lg px-4 xl:px-16 py-2 hover:bg-gold-dark/20 hover:border-gold-dark cursor-pointer transition duration-75 ease-in-out">
                                    <Medal className="text-gold-light" size={"2rem"} />
                                    <span className="font-semibold text-sm text-ink">Best Price Guarantee</span>
                                    <p className="max-w-46 text-xs text-muted">
                                        Book directly with us for the best rates and exclusive benefits.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* About us */}
            <section className="w-full lg:h-120 flex flex-col lg:flex-row mt-20">
                <img src="/img/about-us.png" alt="Hotel Room" className="w-full lg:w-1/2 h-full object-cover" />
                <div className="w-full bg-cream-dark">
                    <div className="w-full h-full flex flex-col items-start justify-center gap-2 px-10 py-4 space-y-5">
                        <div className="text-shadow-xs text-sm uppercase text-muted">About Luxora Hotel</div>
                        <h2 className="text-shadow-xs font-bold text-4xl">A Stay That Feels Like Home</h2>
                        <p className="max-w-md text-shadow-xs text-sm">
                            At Luxora Hotel, we blend timeless elegance with modern comfort to create unforgettable experiences.
                            Whether you're here for business, leisure, or a special occasion, we're commited to making your stay
                            exceptional.
                        </p>
                        <Link href={"/"}>
                            <Button className="text-sm uppercase shadow-md">Learn more</Button>
                        </Link>
                    </div>
                </div>
            </section>

            {/* Counts */}
            <section className="w-full bg-brown text-gold-dark cursor-default overflow-hidden">
                <div className="flex flex-wrap items-center justify-center gap-5 2xl:gap-32 py-10 px-5">
                    <div className="max-sm:flex-1/2 max-lg:flex-2/6">
                        <div className="flex items-center gap-4 py-5 px-10 rounded-lg cursor-pointer border border-gold-dark/20 hover:border-transparent hover:bg-gold-dark/10">
                            <Bed size={"2.5rem"} />
                            <div>
                                <h2 className="text-3xl font-semibold text-white">120+</h2>
                                <div className="font-semibold text-xs">Luxury Rooms</div>
                            </div>
                        </div>
                    </div>
                    <div className="max-sm:flex-1/2 max-lg:flex-2/6">
                        <div className="flex items-center gap-4 py-5 px-10 rounded-lg cursor-pointer border border-gold-dark/20 hover:border-transparent hover:bg-gold-dark/10">
                            <Users size={"2.5rem"} />
                            <div>
                                <h2 className="text-3xl font-semibold text-white">5000+</h2>
                                <div className="font-semibold text-xs">Happy Guests</div>
                            </div>
                        </div>
                    </div>
                    <div className="max-sm:flex-1/2 max-lg:flex-2/6">
                        <div className="flex items-center gap-4 py-5 px-10 rounded-lg cursor-pointer border border-gold-dark/20 hover:border-transparent hover:bg-gold-dark/10">
                            <StarCheck size={"2.5rem"} />
                            <div>
                                <h2 className="text-3xl font-semibold text-white">4.8</h2>
                                <div className="font-semibold text-xs">Guest Rating</div>
                            </div>
                        </div>
                    </div>
                    <div className="max-sm:flex-1/2 max-lg:flex-2/6">
                        <div className="flex items-center gap-4 py-5 px-10 rounded-lg cursor-pointer border border-gold-dark/20 hover:border-transparent hover:bg-gold-dark/10">
                            <Trophy size={"2.5rem"} />
                            <div>
                                <h2 className="text-3xl font-semibold text-white">10+</h2>
                                <div className="font-semibold text-xs">Awards Won</div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}
