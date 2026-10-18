export const API_URL = process.env.NEXT_PUBLIC_API_URL;

export const listMockAmenities = [
    "Wi-Fi",
    "Room Service",
    "Hair Dryer",
    "Air Conditioning",
    "Coffee Maker",
    "Iron & Ironing Board",
    "TV",
    "Safe",
    "Work Desk",
    "Mini Bar",
    "Balcony",
    "Jacuzzi",
];

export const GENDERS = ["Male", "Female"];

export const ALLOWED_PICTURE_TYPES = ["image/png", "image/jpeg", "image/jpg"];

export const MIN_ROOM_NAME = 5;
export const MAX_ROOM_NAME = 64;

export const MIN_ROOM_DESCRIPTION = 5;
export const MAX_ROOM_DESCRIPTION = 1000;

export const MAX_FLOORS = 12;
export const MAX_DOORS_PER_FLOOR = 6;
export const MAX_ROOM_GUESTS = 4;
export const MAX_ROOM_NIGHTS = 365;

export const MAX_ROOM_SIZE = 50;

export const MAX_GALLERY_IMAGES = 10;
export const MAX_IMAGE_SIZE_MB = 4.5; // 4.5 MB
export const MAX_IMAGE_SIZE = MAX_IMAGE_SIZE_MB * 1024 * 1024; // transform to bytes
