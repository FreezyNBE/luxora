import AdminEditAmenity from "@/app/components/admin/view/amenity/AdminEditAmenity";
import { prisma } from "@/lib/prisma";
import { redirect } from "next/navigation";

export default async function EditAmenityPage({ params }: { params: Promise<{ id: string }> }) {
    const { id } = await params;

    const amenity = await prisma.amenity.findFirst({ where: { id: Number(id) } });

    if (!amenity) {
        return redirect("/admin/amenities");
    }

    return <AdminEditAmenity amenityData={amenity} />;
}
