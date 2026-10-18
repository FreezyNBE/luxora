import Link from "next/link";
import { Button, ButtonMask, ButtonMin } from "../components/misc/Button";
import {
    Bed,
    BedSingle,
    CalendarRange,
    ChevronDown,
    CircleCheck,
    Gift,
    HeartHandshake,
    Hourglass,
    House,
    Mail,
    MapPin,
    Medal,
    MoveRight,
    Pin,
    Sparkles,
    Star,
    StarCheck,
    Sunset,
    ThumbsUp,
    Trophy,
    Users,
} from "lucide-react";
import Image from "next/image";
import HeroSlider from "../components/core/HeroSlider";
import { CardRoomHigh, CardRoomMin } from "../components/core/CardRoom";
import { CardInfo, CardMessage, CardNotice } from "../components/core/CardNotice";

export default function Home() {
    return (
        <main className="-mt-(--navbar-height)">
            {/* Hero section */}
            <div className="relative w-full h-185 text-white">
                {/* Hero Slider */}
                <div className="absolute inset-0 w-full h-full">
                    <HeroSlider />
                </div>

                {/* Dark overlay */}
                <div className="absolute inset-0 w-[60%] bg-linear-to-r from-black/20 via-black/30 to-transparent after:absolute after:inset-0 after:bg-linear-to-r after:from-black/30 after:to-transparent" />

                {/* Content */}
                <div className="relative h-full flex items-center ms-5 md:ms-10 lg:ms-20 ps-2">
                    <div className="max-w-md lg:max-w-150 space-y-5 cursor-default">
                        <div className="w-3xs text-xs uppercase tracking-widest text-gray-100/70">A Place To Relax</div>

                        <h1 className="text-4xl lg:text-6xl font-medium leading-9 lg:leading-17 tracking-wide">
                            Luxury Stays, Unforgettable Moments
                        </h1>

                        <p className="w-full max-w-110 tracking-wide">
                            Experience the perfect blend of comfort, elegance and exceptional service at Luxora Hotel &#038;
                            Resort.
                        </p>

                        <div className="w-full max-w-50 gap-2 flex items-center">
                            <div className="w-full h-0.5 flex-8 bg-gray-100/80" />
                            <div className="w-full h-0.5 flex-7 bg-gray-100/60" />
                            <div className="w-full h-0.5 flex-5 bg-gray-100/50" />
                            <div className="w-full h-0.5 flex-3 bg-gray-100/40" />
                            <div className="w-full h-0.5 flex-2 bg-gray-100/30" />
                        </div>

                        <Link href={"/"}>
                            <ButtonMin className="h-11 flex items-center justify-center gap-1">
                                <span className="tracking-wide">Discover Our Rooms</span>
                                <MoveRight />
                            </ButtonMin>
                        </Link>
                    </div>
                </div>
            </div>

            {/* Sections */}
            <div className="w-full flex flex-col gap-y-5 py-5">
                <div className="w-full mx-auto px-5 lg:px-10 xl:px-15 2xl:px-20">
                    <div className="w-full grid grid-cols-1 xl:grid-cols-3 items-center gap-2">
                        <CardMessage
                            title="Exceptional Rooms"
                            description="Thoughtfully designed spaces with modern amenities, cozy interios, and comfort in every detail."
                        >
                            <Bed size={"2rem"} />
                        </CardMessage>
                        <CardMessage
                            title="Exclusive Benefits"
                            description="Enjoy special rates, personalized service, and extra perks that make every stay more rewarding."
                        >
                            <Sparkles size={"2rem"} />
                        </CardMessage>
                        <CardMessage
                            title="Service That Cares"
                            description="From seamless check-in to attentive assistance, we make your comfort our priority."
                        >
                            <CalendarRange size={"2rem"} />
                        </CardMessage>
                    </div>
                </div>
                {/* Offers */}
                <div className="relative inset-0 w-full bg-cream-dark border-y border-y-border-gray flex flex-col 2xl:flex-row items-start 2xl:items-start 2xl:justify-between gap-4 px-5 py-10 lg:px-10 xl:px-15 2xl:px-20">
                    <div className="space-y-4 text-gray-600">
                        <div className="text-gold text-sm font-medium tracking-widest uppercase cursor-default">
                            Special Offers
                        </div>
                        <h1 className="text-5xl max-w-110 font-semibold tracking-wide">
                            Exclusive Offers for Your Perfect Stay
                        </h1>
                        <p className="max-w-90 text-sm">
                            Discover our handpicked offers and enjoy exceptional experiences, greater comfort and more value
                            during your stay at Luxora Hotel.
                        </p>
                        <Link href="/offers">
                            <ButtonMin className="flex items-center justify-center gap-1">
                                <span>View All Offers</span>
                                <MoveRight />
                            </ButtonMin>
                        </Link>
                    </div>
                    <div className="w-full 2xl:max-w-300 flex flex-wrap gap-4">
                        <div className="w-full md:flex-1/3 home-flex shrink-0">
                            <CardRoomHigh room={1} imageUrl="/img/hero.png" showDesc={false} />
                        </div>
                        <div className="w-full md:flex-1/3 home-flex shrink-0">
                            <CardRoomHigh room={2} imageUrl="/img/hero2.png" showDesc={false} />
                        </div>
                        <div className="w-full md:flex-1/3 home-flex shrink-0">
                            <CardRoomHigh room={3} imageUrl="/img/hero2.png" showDesc={false} />
                        </div>
                    </div>
                </div>
                {/* Most Popular Rooms */}
                <div className="w-full flex flex-col items-start gap-y-5 px-5 py-5 lg:px-10 xl:px-15 2xl:px-20">
                    <div className="w-full flex flex-col md:flex-row items-start md:items-center md:justify-between gap-4">
                        <div className="space-y-4 text-gray-600">
                            <div className="text-gold text-sm font-medium tracking-widest uppercase cursor-default">
                                Featured Rooms
                            </div>
                            <h1 className="text-5xl max-w-150 font-semibold tracking-wide">Our Most Popular Rooms</h1>
                            <p className="max-w-90 text-sm">
                                Discover our handpicked selection of rooms, designed for your ultimate comfort and relaxation.
                            </p>
                        </div>
                        <div>
                            <Link
                                href="/rooms"
                                className="flex items-center justify-center gap-1 text-gold hover:text-gold-dark transition-colors duration-100"
                            >
                                <span className="text-sm">View All Rooms</span>
                                <MoveRight size={"1.25rem"} />
                            </Link>
                        </div>
                    </div>
                    <div className="w-full grid md:grid-cols-2 2xl:grid-cols-4 gap-4">
                        <div className="">
                            <CardRoomHigh room={1} imageUrl="/img/hero.png" showDesc={false} />
                        </div>
                        <div className="">
                            <CardRoomHigh room={1} imageUrl="/img/hero.png" showDesc={false} />
                        </div>
                        <div className="">
                            <CardRoomHigh room={1} imageUrl="/img/hero.png" showDesc={false} />
                        </div>
                        <div className="">
                            <CardRoomHigh room={1} imageUrl="/img/hero.png" showDesc={false} />
                        </div>
                    </div>
                </div>

                <div className="w-full mx-auto px-5 py-10 lg:px-10 xl:px-15 2xl:px-20 bg-cream border-y border-y-border-gray">
                    <div className="w-full grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 items-center gap-6">
                        <CardInfo
                            title="A Place to Feel At Home"
                            description="Discover a welcoming atmosphere where comfort meets thoughtful design. Every space is created to help you relax, unwind, and feel at ease from the moment you arrive."
                        >
                            <House size={"2rem"} />
                        </CardInfo>
                        <CardInfo
                            title="Comfort in Every Detail"
                            description="From elegant interios to carefully selected furnishings, every detail contributes to a relaxing experience. Enjoy a balance of modern style, everyday convenience, and lasting comfort."
                        >
                            <Bed size={"2rem"} />
                        </CardInfo>
                        <CardInfo
                            title="Hospitality That Matters"
                            description="We believe a great stay begins with feeling welcome. Our approach to hospitality is built around attentive service, thoughtful touches and making every guest feel valued."
                        >
                            <HeartHandshake size={"2rem"} />
                        </CardInfo>
                        <CardInfo
                            title="More Than Just A stay"
                            description="Make the most of your time away with inviting spaces, convenient amenities, and little comforts that turn an ordinary visit into a memorable experience."
                        >
                            <Star size={"2rem"} />
                        </CardInfo>
                        <CardInfo
                            title="A Destination to Discover"
                            description="Whether you're travelling for business or leisure, enjoy a comfortable base for your journey. Settle in, explore the surroundings and make every day your own."
                        >
                            <Pin size={"2rem"} />
                        </CardInfo>
                        <CardInfo
                            title="Make Time for Yourself"
                            description="Step away from your everday routine and embrace a slower pace. Enjoy a peacful atmosphere, recharge at your own rhythm, and make space for the moments that matter."
                        >
                            <Sunset size={"2rem"} />
                        </CardInfo>
                    </div>
                </div>

                <div className="w-full px-5 py-5 lg:px-10 xl:px-15 2xl:px-20">
                    <div className="w-full relative inset-0 flex">
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
        </main>
    );
}
