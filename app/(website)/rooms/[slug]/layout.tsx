import BreadCrumbs from "@/app/components/Breadcrumbs";

export default function RoomPageLayout({ children }: { children: React.ReactNode }) {
    return (
        <div className="px-10 py-5 border-t border-t-border-light bg-cream">
            {/* Breadcrumb */}
            <BreadCrumbs
                links={[
                    {
                        name: "Rooms",
                        url: "/rooms",
                    },
                    {
                        name: "Deluxe Room",
                        url: "/rooms/deluxe-room",
                    },
                ]}
            />

            {children}
        </div>
    );
}
