import { Button } from "@/app/components/misc/Button";
import SliderPriceRange from "@/app/components/misc/SliderPriceRange";
import { CalendarRange, ChevronDown, TextSearch } from "lucide-react";

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

            <div className="p-5">
                {/* Filters */}
                <div className="max-w-64 space-y-5 text-sm">
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
            </div>
        </main>
    );
}

export default RoomsPage;
