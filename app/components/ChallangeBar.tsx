import { CalendarDays, CheckCheck, CreditCard } from "lucide-react";

type BookingSteps = "Checkout" | "Payment" | "Confirmation";

export default function ChallangeBar({ step }: { step: BookingSteps }) {
    return (
        <div className="relative w-full flex items-start">
            <div className="absolute top-3 left-0 w-full flex items-start justify-center rounded-full z-1 overflow-hidden">
                <div className="w-full h-2 bg-neutral-200 flex">
                    <div className={`w-full h-2 bg-gold-dark${step === "Checkout" ? " rounded-r-full" : ""}`} />
                    <div className={`w-full h-2 ${step === "Checkout" ? "bg-neutral-200" : "bg-gold-dark"}`} />
                </div>

                <div className="w-full h-2 bg-neutral-200 flex">
                    <div
                        className={`w-full h-2 ${step === "Payment" ? "bg-gold-dark rounded-r-full" : step === "Confirmation" ? "bg-gold-dark" : "bg-neutral-200"}`}
                    />
                    <div
                        className={`w-full h-2 ${step === "Payment" ? "bg-neutral-200" : step === "Confirmation" ? "bg-gold-dark" : "bg-neutral-200"}`}
                    />
                </div>
                <div
                    className={`w-full h-2 ${step === "Confirmation" ? "bg-gold-dark" : "bg-neutral-200"} rounded-r-full`}
                ></div>
            </div>
            <div className="w-full h-full flex items-start justify-center rounded-lg z-2">
                <div className="w-full max-w-1/3 rounded-l-full">
                    <div className="w-full flex flex-col items-center justify-center gap-1.5">
                        <div className="p-1.5 bg-gold-dark border border-transparent shadow-xl rounded-full">
                            <CalendarDays size={"1.25rem"} className="text-white" />
                        </div>
                        <span className="text-gold-dark text-sm font-semibold">Checkout</span>
                    </div>
                </div>
                <div className="w-full h-full flex items-start justify-center rounded-lg z-2">
                    <div className="w-full max-w-1/3 rounded-l-full">
                        <div className="w-full flex flex-col items-center justify-center gap-1.5">
                            {step === "Payment" || step === "Confirmation" ? (
                                <>
                                    <div className="p-1.5 bg-gold-dark border border-transparent shadow-xl rounded-full">
                                        <CreditCard size={"1.25rem"} className="text-white" />
                                    </div>
                                    <span className="text-gold-dark text-sm font-semibold">Payment</span>
                                </>
                            ) : (
                                <>
                                    <div className="p-1.5 bg-cream border border-border-gray shadow-xl rounded-full">
                                        <CreditCard size={"1.25rem"} className="text-ink" />
                                    </div>
                                    <span className="text-ink text-sm font-medium">Payment</span>
                                </>
                            )}
                        </div>
                    </div>
                </div>
                <div className="w-full h-full flex items-start justify-center rounded-lg z-2">
                    <div className="w-full max-w-1/3 rounded-l-full">
                        <div className="w-full flex flex-col items-center justify-center gap-1.5">
                            {step === "Confirmation" ? (
                                <>
                                    <div className="p-1.5 bg-gold-dark border border-transparent shadow-xl rounded-full">
                                        <CheckCheck size={"1.25rem"} className="text-white" />
                                    </div>
                                    <span className="text-gold-dark text-sm font-semibold">Confirmation</span>
                                </>
                            ) : (
                                <>
                                    <div className="p-1.5 bg-cream border border-border-gray shadow-xl rounded-full">
                                        <CheckCheck size={"1.25rem"} className="text-ink" />
                                    </div>
                                    <span className="text-ink text-sm font-medium">Confirmation</span>
                                </>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
