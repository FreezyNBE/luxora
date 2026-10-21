import AdminEditRoom from "@/app/components/admin/view/AdminEditRoom";
import { prisma } from "@/lib/prisma";
import { RoomModel } from "@/types/_rooms";
import { redirect } from "next/navigation";

export default async function EditRoomPage({ params }: { params: Promise<{ id: string }> }) {
    const { id } = await params;

    const room = await prisma.room.findFirst({ where: { id } });

    if (!room) {
        return redirect("/admin/rooms");
    }

    const serializeRoom: RoomModel = { ...room, pricePerNight: room.pricePerNight.toString() };

    return <AdminEditRoom room={serializeRoom} />;
}
