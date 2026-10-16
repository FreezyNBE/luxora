import { CardContainer, CardHeader } from "@/app/components/core/Card";
import { CardNotice } from "@/app/components/core/CardNotice";
import { Button } from "@/app/components/misc/Button";
import ProgressBooking from "@/app/components/ProgressBooking";
import {
    CalendarCheck2,
    CalendarClock,
    Check,
    Eye,
    Headphones,
    Info,
    Mail,
    Moon,
    NotepadText,
    Phone,
    SquareKanban,
    SquareM,
    User,
    UserRound,
    Users,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function BookingConfirmationPage() {
    return (
        <>
            <div className="relative w-full py-5 text-white overflow-hidden">
                {/* Hero Slider */}
                <div className="absolute inset-0 w-full h-full">
                    {/* <img src="/img/confirmation.png" alt="Confirmation" className="object-cover" /> */}
                    <Image
                        src="/img/confirmation.png"
                        alt="Confirmation"
                        fill
                        sizes="100vw, 100%"
                        className="object-cover"
                        priority
                    />
                </div>

                {/* Dark overlay */}
                <div
                    className="absolute inset-0 backdrop-blur-[3px]"
                    style={{
                        maskImage: "linear-gradient(90deg, black 0%, black 28%, trasparent 72%)",
                        WebkitMaskImage: "linear-gradient(90deg, black 0%, black 28%, transparent 72%)",
                    }}
                />

                {/* <div className="absolute inset-0 bg-black/60" /> */}

                <div
                    className="absolute inset-0"
                    style={{
                        background:
                            "linear-gradient(90deg, rgba(38, 23, 13, 0.88) 0%, rgba(38, 23, 13, 0.68) 10%, rgba(38, 23, 13, 0.22) 35%, transparent 82%)",
                    }}
                />
                {/* Content */}
                <div className="relative w-full h-full flex flex-col items-start justify-start ms-8 md:ms-20 overflow-hidden">
                    <div className="space-y-5">
                        <div className="w-12 h-12 flex items-center justify-center bg-gold border-2 border-gold rounded-full">
                            <Check size={"2rem"} className="text-white" />
                        </div>
                        <div className="text-sm font-semibold uppercase tracking-widest">Booking Confirmed</div>
                        <div className="space-y-2">
                            <h1 className="text-3xl font-medium tracking-wide">Your Stay Is Confirmed!</h1>
                            <p className="w-full max-w-100 lg:max-w-120 text-sm">
                                Thank you for choosing Luxora Hotel. Your booking has been succesfully confirmed and your
                                payment has been processed.
                            </p>
                        </div>
                        <div className="flex items-center gap-x-2 tracking-wide px-4 py-2 bg-cream-dark/10 border border-cream-dark/20 rounded-lg w-fit">
                            <Info size={"1.25rem"} className="cursor-default" />
                            <span className="font-medium cursor-default">Booking Reference:</span>
                            <span className="text-gold-light font-medium">LX-2026-0047</span>
                        </div>
                        <div className="w-full flex flex-col md:flex-row items-start gap-4">
                            <Link href="/user/booking">
                                <Button className="w-52">View My Bookings</Button>
                            </Link>
                            <Link
                                href="/"
                                className="w-52 px-8 py-3 bg-gray-200 border border-border-dark/20 rounded-md flex items-center justify-center hover:bg-gray-200/80 transition-all duration-100"
                            >
                                <span className="text-gray-600 font-medium text-sm">Back to Home</span>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
            {/* <div className="w-full flex items-center justify-center p-5">
                <div className="w-full max-w-270 flex items-center justify-center">
                    <CardContainer>
                        <div className="flex items-center justify-center p-4">
                            <ProgressBooking step="Confirmation" />
                        </div>
                    </CardContainer>
                </div>
            </div> */}
            <div className="w-full flex items-start justify-center px-5 pb-5">
                <div className="w-full lg:max-w-300 flex flex-col lg:flex-row gap-x-5">
                    {/* Left */}
                    {/* Container */}
                    <div className="flex-1 mt-5 space-y-5">
                        {/* Heading */}
                        <CardContainer>
                            <CardHeader>
                                <div className="flex flex-col sm:flex-row items-start justify-between gap-y-3">
                                    <h1 className="font-medium text-xl">Booking Details</h1>
                                    <div className="flex flex-row items-center gap-8 lg:gap-12 text-xs">
                                        <div className="flex items-center gap-2">
                                            <CalendarClock size={"1.25rem"} className="text-gold-light" />
                                            <div>
                                                <span className="block text-muted-light cursor-default">Check-in</span>
                                                <span className="block text-heading font-medium">Apr 25, 2025</span>
                                            </div>
                                        </div>
                                        <div className="flex items-center gap-2">
                                            <CalendarCheck2 size={"1.25rem"} className="text-gold-dark" />
                                            <div>
                                                <span className="block text-muted-light cursor-default">Check-out</span>
                                                <span className="block text-heading font-medium">Apr 28, 2025</span>
                                            </div>
                                        </div>
                                        <div className="flex items-center gap-2 cursor-default">
                                            <Moon size={"1.25rem"} className="text-gold" />
                                            <span className="block text-heading font-medium">3 nights</span>
                                        </div>
                                    </div>
                                </div>
                            </CardHeader>

                            {/* Content */}
                            <div className="w-full space-y-5 p-4">
                                <div className="flex flex-col lg:flex-row gap-5">
                                    <div className="relative w-full lg:max-w-72 h-auto max-h-50 lg:max-h-38 rounded-lg overflow-hidden">
                                        <img src="/img/tmp3.png" alt="Deluxe Ocean View Room" className="w-full object-cover" />
                                        <div className="absolute inset-0 bg-black/20" />
                                    </div>
                                    <div className="w-full mt-2 space-y-4">
                                        <div className="w-full space-y-1">
                                            <div className="font-semibold text-lg text-ink tracking-wide">
                                                Deluxe Ocean View Room
                                            </div>
                                            <span className="block w-full max-w-82 text-xs text-heading/80 font-medium">
                                                Enjoy breathtaking ocean views from the comfort of our Deluxe Ocean View Room.
                                                This spacious and elegantly designed room features a king-size bed, a modern
                                                sitting area, and a private balcony where you can relax and take in the stunning
                                                coastal scenery.
                                            </span>
                                        </div>
                                        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-1 sm:gap-5 text-xs font-medium text-muted">
                                            <div className="flex items-center gap-2">
                                                <Users size={"1.25rem"} className="text-gold" />
                                                <span>2 Guests</span>
                                            </div>
                                            <div className="flex items-center gap-2">
                                                <Eye size={"1.25rem"} className="text-gold" />
                                                <span>Ocean View</span>
                                            </div>
                                            <div className="flex items-center gap-2">
                                                <SquareKanban size={"1.25rem"} className="text-gold" />
                                                <span>36 m&sup2;</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="w-full h-px bg-border-light my-3" />
                                <div className="relative bg-cream-soft border border-border-gray p-2 rounded-xl">
                                    <div className="w-full flex items-center justify-between px-3 py-2">
                                        <div className="flex items-start gap-2">
                                            <User className="text-gray-700 mt-1" />
                                            <div className="space-y-2">
                                                <span className="text-gray-700 font-semibold cursor-default">
                                                    Details Informations
                                                </span>
                                                <div className="space-y-px">
                                                    <span className="block text-sm text-gray-700 font-medium">
                                                        Alex Johnson
                                                    </span>
                                                    <span className="block text-sm text-gray-600 font-medium">
                                                        alex.johnson@example.com
                                                    </span>
                                                    <span className="block text-sm text-gray-600 font-medium">
                                                        +1 234 567 8900
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="hidden w-10 h-10 md:flex items-center justify-center bg-gold-dark rounded-full">
                                            <Check className="text-white" />
                                        </div>
                                    </div>
                                    <div className="block md:hidden absolute -top-1 -right-1">
                                        <div className="flex items-center justify-center bg-gold-dark rounded-full">
                                            <Check size={"0.7rem"} className="text-white" />
                                        </div>
                                    </div>
                                </div>
                                <div className="w-full h-px bg-border-light my-3" />
                                <div className="flex items-start gap-2">
                                    <NotepadText className="text-gold mt-1" />
                                    <div className="space-y-2">
                                        <span className="text-ink font-semibold">Special Requests</span>
                                        <div className="space-y-px">
                                            <span className="block text-xs text-gray-500 font-medium">
                                                Late check-in (after 10 PM).
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </CardContainer>
                    </div>
                    {/* Right */}
                    <div className="flex-1 w-full lg:max-w-100 space-y-5 mt-5">
                        <CardContainer>
                            <CardHeader>
                                <h1 className="text-xl font-medium text-ink">Payment Summary</h1>
                            </CardHeader>
                            <div className="space-y-2 py-5 px-4">
                                <div className="w-full space-y-3">
                                    <div className="text-heading font-medium">
                                        <div className="text-sm">
                                            <span>Room price</span>
                                            <span className="max-sm:block sm:float-right me-2 font-medium text-ink">$325</span>
                                        </div>
                                        <div>
                                            <span className="text-xs text-heading/50 tracking-wider">
                                                3 nights &times; $108.33 / night
                                            </span>
                                        </div>
                                    </div>
                                    <div className="text-sm text-heading">
                                        <span>Taxes &#038; fees</span>
                                        <span className="max-sm:block sm:float-right me-2 font-medium text-ink">$21</span>
                                    </div>
                                </div>
                                <div className="w-full h-px bg-border-light my-3" />
                                <div className="text-xl text-ink">
                                    <span>Total</span>
                                    <span className="max-sm:block float-right me-2 font-bold text-ink">$346</span>
                                </div>
                            </div>
                        </CardContainer>
                        <CardContainer>
                            <CardHeader>
                                <h1 className="text-xl font-medium text-ink">Payment Method</h1>
                            </CardHeader>
                            <div className="p-4 space-y-2">
                                <div className="w-full flex items-center justify-between gap-5 px-5 py-3 bg-gold/10 border border-gold/20 rounded-md cursor-pointer hover:bg-gold/20 hover:border-gold/30 transition-all duration-100">
                                    <div className="w-7 h-7 flex items-center justify-center">
                                        <img src="/payment/mastercard.svg" alt="Mastercard" />
                                    </div>
                                    <div className="text-xs text-heading font-medium space-y-1">
                                        Card ending in <span className="font-semibold">**4412</span>
                                    </div>
                                </div>
                                <div className="w-full flex items-center justify-between gap-5 px-5 py-3 bg-gold/10 border border-gold/20 rounded-md cursor-pointer hover:bg-gold/20 hover:border-gold/30 transition-all duration-100">
                                    <div className="w-7 h-7 flex items-center justify-center">
                                        <img src="/payment/visa.jpg" alt="Visa" />
                                    </div>
                                    <div className="text-xs text-heading font-medium space-y-1">
                                        Card ending in <span className="font-semibold">**3207</span>
                                    </div>
                                </div>
                                <div className="w-full flex items-center justify-between gap-5 px-5 py-3 bg-gold/10 border border-gold/20 rounded-md cursor-pointer hover:bg-gold/20 hover:border-gold/30 transition-all duration-100">
                                    <div className="w-5 h-5 flex items-center justify-center">
                                        <img src="/payment/paypal.svg" alt="PayPal" />
                                    </div>
                                    <div className="text-xs text-heading font-medium space-y-1">Paid with PayPal</div>
                                </div>
                                <div className="w-full flex items-center justify-between gap-5 px-5 py-3 bg-gold/10 border border-gold/20 rounded-md cursor-pointer hover:bg-gold/20 hover:border-gold/30 transition-all duration-100">
                                    <div className="w-7 h-7 flex items-center justify-center">
                                        <img src="/payment/applepay.svg" alt="Apple Pay" />
                                    </div>
                                    <div className="text-xs text-heading font-medium space-y-1">Paid with Apple Pay</div>
                                </div>
                                <div className="w-full flex items-center justify-between gap-5 px-5 py-3 bg-gold/10 border border-gold/20 rounded-md cursor-pointer hover:bg-gold/20 hover:border-gold/30 transition-all duration-100">
                                    <div className="w-5 h-5 flex items-center justify-center">
                                        <img src="/payment/googlepay.svg" alt="Google Pay" />
                                    </div>
                                    <div className="text-xs text-heading font-medium space-y-1">Paid with Google Pay</div>
                                </div>
                            </div>
                        </CardContainer>
                        <CardContainer>
                            <CardHeader>
                                <h1 className="text-xl font-medium text-ink">Need Help?</h1>
                            </CardHeader>
                            <div className="p-4 space-y-2">
                                <div className="text-xs text-gray-500 font-medium">
                                    If you have any questions or need to make changes to your booking, please contact us.
                                </div>
                                <div className="space-y-1">
                                    <div className="w-fit text-gray-500 pb-px cursor-pointer hover:text-gold transition-colors duration-100">
                                        <Phone size={"1rem"} className="inline-block" />
                                        <span className="inline-block align-middle ms-2 text-xs font-medium">
                                            +1 234 567 8900
                                        </span>
                                    </div>
                                    <div className="w-fit text-gray-500 pb-px cursor-pointer hover:text-gold transition-colors duration-100">
                                        <Mail size={"1rem"} className="inline-block" />
                                        <span className="inline-block align-middle ms-2 text-xs font-medium">
                                            luxora@example.com
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </CardContainer>
                    </div>
                </div>
            </div>
        </>
    );
}
