/*
  Warnings:

  - Added the required column `category` to the `Product` table without a default value. This is not possible if the table is not empty.
  - Changed the type of `size` on the `ProductVariant` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- CreateEnum
CREATE TYPE "Category" AS ENUM ('SHIRTS', 'SNEAKERS', 'PANTS', 'COATS', 'OUTFIT');

-- AlterTable
ALTER TABLE "Product" ADD COLUMN     "category" "Category" NOT NULL;

-- AlterTable
ALTER TABLE "ProductVariant" DROP COLUMN "size",
ADD COLUMN     "size" TEXT NOT NULL;

-- DropEnum
DROP TYPE "public"."Size";
