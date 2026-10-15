"use client";
import { Button, ButtonAction, ButtonMin } from "@/app/components/misc/Button";
import { Input, InputDate, Select, Textarea } from "@/app/components/misc/Input";
import ProgressBooking from "@/app/components/ProgressBooking";
import TopLayout from "@/app/components/TopLayout";
import { getIndexByCountry } from "@/utils/_functions";
import { countryList } from "@/utils/list_countries";
import { phonePrefixesByCountry } from "@/utils/phone_numbers";
import {
    CalendarCheck2,
    CalendarClock,
    Eye,
    Info,
    MoveRight,
    ShieldCheck,
    SquareKanban,
    SquareM,
    UserRound,
    Users,
} from "lucide-react";
import Link from "next/link";
import { useState } from "react";

export default function CheckoutPage() {
    const [showBilling, setShowBilling] = useState<boolean>(false);

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
                        <div className="w-full space-y-5 border border-border-light p-3 rounded-lg">
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
                                    <div className="space-y-2">
                                        <div className="w-full flex items-center gap-3">
                                            <div className="w-full flex flex-col gap-2">
                                                <InputDate id="check_in" name="check_in">
                                                    Check-In <span className="text-rose-700">*</span>
                                                </InputDate>
                                            </div>
                                            <div className="w-full flex flex-col gap-2">
                                                <InputDate id="check_out" name="check_out">
                                                    Check-Out <span className="text-rose-700">*</span>
                                                </InputDate>
                                            </div>
                                        </div>
                                        <div className="flex items-center gap-1 text-xs text-heading font-medium">
                                            <Info size={"1rem"} />
                                            <span>Complete the dates for the booking.</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="w-full space-y-5 border border-border-light p-3 rounded-lg">
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
                        </div>
                        <div className="w-full space-y-5 border border-border-light p-3 rounded-lg">
                            {/* Heading */}
                            <div className="space-y-2">
                                <h1 className="font-medium text-xl">Billing Address</h1>
                                <div className="flex items-center">
                                    <input
                                        type="checkbox"
                                        name="show_billing"
                                        id="show_billing"
                                        className="accent-yellow-700/80"
                                        checked={showBilling}
                                        onChange={() => setShowBilling((prev) => !prev)}
                                    />
                                    <label htmlFor="show_billing" className="select-none ms-2 text-sm font-medium text-heading">
                                        Complete the billing informations
                                    </label>
                                </div>
                            </div>
                            {/* Content */}
                            {showBilling && (
                                <div className="w-full space-y-5">
                                    <div className="w-full max-w-lg space-y-5">
                                        <div className="flex flex-col gap-2">
                                            <Input
                                                type="text"
                                                id="billing_address"
                                                name="billing_address"
                                                autoComplete="address-line1"
                                                placeholder="123 Main Street"
                                                required
                                            >
                                                Address <span className="text-rose-700">*</span>
                                            </Input>
                                        </div>
                                        <div className="flex flex-col gap-2">
                                            <Input
                                                type="text"
                                                id="apartment_address"
                                                name="apartment_address"
                                                autoComplete="address-line2"
                                                placeholder="Apt. 4B, Suite 200"
                                                required
                                            >
                                                Apartment, suite, etc.{" "}
                                                <span className="text-gray-400 font-normal">(optional)</span>
                                            </Input>
                                        </div>
                                        <div>
                                            <Select
                                                id="country"
                                                name="country"
                                                autoComplete="address-level1"
                                                options={countryList}
                                                defaultValue={countryList[getIndexByCountry()]}
                                            >
                                                Country <span className="text-rose-700">*</span>
                                            </Select>
                                        </div>
                                        <div className="w-full flex items-center gap-3">
                                            <div className="w-full flex flex-col gap-2">
                                                <Input
                                                    type="text"
                                                    id="city"
                                                    name="city"
                                                    autoComplete="address-level2"
                                                    placeholder="Bucharest"
                                                    required
                                                >
                                                    City <span className="text-rose-700">*</span>
                                                </Input>
                                            </div>
                                            <div className="w-full flex flex-col gap-2">
                                                <Input
                                                    type="text"
                                                    id="postal_code"
                                                    name="postal_code"
                                                    autoComplete="postal-code"
                                                    placeholder="12345"
                                                    required
                                                >
                                                    Postal Code <span className="text-rose-700">*</span>
                                                </Input>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
                    {/* Right */}
                    <div className="flex-1 w-full sm:max-w-100 space-y-5">
                        <div className="w-full mt-5 border border-border-light rounded-md">
                            <div className="pb-3">
                                {/* Room Details */}
                                <div className="space-y-1">
                                    <div className="relative w-full h-auto max-h-38 rounded-md rounded-b-none overflow-hidden">
                                        <img src="/img/tmp3.png" alt="Contact Us" className="w-full h-full object-cover" />
                                        <div className="absolute inset-0 bg-black/20" />
                                    </div>
                                    <div className="px-3 space-y-2">
                                        <div className="mt-2 font-medium text-ink">Deluxe Ocean View Room</div>
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
                                    <div className="w-full h-px bg-border-light my-3" />
                                    <div className="w-full flex">
                                        <div className="flex-1 border-r border-r-border-light">
                                            <div className="mx-auto">
                                                <div className="flex items-center justify-center gap-1">
                                                    <CalendarClock size={"1.25rem"} className="text-gold-light" />
                                                    <div>
                                                        <span className="block text-xs text-muted-light">Check-in</span>
                                                        <span className="block text-sm text-ink">Apr 25, 2025</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="flex-1">
                                            <div className="mx-auto">
                                                <div className="flex items-center justify-center gap-1">
                                                    <CalendarCheck2 size={"1.25rem"} className="text-gold-dark" />
                                                    <div>
                                                        <span className="block text-xs text-muted-light">Check-out</span>
                                                        <span className="block text-sm text-ink">Apr 28, 2025</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="w-full h-px bg-border-light my-3" />
                                {/* Pricing */}
                                <div className="space-y-2 px-3">
                                    <h1 className="text-xl font-medium text-ink">Price Details</h1>
                                    <div className="w-full space-y-3">
                                        <div className="text-heading font-medium">
                                            <div className="text-sm">
                                                <span>Room price</span>
                                                <span className="max-sm:block sm:float-right me-2 font-medium text-green-800">
                                                    $325
                                                </span>
                                            </div>
                                            <div>
                                                <span className="text-xs text-heading/50 tracking-wider">
                                                    3 nights &times; $108.33 / night
                                                </span>
                                            </div>
                                        </div>
                                        <div className="text-sm text-heading">
                                            <span>Taxes &#038; fees</span>
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
                        <div className="flex flex-col items-center justify-center">
                            <div className="w-full max-w-md space-y-2">
                                <p className="text-center text-xs text-muted-light font-medium">
                                    While continuing and completing your booking, you agree to our{" "}
                                    <Link href="/" className="link-text-color">
                                        Terms &#038; Conditions
                                    </Link>{" "}
                                    and{" "}
                                    <Link href="/" className="link-text-color">
                                        Privacy Policy
                                    </Link>
                                    .
                                </p>
                                <ButtonMin width="btn-w-full" className="flex items-center justify-center gap-2">
                                    <span>Continue to Payment</span>
                                    <MoveRight size={"1.25rem"} />
                                </ButtonMin>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
