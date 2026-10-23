/*
  Warnings:

  - Added the required column `description` to the `Amenity` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Amenity" ADD COLUMN     "description" TEXT NOT NULL;
