"use client";

import ImageSlider from "@/app/components/core/ImageSlider";
import { ButtonMask, ButtonMin } from "@/app/components/misc/Button";
import { useGallery } from "@/app/context/GalleryContext";
import {
    BadgeCheck,
    BrickWallShield,
    CalendarCog,
    CalendarPlus2,
    Coffee,
    Eye,
    Fan,
    Flower,
    GlassWater,
    Heart,
    Joystick,
    MoveRight,
    RefreshCwOff,
    SquareKanban,
    Toilet,
    TvMinimal,
    Users,
    Wifi,
    Wind,
} from "lucide-react";
import Link from "next/link";

export default function RoomPage() {
    const { createGallery } = useGallery();

    const displayGallery = () => {
        createGallery(["/img/hero.png", "/img/img1.jpg", "/img/img2.jpg", "/img/img3.jpg", "/img/img4.jpg", "/img/img5.jpg"]);
    };

    return (
        <div className="w-full pt-4">
            {/* Container Heading */}
            <div className="w-full flex flex-col xl:flex-row items-start gap-2 overflow-hidden">
                {/* Pictures */}
                <div className="w-full 2xl:w-fit flex flex-col lg:flex-row xl:flex-col 2xl:flex-row gap-2">
                    <div className="w-full 2xl:w-250 h-full rounded-xl overflow-hidden">
                        <ImageSlider />
                    </div>
                    <div className="grid grid-cols-2 sm:grid-cols-3 lg:flex lg:flex-col xl:flex-row 2xl:flex-col gap-2">
                        <div className="relative w-full lg:max-w-34 xl:max-w-full 2xl:max-w-34 h-full rounded-lg aspect-video overflow-hidden">
                            <img src="/img/tmp3.png" alt="Img 4" className="w-full h-full object-cover rounded-lg" />
                            <div
                                className="absolute inset-0"
                                style={{
                                    background:
                                        "linear-gradient(90deg, rgba(255, 255, 255, 0.10) 0%, rgba(255, 255, 255, 0.10) 100%, rgba(255, 255, 255, 0.10) 35%, transparent 82%)",
                                }}
                            />
                        </div>
                        <div className="relative w-full lg:max-w-34 xl:max-w-full 2xl:max-w-34 h-full rounded-lg aspect-video overflow-hidden">
                            <img src="/img/hero.png" alt="Img 4" className="w-full h-full object-cover rounded-lg" />
                            <div
                                className="absolute inset-0"
                                style={{
                                    background:
                                        "linear-gradient(90deg, rgba(255, 255, 255, 0.10) 0%, rgba(255, 255, 255, 0.10) 100%, rgba(255, 255, 255, 0.10) 35%, transparent 82%)",
                                }}
                            />
                        </div>
                        <div className="relative w-full lg:max-w-34 xl:max-w-full 2xl:max-w-34 h-full rounded-lg aspect-video overflow-hidden">
                            <img src="/img/hero.png" alt="Img 4" className="w-full h-full object-cover rounded-lg" />
                            <div
                                className="absolute inset-0"
                                style={{
                                    background:
                                        "linear-gradient(90deg, rgba(255, 255, 255, 0.10) 0%, rgba(255, 255, 255, 0.10) 100%, rgba(255, 255, 255, 0.10) 35%, transparent 82%)",
                                }}
                            />
                        </div>
                        <div className="relative w-full lg:max-w-34 xl:max-w-full 2xl:max-w-34 h-full rounded-lg aspect-video overflow-hidden">
                            <img src="/img/img4.jpg" alt="Img 4" className="w-full h-full object-cover rounded-lg" />
                            <div
                                className="absolute inset-0"
                                style={{
                                    background:
                                        "linear-gradient(90deg, rgba(255, 255, 255, 0.10) 0%, rgba(255, 255, 255, 0.10) 100%, rgba(255, 255, 255, 0.10) 35%, transparent 82%)",
                                }}
                            />
                        </div>
                        <div
                            onClick={displayGallery}
                            className="relative w-full lg:max-w-34 xl:max-w-full 2xl:max-w-34 h-full rounded-lg aspect-video cursor-pointer overflow-hidden"
                        >
                            <img src="/img/hero.png" alt="Img 4" className="w-full h-full object-cover rounded-lg" />
                            <div
                                className="absolute inset-0 flex items-center justify-center hover:opacity-90 transition-all duration-100 ease-in"
                                style={{
                                    background:
                                        "linear-gradient(90deg, rgba(0, 0, 0, 0.50) 0%, rgba(0, 0, 0, 0.50) 100%, rgba(0, 0, 0, 0.50) 35%, transparent 82%)",
                                }}
                            >
                                <span className="text-lg text-gray-100 font-medium">More</span>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Details */}
                <div className="w-full lg:max-w-[75%] xl:max-w-140 text-gray-700 overflow-hidden">
                    <div className="p-3 space-y-3">
                        <div className="w-fit px-3.5 py-1 text-xs bg-orange-200/60 text-orange-900 font-medium tracking-wide rounded-full cursor-default">
                            Best Value
                        </div>
                        <div className="w-fit">
                            <h1 className="text-4xl font-medium">Deluxe Ocean View Room</h1>
                        </div>
                        <div className="flex flex-wrap gap-3 md:gap-6 text-xs font-medium">
                            <div className="flex items-center gap-2">
                                <Users size={"1.25rem"} className="text-gold-dark" />
                                <span>2 Guests</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <Eye size={"1.25rem"} className="text-gold-dark" />
                                <span>Ocean View</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <SquareKanban size={"1.25rem"} className="text-gold-dark" />
                                <span>36 m&sup2;</span>
                            </div>
                        </div>
                        <div className="xl:max-w-140 text-sm tracking-wide py-2">
                            Enjoy breathtaking ocean views from the comfort of our Deluxe Ocean View Room. This spacious and
                            elegantly designed room features a king-size bed, a modern sitting area, and a private balcony where
                            you can relax and take in the stunning coastal scenery.
                        </div>
                        <div className="w-full space-y-3 pt-3">
                            <div className="w-full space-x-1">
                                <div className="inline-block text-4xl font-medium text-gray-800">$120</div>
                                <div className="inline-block text-xs font-medium tracking-wide"> / night</div>
                            </div>
                            <div className="font-medium text-xs">Includes breakfast &#8226; Free cancellation up to 24h</div>
                        </div>
                        <div className="w-full space-y-2 pt-5">
                            <ButtonMin width="btn-w-full" className="h-12 flex items-center justify-center gap-2 font-medium">
                                <CalendarPlus2 size={"1.25rem"} />
                                <span>Book Now</span>
                            </ButtonMin>
                            <ButtonMask width="btn-w-full" className="h-12 flex items-center justify-center gap-2 font-medium">
                                <Heart size={"1.25rem"} />
                                <span>Add to Wishlist</span>
                            </ButtonMask>
                        </div>
                    </div>
                </div>
            </div>
            <div className="w-full mt-5 pt-5 border-t border-t-border-light">
                <div className="w-full flex flex-col xl:flex-row items-center gap-10 xl:gap-5">
                    <div className="w-full space-y-8">
                        <h1 className="text-3xl font-medium">Room Amenities</h1>
                        <div className="w-full grid grid-cols-1 md:grid-cols-3 items-center gap-4">
                            <div className="text-sm">
                                <Wifi className="inline-block text-gold" />
                                <span className="inline-block align-middle ms-3 text-heading font-medium">Free Wi-Fi</span>
                            </div>
                            <div className="text-sm">
                                <Fan size={"1.25rem"} className="inline-block text-gold" />
                                <span className="inline-block align-middle ms-3 text-heading font-medium">
                                    Air Conditioning
                                </span>
                            </div>
                            <div className="text-sm">
                                <TvMinimal size={"1.25rem"} className="inline-block text-gold" />
                                <span className="inline-block align-middle ms-3 text-heading font-medium">Flat Screen TV</span>
                            </div>
                            <div className="text-sm">
                                <GlassWater size={"1.25rem"} className="inline-block text-gold" />
                                <span className="inline-block align-middle ms-3 text-heading font-medium">Mini Bar</span>
                            </div>
                            <div className="text-sm">
                                <Coffee size={"1.25rem"} className="inline-block text-gold" />
                                <span className="inline-block align-middle ms-3 text-heading font-medium">Coffee Maker</span>
                            </div>
                            <div className="text-sm">
                                <BrickWallShield size={"1.25rem"} className="inline-block text-gold" />
                                <span className="inline-block align-middle ms-3 text-heading font-medium">In-room Safe</span>
                            </div>
                            <div className="text-sm">
                                <Joystick size={"1.25rem"} className="inline-block text-gold" />
                                <span className="inline-block align-middle ms-3 text-heading font-medium">Work Desk</span>
                            </div>
                            <div className="text-sm">
                                <Toilet size={"1.25rem"} className="inline-block text-gold" />
                                <span className="inline-block align-middle ms-3 text-heading font-medium">
                                    Premium Toiletries
                                </span>
                            </div>
                            <div className="text-sm">
                                <Wind size={"1.25rem"} className="inline-block text-gold" />
                                <span className="inline-block align-middle ms-3 text-heading font-medium">Hair Dryer</span>
                            </div>
                        </div>
                    </div>
                    <div className="w-full">
                        <div className="w-full flex flex-col sm:flex-row items-center justify-between max-sm:gap-5 p-4 bg-cream-dark border border-border-gray rounded-lg">
                            <div className="flex flex-col min-[320px]:flex-row items-center gap-1 min-[320px]:gap-5 cursor-default">
                                <Flower size={"1.7rem"} className="text-gold" />
                                <div className="*:block">
                                    <h1 className="text-lg md:text-xl font-medium">Need a different room type?</h1>
                                    <span className="text-sm md:text-xs text-gray-500">
                                        Explore our other rooms and fine the perfect fit for your stay.
                                    </span>
                                </div>
                            </div>
                            <Link href="/rooms" className="w-full sm:w-45">
                                <ButtonMask width="btn-w-full" className="h-11 flex items-center justify-center gap-1">
                                    <span>View All Rooms</span>
                                    <MoveRight size={"1.25rem"} />
                                </ButtonMask>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
            <div className="w-full mt-5 pt-5 border-t border-t-border-light">
                <div className="w-full flex flex-col xl:flex-row bg-cream-dark border border-gold/10 rounded-lg overflow-hidden">
                    <div className="w-full h-full flex flex-col min-[320px]:flex-row items-start md:items-center justify-start gap-4 p-10 border-b border-b-black/10 xl:border-b-transparent">
                        <div className="w-fit h-fit p-2 bg-gold rounded-full">
                            <CalendarCog size={"2rem"} className="text-gray-100" />
                        </div>
                        <div className="w-full max-w-sm">
                            <h1 className="text-xl font-medium text-ink">Flexible Booking</h1>
                            <div className="text-xs font-medium text-gray-800 wrap-break-word">
                                Change your dates anytime subject to availability.
                            </div>
                        </div>
                    </div>
                    <div className="w-full h-full flex flex-col min-[320px]:flex-row items-start md:items-center justify-start gap-4 p-10 border-b border-b-black/10 xl:border-b-transparent">
                        <div className="w-fit h-fit p-2 bg-gold rounded-full">
                            <BadgeCheck size={"2rem"} className="text-gray-100" />
                        </div>
                        <div className="w-full max-w-sm">
                            <h1 className="text-xl font-medium text-ink">Instant Confirmation</h1>
                            <div className="text-xs font-medium text-gray-800 wrap-break-word">
                                Book now and receive instant confirmation.
                            </div>
                        </div>
                    </div>
                    <div className="w-full h-full flex flex-col min-[320px]:flex-row items-start md:items-center justify-start gap-4 p-10">
                        <div className="w-fit h-fit p-2 bg-gold rounded-full">
                            <RefreshCwOff size={"2rem"} className="text-gray-100" />
                        </div>
                        <div className="w-full max-w-sm">
                            <h1 className="text-xl font-medium text-ink">Free cancellation</h1>
                            <div className="text-xs font-medium text-gray-800 wrap-break-word">
                                Cancel up to 24 hours before check-in for a full refund.
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
