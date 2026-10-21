import { RoomType, RoomView } from "@/generated/prisma/enums";

export type RoomModel = {
    id: string;
    name: string;
    description: string | null;
    type: RoomType;
    view: RoomView;
    areaSqm: number;
    pricePerNight: string;
    maxGuests: number;
    maxNights: number;
    image: string | null;
    images: string[];
    doorNumber: number;
    floorNumber: number;
    availableFrom: Date | null;
    availableUntil: Date | null;
    isActive: boolean;
    createdAt: Date;
    updatedAt: Date;
};
