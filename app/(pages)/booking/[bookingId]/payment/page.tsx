"use client";

import { Button, ButtonSave } from "@/app/components/misc/Button";
import {
    CalendarCheck2,
    CalendarClock,
    Check,
    Eye,
    Info,
    LockKeyhole,
    MoveRight,
    ShieldCheck,
    SquareM,
    UserRound,
} from "lucide-react";
import Link from "next/link";
import { useState } from "react";

type PaymentMethodSelection = "None" | "Credit Card" | "PayPal" | "Apple Pay" | "Google Pay";

export default function PaymentPage() {
    const [status, setStatus] = useState<PaymentMethodSelection>("None");

    return (
        <>
            <div className="w-full flex flex-row items-center justify-center gap-2 cursor-default p-5">
                <div className="flex flex-col lg:flex-row items-center justify-center text-center gap-2">
                    <div className="w-7 h-7 flex items-center justify-center bg-gold text-white rounded-full">
                        <Check size={"1rem"} />
                    </div>
                    <span className="text-xs lg:text-sm font-medium text-heading">Checkout</span>
                </div>
                <div className="w-58 flex">
                    <div className="flex-1 h-0.5 bg-linear-to-r from-transparent via-gold-light/50 to-gold-light/50" />
                    <div className="flex-1 h-0.5 bg-linear-to-l from-transparent via-gold-light/50 to-gold-light/50" />
                </div>
                <div className="flex flex-col lg:flex-row items-center justify-center text-center gap-2">
                    <div className="w-7 h-7 flex items-center justify-center bg-gold border border-transparent text-white text-xs font-medium rounded-full">
                        2
                    </div>
                    <span className="text-xs lg:text-sm font-semibold text-heading">Payment</span>
                </div>
                <div className="w-58 flex">
                    <div className="flex-1 h-0.5 bg-linear-to-r from-transparent via-border-dark/20 to-border-dark/20" />
                    <div className="flex-1 h-0.5 bg-linear-to-l from-transparent via-border-dark/20 to-border-dark/20" />
                </div>
                <div className="flex flex-col lg:flex-row items-center justify-center text-center gap-2">
                    <div className="w-7 h-7 flex items-center justify-center bg-bg-light/50 border border-border-dark/20 text-heading text-xs font-medium rounded-full">
                        3
                    </div>
                    <span className="text-xs lg:text-sm font-medium text-heading">Confirmation</span>
                </div>
            </div>
            <div className="w-full flex items-start justify-center p-5">
                <div className="w-full max-w-250 flex flex-col md:flex-row gap-x-3 mt-5 border-t border-t-border-light">
                    {/* Left */}
                    {/* Container */}
                    <div className="flex-1 mt-5 space-y-5">
                        {/* Heading */}
                        <div className="space-y-1">
                            <h1 className="font-medium text-xl">Payment Method</h1>
                            <p className="text-xs text-muted-light">All transactions are secure and encrypted.</p>
                        </div>
                        {/* Payment Method Selection */}
                        <div className="w-full space-y-5">
                            {/* Credit Card */}
                            <div
                                className={`w-full px-4 py-3.5 border ${status === "Credit Card" ? "border-gold-light/40" : "border-border-light"} rounded-lg`}
                            >
                                {/* Heading */}
                                <div
                                    onClick={() => setStatus("Credit Card")}
                                    className="w-full flex items-start gap-4 cursor-pointer hover:opacity-80 transition-all duration-100"
                                >
                                    {status === "Credit Card" ? (
                                        <div className="p-1 mt-1 flex items-center justify-center bg-gold text-white rounded-full">
                                            <Check size={"1rem"} />
                                        </div>
                                    ) : (
                                        <div className="relative w-5 h-5 mt-1 p-2 bg-white border border-border-light rounded-full flex items-center justify-center" />
                                    )}
                                    <div className="w-full flex items-start justify-between">
                                        <div className="space-y-1">
                                            <h1 className="text-lg text-ink font-medium">Credit / Debit Card</h1>
                                            <p className="text-xs text-muted-light">Pay securely with your card.</p>
                                        </div>
                                        <div className="flex gap-4">
                                            <div className="w-7 h-7">
                                                <img src="/payment/mastercardpay.svg" alt="MasterCard" />
                                            </div>
                                            <div className="w-7 h-7">
                                                <img src="/payment/visa.jpg" alt="Visa" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div
                                    className={
                                        status === "Credit Card"
                                            ? "grid grid-rows-[1fr] mt-5 transition-[grid-template-rows] duration-300 ease-in-out"
                                            : "grid grid-rows-[0fr] transition-[grid-template-rows] duration-300 ease-in-out"
                                    }
                                >
                                    <div className="min-h-0 space-y-5 overflow-hidden">
                                        <div className="w-full h-px bg-border-light" />
                                        <div className="w-full max-w-lg space-y-5">
                                            <div className="flex flex-col gap-2">
                                                <label htmlFor="card_number" className="text-xs text-heading font-medium">
                                                    Card Number <span className="text-rose-700">*</span>
                                                </label>
                                                <div className="w-full py-2 px-4 flex items-center gap-x-3 p-2 border border-border-light rounded-lg">
                                                    <input
                                                        type="text"
                                                        id="card_number"
                                                        name="card_number"
                                                        className="w-full outline-none text-ink text-sm placeholder:text-xs"
                                                        placeholder="1234 5678 9012 3456"
                                                        autoComplete="true"
                                                        required
                                                    />
                                                </div>
                                            </div>
                                            <div className="flex flex-col gap-2">
                                                <label htmlFor="card_name" className="text-xs text-heading font-medium">
                                                    Card Name <span className="text-rose-700">*</span>
                                                </label>
                                                <div className="w-full py-2 px-4 flex items-center gap-x-3 p-2 border border-border-light rounded-lg">
                                                    <input
                                                        type="text"
                                                        id="card_name"
                                                        name="card_name"
                                                        className="w-full outline-none text-ink text-sm placeholder:text-xs"
                                                        placeholder="eg: Alex Johnson"
                                                        autoComplete="true"
                                                        required
                                                    />
                                                </div>
                                            </div>
                                            <div className="w-full flex gap-5">
                                                <div className="w-full flex flex-col gap-2">
                                                    <label
                                                        htmlFor="expiration_date"
                                                        className="text-xs text-heading font-medium"
                                                    >
                                                        Expiration Date <span className="text-rose-700">*</span>
                                                    </label>
                                                    <div className="w-full py-2 px-4 flex items-center gap-x-3 p-2 border border-border-light rounded-lg">
                                                        <input
                                                            type="text"
                                                            id="expiration_date"
                                                            name="expiration_date"
                                                            className="w-full outline-none text-ink text-sm placeholder:text-xs"
                                                            placeholder="MM/YY"
                                                            autoComplete="true"
                                                            required
                                                        />
                                                    </div>
                                                </div>
                                                <div className="w-full flex flex-col gap-2">
                                                    <label htmlFor="cvv" className="text-xs text-heading font-medium">
                                                        CVV <span className="text-rose-700">*</span>
                                                    </label>
                                                    <div className="w-full py-2 px-4 flex items-center gap-x-3 p-2 border border-border-light rounded-lg">
                                                        <input
                                                            type="password"
                                                            id="cvv"
                                                            name="cvv"
                                                            className="w-full outline-none text-ink text-sm placeholder:text-xs"
                                                            placeholder="123"
                                                            autoComplete="true"
                                                            required
                                                        />
                                                        <Info
                                                            size={"1.35rem"}
                                                            className="text-gray-800/70 cursor-pointer hover:text-gray-800"
                                                        />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* PayPal */}
                            <div
                                className={`w-full px-4 py-3.5 border ${status === "PayPal" ? "border-gold-light/40" : "border-border-light"} rounded-lg`}
                            >
                                {/* Heading */}
                                <div
                                    onClick={() => setStatus("PayPal")}
                                    className="w-full flex items-start gap-4 cursor-pointer hover:opacity-80 transition-all duration-100"
                                >
                                    {status === "PayPal" ? (
                                        <div className="p-1 mt-1 flex items-center justify-center bg-gold text-white rounded-full">
                                            <Check size={"1rem"} />
                                        </div>
                                    ) : (
                                        <div className="relative w-5 h-5 mt-1 p-2 bg-white border border-border-light rounded-full flex items-center justify-center" />
                                    )}
                                    <div className="w-full flex items-start justify-between">
                                        <div className="flex items-start gap-4">
                                            <div className="w-5 h-5 mt-1">
                                                <img src="/payment/paypal.svg" alt="PayPal" />
                                            </div>
                                            <div className="space-y-1">
                                                <h1 className="text-lg text-ink font-medium">PayPal</h1>
                                                <p className="text-xs text-muted-light">Pay with your PayPal account.</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div
                                    className={
                                        status === "PayPal"
                                            ? "grid grid-rows-[1fr] mt-5 transition-[grid-template-rows] duration-300 ease-in-out"
                                            : "grid grid-rows-[0fr] transition-[grid-template-rows] duration-300 ease-in-out"
                                    }
                                >
                                    <div className="min-h-0 space-y-5 overflow-hidden">
                                        <div className="w-full h-px bg-border-light" />
                                        <div className="w-full max-w-85 space-y-5">
                                            <ButtonSave
                                                width="btn-w-lg"
                                                className="flex items-center justify-center gap-2 bg-black text-white hover:bg-black/80"
                                            >
                                                <span className="font-medium text-xs">Continue to pay with PayPal</span>
                                                <MoveRight size={"1.2rem"} />
                                            </ButtonSave>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* Apple Pay */}
                            <div
                                className={`w-full px-4 py-3.5 border ${status === "Apple Pay" ? "border-gold-light/40" : "border-border-light"} rounded-lg`}
                            >
                                {/* Heading */}
                                <div
                                    onClick={() => setStatus("Apple Pay")}
                                    className="w-full flex items-start gap-4 cursor-pointer hover:opacity-80 transition-all duration-100"
                                >
                                    {status === "Apple Pay" ? (
                                        <div className="p-1 mt-1 flex items-center justify-center bg-gold text-white rounded-full">
                                            <Check size={"1rem"} />
                                        </div>
                                    ) : (
                                        <div className="relative w-5 h-5 mt-1 p-2 bg-white border border-border-light rounded-full flex items-center justify-center" />
                                    )}
                                    <div className="w-full flex items-start justify-between">
                                        <div className="flex items-start gap-3">
                                            <div className="w-8 h-8 mt-1">
                                                <img src="/payment/applepay.svg" alt="Apple Pay" />
                                            </div>
                                            <div className="space-y-1">
                                                <h1 className="text-lg text-ink font-medium">Apple Pay</h1>
                                                <p className="text-xs text-muted-light">Pay with Apple Pay.</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div
                                    className={
                                        status === "Apple Pay"
                                            ? "grid grid-rows-[1fr] mt-5 transition-[grid-template-rows] duration-300 ease-in-out"
                                            : "grid grid-rows-[0fr] transition-[grid-template-rows] duration-300 ease-in-out"
                                    }
                                >
                                    <div className="min-h-0 space-y-5 overflow-hidden">
                                        <div className="w-full h-px bg-border-light" />
                                        <div className="w-full max-w-85 space-y-5">
                                            <ButtonSave
                                                width="btn-w-lg"
                                                className="flex items-center justify-center gap-2 bg-black text-white hover:bg-black/80"
                                            >
                                                <span className="font-medium text-xs">Continue to pay with Apple Pay</span>
                                                <MoveRight size={"1.2rem"} />
                                            </ButtonSave>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* Google Pay */}
                            <div
                                className={`w-full px-4 py-3.5 border ${status === "Google Pay" ? "border-gold-light/40" : "border-border-light"} rounded-lg`}
                            >
                                {/* Heading */}
                                <div
                                    onClick={() => setStatus("Google Pay")}
                                    className="w-full flex items-start gap-4 cursor-pointer hover:opacity-80 transition-all duration-100"
                                >
                                    {status === "Google Pay" ? (
                                        <div className="p-1 mt-1 flex items-center justify-center bg-gold text-white rounded-full">
                                            <Check size={"1rem"} />
                                        </div>
                                    ) : (
                                        <div className="relative w-5 h-5 mt-1 p-2 bg-white border border-border-light rounded-full flex items-center justify-center" />
                                    )}
                                    <div className="w-full flex items-start justify-between">
                                        <div className="flex items-start gap-3">
                                            <div className="w-6 h-6 mt-1">
                                                <img src="/payment/googlepay.svg" alt="Google Pay" />
                                            </div>
                                            <div className="space-y-1">
                                                <h1 className="text-lg text-ink font-medium">Google Pay</h1>
                                                <p className="text-xs text-muted-light">Pay with Google Pay.</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div
                                    className={
                                        status === "Google Pay"
                                            ? "grid grid-rows-[1fr] mt-5 transition-[grid-template-rows] duration-300 ease-in-out"
                                            : "grid grid-rows-[0fr] transition-[grid-template-rows] duration-300 ease-in-out"
                                    }
                                >
                                    <div className="min-h-0 space-y-5 overflow-hidden">
                                        <div className="w-full h-px bg-border-light" />
                                        <div className="w-full max-w-85 space-y-5">
                                            <ButtonSave
                                                width="btn-w-lg"
                                                className="flex items-center justify-center gap-2 bg-black text-white hover:bg-black/80"
                                            >
                                                <span className="font-medium text-xs">Continue to pay with Google Pay</span>
                                                <MoveRight size={"1.2rem"} />
                                            </ButtonSave>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="hidden md:block w-full h-px bg-border-light my-3" />
                        <div className="hidden w-full md:flex flex-col items-center justify-center space-y-3">
                            <p className="text-center text-xs text-muted-light font-medium">
                                By completing your booking, you agree to our{" "}
                                <Link href="/" className="link-text-color">
                                    Terms &#038; Conditions
                                </Link>{" "}
                                and{" "}
                                <Link href="/" className="link-text-color">
                                    Privacy Policy
                                </Link>
                                .
                            </p>
                            <Button className="w-[70%] flex items-center justify-center gap-2">
                                <LockKeyhole size={"1rem"} />
                                <span className="text-sm">Complete Booking</span>
                            </Button>
                        </div>
                    </div>
                    {/* Right */}
                    <div className="flex-1 w-full md:max-w-80 space-y-5">
                        <div className="w-full mt-5 border border-border-light rounded-sm">
                            <div className="p-3">
                                {/* Room Details */}
                                <div className="space-y-1">
                                    <div className="relative w-full h-auto max-h-38 rounded-lg overflow-hidden">
                                        <img src="/img/tmp3.png" alt="Contact Us" className="w-full h-full object-cover" />
                                        <div className="absolute inset-0 bg-black/20" />
                                    </div>
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
                                    <div className="w-full h-px bg-border-light my-3" />
                                    <div className="w-full h-full flex items-start max-sm:justify-center">
                                        <div className="flex flex-col sm:flex-row items-start justify-center gap-2 p-2 border-r border-r-border-light">
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
                                <div className="space-y-2">
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
                                <div className="mt-5 bg-gold-light/30 border border-gold-light/40 rounded-lg">
                                    <div className="flex items-start gap-2 p-3">
                                        <ShieldCheck size={"1.5rem"} className="shrink-0 text-gold" />
                                        <div className="flex flex-col gap-y-1">
                                            <span className="text-sm text-black/90">Your information is safe and secure.</span>
                                            <span className="text-xs text-black/40">
                                                We use industry-standard encryption to protect your data.
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="block md:hidden w-full h-px bg-border-light my-3" />
                        <div className="w-full flex md:hidden flex-col items-center justify-center space-y-3">
                            <p className="text-center text-xs text-muted-light font-medium">
                                By completing your booking, you agree to our{" "}
                                <Link href="/" className="link-text-color">
                                    Terms &#038; Conditions
                                </Link>{" "}
                                and{" "}
                                <Link href="/" className="link-text-color">
                                    Privacy Policy
                                </Link>
                                .
                            </p>
                            <Button className="w-[70%] flex items-center justify-center gap-2">
                                <LockKeyhole size={"1rem"} />
                                <span className="text-sm">Complete Booking</span>
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
