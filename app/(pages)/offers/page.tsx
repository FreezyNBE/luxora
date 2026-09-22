import { Button, CircleButton } from "@/app/components/misc/Button";
import { Calendar, Clock, Eye, SquareM, UserRound } from "lucide-react";
import Link from "next/link";

export default function OffersPage() {
    const validUntil = new Date();
    validUntil.setDate(validUntil.getDate() + 1);

    return (
        <div className="w-full space-y-10">
            {/* Top */}
            <div className="relative w-full h-50">
                <img src="/img/hero2.png" alt="Tmp2" className="w-full h-full object-cover" />

                <div className="absolute inset-0 bg-black/60" />
                <div className="absolute inset-0 w-full h-full text-white">
                    <div className="h-full flex flex-col items-center justify-center gap-y-3">
                        <h1 className="text-5xl tracking-wide font-semibold">Special Offers</h1>
                        <span className="text-sm">Exclusive deals for unforgettable stays.</span>
                    </div>
                </div>
            </div>

            {/* Filters */}
            <div className="w-full flex flex-wrap items-center justify-center gap-4">
                <div className="w-50 py-1 bg-gold-dark border border-transparent font-medium text-sm tracking-wide text-center text-white rounded-xs cursor-pointer hover:bg-black hover:border-transparent hover:text-white transition-all duration-75 ease-in">
                    <span>All Offers</span>
                </div>
                <div className="w-50 py-1 bg-cream-soft border border-border-dark/10 font-medium text-sm tracking-wide text-center text-ink rounded-xs cursor-pointer hover:bg-black hover:border-transparent hover:text-white transition-all duration-75 ease-in">
                    <span>Room Offers</span>
                </div>
                <div className="w-50 py-1 bg-cream-soft border border-border-dark/10 font-medium text-sm tracking-wide text-center text-ink rounded-xs cursor-pointer hover:bg-black hover:border-transparent hover:text-white transition-all duration-75 ease-in">
                    <span>Seasonal Offers</span>
                </div>
                <div className="w-50 py-1 bg-cream-soft border border-border-dark/10 font-medium text-sm tracking-wide text-center text-ink rounded-xs cursor-pointer hover:bg-black hover:border-transparent hover:text-white transition-all duration-75 ease-in">
                    <span>Packages</span>
                </div>
            </div>

            {/* Sections */}
            <div className="pb-10 px-5 lg:px-20 w-full flex flex-col items-center justify-center gap-5">
                {[0, 1, 2, 3, 4, 5].map((i, index) => (
                    <div
                        key={index}
                        className="w-full max-w-400 flex flex-col lg:flex-row h-full border border-border-light shadow-lg rounded-lg overflow-hidden"
                    >
                        <img
                            src="/img/tmp2.png"
                            alt={`Deluxe Room`}
                            className="w-full lg:w-65 max-lg:max-h-30 h-auto object-cover"
                        />
                        <div className="w-full flex flex-col lg:flex-row gap-y-3 lg:gap-y-0 lg:ms-5 py-2 ps-2 lg:ps-0">
                            <div className="w-full flex flex-col items-start justify-center">
                                <h1 className="text-2xl font-semibold">Weekend Getaway</h1>
                                <p className="w-5/6 max-w-xs text-muted-light text-xs font-medium my-5 ">
                                    Enjoy up to 20% OFF on all room types for stays over the weekend.
                                </p>
                                <div className="flex flex-col sm:flex-row gap-x-8 mt-1">
                                    <div className="text-muted-light">
                                        <Clock size="1rem" className="inline-block" />
                                        <span className="inline-block align-middle ms-1 text-xs font-medium">
                                            2 Days / 1 Night
                                        </span>
                                    </div>
                                    <div className="text-muted-light">
                                        <Calendar size="1rem" className="inline-block" />
                                        <span className="inline-block align-middle ms-1 text-xs font-medium">
                                            Valid Until {validUntil.toLocaleString()}
                                        </span>
                                    </div>
                                </div>
                            </div>
                            <div className="lg:flex flex-col items-center justify-center space-y-5 me-5">
                                <h1 className="text-gold text-xl font-semibold">20% OFF</h1>
                                <Link href={"/rooms/test"}>
                                    <Button className="uppercase text-sm font-medium">View Details</Button>
                                </Link>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
