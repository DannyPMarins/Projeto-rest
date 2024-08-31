/*
  Warnings:

  - Changed the type of `measureNumber` on the `Meter` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- AlterTable
ALTER TABLE "Meter" DROP COLUMN "measureNumber",
ADD COLUMN     "measureNumber" INTEGER NOT NULL;
