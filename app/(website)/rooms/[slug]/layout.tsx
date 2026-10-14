import BreadCrumbs from "@/app/components/Breadcrumbs";

export default function RoomPageLayout({ children }: { children: React.ReactNode }) {
    return (
        <div className="px-3 md:px-5 xl:px-10 py-5 bg-cream">
            {/* Breadcrumb */}
            <BreadCrumbs
                links={[
                    {
                        name: "Rooms",
                        url: "/rooms",
                    },
                    {
                        name: "Deluxe Ocean View Room",
                        url: "/rooms/deluxe-room",
                    },
                ]}
            />

            {children}
        </div>
    );
}
