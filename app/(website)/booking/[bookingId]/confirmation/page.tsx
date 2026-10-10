import { Button } from "@/app/components/misc/Button";
import {
    CalendarCheck2,
    CalendarDays,
    Check,
    Eye,
    GitPullRequestArrow,
    Headphones,
    Mail,
    Moon,
    Phone,
    SquareM,
    User,
    UserRound,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function BookingConfirmationPage() {
    return (
        <>
            <div className="relative w-full py-5 text-ink overflow-hidden">
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
                <div className="absolute inset-0 bg-linear-to-r from-cream via-cream-soft to-transparent" />

                {/* Content */}
                <div className="relative w-full h-full flex flex-col items-start justify-start ms-5 md:ms-20 overflow-hidden">
                    <div className="space-y-5">
                        <div className="w-12 h-12 flex items-center justify-center border-2 border-gold rounded-full">
                            <Check size={"2rem"} className="text-gold" />
                        </div>
                        <div className="text-sm text-heading font-semibold uppercase tracking-widest">Booking Confirmed</div>
                        <div className="space-y-2">
                            <h1 className="text-3xl font-medium tracking-wide">Your Stay Is Confirmed!</h1>
                            <p className="w-full max-w-82 lg:max-w-120 text-sm text-heading">
                                Thank you for choosing Luxora Hotel. Your booking has been succesfully confirmed and your
                                payment has been processed.
                            </p>
                        </div>
                        <div className="space-x-2 tracking-wide py-2">
                            <span className="text-heading font-medium">Booking Reference:</span>
                            <span className="text-gold font-medium">LX-2026-0047</span>
                        </div>
                        <div className="w-full flex flex-col md:flex-row items-start gap-4">
                            <Link href="/user/booking">
                                <Button className="w-52">View My Bookings</Button>
                            </Link>
                            <Link
                                href="/"
                                className="w-52 px-8 py-3 bg-white/70 border border-border-dark/20 rounded-md flex items-center justify-center hover:bg-transparent transition-all duration-100"
                            >
                                <span className="text-black/50 font-medium text-sm">Back to Home</span>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
            <div className="w-full flex items-start justify-center p-5">
                <div className="w-full max-w-250 lg:max-w-300 flex flex-col md:flex-row gap-x-3 mt-5 border-t border-t-border-light">
                    {/* Left */}
                    {/* Container */}
                    <div className="flex-1 mt-5 space-y-5">
                        {/* Heading */}
                        <div className="flex flex-col lg:flex-row items-start justify-between gap-y-3">
                            <h1 className="font-medium text-xl">Booking Details</h1>
                            <div className="flex flex-col md:flex-row items-start md:items-center gap-5 md:gap-12 text-xs">
                                <div className="flex items-center gap-2">
                                    <CalendarDays size={"1.25rem"} className="text-heading" />
                                    <div>
                                        <span className="block text-muted-light cursor-default">Check-in</span>
                                        <span className="block text-heading font-medium">Apr 25, 2025</span>
                                    </div>
                                </div>
                                <div className="flex items-center gap-2">
                                    <CalendarCheck2 size={"1.25rem"} className="text-heading" />
                                    <div>
                                        <span className="block text-muted-light cursor-default">Check-out</span>
                                        <span className="block text-heading font-medium">Apr 28, 2025</span>
                                    </div>
                                </div>
                                <div className="flex items-center gap-2 cursor-default">
                                    <Moon size={"1.25rem"} className="text-heading" />
                                    <span className="block text-heading font-medium">3 nights</span>
                                </div>
                            </div>
                        </div>
                        <div className="w-full h-px bg-border-light my-3" />

                        {/* Content */}
                        <div className="w-full space-y-5">
                            <div className="flex flex-col lg:flex-row gap-5">
                                <div className="relative w-full lg:max-w-72 h-auto max-h-50 lg:max-h-38 rounded-lg overflow-hidden">
                                    <img
                                        src="/img/tmp3.png"
                                        alt="Deluxe Ocean View Room"
                                        className="w-full h-full object-cover"
                                    />
                                    <div className="absolute inset-0 bg-black/20" />
                                </div>
                                <div className="w-full mt-2 space-y-4">
                                    <div className="w-full space-y-1">
                                        <div className="font-semibold text-lg text-ink tracking-wide">
                                            Deluxe Ocean View Room
                                        </div>
                                        <span className="block w-full max-w-82 text-xs text-heading/80 font-medium">
                                            Spacious room with a king-size bed, private balcony and stunning ocean views.
                                        </span>
                                    </div>
                                    <div className="flex flex-col sm:flex-row items-start sm:items-center gap-1 sm:gap-5">
                                        <div className="text-muted-light">
                                            <SquareM size="1rem" className="inline-block" />
                                            <div className="inline-block align-middle ms-1 text-xs">
                                                28 <span className="font-semibold">&#13217;</span>
                                            </div>
                                        </div>
                                        <div className="text-muted-light">
                                            <Eye size="1rem" className="inline-block" />
                                            <span className="inline-block align-middle ms-1 text-xs">City View</span>
                                        </div>
                                        <div className="text-muted-light">
                                            <UserRound size="1rem" className="inline-block" />
                                            <span className="inline-block align-middle ms-1 text-xs">2 Guests</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="w-full h-px bg-border-light my-3" />
                            <div className="relative bg-gray-100 border border-gray-300 p-2 rounded-sm cursor-pointer hover:bg-gray-200 hover:border-gray-400 transition-all duration-100">
                                <div className="w-full flex items-center justify-between px-3 py-2">
                                    <div className="flex items-start gap-2">
                                        <User className="text-gray-700 mt-1" />
                                        <div className="space-y-2">
                                            <span className="text-gray-700 font-semibold">Details Informations</span>
                                            <div className="space-y-px">
                                                <span className="block text-sm text-gray-700 font-medium">Alex Johnson</span>
                                                <span className="block text-sm text-gray-600 font-medium">
                                                    alex.johnson@example.com
                                                </span>
                                                <span className="block text-sm text-gray-600 font-medium">+1 234 567 8900</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="hidden w-10 h-10 md:flex items-center justify-center bg-gray-300 rounded-full">
                                        <Check className="text-white" />
                                    </div>
                                </div>
                                <div className="block md:hidden absolute -top-1 -right-1">
                                    <div className="flex items-center justify-center bg-gray-300 rounded-full">
                                        <Check size={"0.7rem"} className="text-white" />
                                    </div>
                                </div>
                            </div>
                            <div className="w-full h-px bg-border-light my-3" />
                            <div className="flex items-start gap-2">
                                <GitPullRequestArrow className="text-gold mt-1" />
                                <div className="space-y-2">
                                    <span className="text-ink font-semibold">Special Requests</span>
                                    <div className="space-y-px">
                                        <span className="block text-sm text-heading font-medium">
                                            Late check-in (after 10 PM)
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* Right */}
                    <div className="flex-1 max-w-full md:max-w-80 lg:max-w-100 mt-5 space-y-5 border border-border-light rounded-sm">
                        <div className="p-3">
                            {/* Pricing */}
                            <div className="space-y-2">
                                <h1 className="text-lg font-medium text-ink tracking-wide">Payment Summary</h1>
                                <div className="w-full space-y-3">
                                    <div className="text-heading font-medium">
                                        <div className="text-sm">
                                            <span>Deluxe Ocean View Room</span>
                                            <span className="max-sm:block sm:float-right me-2 font-medium text-green-800">
                                                $325
                                            </span>
                                        </div>
                                        <div>
                                            <span className="text-xs text-heading/50 tracking-wider">
                                                3 nights &#xB7; $108.33 / night
                                            </span>
                                        </div>
                                    </div>
                                    <div className="text-xs text-heading font-medium">
                                        <span>Taxes & fees</span>
                                        <span className="max-sm:block sm:float-right me-2 font-medium text-green-800">$21</span>
                                    </div>
                                </div>
                                <div className="w-full h-px bg-border-light my-3" />
                                <div className="w-full space-y-2">
                                    <div className="text-lg text-ink">
                                        <span>Total Paid</span>
                                        <span className="max-sm:block float-right me-2 font-medium text-green-800">$346</span>
                                    </div>
                                    <div className="w-full flex cursor-default">
                                        <span className="ms-auto bg-green-700/20 px-3.5 py-1.25 rounded-lg text-green-800 text-sm font-semibold">
                                            Paid
                                        </span>
                                    </div>
                                </div>
                            </div>
                            <div className="w-full h-px bg-border-light my-3" />
                            <div className="space-y-2">
                                <h1 className="text-lg font-medium text-ink tracking-wide">Payment Method</h1>
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
                                <div className="w-full h-px bg-border-light my-3" />
                                <div className="space-y-2">
                                    <div className="flex items-start gap-3">
                                        <Headphones className="shrink-0 mt-1" />
                                        <div className="space-y-3">
                                            <h1 className="text-lg font-medium tracking-wide">Need Help?</h1>
                                            <span className="block w-full max-w-64 text-xs text-gray-500 font-medium leading-5">
                                                If you have any questions or need to make changes to your booking, please
                                                contact us.
                                            </span>
                                            <div className="space-y-1">
                                                <div className="w-fit text-gray-500 pb-px border-b border-b-transparent cursor-pointer hover:border-b-gray-300">
                                                    <Phone size={"1rem"} className="inline-block shrink-0" />
                                                    <span className="inline-block align-middle ms-2 text-xs font-medium">
                                                        +1 234 567 8900
                                                    </span>
                                                </div>
                                                <div className="w-fit text-gray-500 pb-px border-b border-b-transparent cursor-pointer hover:border-b-gray-300">
                                                    <Mail size={"1rem"} className="inline-block shrink-0" />
                                                    <span className="inline-block align-middle ms-2 text-xs font-medium">
                                                        luxora@example.com
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
