/*
  Warnings:

  - Added the required column `doorNumber` to the `Room` table without a default value. This is not possible if the table is not empty.
  - Added the required column `floorNumber` to the `Room` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Room" ADD COLUMN     "doorNumber" INTEGER NOT NULL,
ADD COLUMN     "floorNumber" INTEGER NOT NULL;
