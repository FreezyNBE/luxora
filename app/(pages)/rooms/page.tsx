import { Button, CircleButton } from "@/app/components/misc/Button";
import SliderPriceRange from "@/app/components/misc/SliderPriceRange";
import {
    CalendarRange,
    ChevronDown,
    ChevronLeft,
    ChevronRight,
    Eye,
    Square,
    SquareM,
    TextSearch,
    UserRound,
} from "lucide-react";
import Link from "next/link";

function RoomsPage() {
    return (
        <main className="p-2 bg-cream">
            <div className="flex flex-col items-center justify-center gap-y-3 text-shadow-2xs my-10">
                <span className="text-sm uppercase font-medium">Rooms &#038; Suites</span>
                <h3 className="text-3xl font-bold">Find Your Perfect Stay</h3>
                <p className="max-w-110 text-sm text-muted text-center">
                    Explore our selection of beautifully designed rooms and suites crafted for your comfort and relaxation.
                </p>
            </div>

            {/* Checkin availability */}
            <div className="relative w-full z-1 bg-transparent flex items-center justify-center my-5">
                <div className="w-full flex max-lg:flex-col items-center border border-border rounded-lg shadow-xl mx-2 lg:mx-5">
                    <div className="w-full lg:flex-1/2 p-5 space-y-1">
                        <div className="text-muted-light text-sm font-semibold uppercase ps-2 cursor-default">Check-In</div>
                        <div className="w-full text-ink cursor-pointer hover:opacity-80 hover:text-gold-dark group border-b-2 p-2 border-b-transparent hover:border-b-gold-dark transition-all duration-100 ease-in">
                            <span className="font-semibold">May 24, 2026</span>
                            <span className="inline-block align-middle float-right text-muted-light group-hover:text-gold-dark transition-all duration-100 ease-in">
                                <CalendarRange size={"1.25rem"} />
                            </span>
                        </div>
                    </div>
                    <div className="w-full lg:flex-1/2 p-5 space-y-1">
                        <div className="text-muted-light text-sm font-semibold uppercase ps-2 cursor-default">Check-Out</div>
                        <div className="w-full text-ink cursor-pointer hover:opacity-80 hover:text-gold-dark group border-b-2 p-2 border-b-transparent hover:border-b-gold-dark transition-all duration-100 ease-in">
                            <span className="font-semibold">May 25, 2026</span>
                            <span className="inline-block align-middle float-right text-muted-light group-hover:text-gold-dark transition-all duration-100 ease-in">
                                <CalendarRange size={"1.25rem"} />
                            </span>
                        </div>
                    </div>
                    <div className="w-full lg:flex-1/2 p-5 space-y-1">
                        <div className="text-muted-light text-sm font-semibold uppercase ps-2 cursor-default">Quests</div>
                        <div className="w-full text-ink cursor-pointer hover:opacity-80 hover:text-gold-dark group border-b-2 p-2 border-b-transparent hover:border-b-gold-dark transition-all duration-100 ease-in">
                            <span className="font-semibold">2 Adults, 0 Children</span>
                            <span className="inline-block align-middle float-right pt-0.5 text-muted-light group-hover:text-gold-dark transition-all duration-100 ease-in">
                                <ChevronDown size={"1.25rem"} />
                            </span>
                        </div>
                    </div>
                    <div className="max-lg:w-full px-5 py-2 space-y-1">
                        <Button className="w-full flex items-center justify-center gap-1 bg-gold hover:bg-gold-dark">
                            <TextSearch />
                            <span>Update Search</span>
                        </Button>
                    </div>
                </div>
            </div>

            <div className="w-full flex flex-col lg:flex-row p-5 gap-x-10">
                {/* Filters */}
                <div className="w-full max-w-52 space-y-5 text-sm">
                    <h1 className="font-medium uppercase cursor-default">Filters</h1>

                    <div className="w-full h-[0.5] bg-black/10" />

                    <div>
                        <h1 className="font-medium uppercase cursor-default">Price Range</h1>
                        <div className="my-2">
                            <SliderPriceRange min={100} max={1000} step={10} />
                        </div>
                    </div>

                    <div className="w-full h-[0.5] bg-black/10" />

                    <div className="flex flex-col gap-y-2">
                        <h1 className="font-medium uppercase cursor-default">Room Type</h1>
                        <div className="space-y-2">
                            <div className="w-fit flex items-center cursor-pointer *:cursor-pointer hover:*:text-gold">
                                <input
                                    type="checkbox"
                                    name="all_room_types"
                                    id="all_room_types"
                                    className="accent-yellow-700/80"
                                />
                                <label htmlFor="all_room_types" className="select-none ms-2 text-sm font-medium text-heading">
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
                                <label htmlFor="standard_room" className="select-none ms-2 text-sm font-medium text-heading">
                                    Standard Room
                                </label>
                            </div>
                            <div className="w-fit flex items-center cursor-pointer *:cursor-pointer hover:*:text-gold">
                                <input type="checkbox" name="deluxe_room" id="deluxe_room" className="accent-yellow-700/80" />
                                <label htmlFor="deluxe_room" className="select-none ms-2 text-sm font-medium text-heading">
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
                                <label htmlFor="executive_room" className="select-none ms-2 text-sm font-medium text-heading">
                                    Executive Room
                                </label>
                            </div>
                            <div className="w-fit flex items-center cursor-pointer *:cursor-pointer hover:*:text-gold">
                                <input type="checkbox" name="suite" id="suite" className="accent-yellow-700/80" />
                                <label htmlFor="suite" className="select-none ms-2 text-sm font-medium text-heading">
                                    Suite
                                </label>
                            </div>
                        </div>
                    </div>

                    <div className="w-full h-[0.5] bg-black/10" />

                    <div className="flex flex-col gap-y-2">
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
                                <label htmlFor="air_conditioning" className="select-none ms-2 text-sm font-medium text-heading">
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
                                <input type="checkbox" name="balcony" id="balcony" className="accent-yellow-700/80" />
                                <label htmlFor="balcony" className="select-none ms-2 text-sm font-medium text-heading">
                                    Balcony
                                </label>
                            </div>
                        </div>
                    </div>
                </div>

                {/* n Rooms found */}
                <div className="w-full flex flex-col space-y-5">
                    <div className="flex flex-col sm:flex-row items-center justify-between my-5 sm:my-0 gap-2 sm:gap-0">
                        <div>
                            <span className="uppercase text-sm font-medium cursor-default select-none">12 Rooms Found</span>
                        </div>
                        <div className="space-x-1 text-sm border border-border-light rounded-md px-6 py-2">
                            <label htmlFor="sortby" className="text-muted-light select-none">
                                Sort by:
                            </label>
                            <select name="sortby" id="sortby" defaultValue={"Recommanded"} className="outline-none">
                                <option value="recommanded">Recommanded</option>
                                <option value="recommanded">Raitings</option>
                                <option value="recommanded">High price</option>
                                <option value="recommanded">Low price</option>
                            </select>
                        </div>
                    </div>
                    {/* Items */}
                    <div className="space-y-5 mt-4 sm:grid grid-cols-2 gap-2 lg:block">
                        {[0 /*, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11*/].map((i, index) => (
                            <div
                                key={index}
                                className="flex flex-col lg:flex-row w-full h-full border border-border-light overflow-hidden"
                            >
                                <img
                                    src="/img/hero2.png"
                                    alt=""
                                    className="w-full lg:max-w-sm h-1/2 md:h-72 lg:h-full object-cover"
                                />
                                <div className="w-full flex flex-col lg:flex-row gap-y-3 lg:gap-y-0 lg:ms-5 py-2 ps-2 lg:ps-0">
                                    <div className="w-full flex flex-col items-start justify-center">
                                        <h1 className="text-2xl font-semibold">Deluxe Room</h1>
                                        <div className="flex flex-col xl:flex-row gap-x-8 mt-1">
                                            <div className="text-muted-light">
                                                <SquareM size="1rem" className="inline-block" />
                                                <div className="inline-block align-middle ms-1 text-xs font-medium">
                                                    28 <span className="font-semibold">&#13217;</span>
                                                </div>
                                            </div>
                                            <div className="text-muted-light">
                                                <Eye size="1rem" className="inline-block" />
                                                <span className="inline-block align-middle ms-1 text-xs font-medium">
                                                    City View
                                                </span>
                                            </div>
                                            <div className="text-muted-light">
                                                <UserRound size="1rem" className="inline-block" />
                                                <span className="inline-block align-middle ms-1 text-xs font-medium">
                                                    2 Guests
                                                </span>
                                            </div>
                                        </div>
                                        <p className="w-5/6 max-w-xs text-muted-light text-xs font-medium my-5 ">
                                            Relax in our Deluxe Room featuring elegant interios and all the essential amenities.
                                        </p>
                                        <Link
                                            href={"/"}
                                            className="text-xs font-semibold text-gold border-b-2 border-b-transparent hover:border-b-gold hover:text-gold-dark"
                                        >
                                            View Details
                                        </Link>
                                    </div>
                                    <div className="flex flex-col items-end justify-center gap-y-5 me-3">
                                        <div className="flex flex-col items-end justify-center">
                                            <h1 className="text-2xl font-semibold">$150</h1>
                                            <div className="block text-xs font-semibold text-muted-light cursor-default">
                                                / night
                                            </div>
                                        </div>
                                        <Link href={"/"}>
                                            <CircleButton className="uppercase text-sm font-medium">View Room</CircleButton>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                    {/* Pages */}
                    <div className="w-full h-full flex items-end justify-center gap-x-2">
                        {/* Back */}
                        <div className="max-h-5 flex items-center justify-center px-2 py-4 bg-bg-light border border-border-dark/10 rounded-sm text-ink cursor-pointer hover:border-gold hover:bg-gold hover:text-white">
                            <ChevronLeft size={"1rem"} />
                        </div>
                        {/* Page No */}
                        <div className="flex gap-x-1">
                            <div className="w-10 h-5 flex items-center justify-center p-4 bg-bg-light border border-border-dark/10 rounded-sm text-ink cursor-pointer hover:border-gold hover:bg-gold hover:text-white">
                                <span>1</span>
                            </div>
                            <div className="w-10 h-5 flex items-center justify-center p-4 bg-bg-light border border-border-dark/10 rounded-sm text-ink cursor-pointer hover:border-gold hover:bg-gold hover:text-white">
                                <span>2</span>
                            </div>
                            <div className="w-10 h-5 flex items-center justify-center p-4 bg-bg-light border border-border-dark/10 rounded-sm text-ink cursor-pointer hover:border-gold hover:bg-gold hover:text-white">
                                <span>3</span>
                            </div>
                            <div className="w-10 h-5 flex items-center justify-center p-4 bg-bg-light border border-border-dark/10 rounded-sm text-ink cursor-default select-none hover:border-gold hover:bg-gold hover:text-white">
                                <span>...</span>
                            </div>
                            <div className="w-10 h-5 flex items-center justify-center p-4 bg-bg-light border border-border-dark/10 rounded-sm text-ink cursor-pointer hover:border-gold hover:bg-gold hover:text-white">
                                <span>10</span>
                            </div>
                        </div>
                        {/* Forward */}
                        <div className="max-h-5 flex items-center justify-center px-2 py-4 bg-bg-light border border-border-dark/10 rounded-sm text-ink cursor-pointer hover:border-gold hover:bg-gold hover:text-white">
                            <ChevronRight size={"1rem"} />
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}

export default RoomsPage;
