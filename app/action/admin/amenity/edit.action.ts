"use server";

import { EditAmenityResponse } from "@/app/components/admin/view/amenity/AdminEditAmenity";
import { getUserSession } from "@/lib/auth.server";
import { AmenityModel } from "@/types/_amenities";
import { API_URL } from "@/utils/_variables";
import { revalidatePath } from "next/cache";
import { headers } from "next/headers";
import { redirect } from "next/navigation";

export type NewAmenityData = {
    name: string;
    description: string;
    status: boolean;
};

export type AmenityPartial = Pick<AmenityModel, "name" | "description" | "status">;

export default async function editAmenityAction(
    amenity: AmenityModel,
    newAmenityData: AmenityPartial,
): Promise<EditAmenityResponse> {
    const session = await getUserSession();

    if (!session?.user || !session.user.isAdmin) {
        return redirect("/");
    }

    try {
        const cookie = (await headers()).get("cookie");
        const request = await fetch(`${API_URL}/admin/amenity/edit`, {
            method: "POST",
            body: JSON.stringify({
                userId: session.user.id,
                amenityId: amenity.id,
                newAmenityData,
            }),
            headers: {
                ...(cookie ? { Cookie: cookie } : {}),
            },
        });

        const response: EditAmenityResponse = await request.json();

        if (!response.success) {
            return response;
        }

        revalidatePath(`/admin/amenities/edit/${amenity.id}`);

        return response;
    } catch {
        return {
            success: false,
            message: "Something went wrong. Failed to update the amenity.",
        };
    }
}
