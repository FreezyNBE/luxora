import { CardMessage } from "@/app/components/core/CardNotice";
import { ButtonMask } from "@/app/components/misc/Button";
import TopLayout from "@/app/components/TopLayout";
import { Building2, Car, CirclePile, Dumbbell, Flower, MoveRight, Utensils, Waves } from "lucide-react";
import Link from "next/link";

export default function FacilityPage() {
    return (
        <div className="w-full flex flex-col items-center justify-center">
            <TopLayout
                imgUrl="/img/hero2.png"
                title="World-Class Amenities for a Better Stay"
                description="From relaxing in our spa to enjoying fine dining, our facilities are designed to make your stay truly special."
            >
                <div className="flex items-center gap-2">
                    <Building2 size={"1.25rem"} />
                    <span className="text-sm">Hotel Facilities</span>
                </div>
            </TopLayout>

            <div className="w-full">
                <div className="space-y-5 bg-cream-dark border-b border-b-border-gray px-5 py-10 lg:px-10 xl:px-15 2xl:px-20">
                    <div className="space-y-4 text-gray-600">
                        <div className="text-gold text-sm font-medium tracking-widest uppercase cursor-default">
                            Our Facilities
                        </div>
                        <h1 className="text-5xl font-semibold tracking-wide">Everything You Need</h1>
                        <p className="max-w-120 text-sm">
                            Discover a world of comfort, relaxation and entertainment with our premium facilities, designed for
                            your enjoyment.
                        </p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5">
                        <CardMessage
                            title="Infinity Pool"
                            description="Relax and enjoy breathtaking views from our infinity pool, overloading the coastline."
                        >
                            <Waves size={"2rem"} />
                        </CardMessage>
                        <CardMessage
                            title="Spa & Wellness"
                            description="Rejuvente your mind and body with our spa, sauna and wellness center services."
                        >
                            <Flower size={"2rem"} />
                        </CardMessage>
                        <CardMessage
                            title="Fitness Center"
                            description="Stay active during your stay with our modern fitness center, equipped with top-quality machines."
                        >
                            <Dumbbell size={"2rem"} />
                        </CardMessage>
                        <CardMessage
                            title="Fine Dining"
                            description="Indulge in exquisite cuisine at our signature restaurant, featuring local and international flavors."
                        >
                            <Utensils size={"2rem"} />
                        </CardMessage>
                        <CardMessage
                            title="Meeting & Events"
                            description="Host your events in our elegant meeting rooms and conference halls, with modern facilities and support."
                        >
                            <CirclePile size={"2rem"} />
                        </CardMessage>
                        <CardMessage
                            title="Parking & Valet"
                            description="Convenient and secure parking with valet service available for all our guests."
                        >
                            <Car size={"2rem"} />
                        </CardMessage>
                    </div>
                </div>
                <div className="w-full relative inset-0 flex py-10">
                    <div className="w-full max-w-350 mt-auto mx-auto flex flex-col sm:flex-row items-center justify-between max-sm:gap-5 p-10 bg-cream border border-border-gray shadow-xl rounded-xl">
                        <div className="flex flex-col min-[320px]:flex-row items-center gap-1 min-[320px]:gap-5 cursor-default">
                            <Flower size={"2rem"} className="text-gold" />
                            <div className="*:block">
                                <h1 className="text-lg font-medium">Experience the Luxury</h1>
                                <div className="text-sm text-neutral-500">
                                    More than a stay <span className="text-neutral-400">&#x2014;</span> it's an experience.
                                </div>
                            </div>
                        </div>
                        <Link href="/rooms" className="w-full sm:w-45">
                            <ButtonMask width="btn-w-full" className="h-11 flex items-center justify-center gap-1">
                                <span>Book Your Stay</span>
                                <MoveRight size={"1.25rem"} />
                            </ButtonMask>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}
