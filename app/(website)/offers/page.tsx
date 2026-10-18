import { CardMessage } from "@/app/components/core/CardNotice";
import { CardRoomOffer } from "@/app/components/core/CardRoom";
import { ButtonMask } from "@/app/components/misc/Button";
import TopLayout from "@/app/components/TopLayout";
import { BadgePercent, CalendarCheck, Gift, MoveLeft, MoveRight, Percent } from "lucide-react";
import Link from "next/link";

export default function OffersPage() {
    const validUntil = new Date();
    validUntil.setDate(validUntil.getDate() + 1);

    return (
        <div className="w-full flex flex-col items-center justify-center">
            <TopLayout
                imgUrl="/img/hero2.png"
                title="Exclusive Offers for Your Perfect Stay"
                description="Discover our handpicked offers and enjoy exceptional experiences, greater comfort and more value during your stay."
            >
                <div className="flex items-center gap-2">
                    <Percent size={"1rem"} />
                    <span className="text-sm">Special Offers</span>
                </div>
            </TopLayout>

            <div className="w-full">
                <div className="w-full grid grid-cols-1 xl:grid-cols-2 items-center gap-2 px-5 py-5 lg:px-10 xl:px-15 2xl:px-20">
                    <CardMessage
                        title="Plan Your Perfect Getaway"
                        description="Find the ideal offer for your next visit, whether you're planning a quick escape or an extended retreat filled with comfort and relaxation."
                    >
                        <CalendarCheck size={"1.5rem"} />
                    </CardMessage>
                    <CardMessage
                        title="More Value for Your Stay"
                        description="Make the most of your visit with carefully selected offers that bring together exceptional comfort, thoughtful extras, and memorable experiences."
                    >
                        <BadgePercent size={"1.5rem"} />
                    </CardMessage>
                </div>
                <div className="w-full space-y-5 bg-cream-dark border-y border-y-border-gray px-5 py-10 lg:px-10 xl:px-15 2xl:px-20">
                    {/* Header */}
                    <div className="space-y-4 text-gray-600">
                        <div className="text-gold text-sm font-medium tracking-widest uppercase cursor-default">
                            Limited Time
                        </div>
                        <h1 className="text-5xl font-semibold tracking-wide">Current Offers</h1>
                        <p className="max-w-120 text-sm">
                            Take advantage of our special packages and seasonal promotions crafted to make your stay even more
                            memorable.
                        </p>
                    </div>
                    {/* Sections */}
                    <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-5">
                        {[0, 1, 2, 3, 4, 5].map((i, index) => (
                            <div key={i}>
                                <CardRoomOffer imageUrl="/img/tmp2.png" tag={i < 2 ? "Summer Special" : null} />
                            </div>
                        ))}
                    </div>
                    <div className="w-full flex items-center justify-center gap-5 pt-5">
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
                <div className="w-full relative inset-0 flex py-10">
                    <div className="w-full max-w-350 mt-auto mx-auto flex flex-col sm:flex-row items-center justify-between max-sm:gap-5 p-10 bg-cream border border-border-gray shadow-xl rounded-xl">
                        <div className="flex flex-col min-[320px]:flex-row items-center gap-1 min-[320px]:gap-5 cursor-default">
                            <Gift size={"2rem"} className="text-gold" />
                            <div className="*:block">
                                <h1 className="text-lg font-medium">Have a Special Requests?</h1>
                                <span className="text-sm text-neutral-500">
                                    Contact us and let us create a personalized offer just for you.
                                </span>
                            </div>
                        </div>
                        <Link href="/contact" className="w-full sm:w-45">
                            <ButtonMask width="btn-w-full" className="h-11 flex items-center justify-center gap-1">
                                <span>Contact Us</span>
                                <MoveRight size={"1.25rem"} />
                            </ButtonMask>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}
