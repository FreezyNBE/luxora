import { NewAmenityResponse } from "@/app/components/admin/view/amenity/AdminCreateAmenity";
import { getUserSession } from "@/lib/auth.server";
import { prisma } from "@/lib/prisma";
import { MAX_AMENITY_DESCRIPTION, MAX_AMENITY_NAME, MIN_AMENITY_DESCRIPTION, MIN_AMENITY_NAME } from "@/utils/_variables";
import { NextRequest, NextResponse } from "next/server";
import z from "zod";

const createAmenitySchema = z.object({
    userId: z.string(),
    amenityName: z.string().min(MIN_AMENITY_NAME).max(MAX_AMENITY_NAME),
    amenityDescription: z.string().min(MIN_AMENITY_DESCRIPTION).max(MAX_AMENITY_DESCRIPTION),
    amenityStatus: z.boolean(),
});

export async function POST(request: NextRequest): Promise<NextResponse<NewAmenityResponse>> {
    try {
        const session = await getUserSession();
        const body = await request.json();
        const result = createAmenitySchema.safeParse(body);

        if (!result.success) {
            return NextResponse.json({ success: false, message: "Invalid request data." }, { status: 400 });
        }

        const { userId, amenityName, amenityDescription, amenityStatus } = result.data;

        if (!session?.user || session.user.id !== userId || !session.user.isAdmin) {
            return NextResponse.json({ success: false, message: "You are not authorized." }, { status: 401 });
        }

        const newAmenity = await prisma.amenity.create({
            data: {
                name: amenityName,
                description: amenityDescription,
                status: amenityStatus,
            },
        });

        return NextResponse.json({ success: true, message: `New amenity created. Id: ${newAmenity.id}` }, { status: 201 });
    } catch {
        return NextResponse.json(
            { success: false, message: "Something went wrong. Failed to add new amenity." },
            { status: 400 },
        );
    }
}
