import Link from "next/link";
import { Button } from "./components/misc/Button";

export default function Home() {
    return (
        <section className="relative w-full h-300 text-white">
            {/* Background image */}
            <img src="/img/hero.png" alt="Hotel Room" className="absolute inset-0 w-full h-full object-cover" />

            {/* Dark overlay */}
            <div className="absolute inset-0 bg-linear-to-r from-black/20 via-black/30 to-transparent after:absolute after:inset-0 after:bg-linear-to-r after:from-black/30 after:to-transparent" />

            {/* Content */}
            <div className="relative h-2/3 flex items-center ml-5 lg:ml-20 pl-2">
                <div className="max-w-sm lg:max-w-lg space-y-5 cursor-default">
                    <div className="w-3xs text-xs uppercase">
                        Welcome to <span className="text-gold-light">Luxora</span> Hotel
                    </div>

                    <h1 className="text-3xl lg:text-6xl font-semibold leading-9 lg:leading-17">
                        Experience, Comfort, Indulge in Luxury
                    </h1>

                    <p className="w-full max-w-3xs text-sm">Where every stay is a memorable escape tailored just for you.</p>

                    <div className="w-full max-w-50 gap-2 flex items-center">
                        <div className="w-full h-0.5 flex-8 bg-gray-300/80" />
                        <div className="w-full h-0.5 flex-7 bg-gray-300/60" />
                        <div className="w-full h-0.5 flex-5 bg-gray-300/50" />
                        <div className="w-full h-0.5 flex-3 bg-gray-300/40" />
                        <div className="w-full h-0.5 flex-2 bg-gray-300/30" />
                    </div>

                    <Link href={"/"}>
                        <Button className="text-sm uppercase">Book your stay</Button>
                    </Link>
                </div>
            </div>
        </section>
    );
}
