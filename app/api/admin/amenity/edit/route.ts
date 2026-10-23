import { AmenityPartial } from "@/app/action/admin/amenity/edit.action";
import { EditAmenityResponse } from "@/app/components/admin/view/amenity/AdminEditAmenity";
import { getUserSession } from "@/lib/auth.server";
import { prisma } from "@/lib/prisma";
import { MAX_AMENITY_DESCRIPTION, MAX_AMENITY_NAME, MIN_AMENITY_DESCRIPTION, MIN_AMENITY_NAME } from "@/utils/_variables";
import { NextRequest, NextResponse } from "next/server";
import z from "zod";

const editAmenitySchema = z.object({
    userId: z.string(),
    amenityId: z.number().int(),
    newAmenityData: z.object({
        name: z.string().min(MIN_AMENITY_NAME).max(MAX_AMENITY_NAME),
        description: z.string().min(MIN_AMENITY_DESCRIPTION).max(MAX_AMENITY_DESCRIPTION),
        status: z.boolean(),
    }),
});

export async function POST(request: NextRequest): Promise<NextResponse<EditAmenityResponse>> {
    try {
        const session = await getUserSession();
        const body = await request.json();
        const result = editAmenitySchema.safeParse(body);

        if (!result.success) {
            return NextResponse.json({ success: false, message: "Invalid request data." }, { status: 400 });
        }

        const { userId, amenityId, newAmenityData } = result.data;

        if (!session?.user || session.user.id !== userId || !session.user.isAdmin) {
            return NextResponse.json({ success: false, message: "You are not authorized." }, { status: 401 });
        }

        const amenity = await prisma.amenity.findUnique({
            where: { id: amenityId },
        });

        if (!amenity) {
            return NextResponse.json({ success: false, message: "Invalid amenity id." }, { status: 404 });
        }

        const amenityUpdated = await prisma.amenity.update({
            where: {
                id: amenity.id,
            },
            data: {
                name: newAmenityData.name,
                description: newAmenityData.description,
                status: newAmenityData.status,
            },
        });

        return NextResponse.json(
            { success: true, message: `${newAmenityData.name} amenity was updated.`, amenity: amenityUpdated },
            { status: 201 },
        );
    } catch {
        return NextResponse.json(
            { success: false, message: "Something went wrong. Failed to update the amenity." },
            { status: 400 },
        );
    }
}
