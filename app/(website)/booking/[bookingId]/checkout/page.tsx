"use client";
import { ButtonAction } from "@/app/components/misc/Button";
import { Input, Textarea } from "@/app/components/misc/Input";
import ProgressBooking from "@/app/components/ProgressBooking";
import TopLayout from "@/app/components/TopLayout";
import { phonePrefixesByCountry } from "@/utils/phone_numbers";
import { CalendarCheck2, CalendarClock, Eye, MoveRight, ShieldCheck, SquareM, UserRound } from "lucide-react";
import Link from "next/link";

export default function CheckoutPage() {
    return (
        <>
            <TopLayout imgUrl="/img/tmp3.png" title="Checkout" description="Complete your booking in just a few simple steps.">
                <div className="flex items-center gap-1">
                    <ShieldCheck size={"1.25rem"} className="shrink-0" />
                    <span className="text-sm">Secure Your Stay</span>
                </div>
            </TopLayout>
            <ProgressBooking step="Checkout" />
            <div className="w-full flex items-start justify-center px-5 pb-5">
                <div className="w-full max-w-250 flex flex-col sm:flex-row gap-x-3 border-t border-t-border-light">
                    {/* Left */}
                    {/* Container */}
                    <div className="flex-1 mt-5 space-y-5">
                        {/* Heading */}
                        <div className="space-y-1">
                            <h1 className="font-medium text-xl">Informations</h1>
                            <p className="text-xs text-muted-light">Please confirm your details or update if needed.</p>
                        </div>
                        {/* Content */}
                        <div className="w-full space-y-5">
                            <div className="w-full max-w-lg space-y-5">
                                <div className="flex flex-col gap-2">
                                    <Input
                                        type="text"
                                        id="name"
                                        name="name"
                                        autoComplete="name"
                                        placeholder="eg: AlexJohnson"
                                        required
                                    >
                                        Full Name <span className="text-rose-700">*</span>
                                    </Input>
                                </div>
                                <div className="flex flex-col gap-2">
                                    <Input
                                        type="email"
                                        id="email"
                                        name="email"
                                        autoComplete="email"
                                        placeholder="eg: alex.johnson@example.com"
                                        required
                                    >
                                        Email Adress <span className="text-rose-700">*</span>
                                    </Input>
                                </div>
                                <div className="flex flex-col gap-2">
                                    <label htmlFor="phone_number" className="text-xs text-heading font-medium">
                                        Phone Number <span className="text-rose-700">*</span>
                                    </label>
                                    <div className="flex w-full">
                                        <div className="w-45 py-2 px-4 flex items-center gap-x-3 p-2 border border-r-transparent border-border-gray rounded-md rounded-r-none focus-within:ring-[1.5px] focus-within:ring-gold-light transition-all duration-100">
                                            <select
                                                id="phone_prefix"
                                                name="phone_prefix"
                                                autoComplete="off"
                                                className="w-full text-gray-500 text-sm font-medium"
                                                required
                                            >
                                                {phonePrefixesByCountry.map((prefix, index) => (
                                                    <option key={index} value={prefix.code} className="w-fit">
                                                        {prefix.shortname}:{prefix.code}
                                                    </option>
                                                ))}
                                            </select>
                                        </div>
                                        <div className="w-full py-2 px-4 flex items-center gap-x-3 p-2 border border-border-gray rounded-md rounded-l-none focus-within:ring-[1.5px] focus-within:ring-gold-light transition-all duration-100">
                                            <input
                                                type="text"
                                                id="phone_number"
                                                name="phone_number"
                                                className="w-full text-gray-500 text-sm placeholder:text-gray-500/65 placeholder:text-xs placeholder:font-medium"
                                                placeholder="1234 567 890"
                                                autoComplete="tel"
                                                required
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="w-full h-px bg-border-light" />
                            <div className="w-full max-w-lg space-y-5">
                                <div className="space-y-1">
                                    <h1 className="font-medium text-xl">Additional Information</h1>
                                    <p className="text-xs text-muted-light">
                                        Any special requests? Let us know, and we'll do our best to accommodate you.
                                    </p>
                                    <div className="mt-5">
                                        <Textarea
                                            id="special_requests"
                                            name="special_requests"
                                            placeholder="eg: Late arrival, extra pillows, special occassion.."
                                            label={false}
                                            className="w-full h-25 max-h-35"
                                        />
                                    </div>
                                </div>
                            </div>
                            <div className="hidden sm:block w-full h-px bg-border-light" />
                            <div className="hidden sm:flex flex-col items-center justify-center">
                                <div className="w-full max-w-md space-y-2">
                                    <div className="flex items-center justify-center">
                                        <input
                                            type="checkbox"
                                            name="agreements"
                                            id="agreements"
                                            className="accent-yellow-700/80"
                                        />
                                        <label
                                            htmlFor="agreements"
                                            className="select-none ms-2 text-sm font-medium text-heading"
                                        >
                                            I agree to the{" "}
                                            <Link href="/" className="link-text-color">
                                                Terms &#038; Conditions
                                            </Link>{" "}
                                            and{" "}
                                            <Link href="/" className="link-text-color">
                                                Privacy Policy
                                            </Link>
                                            .
                                        </label>
                                    </div>
                                    <ButtonAction className="flex items-center justify-center gap-2">
                                        <span>Continue to Payment</span>
                                        <MoveRight size={"1.25rem"} />
                                    </ButtonAction>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* Right */}
                    <div className="flex-1 w-full sm:max-w-90 space-y-5">
                        <div className="w-full mt-5 border border-border-light rounded-md">
                            <div className="pb-3">
                                {/* Room Details */}
                                <div className="space-y-1">
                                    <div className="relative w-full h-auto max-h-38 rounded-md rounded-b-none overflow-hidden">
                                        <img src="/img/tmp3.png" alt="Contact Us" className="w-full h-full object-cover" />
                                        <div className="absolute inset-0 bg-black/20" />
                                    </div>
                                    <div className="px-3 space-y-1">
                                        <div className="mt-2 font-medium text-ink">Deluxe Ocean View Room</div>
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
                                    <div className="w-full h-px bg-border-light my-3" />
                                    <div className="w-full h-full flex flex-wrap items-start max-sm:justify-around justify-center px-3">
                                        <div className="flex flex-col sm:flex-row items-start justify-center gap-2 p-2 border-r border-transparent sm:border-r-border-light">
                                            <CalendarClock size={"1.25rem"} className="text-gold-light" />
                                            <div>
                                                <span className="block text-xs text-muted-light">Check-in</span>
                                                <span className="block text-sm text-ink">Apr 25, 2025</span>
                                            </div>
                                        </div>

                                        <div className="flex flex-col sm:flex-row items-start justify-center gap-2 p-2">
                                            <CalendarCheck2 size={"1.25rem"} className="text-gold-dark" />
                                            <div>
                                                <span className="block text-xs text-muted-light">Check-out</span>
                                                <span className="block text-sm text-ink">Apr 28, 2025</span>
                                                <span className="block text-xs text-muted-light">(3 nights)</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="w-full h-px bg-border-light my-3" />
                                {/* Pricing */}
                                <div className="space-y-2 px-3">
                                    <h1 className="text-lg font-medium text-ink">Price Details</h1>
                                    <div className="w-full space-y-3">
                                        <div className="text-xs text-heading font-medium">
                                            <span>Room price (3 nights)</span>
                                            <span className="max-sm:block sm:float-right me-2 font-medium text-green-800">
                                                $325
                                            </span>
                                        </div>
                                        <div className="text-xs text-heading font-medium">
                                            <span>Taxes & fees</span>
                                            <span className="max-sm:block sm:float-right me-2 font-medium text-green-800">
                                                $21
                                            </span>
                                        </div>
                                    </div>
                                    <div className="w-full h-px bg-border-light my-3" />
                                    <div className="text-xl text-ink">
                                        <span>Total</span>
                                        <span className="max-sm:block float-right me-2 font-medium text-green-800">$346</span>
                                    </div>
                                    <div className="w-fit mt-5 text-xs text-black/50 border-b border-b-black/30 cursor-pointer hover:text-black/90 hover:border-b-black/90 transition-all duration-100">
                                        <span>View cancellation policy</span>
                                    </div>
                                </div>
                                {/* Notice */}
                                <div className="px-3">
                                    <div className="mt-5 bg-gold-light/30 border border-gold-light/40 rounded-lg">
                                        <div className="flex items-start gap-2 p-3">
                                            <ShieldCheck size={"1.5rem"} className="shrink-0 text-gold" />
                                            <div className="flex flex-col gap-y-1">
                                                <span className="text-sm text-black/90">
                                                    Your information is safe and secure.
                                                </span>
                                                <span className="text-xs text-black/40">
                                                    We use industry-standard encryption to protect your data.
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="block sm:hidden w-full h-px bg-border-light" />
                        <div className="flex sm:hidden flex-col items-center justify-center">
                            <div className="w-full max-w-md space-y-2">
                                <div className="flex items-center justify-center">
                                    <input type="checkbox" name="agreements" id="agreements" className="accent-yellow-700/80" />
                                    <label htmlFor="agreements" className="select-none ms-2 text-sm font-medium text-heading">
                                        I agree to the{" "}
                                        <Link href="/" className="link-text-color">
                                            Terms &#038; Conditions
                                        </Link>{" "}
                                        and{" "}
                                        <Link href="/" className="link-text-color">
                                            Privacy Policy
                                        </Link>
                                        .
                                    </label>
                                </div>
                                <ButtonAction className="flex items-center justify-center gap-2">
                                    <span>Continue to Payment</span>
                                    <MoveRight size={"1.25rem"} />
                                </ButtonAction>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
