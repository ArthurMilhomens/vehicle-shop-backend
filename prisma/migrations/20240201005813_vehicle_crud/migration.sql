/*
  Warnings:

  - Added the required column `image` to the `Vehicle` table without a default value. This is not possible if the table is not empty.
  - Added the required column `price` to the `Vehicle` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Vehicle" ADD COLUMN     "image" TEXT NOT NULL,
ADD COLUMN     "price" DOUBLE PRECISION NOT NULL;
