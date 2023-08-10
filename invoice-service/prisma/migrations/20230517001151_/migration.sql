/*
  Warnings:

  - You are about to drop the `Product` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `_InvoiceToProduct` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "_InvoiceToProduct" DROP CONSTRAINT "_InvoiceToProduct_A_fkey";

-- DropForeignKey
ALTER TABLE "_InvoiceToProduct" DROP CONSTRAINT "_InvoiceToProduct_B_fkey";

-- AlterTable
ALTER TABLE "Invoice" ADD COLUMN     "productIds" TEXT[];

-- DropTable
DROP TABLE "Product";

-- DropTable
DROP TABLE "_InvoiceToProduct";
