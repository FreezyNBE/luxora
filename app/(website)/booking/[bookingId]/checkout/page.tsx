"use client";
import { CardContainer, CardHeader } from "@/app/components/core/Card";
import { CardNotice } from "@/app/components/core/CardNotice";
import { CardRoomSimple } from "@/app/components/core/CardRoom";
import CollapseBox from "@/app/components/core/CollapseBox";
import { ButtonMin } from "@/app/components/misc/Button";
import { Input, InputDate, Select, Textarea } from "@/app/components/misc/Input";
import ProgressBooking from "@/app/components/ProgressBooking";
import TopLayout from "@/app/components/TopLayout";
import { getIndexByCountry } from "@/utils/_functions";
import { countryList } from "@/utils/list_countries";
import { phonePrefixesByCountry } from "@/utils/phone_numbers";
import { Info, MoveRight, ShieldCheck } from "lucide-react";
import { useState } from "react";

export default function CheckoutPage() {
    const [showBilling, setShowBilling] = useState<boolean>(false);

    return (
        <>
            <TopLayout imgUrl="/img/tmp3.png" title="Checkout" description="Complete your booking in just a few simple steps.">
                <div className="flex items-center gap-1">
                    <ShieldCheck size={"1.25rem"} />
                    <span className="text-sm">Secure Your Stay</span>
                </div>
            </TopLayout>
            <div className="w-full flex items-center justify-center p-5">
                <div className="w-full max-w-270 flex items-center justify-center">
                    <CardContainer>
                        <div className="flex items-center justify-center p-4">
                            <ProgressBooking step="Checkout" />
                        </div>
                    </CardContainer>
                </div>
            </div>
            <div className="w-full flex items-start justify-center px-5 pb-5">
                <div className="w-full max-w-270 flex flex-col md:flex-row gap-x-5">
                    {/* Left */}
                    {/* Container */}
                    <div className="flex-1 md:max-w-150 mt-5 space-y-5">
                        <CardContainer>
                            <CardHeader>
                                <h1 className="text-xl font-medium text-ink">Informations</h1>
                            </CardHeader>
                            {/* Content */}
                            <div className="w-full space-y-5 p-4">
                                <div className="w-full space-y-5">
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
                        </CardContainer>
                        <CardContainer>
                            <CardHeader>
                                <h1 className="text-xl font-medium text-ink">
                                    <div className="flex items-center">
                                        <input
                                            type="checkbox"
                                            name="show_billing"
                                            id="show_billing"
                                            className="accent-yellow-700/80"
                                            checked={showBilling}
                                            onChange={() => setShowBilling((prev) => !prev)}
                                        />
                                        <label htmlFor="show_billing" className="select-none ms-2 font-semibold">
                                            Use billing address?
                                        </label>
                                    </div>
                                </h1>
                            </CardHeader>
                            <div className="p-4">
                                {/* Content */}
                                <CollapseBox toggle={showBilling}>
                                    <div className="space-y-5">
                                        <div className="w-full pb-5 space-y-5">
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
                                            <div className="flex flex-col gap-2">
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
                                </CollapseBox>
                                {/* Additional requests */}
                                <div className="space-y-2">
                                    <div className="font-medium text-sm">
                                        Special requests <span className="text-xs font-normal">(optional)</span>
                                    </div>
                                    <Textarea
                                        id="special_requests"
                                        name="special_requests"
                                        placeholder="eg: Late arrival, extra pillows, special occassion.."
                                        label={false}
                                        className="w-full h-25 max-h-35"
                                    />
                                </div>
                            </div>
                        </CardContainer>
                    </div>
                    {/* Right */}
                    <div className="flex-1 w-full md:max-w-110 space-y-5">
                        <div className="mt-5">
                            <CardContainer>
                                <CardRoomSimple imageUrl="/img/tmp3.png" />
                            </CardContainer>
                        </div>
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
                                </div>
                                <div className="w-full h-px bg-border-light my-3" />
                                <div className="text-xl text-ink">
                                    <span>Total</span>
                                    <span className="max-sm:block float-right me-2 font-bold text-ink">$325</span>
                                </div>
                                <div className="w-full mt-5 space-y-2">
                                    <ButtonMin width="btn-w-full" className="flex items-center justify-center gap-2">
                                        <span>Continue to Payment</span>
                                        <MoveRight size={"1.25rem"} />
                                    </ButtonMin>
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
                            </div>
                        </CardContainer>
                    </div>
                </div>
            </div>
        </>
    );
}
