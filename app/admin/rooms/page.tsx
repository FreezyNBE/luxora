import AdminListRooms from "@/app/components/admin/view/AdminListRooms";
import { prisma } from "@/lib/prisma";
import { isValidPageNumber } from "@/utils/_functions";
import { ROWS_PER_PAGE } from "@/utils/admin/_admin_variables";
import { redirect } from "next/navigation";

export default async function ListRoomsPage({ searchParams }: { searchParams: Promise<{ page?: string }> }) {
    const { page } = await searchParams;

    if (page !== undefined && isValidPageNumber(page)) {
        return redirect("/admin/rooms");
    }

    const currentPage = page === undefined ? 1 : Number(page);

    const [rooms, totalRooms] = await prisma.$transaction([
        prisma.room.findMany({
            take: ROWS_PER_PAGE,
            skip: ROWS_PER_PAGE * (currentPage - 1),
            orderBy: {
                id: "desc",
            },
        }),
        prisma.room.count(),
    ]);

    const totalPages = Math.ceil(totalRooms / ROWS_PER_PAGE);

    if (currentPage > totalPages && totalPages > 0) {
        return redirect(`/admin/rooms?page=${totalPages}`);
    }

    // Since 'pricePerNight' is using Prisma.Decimal, we must convert the value as String for Client Component
    const serializedRooms = rooms.map((room) => ({ ...room, pricePerNight: room.pricePerNight.toString() }));

    return <AdminListRooms rooms={serializedRooms} page={currentPage} totalRooms={totalRooms} totalPages={totalPages} />;
}
