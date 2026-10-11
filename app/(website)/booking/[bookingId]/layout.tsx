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
            <div className="w-full">{children}</div>
        </div>
    );
}
