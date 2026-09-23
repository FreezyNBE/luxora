import { ButtonAction } from "@/app/components/misc/Button";
import { Check, EyeOff, IdCard, Info, MapPinned, SquarePen, User } from "lucide-react";

export default function PaymentMethodsPage() {
    return (
        <div className="w-full space-y-5">
            <div className="w-fit">
                <div className="relative block text-lg font-medium tracking-wide group cursor-pointer">
                    <span>Payment Methods</span>
                    <div className="absolute bottom-0 w-0 group-hover:w-full h-0.5 bg-blue-800 transition-all duration-300 ease-in" />
                </div>
            </div>

            {/* Select method */}
            <div className="w-full flex flex-wrap gap-4">
                <div className="px-5 py-2 bg-blue-800 text-white font-medium rounded-full cursor-pointer hover:bg-blue-900 transition-all duration-75">
                    Credit Card
                </div>
                <div className="px-5 py-2 font-medium rounded-full cursor-pointer hover:bg-blue-900 hover:text-white transition-all duration-75">
                    Paypal
                </div>
            </div>

            <div className="w-full space-y-10">
                {/* Cards */}
                <div className="w-fit flex gap-3">
                    {/* MasterCard */}
                    <div className="relative flex items-center justify-center border-2 border-blue-800 rounded-lg px-5 pt-2 cursor-pointer hover:border-blue-600 transition-all duration-75">
                        <div className="w-6 h-6">
                            <img src="/payment/mastercard.svg" alt="MasterCard" />
                        </div>
                        <div className="absolute -top-1 -right-1 bg-blue-800 text-white rounded-full">
                            <Check size={"0.7rem"} />
                        </div>
                    </div>
                    {/* Visa */}
                    <div className="relative flex items-center justify-center border-2 border-border-light rounded-lg px-5 pt-2 cursor-pointer hover:border-blue-900 transition-all duration-75">
                        <div className="w-6 h-6">
                            <img src="/payment/visa.jpg" alt="MasterCard" />
                        </div>
                    </div>
                </div>

                <div className="w-md space-y-5">
                    <div className="flex flex-col gap-2">
                        <label htmlFor="name" className="text-sm font-semibold">
                            Credit Card
                        </label>
                        <div className="w-full max-w-lg py-2 px-4 flex items-center gap-x-3 p-2 border border-border-light rounded-lg">
                            <IdCard size={"1.35rem"} className="text-gray-800/70" />
                            <input
                                type="text"
                                id="credit_card"
                                name="credit_card"
                                className="w-full max-w-72 outline-none text-ink text-sm placeholder:font-medium font-semibold"
                                placeholder="0000 0000 0000 0000"
                                autoComplete="true"
                            />
                        </div>
                    </div>
                    <div className="flex flex-col gap-2">
                        <label htmlFor="name" className="text-sm font-semibold">
                            Name
                        </label>
                        <div className="w-full max-w-lg py-2 px-4 flex items-center gap-x-3 p-2 border border-border-light rounded-lg">
                            <input
                                type="text"
                                id="name"
                                name="name"
                                className="w-full max-w-72 outline-none text-ink text-sm placeholder:font-medium font-semibold"
                                placeholder="Your name"
                                autoComplete="true"
                            />
                        </div>
                    </div>
                    <div className="w-full max-w-md flex gap-x-5">
                        <div className="flex flex-col gap-2">
                            <label htmlFor="name" className="text-sm font-semibold">
                                Expiration Date
                            </label>
                            <div className="w-40 py-2 px-4 flex items-center gap-x-3 p-2 border border-border-light rounded-lg">
                                <input
                                    type="text"
                                    id="expiration_date"
                                    name="expiration_date"
                                    className="w-full max-w-72 outline-none text-ink text-sm placeholder:font-medium font-semibold"
                                    placeholder="12/2026"
                                    autoComplete="true"
                                />
                            </div>
                        </div>
                        <div className="flex flex-col gap-2">
                            <label htmlFor="name" className="text-sm font-semibold">
                                CVV
                            </label>
                            <div className="w-32 py-2 px-4 flex items-center gap-x-3 p-2 border border-border-light rounded-lg">
                                <input
                                    type="password"
                                    id="cvv"
                                    name="cvv"
                                    className="w-full max-w-72 outline-none text-ink text-sm placeholder:font-medium font-semibold"
                                    placeholder="0000"
                                    autoComplete="true"
                                />
                                <EyeOff size={"1.35rem"} className="text-gray-800/70 cursor-pointer hover:text-gray-800" />
                            </div>
                        </div>
                    </div>
                    <div className="w-32 flex items-center justify-center gap-2 bg-blue-100 p-2 rounded-full cursor-pointer hover:bg-blue-200 transition-all duration-75">
                        <SquarePen size={"1.2rem"} className="text-blue-800" />
                        <span className="text-blue-800 font-medium text-xs">Save</span>
                    </div>
                </div>
            </div>
        </div>
    );
}
