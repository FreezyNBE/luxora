export default async function BookingPageLayout({
    params,
    children,
}: {
    params: Promise<{ bookingId: string }>;
    children: React.ReactNode;
}) {
    const { bookingId } = await params;

    return (
        <div className="w-full bg-cream">
            <div className="w-full flex flex-col max-md:mb-3">
                <div className="relative w-full h-50">
                    <img src="/img/tmp3.png" alt="Contact Us" className="w-full h-full object-cover" />

                    <div className="absolute inset-0 bg-black/60" />
                    <div className="absolute inset-0 w-full h-full text-white">
                        <div className="h-full flex flex-col items-center justify-center gap-y-3 text-center">
                            <h1 className="text-5xl tracking-wide font-semibold">Checkout</h1>
                            <span className="w-full max-w-sm md:max-w-md text-sm">
                                Complete your booking in just a few simple steps.
                            </span>
                        </div>
                    </div>
                </div>
            </div>
            <div className="w-full p-5">{children}</div>
        </div>
    );
}
