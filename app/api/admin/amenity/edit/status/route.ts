import { EditAmenityStatusResponse } from "@/app/components/admin/view/amenity/AdminListAmenity";
import { getUserSession } from "@/lib/auth.server";
import { prisma } from "@/lib/prisma";
import { NextRequest, NextResponse } from "next/server";
import z from "zod";

const changeStatusSchema = z.object({
    userId: z.string(),
    amenityId: z.number().int(),
    amenityStatus: z.boolean(),
});

export async function POST(request: NextRequest): Promise<NextResponse<EditAmenityStatusResponse>> {
    try {
        const session = await getUserSession();
        const body = await request.json();

        const result = changeStatusSchema.safeParse(body);

        if (!result.success) {
            return NextResponse.json({ success: false, message: "Invalid request data." }, { status: 400 });
        }

        const { userId, amenityId, amenityStatus } = result.data;

        if (!session?.user || session.user.id !== userId || !session.user.isAdmin) {
            return NextResponse.json({ success: false, message: "You are not authorized." }, { status: 401 });
        }

        const amenity = await prisma.amenity.findFirst({
            where: { id: amenityId },
        });

        if (!amenity) {
            return NextResponse.json({ success: false, message: "Invalid amenity id." }, { status: 404 });
        }

        if (amenity.status === amenityStatus) {
            return NextResponse.json(
                { success: false, message: "Failed to update the amenity. Status is already set." },
                { status: 404 },
            );
        }

        await prisma.amenity.update({
            where: {
                id: amenity.id,
            },
            data: {
                status: amenityStatus,
            },
        });

        return NextResponse.json(
            { success: true, message: amenityStatus ? `${amenity.name} is now active.` : `${amenity.name} is now disabled.` },
            { status: 201 },
        );
    } catch (error) {
        console.log(error);
        return NextResponse.json(
            { success: false, message: "Something went wrong. Failed to update the amenity." },
            { status: 400 },
        );
    }
}
