-- AlterTable
ALTER TABLE "user" ADD COLUMN     "countryName" TEXT,
ADD COLUMN     "gender" INTEGER NOT NULL DEFAULT 0,
ADD COLUMN     "phoneNumber" TEXT;
