import { CalendarFold, Eye, MoveRight, SquareKanban, Tag, Users } from "lucide-react";
import Link from "next/link";
import { Button } from "../misc/Button";

export function CardRoomHigh({ room, imageUrl, showDesc = false }: { room: number; imageUrl: string; showDesc?: boolean }) {
    return (
        <div className="relative w-full h-fit border border-border-gray shadow-xl rounded-xl overflow-hidden group">
            {room < 2 && (
                <div className="absolute top-3 left-3 z-2">
                    <span className="px-3.5 py-1 text-xs bg-orange-100/85 text-gray-800 font-medium tracking-wide hover:bg-cream-dark rounded-full cursor-pointer transition-colors duration-100">
                        {(room + 1) % 2 ? "Best Value" : "Popular"}
                    </span>
                </div>
            )}
            <Link href={`/rooms/${room}`} className="relative h-full max-h-50">
                <img src={imageUrl} alt={`Deluxe Room`} className="w-full h-full max-h-50 overflow-hidden object-cover" />
                <div
                    className="opacity-0 group-hover:opacity-100 absolute inset-0 transition-all duration-300 ease-in"
                    style={{
                        background:
                            "linear-gradient(90deg, rgba(255, 255, 255, 0.10) 0%, rgba(255, 255, 255, 0.10) 100%, rgba(255, 255, 255, 0.10) 35%, transparent 82%)",
                    }}
                />
            </Link>
            <div className="p-4 space-y-2">
                <div className="w-fit hover:text-gold transition-colors duration-100">
                    <Link href={`/rooms/${room}`}>
                        <h1 className="text-xl font-medium">Standard Room</h1>
                    </Link>
                </div>
                <div className="flex flex-col min-[400px]:flex-row items-start min-[400px]:items-center gap-3 min-[400px]:gap-6 md:gap-4 xl:gap-6 text-xs text-neutral-700 font-medium">
                    <div className="flex items-center gap-2">
                        <Users size={"1.25rem"} />
                        <span>2 Guests</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <Eye size={"1.25rem"} />
                        <span>Ocean View</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <SquareKanban size={"1.25rem"} />
                        <span>36 m&sup2;</span>
                    </div>
                </div>
                {showDesc && (
                    <div className="max-md:max-w-125 text-xs text-neutral-700 tracking-wide py-2">
                        A comfortable and stylish room with modern amenities and a relaxing atmosphere. Perfect for couples or
                        solo travelers.
                    </div>
                )}
                <div className="w-full flex flex-col min-[400px]:flex-row items-start min-[400px]:justify-between gap-2 pt-5">
                    <div className="w-full space-x-1">
                        <div className="inline-block text-xl font-medium">$120</div>
                        <div className="inline-block text-xs font-medium tracking-wide"> / night</div>
                    </div>
                    <Link href={`/rooms/${room}`} className="max-[400px]:w-full">
                        <Button className="max-[400px]:w-full h-10 flex items-center justify-center gap-2">
                            <span className="text-xs">View Details</span>
                            <MoveRight size={"1.25rem"} />
                        </Button>
                    </Link>
                </div>
            </div>
        </div>
    );
}

export function CardRoomMin({ room, imageUrl, showDesc = false }: { room: number; imageUrl: string; showDesc?: boolean }) {
    return (
        <div className="relative w-full border border-border-gray shadow-xl rounded-xl overflow-hidden group">
            {room < 2 && (
                <div className="absolute top-3 left-3 z-2">
                    <span className="px-3.5 py-1 text-xs bg-orange-100/85 text-gray-800 font-medium tracking-wide hover:bg-cream-dark rounded-full cursor-pointer transition-colors duration-100">
                        {(room + 1) % 2 ? "Best Value" : "Popular"}
                    </span>
                </div>
            )}
            <Link href={`/rooms/${room}`} className="block relative w-full h-auto aspect-video max-h-50 overflow-hidden">
                <img src={imageUrl} alt={`Deluxe Room`} className="w-full overflow-hidden object-cover" />
                <div
                    className="opacity-0 group-hover:opacity-100 absolute inset-0 transition-all duration-300 ease-in"
                    style={{
                        background:
                            "linear-gradient(90deg, rgba(255, 255, 255, 0.10) 0%, rgba(255, 255, 255, 0.10) 100%, rgba(255, 255, 255, 0.10) 35%, transparent 82%)",
                    }}
                />
            </Link>
            <div className="p-4 space-y-2">
                <div className="w-fit hover:text-gold transition-colors duration-100">
                    <Link href={`/rooms/${room}`}>
                        <h1 className="text-xl font-medium">Standard Room</h1>
                    </Link>
                </div>
                <div className="flex flex-col min-[400px]:flex-row items-start min-[400px]:items-center gap-3 min-[400px]:gap-6 md:gap-4 xl:gap-6 text-xs text-neutral-700 font-medium">
                    <div className="flex items-center gap-2">
                        <Users size={"1.25rem"} />
                        <span>2 Guests</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <Eye size={"1.25rem"} />
                        <span>Ocean View</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <SquareKanban size={"1.25rem"} />
                        <span>36 m&sup2;</span>
                    </div>
                </div>
                {showDesc && (
                    <div className="max-md:max-w-125 text-xs text-neutral-700 tracking-wide py-2">
                        A comfortable and stylish room with modern amenities and a relaxing atmosphere. Perfect for couples or
                        solo travelers.
                    </div>
                )}
                <div className="w-full flex flex-col min-[400px]:flex-row items-start min-[400px]:justify-between gap-2 pt-5">
                    <div className="w-full space-x-1">
                        <div className="inline-block text-xl font-medium">$120</div>
                        <div className="inline-block text-xs font-medium tracking-wide"> / night</div>
                    </div>
                    <Link href={`/rooms/${room}`} className="max-[400px]:w-full">
                        <Button className="max-[400px]:w-full h-10 flex items-center justify-center gap-2">
                            <span className="text-xs">View Details</span>
                            <MoveRight size={"1.25rem"} />
                        </Button>
                    </Link>
                </div>
            </div>
        </div>
    );
}

export function CardRoomSimple({ imageUrl }: { imageUrl: string }) {
    return (
        <div className="relative w-full rounded-xl rounded-t-none overflow-hidden group">
            <Link href="/rooms/1" className="relative">
                {/* <img aspect-video /> */}
                <img src={imageUrl} alt={`Room Card`} className="w-full overflow-hidden object-cover" />
                <div
                    className="opacity-0 group-hover:opacity-100 absolute inset-0 transition-all duration-300 ease-in"
                    style={{
                        background:
                            "linear-gradient(90deg, rgba(255, 255, 255, 0.10) 0%, rgba(255, 255, 255, 0.10) 100%, rgba(255, 255, 255, 0.10) 35%, transparent 82%)",
                    }}
                />
            </Link>
            <div className="p-4 space-y-2">
                <div className="w-fit hover:text-gold transition-colors duration-100">
                    <Link href="/rooms/1">
                        <h1 className="text-xl font-medium">Deluxe Ocean View Room</h1>
                    </Link>
                </div>
                <div className="flex items-center gap-6 md:gap-4 xl:gap-6 text-xs font-medium text-neutral-700">
                    <div className="flex items-center gap-2">
                        <Users size={"1.25rem"} />
                        <span>2 Guests</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <Eye size={"1.25rem"} />
                        <span>Ocean View</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <SquareKanban size={"1.25rem"} />
                        <span>36 m&sup2;</span>
                    </div>
                </div>
                <div className="max-md:max-w-125 text-xs tracking-wide pt-2">
                    A comfortable and stylish room with modern amenities and a relaxing atmosphere. Perfect for couples or solo
                    travelers.
                </div>
            </div>
        </div>
    );
}

export function CardRoomOffer({ imageUrl, tag = null }: { imageUrl: string; tag?: string | null }) {
    return (
        <div className="relative w-full border border-border-gray shadow-xl rounded-xl overflow-hidden group">
            {tag && (
                <div className="absolute top-3 left-3 z-2">
                    <span className="px-3.5 py-1 text-xs bg-orange-100/85 text-gray-800 font-medium tracking-wide hover:bg-cream-dark rounded-full cursor-pointer transition-colors duration-100">
                        {tag}
                    </span>
                </div>
            )}
            <Link href={`/rooms/1`} className="relative">
                <img src={imageUrl} alt={`Deluxe Room`} className="w-full aspect-video overflow-hidden object-cover" />
                <div
                    className="opacity-0 group-hover:opacity-100 absolute inset-0 transition-all duration-300 ease-in"
                    style={{
                        background:
                            "linear-gradient(90deg, rgba(255, 255, 255, 0.10) 0%, rgba(255, 255, 255, 0.10) 100%, rgba(255, 255, 255, 0.10) 35%, transparent 82%)",
                    }}
                />
            </Link>
            <div className="p-4 space-y-2">
                <div className="w-fit hover:text-gold transition-colors duration-100">
                    <Link href={`/rooms/1`}>
                        <h1 className="text-xl font-medium">Summer Escape</h1>
                    </Link>
                </div>
                <div className="space-y-2 text-xs text-heading/80 font-medium">
                    <div className="flex items-center gap-2">
                        <CalendarFold size={"1.25rem"} />
                        <span>Valid until Apr 30, 2026</span>
                    </div>
                    <div className="max-w-72 flex items-start gap-2">
                        <Tag size={"1.25rem"} />
                        <span>Includes breakfast &#8226; Free cancellation up to 24h</span>
                    </div>
                </div>
                <div className="w-full flex flex-col min-[400px]:flex-row items-start min-[400px]:justify-between gap-2 pt-5">
                    <div className="w-full space-x-1">
                        <div className="inline-block text-xl font-medium">$299</div>
                        <div className="inline-block text-xs font-medium tracking-wide"> / night</div>
                    </div>
                    <Link href={`/rooms/1`} className="max-[400px]:w-full">
                        <Button className="max-[400px]:w-full h-10 flex items-center justify-center gap-2">
                            <span className="text-xs">View Details</span>
                            <MoveRight size={"1.25rem"} />
                        </Button>
                    </Link>
                </div>
            </div>
        </div>
    );
}
