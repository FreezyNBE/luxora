"use client";

import { CardContainer, CardHeader } from "@/app/components/core/Card";
import { CardNotice } from "@/app/components/core/CardNotice";
import { CardRoomSimple } from "@/app/components/core/CardRoom";
import CollapseBox from "@/app/components/core/CollapseBox";
import { Button, ButtonMin, ButtonSave } from "@/app/components/misc/Button";
import { Input } from "@/app/components/misc/Input";
import ProgressBooking from "@/app/components/ProgressBooking";
import TopLayout from "@/app/components/TopLayout";
import {
    CalendarCheck2,
    CalendarClock,
    Check,
    Eye,
    Info,
    LockKeyhole,
    MoveRight,
    ShieldCheck,
    SquareKanban,
    Users,
} from "lucide-react";
import Link from "next/link";
import { useState } from "react";

type PaymentMethodSelection = "None" | "Credit Card" | "PayPal" | "Apple Pay" | "Google Pay";

export default function PaymentPage() {
    const [status, setStatus] = useState<PaymentMethodSelection>("None");

    return (
        <>
            <TopLayout
                imgUrl="/img/tmp3.png"
                title="Payment"
                description="Choose your preferred payment method and complete your booking."
            >
                <div className="flex items-center gap-1">
                    <ShieldCheck size={"1.25rem"} />
                    <span className="text-sm">Secure Your Stay</span>
                </div>
            </TopLayout>
            <div className="w-full flex items-center justify-center p-5">
                <div className="w-full max-w-270 flex items-center justify-center">
                    <CardContainer>
                        <div className="flex items-center justify-center p-4">
                            <ProgressBooking step="Payment" />
                        </div>
                    </CardContainer>
                </div>
            </div>
            <div className="w-full flex items-start justify-center px-5 pb-5">
                <div className="w-full max-w-270 flex flex-col md:flex-row gap-x-5">
                    {/* Left */}
                    {/* Container */}
                    <div className="flex-1 md:max-w-150 mt-5 space-y-5">
                        {/* Payment Method Selection */}
                        <CardContainer>
                            <CardHeader>
                                <h1 className="text-xl font-medium text-ink">Payment Method</h1>
                            </CardHeader>
                            <div className="w-full space-y-2 p-4">
                                {/* Credit Card */}
                                <div
                                    className={`w-full px-4 py-3.5 border ${status === "Credit Card" ? "border-gold-light/40" : "border-border-gray bg-gray-100"} rounded-lg`}
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
                                            <div className="relative w-5 h-5 mt-1 p-2 bg-white border border-border-gray rounded-full flex items-center justify-center" />
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
                                    <CollapseBox toggle={status === "Credit Card" ? true : false}>
                                        <div className="space-y-5 pt-5">
                                            <div className="w-full h-px bg-border-light" />
                                            <div className="w-full max-w-lg space-y-5 p-1">
                                                <div className="flex flex-col gap-2">
                                                    <Input
                                                        type="text"
                                                        id="card_number"
                                                        name="card_number"
                                                        placeholder="1234 5678 9012 3456"
                                                        autoComplete="cc-number"
                                                        required
                                                    >
                                                        Card Number <span className="text-rose-700">*</span>
                                                    </Input>
                                                </div>
                                                <div className="flex flex-col gap-2">
                                                    <Input
                                                        type="text"
                                                        id="card_name"
                                                        name="card_name"
                                                        placeholder="eg: Alex Johnson"
                                                        autoComplete="cc-name"
                                                        required
                                                    >
                                                        Card Name <span className="text-rose-700">*</span>
                                                    </Input>
                                                </div>
                                                <div className="w-full flex gap-5">
                                                    <div className="w-full flex flex-col gap-2">
                                                        <Input
                                                            type="text"
                                                            id="expiration_date"
                                                            name="expiration_date"
                                                            placeholder="MM/YY"
                                                            autoComplete="cc-exp"
                                                            required
                                                        >
                                                            Expiration Date <span className="text-rose-700">*</span>
                                                        </Input>
                                                    </div>
                                                    <div className="w-full flex flex-col gap-2">
                                                        <Input
                                                            type="text"
                                                            id="cvv"
                                                            name="cvv"
                                                            placeholder="MM/YY"
                                                            autoComplete="cc-csc"
                                                            required
                                                        >
                                                            <div className="flex items-end justify-between">
                                                                <div>
                                                                    CVV <span className="text-rose-700">*</span>
                                                                </div>
                                                                <Info
                                                                    size={"1rem"}
                                                                    className="text-gray-800/70 cursor-pointer hover:text-gray-800"
                                                                />
                                                            </div>
                                                        </Input>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </CollapseBox>
                                </div>
                                {/* PayPal */}
                                <div
                                    className={`w-full px-4 py-3.5 border ${status === "PayPal" ? "border-gold-light/40" : "border-border-gray bg-gray-100"} rounded-lg`}
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
                                            <div className="relative w-5 h-5 mt-1 p-2 bg-white border border-border-gray rounded-full flex items-center justify-center" />
                                        )}
                                        <div className="w-full flex items-start justify-between">
                                            <div className="flex items-start gap-4">
                                                <div className="w-5 h-5 mt-1 ms-1">
                                                    <img src="/payment/paypal.svg" alt="PayPal" />
                                                </div>
                                                <div className="space-y-1">
                                                    <h1 className="text-lg text-ink font-medium">PayPal</h1>
                                                    <p className="text-xs text-muted-light">Pay with your PayPal account.</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <CollapseBox toggle={status === "PayPal" ? true : false}>
                                        <div className="space-y-5 pt-5">
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
                                    </CollapseBox>
                                </div>
                                {/* Apple Pay */}
                                <div
                                    className={`w-full px-4 py-3.5 border ${status === "Apple Pay" ? "border-gold-light/40" : "border-border-gray bg-gray-100"} rounded-lg`}
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
                                            <div className="relative w-5 h-5 mt-1 p-2 bg-white border border-border-gray rounded-full flex items-center justify-center" />
                                        )}
                                        <div className="w-full flex items-start justify-between">
                                            <div className="flex items-start gap-3">
                                                <div className="w-8 h-8 mt-1 -ms-1">
                                                    <img src="/payment/applepay.svg" alt="Apple Pay" />
                                                </div>
                                                <div className="space-y-1">
                                                    <h1 className="text-lg text-ink font-medium">Apple Pay</h1>
                                                    <p className="text-xs text-muted-light">Pay with Apple Pay.</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <CollapseBox toggle={status === "Apple Pay" ? true : false}>
                                        <div className="space-y-5 pt-5">
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
                                    </CollapseBox>
                                </div>
                                {/* Google Pay */}
                                <div
                                    className={`w-full px-4 py-3.5 border ${status === "Google Pay" ? "border-gold-light/40" : "border-border-gray bg-gray-100"} rounded-lg`}
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
                                            <div className="relative w-5 h-5 mt-1 p-2 bg-white border border-border-gray rounded-full flex items-center justify-center" />
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
                                    <CollapseBox toggle={status === "Google Pay" ? true : false}>
                                        <div className="space-y-5 pt-5">
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
                                    </CollapseBox>
                                </div>
                            </div>
                        </CardContainer>
                        {/* Action Button */}
                        <div className="w-full max-md:fixed bottom-0 left-0 flex z-100">
                            <div className="w-full max-md:mt-auto bg-white border border-border-gray md:rounded-xl shadow-xl">
                                <div className="w-full space-y-2 p-4">
                                    <p className="text-center text-xs text-neutral-500 font-medium">
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
                                    <ButtonMin width="btn-w-full" className="flex items-center justify-center gap-2">
                                        <LockKeyhole size={"1rem"} />
                                        <span className="font-medium">Pay $346.00</span>
                                    </ButtonMin>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* Right */}
                    <div className="flex-1 w-full md:max-w-110 space-y-5">
                        <div className="sm:mt-5">
                            <CardContainer>
                                <CardRoomSimple imageUrl="/img/tmp3.png" />
                            </CardContainer>
                        </div>
                        {/* Check-In/Out */}
                        <CardContainer>
                            <CardHeader>
                                <h1 className="text-xl font-medium text-ink">Dates</h1>
                            </CardHeader>
                            <div className="w-full flex p-4">
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
                        </CardContainer>
                        {/* Pricing */}
                        <CardContainer>
                            <CardHeader>
                                <h1 className="text-xl font-medium text-ink">Price Details</h1>
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
                        {/* Notice */}
                        <CardContainer>
                            <CardHeader>
                                <h1 className="text-xl font-medium text-ink">Notices</h1>
                            </CardHeader>
                            <div className="space-y-2 py-5 px-4">
                                <CardNotice
                                    title="Informations Secured"
                                    description="We use industry-standard encryption to protect your data."
                                >
                                    <ShieldCheck size={"1.5rem"} />
                                </CardNotice>
                                <CardNotice
                                    title="Payment Secured"
                                    description="Your information is encrypted and safe with us."
                                >
                                    <ShieldCheck size={"1.5rem"} />
                                </CardNotice>
                            </div>
                        </CardContainer>
                    </div>
                </div>
            </div>
        </>
    );
}
