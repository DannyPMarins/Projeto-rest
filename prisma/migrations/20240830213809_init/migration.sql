/*
  Warnings:

  - You are about to drop the `User` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE "User";

-- CreateTable
CREATE TABLE "Meter" (
    "id" TEXT NOT NULL,
    "measureNumber" TEXT NOT NULL,
    "measureDateTime" TIMESTAMP(3) NOT NULL,
    "measureType" TEXT NOT NULL,

    CONSTRAINT "Meter_pkey" PRIMARY KEY ("id")
);
