import AdminListAmenity from "@/app/components/admin/view/amenity/AdminListAmenity";
import { prisma } from "@/lib/prisma";
import { isValidPageNumber } from "@/utils/_functions";
import { ROWS_PER_PAGE } from "@/utils/admin/_admin_variables";
import { redirect } from "next/navigation";

export default async function ListAmenitiesPage({ searchParams }: { searchParams: Promise<{ page?: string }> }) {
    const { page } = await searchParams;

    if (page !== undefined && isValidPageNumber(page)) {
        return redirect("/admin/amenities");
    }

    const currentPage = page === undefined ? 1 : Number(page);

    const [amenities, totalAmenities] = await prisma.$transaction([
        prisma.amenity.findMany({
            take: ROWS_PER_PAGE,
            skip: ROWS_PER_PAGE * (currentPage - 1),
            orderBy: {
                id: "desc",
            },
        }),
        prisma.amenity.count(),
    ]);

    const totalPages = Math.ceil(totalAmenities / ROWS_PER_PAGE);

    if (currentPage > totalPages && totalPages > 0) {
        return redirect(`/admin/amenities?page=${totalPages}`);
    }

    return (
        <AdminListAmenity amenities={amenities} page={currentPage} totalAmenities={totalAmenities} totalPages={totalPages} />
    );
}
