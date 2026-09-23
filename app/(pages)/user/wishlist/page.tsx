import { Button } from "@/app/components/misc/Button";
import { Eye, Heart, HeartIcon, SquareM, UserRound } from "lucide-react";
import Link from "next/link";

export default function WishlistPage() {
    return (
        <div className="w-full space-y-5">
            <div className="w-fit">
                <div className="relative block text-lg font-medium tracking-wide group cursor-pointer">
                    <span>My Wishlist</span>
                    <div className="absolute bottom-0 w-0 group-hover:w-full h-0.5 bg-gold-light transition-all duration-300 ease-in" />
                </div>
            </div>

            <div className="w-full space-y-5">
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
                            </div>
                            <div className="lg:flex flex-col items-center justify-center space-y-5 me-5">
                                <h1 className="text-gold text-xl font-semibold">
                                    $200 <span className="text-sm text-muted font-medium">/ night</span>
                                </h1>
                                <Link href={"/rooms/test"}>
                                    <Button className="uppercase text-sm font-medium">View Room</Button>
                                </Link>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
