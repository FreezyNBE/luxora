import BackButton from "@/app/components/min/BackButton";
import { ButtonSave } from "@/app/components/misc/Button";
import { Input } from "@/app/components/misc/Input";
import { Check, Info, SquarePen } from "lucide-react";

export default function PaymentMethodsPage() {
    return (
        <div className="w-full space-y-2">
            <BackButton url="/" text="Back to Home" />

            <div>
                <h1 className="text-3xl tracking-wide">Payment Methods</h1>
                <span className="text-gray-600 text-sm">Edit your payment methods.</span>
            </div>

            <div className="w-full space-y-5 p-4 bg-cream border border-border-gray rounded-md">
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
                                <img src="/payment/visa.jpg" alt="Visa" />
                            </div>
                        </div>
                    </div>

                    <div className="w-full max-w-md space-y-5">
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
                                <Input type="text" id="cvv" name="cvv" placeholder="MM/YY" autoComplete="cc-csc" required>
                                    <div className="flex items-end justify-between">
                                        <div>
                                            CVV <span className="text-rose-700">*</span>
                                        </div>
                                        <Info size={"1rem"} className="text-gray-800/70 cursor-pointer hover:text-gray-800" />
                                    </div>
                                </Input>
                            </div>
                        </div>
                        <ButtonSave className="flex items-center justify-center gap-2 bg-blue-100 hover:bg-blue-200">
                            <SquarePen size={"1.2rem"} className="text-blue-800" />
                            <span className="text-blue-800 font-medium text-xs">Save</span>
                        </ButtonSave>
                    </div>
                </div>
            </div>
        </div>
    );
}
