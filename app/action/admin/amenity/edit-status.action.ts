"use server";

import { EditAmenityStatusResponse } from "@/app/components/admin/view/amenity/AdminListAmenity";
import { getUserSession } from "@/lib/auth.server";
import { AmenityModel } from "@/types/_amenities";
import { API_URL } from "@/utils/_variables";
import { revalidatePath } from "next/cache";
import { headers } from "next/headers";
import { redirect } from "next/navigation";

export default async function editAmenityStatus(amenity: AmenityModel, newStatus: boolean): Promise<EditAmenityStatusResponse> {
    const session = await getUserSession();

    if (!session?.user || !session.user.isAdmin) {
        return redirect("/");
    }

    try {
        const cookie = (await headers()).get("cookie");
        const request = await fetch(`${API_URL}/admin/amenity/edit/status`, {
            method: "POST",
            body: JSON.stringify({
                userId: session?.user.id,
                amenityId: amenity.id,
                amenityStatus: newStatus,
            }),
            headers: {
                "Content-type": "application/json",
                ...(cookie ? { Cookie: cookie } : {}),
            },
        });

        const response: EditAmenityStatusResponse = await request.json();

        revalidatePath("/admin/amenities");

        return response;
    } catch (error) {
        console.log("server actions error", error);
        return {
            success: false,
            message: "Something went wrong. Failed to update the amenity.",
        };
    }
}
