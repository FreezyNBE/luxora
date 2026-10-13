import { Check } from "lucide-react";

type BookingSteps = "Checkout" | "Payment" | "Confirmation";

export default function ProgressBooking({ step }: { step: BookingSteps }) {
    return (
        <div className="w-full flex flex-row items-center justify-center gap-2 cursor-default p-5">
            <div className="flex flex-col lg:flex-row items-center justify-center text-center gap-2">
                {step === "Checkout" ? (
                    <>
                        <div className="w-7 h-7 flex items-center justify-center bg-gold border border-transparent text-white text-xs font-medium rounded-full">
                            1
                        </div>
                        <span className="text-xs lg:text-sm font-semibold text-heading">Checkout</span>
                    </>
                ) : (
                    <>
                        <div className="w-7 h-7 flex items-center justify-center bg-gold text-white rounded-full">
                            <Check size={"1rem"} />
                        </div>
                        <span className="text-xs lg:text-sm font-medium text-heading">Checkout</span>
                    </>
                )}
            </div>
            <div className="w-58 flex">
                <div className="flex-1 h-0.5 bg-linear-to-r from-transparent via-border-dark/20 to-border-dark/20" />
                <div className="flex-1 h-0.5 bg-linear-to-l from-transparent via-border-dark/20 to-border-dark/20" />
            </div>
            <div className="flex flex-col lg:flex-row items-center justify-center text-center gap-2">
                {step === "Checkout" ? (
                    <>
                        <div className="w-7 h-7 flex items-center justify-center bg-bg-light/50 border border-border-dark/20 text-heading text-xs font-medium rounded-full">
                            2
                        </div>
                        <span className="text-xs lg:text-sm font-medium text-heading">Payment</span>
                    </>
                ) : (
                    <>
                        {step === "Payment" ? (
                            <>
                                <div className="w-7 h-7 flex items-center justify-center bg-gold border border-transparent text-white text-xs font-medium rounded-full">
                                    2
                                </div>
                                <span className="text-xs lg:text-sm font-semibold text-heading">Payment</span>
                            </>
                        ) : (
                            <>
                                <div className="w-7 h-7 flex items-center justify-center bg-gold text-white rounded-full">
                                    <Check size={"1rem"} />
                                </div>
                                <span className="text-xs lg:text-sm font-medium text-heading">Payment</span>
                            </>
                        )}
                    </>
                )}
            </div>
            <div className="w-58 flex">
                <div className="flex-1 h-0.5 bg-linear-to-r from-transparent via-border-dark/20 to-border-dark/20" />
                <div className="flex-1 h-0.5 bg-linear-to-l from-transparent via-border-dark/20 to-border-dark/20" />
            </div>
            <div className="flex flex-col lg:flex-row items-center justify-center text-center gap-2">
                {step !== "Confirmation" ? (
                    <>
                        <div className="w-7 h-7 flex items-center justify-center bg-bg-light/50 border border-border-dark/20 text-heading text-xs font-medium rounded-full">
                            3
                        </div>
                        <span className="text-xs lg:text-sm font-medium text-heading">Confirmation</span>
                    </>
                ) : (
                    <>
                        <div className="w-7 h-7 flex items-center justify-center bg-gold text-white rounded-full">
                            <Check size={"1rem"} />
                        </div>
                        <span className="text-xs lg:text-sm font-medium text-heading">Confirmed</span>
                    </>
                )}
            </div>
        </div>
    );
}
