import { EditRoomResponse } from "@/app/components/admin/view/room/AdminEditRoom";
import { Prisma } from "@/generated/prisma/client";
import { RoomType, RoomView } from "@/generated/prisma/enums";
import { getUserSession } from "@/lib/auth.server";
import { prisma } from "@/lib/prisma";
import { getAllowTypePictures, isAmountDecimal, isValidDate } from "@/utils/_functions";
import {
    ALLOWED_PICTURE_TYPES,
    MAX_DOORS_PER_FLOOR,
    MAX_FLOORS,
    MAX_IMAGE_SIZE,
    MAX_GALLERY_IMAGES,
    MAX_ROOM_GUESTS,
    MAX_ROOM_NIGHTS,
    MAX_IMAGE_SIZE_MB,
    MIN_ROOM_NAME,
    MAX_ROOM_NAME,
    MAX_ROOM_DESCRIPTION,
    MIN_ROOM_DESCRIPTION,
    MAX_ROOM_SIZE,
} from "@/utils/_variables";
import { del, put } from "@vercel/blob";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest): Promise<NextResponse<EditRoomResponse>> {
    try {
        const session = await getUserSession();

        const formData = await request.formData();
        const userId = formData.get("userId") as string;

        if (!session?.user || session.user.id !== userId || !session.user.isAdmin) {
            return NextResponse.json({ success: false, message: "You are not authorized." }, { status: 401 });
        }

        // Get the formData
        const roomId = formData.get("roomId") as string;
        const room = await prisma.room.findFirst({
            where: { id: roomId },
        });

        if (!room) {
            return NextResponse.json({ success: false, message: "Invalid room." }, { status: 404 });
        }

        const name = formData.get("name") as string;
        const type = formData.get("type") as string;
        const description = formData.get("description") as string;
        const maxGuests = Number(formData.get("maxGuests"));
        const roomSize = Number(formData.get("roomSize"));
        const roomView = formData.get("roomView") as string;
        const floor = Number(formData.get("floor"));
        const door = Number(formData.get("door"));
        const pricePerNight = Number(formData.get("pricePerNight"));
        const maxNights = Number(formData.get("maxNights"));
        const availableFrom = formData.get("availableFrom") as string;
        const availableUntil = formData.get("availableUntil") as string;
        const isActive = formData.get("isActive") as string;

        const originalImage = (formData.get("originalImage") as string) === "1" ? true : false;
        const image = formData.get("image") as File;

        const originalImages = formData.getAll("originalImages") as string[];
        const images = formData.getAll("images") as File[];

        if (!originalImage && image && !ALLOWED_PICTURE_TYPES.includes(image.type)) {
            return NextResponse.json(
                {
                    success: false,
                    message: `Error when uploading main image. Only .${getAllowTypePictures(ALLOWED_PICTURE_TYPES)} types are acceptable.`,
                },
                { status: 403 },
            );
        }

        if (!originalImage && image) {
            if (!ALLOWED_PICTURE_TYPES.includes(image.type)) {
                return NextResponse.json(
                    {
                        success: false,
                        message: `Error when uploading main image. Only .${getAllowTypePictures(ALLOWED_PICTURE_TYPES)} types are acceptable.`,
                    },
                    { status: 403 },
                );
            }

            if (image.size > MAX_IMAGE_SIZE) {
                return NextResponse.json(
                    { success: false, message: `Main image must be ${MAX_IMAGE_SIZE_MB} MB or smaller.` },
                    { status: 403 },
                );
            }
        }

        for (const image of images) {
            if (!ALLOWED_PICTURE_TYPES.includes(image.type)) {
                return NextResponse.json({
                    success: false,
                    message: `Error when uploading gallery images. Acceptable types are: .${getAllowTypePictures(ALLOWED_PICTURE_TYPES)}.`,
                });
            }

            if (image.size > MAX_IMAGE_SIZE) {
                return NextResponse.json(
                    { success: false, message: `Gallery images must be ${MAX_IMAGE_SIZE} MB or smaller.` },
                    { status: 403 },
                );
            }
        }

        if (originalImages.length + images.length > MAX_GALLERY_IMAGES) {
            return NextResponse.json(
                { success: false, message: `Too many gallery images (max. ${MAX_GALLERY_IMAGES}).` },
                { status: 403 },
            );
        }

        if (name.length < MIN_ROOM_NAME || name.length > MAX_ROOM_NAME) {
            return NextResponse.json(
                {
                    success: false,
                    message: `Room name length must be between ${MIN_ROOM_NAME} and ${MAX_ROOM_NAME} characters.`,
                },
                { status: 403 },
            );
        }

        if (description.length < MIN_ROOM_DESCRIPTION || description.length > MAX_ROOM_DESCRIPTION) {
            return NextResponse.json(
                {
                    success: false,
                    message: `Room description length must be between ${MIN_ROOM_DESCRIPTION} and ${MAX_ROOM_DESCRIPTION} characters.`,
                },
                { status: 403 },
            );
        }

        if (!Object.values(RoomType).includes(type as RoomType)) {
            return NextResponse.json({ success: false, message: "The selected room type is invalid." }, { status: 403 });
        }

        if (!Object.values(RoomView).includes(roomView as RoomView)) {
            return NextResponse.json({ success: false, message: "The selected room view is invalid." }, { status: 403 });
        }

        if (!Number.isSafeInteger(maxGuests) || maxGuests < 1 || maxGuests > MAX_ROOM_GUESTS) {
            return NextResponse.json(
                { success: false, message: `Max guests must be between 1 and ${MAX_ROOM_GUESTS}.` },
                { status: 403 },
            );
        }

        if (!Number.isSafeInteger(roomSize) || roomSize < 1 || roomSize > MAX_ROOM_SIZE) {
            return NextResponse.json(
                { success: false, message: `Room size (sq) must be between 1 and ${MAX_ROOM_SIZE}.` },
                { status: 403 },
            );
        }

        if (!Number.isSafeInteger(floor) || floor < 1 || floor > MAX_FLOORS) {
            return NextResponse.json({ success: false, message: `Invalid floor number (1-${MAX_FLOORS}).` }, { status: 403 });
        }

        if (!Number.isSafeInteger(door) || door < 1 || door > MAX_FLOORS * MAX_DOORS_PER_FLOOR) {
            return NextResponse.json(
                { success: false, message: `Invalid door number (1-${MAX_FLOORS * MAX_DOORS_PER_FLOOR}).` },
                { status: 403 },
            );
        }

        if (!Number.isSafeInteger(maxNights) || maxNights < 1 || maxNights > MAX_ROOM_NIGHTS) {
            return NextResponse.json(
                { success: false, message: `Maximum stays (nights) must be between 1 and ${MAX_ROOM_NIGHTS}.` },
                { status: 403 },
            );
        }

        if (!isAmountDecimal(pricePerNight.toString())) {
            return NextResponse.json(
                { success: false, message: "Price per night is not decimal (eg: 100.00)." },
                { status: 403 },
            );
        }

        if (pricePerNight < 1 || pricePerNight >= 500.0) {
            return NextResponse.json(
                { success: false, message: "Invalid price per night (acceptable value must be between 1 and 500.00)." },
                { status: 403 },
            );
        }

        const from = new Date(availableFrom);
        const until = new Date(availableUntil);

        if (!isValidDate(from) || !isValidDate(until)) {
            return NextResponse.json({ success: false, message: "Invalid availability dates." }, { status: 403 });
        }

        if (from >= until) {
            return NextResponse.json(
                { success: false, message: "The available-from date must be before available-until date." },
                { status: 403 },
            );
        }

        const currentDate = Date.now();

        let imageBlob: { uploaded: boolean; url: string } = {
            uploaded: false,
            url: "",
        };
        let imagesUrl: string[] = [];

        if (!originalImage && room.image) {
            try {
                await del(room.image);
            } catch {}
        }

        if (!originalImage && image) {
            try {
                const imageName = currentDate + "-" + room.id;
                const blob = await put(imageName, image, {
                    access: "public",
                    addRandomSuffix: true,
                });

                imageBlob.uploaded = true;
                imageBlob.url = blob.url;
            } catch {
                imageBlob.uploaded = false;
            }
        }

        if (images) {
            try {
                imagesUrl = await Promise.all(
                    images.map(async (i, index) => {
                        const galleryImageName = currentDate + `-${index}-` + room.id;
                        const blob = await put(galleryImageName, i, {
                            access: "public",
                            addRandomSuffix: true,
                        });

                        return blob.url;
                    }),
                );
            } catch {}
        }

        // Delete old gallery images
        if (room.images.length) {
            const deleteImages = room.images.filter((i) => !originalImages.includes(i));

            try {
                await Promise.all(
                    deleteImages.map(async (i) => {
                        await del(i);
                    }),
                );
            } catch {}
        }

        const updatedRoom = await prisma.room.update({
            where: {
                id: room.id,
            },
            data: {
                name,
                description,
                type: type as RoomType,
                view: roomView as RoomView,
                areaSqm: Number(roomSize),
                pricePerNight: Prisma.Decimal(pricePerNight),
                maxGuests: Number(maxGuests),
                maxNights: Number(maxNights),
                doorNumber: Number(door),
                floorNumber: Number(floor),
                isActive: isActive === "1" ? true : false,
                availableFrom: new Date(availableFrom),
                availableUntil: new Date(availableUntil),
                image: originalImage ? room.image : imageBlob.uploaded ? imageBlob.url : null,
                images: [...originalImages, ...imagesUrl],
            },
        });

        return NextResponse.json({
            success: true,
            message: `Room ${room.id} was updated succesfully.`,
            room: { ...updatedRoom, pricePerNight: updatedRoom.pricePerNight.toString() },
        });
    } catch {
        return NextResponse.json({ success: false, message: "Failed to save the changes." }, { status: 400 });
    }
}
