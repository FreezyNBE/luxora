/*
  Warnings:

  - Made the column `countryName` on table `user` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "user" ALTER COLUMN "countryName" SET NOT NULL,
ALTER COLUMN "countryName" SET DEFAULT 'Romania';
