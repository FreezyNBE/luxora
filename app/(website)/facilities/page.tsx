import { CardContainer, CardHeader } from "@/app/components/core/Card";
import { CardNotice } from "@/app/components/core/CardNotice";
import { ButtonMask } from "@/app/components/misc/Button";
import TopLayout from "@/app/components/TopLayout";
import { Flower, Gift, GraduationCap, MoveRight, Spotlight } from "lucide-react";
import Link from "next/link";
import { Fragment } from "react/jsx-runtime";

export default function FacilityPage() {
    const validUntil = new Date();
    validUntil.setDate(validUntil.getDate() + 1);

    return (
        <div className="w-full flex flex-col items-center justify-center gap-y-10 pb-5">
            <TopLayout
                imgUrl="/img/hero2.png"
                title="World-Class Amenities for a Better Stay"
                description="From relaxing in our spa to enjoying fine dining, our facilities are designed to make your stay truly special."
            >
                <div className="flex items-center gap-2">
                    <Spotlight size={"1.25rem"} />
                    <span className="text-sm">Hotel Facilities</span>
                </div>
            </TopLayout>

            <div className="w-full max-w-350 space-y-4 px-5">
                <CardNotice
                    title="Everything You Need"
                    description="Discover a world of comfort, relaxation and entertainment with our premium facilities, designed for your enjoyment."
                >
                    <GraduationCap size={"1.5rem"} />
                </CardNotice>
                <CardContainer>
                    <CardHeader>
                        <div className="flex items-center gap-2">
                            <h1 className="text-xl font-medium text-ink">Our Facilities</h1>
                        </div>
                    </CardHeader>
                    <div className="space-y-4 p-4">
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-5">
                            {[0, 1, 2, 3, 4, 5].map((i) => (
                                <Fragment key={i}>
                                    <div className="w-full max-h-100 flex flex-col border border-border-gray shadow-xl rounded-xl overflow-hidden hover:-translate-y-3 hover:bg-gold-light/30 hover:border-transparent cursor-pointer transition-all duration-300">
                                        <div className="w-full h-full max-h-50 overflow-hidden">
                                            <img
                                                src={i % 2 ? "/img/tmp1.png" : "/img/tmp3.png"}
                                                alt="Tmp1"
                                                className="w-full object-cover"
                                            />
                                        </div>
                                        <div className="px-5 py-5">
                                            <h1 className="text-xl font-semibold tracking-wide">Swimming Pool</h1>
                                            <span className="text-sm text-heading">Outdoor pool with relaxing view.</span>
                                        </div>
                                    </div>
                                    <div className="w-full max-h-100 flex flex-col border border-border-gray shadow-xl rounded-xl overflow-hidden hover:-translate-y-3 hover:bg-gold-light/30 hover:border-transparent cursor-pointer transition-all duration-300">
                                        <div className="w-full h-full max-h-50 overflow-hidden">
                                            <img
                                                src={i % 2 ? "/img/tmp1.png" : "/img/tmp3.png"}
                                                alt="Tmp1"
                                                className="w-full object-cover"
                                            />
                                        </div>
                                        <div className="px-5 py-5">
                                            <h1 className="text-xl font-semibold tracking-wide">Restaurant</h1>
                                            <span className="text-sm text-heading">
                                                Eat delicious local and international food.
                                            </span>
                                        </div>
                                    </div>
                                </Fragment>
                            ))}
                        </div>
                    </div>
                </CardContainer>
                <div className="w-full relative inset-0 flex">
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
