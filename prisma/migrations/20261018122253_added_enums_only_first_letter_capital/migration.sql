/*
  Warnings:

  - The values [MASTERCARD,VISA,PAYPAL] on the enum `PaymentMethod` will be removed. If these variants are still used in the database, this will fail.
  - The values [PENDING,COMPLETED,FAILED,REFUNDED] on the enum `PaymentStatus` will be removed. If these variants are still used in the database, this will fail.
  - The values [PENDING,CONFIRMED,COMPLETED,CANCELED] on the enum `ReservationStatus` will be removed. If these variants are still used in the database, this will fail.
  - The values [STANDARD,DELUXE,EXECUTIVE,SUITE] on the enum `RoomType` will be removed. If these variants are still used in the database, this will fail.
  - The values [CITY,GARDEN,POOL,SEA,NONE] on the enum `RoomView` will be removed. If these variants are still used in the database, this will fail.

*/
-- AlterEnum
BEGIN;
CREATE TYPE "PaymentMethod_new" AS ENUM ('Mastercard', 'Visa', 'PayPal');
ALTER TABLE "Payment" ALTER COLUMN "method" TYPE "PaymentMethod_new" USING ("method"::text::"PaymentMethod_new");
ALTER TYPE "PaymentMethod" RENAME TO "PaymentMethod_old";
ALTER TYPE "PaymentMethod_new" RENAME TO "PaymentMethod";
DROP TYPE "public"."PaymentMethod_old";
COMMIT;

-- AlterEnum
BEGIN;
CREATE TYPE "PaymentStatus_new" AS ENUM ('Pending', 'Completed', 'Failed', 'Refunded');
ALTER TABLE "Payment" ALTER COLUMN "status" TYPE "PaymentStatus_new" USING ("status"::text::"PaymentStatus_new");
ALTER TYPE "PaymentStatus" RENAME TO "PaymentStatus_old";
ALTER TYPE "PaymentStatus_new" RENAME TO "PaymentStatus";
DROP TYPE "public"."PaymentStatus_old";
COMMIT;

-- AlterEnum
BEGIN;
CREATE TYPE "ReservationStatus_new" AS ENUM ('Pending', 'Confirmed', 'Completed', 'Canceled');
ALTER TABLE "public"."Reservation" ALTER COLUMN "status" DROP DEFAULT;
ALTER TABLE "Reservation" ALTER COLUMN "status" TYPE "ReservationStatus_new" USING ("status"::text::"ReservationStatus_new");
ALTER TYPE "ReservationStatus" RENAME TO "ReservationStatus_old";
ALTER TYPE "ReservationStatus_new" RENAME TO "ReservationStatus";
DROP TYPE "public"."ReservationStatus_old";
ALTER TABLE "Reservation" ALTER COLUMN "status" SET DEFAULT 'Pending';
COMMIT;

-- AlterEnum
BEGIN;
CREATE TYPE "RoomType_new" AS ENUM ('Standard', 'Deluxe', 'Executive', 'Suite');
ALTER TABLE "public"."Room" ALTER COLUMN "type" DROP DEFAULT;
ALTER TABLE "Room" ALTER COLUMN "type" TYPE "RoomType_new" USING ("type"::text::"RoomType_new");
ALTER TYPE "RoomType" RENAME TO "RoomType_old";
ALTER TYPE "RoomType_new" RENAME TO "RoomType";
DROP TYPE "public"."RoomType_old";
ALTER TABLE "Room" ALTER COLUMN "type" SET DEFAULT 'Standard';
COMMIT;

-- AlterEnum
BEGIN;
CREATE TYPE "RoomView_new" AS ENUM ('City', 'Garden', 'Pool', 'Sea', 'None');
ALTER TABLE "public"."Room" ALTER COLUMN "view" DROP DEFAULT;
ALTER TABLE "Room" ALTER COLUMN "view" TYPE "RoomView_new" USING ("view"::text::"RoomView_new");
ALTER TYPE "RoomView" RENAME TO "RoomView_old";
ALTER TYPE "RoomView_new" RENAME TO "RoomView";
DROP TYPE "public"."RoomView_old";
ALTER TABLE "Room" ALTER COLUMN "view" SET DEFAULT 'None';
COMMIT;

-- AlterTable
ALTER TABLE "Reservation" ALTER COLUMN "status" SET DEFAULT 'Pending';

-- AlterTable
ALTER TABLE "Room" ALTER COLUMN "view" SET DEFAULT 'None',
ALTER COLUMN "type" SET DEFAULT 'Standard';
