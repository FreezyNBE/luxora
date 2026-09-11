import ImageSlider from "@/app/components/core/ImageSlider";
import { Button, ButtonOutline } from "@/app/components/misc/Button";
import {
    AlarmClock,
    BadgeCheck,
    BookmarkCheck,
    BrickWallShield,
    Coffee,
    Eye,
    Fan,
    GlassWater,
    Heart,
    Joystick,
    ShieldCheck,
    SquareM,
    SquarePen,
    Toilet,
    TvMinimal,
    UserRound,
    Wifi,
    Wind,
} from "lucide-react";

export default function RoomPage() {
    return (
        <div className="w-full flex flex-col 2xl:flex-row gap-5 py-2 overflow-hidden">
            {/* Content Left */}
            <div className="flex flex-col">
                {/* Sliding images */}
                <div className="w-full h-full flex flex-col items-center justify-center 2xl:flex-row gap-x-3 overflow-hidden">
                    {/* Big image sliding */}
                    <ImageSlider />

                    {/* Small images top-bottom */}
                    <div className="h-full mt-2 2xl:mt-0">
                        <div className="w-[calc((100%-16px)/3)] 2xl:w-80 h-full flex 2xl:flex-col gap-2">
                            <img src="/img/hero.png" alt="" className="w-full h-full object-cover rounded-lg" />
                            <img src="/img/hero.png" alt="" className="w-full h-full object-cover rounded-lg" />
                            <img src="/img/hero.png" alt="" className="w-full h-full object-cover rounded-lg" />
                        </div>
                    </div>
                </div>

                {/* Informations */}
                <div className="pt-8">
                    <div className="flex flex-col xl:flex-row gap-5">
                        <div className="w-full max-w-4xl">
                            {/* About current item */}
                            <div className="space-y-3">
                                <h1 className="text-3xl font-medium">About This Room</h1>
                                <p className="w-full max-w-xl md:max-w-3xl xl:max-w-4xl text-under text-sm">
                                    Our Deluxe Room offers the perfect blend of comfort and style. Enjoy modern decor, a plush
                                    king-size bed, a spacious work area, and a luxurious bathroom with premium toiletries. Ideal
                                    for both business and leisure travelers.
                                </p>
                            </div>

                            {/* Amenities */}
                            <div className="w-full border-t-2 border-t-border-light mt-5">
                                <div className="space-y-3 pt-5">
                                    <h1 className="text-3xl font-medium">About This Room</h1>
                                    <div className="flex items-center gap-2 3xl:gap-4 flex-wrap">
                                        <div className="w-full sm:w-fit sm:flex-3/8 md:flex-4/10 2xl:flex-3/10 space-x-2 text-sm font-medium">
                                            <Wifi className="inline-block text-gold" />
                                            <span className="inline-block align-middle">Free Wi-Fi</span>
                                        </div>
                                        <div className="w-full sm:w-fit sm:flex-3/8 md:flex-4/10 2xl:flex-3/10 space-x-2 text-sm font-medium">
                                            <Fan className="inline-block text-gold" />
                                            <span className="inline-block align-middle">Air Conditioning</span>
                                        </div>
                                        <div className="w-full sm:w-fit sm:flex-3/8 md:flex-4/10 2xl:flex-3/10 space-x-2 text-sm font-medium">
                                            <TvMinimal className="inline-block text-gold" />
                                            <span className="inline-block align-middle">Flat Screen TV</span>
                                        </div>
                                        <div className="w-full sm:w-fit sm:flex-3/8 md:flex-4/10 2xl:flex-3/10 space-x-2 text-sm font-medium">
                                            <GlassWater className="inline-block text-gold" />
                                            <span className="inline-block align-middle">Mini Bar</span>
                                        </div>
                                        <div className="w-full sm:w-fit sm:flex-3/8 md:flex-4/10 2xl:flex-3/10 space-x-2 text-sm font-medium">
                                            <Coffee className="inline-block text-gold" />
                                            <span className="inline-block align-middle">Coffee Maker</span>
                                        </div>
                                        <div className="w-full sm:w-fit sm:flex-3/8 md:flex-4/10 2xl:flex-3/10 space-x-2 text-sm font-medium">
                                            <BrickWallShield className="inline-block text-gold" />
                                            <span className="inline-block align-middle">In-room Safe</span>
                                        </div>
                                        <div className="w-full sm:w-fit sm:flex-3/8 md:flex-4/10 2xl:flex-3/10 space-x-2 text-sm font-medium">
                                            <Joystick className="inline-block text-gold" />
                                            <span className="inline-block align-middle">Work Desk</span>
                                        </div>
                                        <div className="w-full sm:w-fit sm:flex-3/8 md:flex-4/10 2xl:flex-3/10 space-x-2 text-sm font-medium">
                                            <Toilet className="inline-block text-gold" />
                                            <span className="inline-block align-middle">Premium Toiletries</span>
                                        </div>
                                        <div className="w-full sm:w-fit sm:flex-3/8 md:flex-4/10 2xl:flex-3/10 space-x-2 text-sm font-medium">
                                            <Wind className="inline-block text-gold" />
                                            <span className="inline-block align-middle">Hair Dryer</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="w-full bg-cream-soft border border-border-light shadow-xs rounded-lg flex flex-col justify-center gap-y-10 xl:gap-y-15 p-5 lg:p-8 xl:p-10">
                            <div className="flex items-center gap-2">
                                <div className="w-fit h-fit p-2 border-2 border-border-light rounded-full">
                                    <AlarmClock size={"2rem"} className="text-gold" />
                                </div>
                                <div className="w-full max-w-sm">
                                    <h1 className="text-xl font-medium text-ink">Free cancellation</h1>
                                    <p className="text-xs font-medium text-heading">
                                        Cancel up to 24 hours before check-in for a full refund.
                                    </p>
                                </div>
                            </div>
                            <div className="flex items-center gap-2">
                                <div className="w-fit h-fit p-2 border-2 border-border-light rounded-full">
                                    <SquarePen size={"2rem"} className="text-gold" />
                                </div>
                                <div className="w-full max-w-sm truncate">
                                    <h1 className="text-xl font-medium text-ink">Flexible Booking</h1>
                                    <p className="text-xs font-medium text-heading">
                                        Change your dates anytime subject to availability.
                                    </p>
                                </div>
                            </div>
                            <div className="flex items-center gap-2">
                                <div className="w-fit h-fit p-2 border-2 border-border-light rounded-full">
                                    <BadgeCheck size={"2rem"} className="text-gold" />
                                </div>
                                <div className="w-full max-w-sm truncate">
                                    <h1 className="text-xl font-medium text-ink">Instant Confirmation</h1>
                                    <p className="text-xs font-medium text-heading">
                                        Book now and receive instant confirmation.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Content Right */}
            <div className="w-full 2xl:max-w-sm">
                <div className="border border-border-light shadow-lg rounded-lg p-6">
                    <section className="w-full flex flex-col items-start justify-center">
                        <h1 className="text-2xl font-semibold">Deluxe Room</h1>
                        <div className="flex flex-col 2xl:flex-row gap-x-8 gap-y-2 mt-1">
                            <div className="text-muted-light">
                                <SquareM size="1rem" className="inline-block" />
                                <div className="inline-block align-middle ms-1 text-xs font-medium">
                                    28 <span className="font-semibold">&#13217;</span>
                                </div>
                            </div>
                            <div className="text-muted-light">
                                <Eye size="1rem" className="inline-block" />
                                <span className="inline-block align-middle ms-1 text-xs font-medium">City View</span>
                            </div>
                            <div className="text-muted-light">
                                <UserRound size="1rem" className="inline-block" />
                                <span className="inline-block align-middle ms-1 text-xs font-medium">2 Guests</span>
                            </div>
                        </div>
                        <p className="w-full xl:max-w-xs text-muted-light text-xs font-medium my-5 ">
                            Relax in our Deluxe Room featuring elegant interios and all the essential amenities.
                        </p>
                    </section>

                    <div className="w-full h-0.5 bg-border-light" />

                    <div className="py-4 space-y-5">
                        <div className="flex items-center justify-between">
                            <h1 className="text-3xl font-semibold">$150</h1>
                            <span className="text-xs font-semibold text-muted-light cursor-default">/ night</span>
                        </div>

                        <div className="py-2 space-y-4">
                            <div className="text-sm text-muted font-semibold">
                                <label htmlFor="checkin" className="text-muted-light uppercase text-xs">
                                    Check-In
                                </label>
                                <input
                                    type="date"
                                    name="checkin"
                                    id="checkin"
                                    className="w-full border border-border-light px-8 py-2 mt-1"
                                />
                            </div>
                            <div className="text-sm text-muted font-semibold">
                                <label htmlFor="checkin" className="text-muted-light uppercase text-xs">
                                    Check-Out
                                </label>
                                <input
                                    type="date"
                                    name="checkin"
                                    id="checkin"
                                    className="w-full border border-border-light px-8 py-2 mt-1"
                                />
                            </div>
                            <div className="text-sm text-muted font-semibold">
                                <span className="text-muted-light uppercase text-xs">Guests</span>
                                <div className="space-x-1 text-sm border border-border-light rounded-md px-6 py-2 mt-1">
                                    <select
                                        name="guests"
                                        id="guests"
                                        defaultValue={"one person"}
                                        className="w-[calc(100%-(0.25rem*2))] outline-none"
                                    >
                                        <option value="recommanded">one person</option>
                                        <option value="recommanded">two persons</option>
                                        <option value="recommanded">three or more persons</option>
                                    </select>
                                </div>
                            </div>
                        </div>

                        <Button className="w-full uppercase flex items-center justify-center gap-x-2 text-sm">
                            <BookmarkCheck />
                            <span className="font-semibold">Book this room</span>
                        </Button>
                        <ButtonOutline className="w-full uppercase flex items-center justify-center gap-x-2 text-sm">
                            <Heart />
                            <span>Save to wishlist</span>
                        </ButtonOutline>
                    </div>

                    <div className="w-full h-0.5 bg-border-light" />

                    <div className="w-full pt-4 flex items-center gap-2">
                        <ShieldCheck className="text-muted" />
                        <div>
                            <span className="block font-semibold text-sm text-muted">Best Price Guarantee</span>
                            <span className="block font-medium text-xs text-muted-light">
                                You won't find a better price anywhere else.
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
