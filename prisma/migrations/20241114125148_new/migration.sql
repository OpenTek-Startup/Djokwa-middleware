/*
  Warnings:

  - You are about to drop the column `Logo` on the `Service` table. All the data in the column will be lost.
  - Added the required column `LowStockAlert` to the `Product` table without a default value. This is not possible if the table is not empty.
  - Added the required column `UpdatedAt` to the `Product` table without a default value. This is not possible if the table is not empty.
  - Added the required column `Price` to the `Service` table without a default value. This is not possible if the table is not empty.
  - Added the required column `UpdatedAt` to the `Service` table without a default value. This is not possible if the table is not empty.

*/
-- CreateEnum
CREATE TYPE "TimeFrame" AS ENUM ('Daily', 'Weekly', 'Monthly', 'Annual');

-- AlterTable
ALTER TABLE "Budget" ADD COLUMN     "ActualExpenses" DOUBLE PRECISION,
ADD COLUMN     "CreatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "TimeFrame" TEXT NOT NULL DEFAULT 'default_value',
ADD COLUMN     "UpdatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ALTER COLUMN "Description" DROP NOT NULL;

-- AlterTable
ALTER TABLE "Product" ADD COLUMN     "CreatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "Description" TEXT,
ADD COLUMN     "LowStockAlert" INTEGER NOT NULL,
ADD COLUMN     "UpdatedAt" TIMESTAMP(3) NOT NULL;

-- AlterTable
ALTER TABLE "Service" DROP COLUMN "Logo",
ADD COLUMN     "CreatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "Description" TEXT,
ADD COLUMN     "Price" DOUBLE PRECISION NOT NULL,
ADD COLUMN     "Revenue" DOUBLE PRECISION NOT NULL DEFAULT 0,
ADD COLUMN     "UpdatedAt" TIMESTAMP(3) NOT NULL;

-- CreateTable
CREATE TABLE "Transaction" (
    "Transaction_ID" SERIAL NOT NULL,
    "Product_ID" INTEGER,
    "Service_ID" INTEGER,
    "Quantity" INTEGER,
    "TotalAmount" DOUBLE PRECISION NOT NULL,
    "TransactionDate" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Transaction_pkey" PRIMARY KEY ("Transaction_ID")
);

-- AddForeignKey
ALTER TABLE "Transaction" ADD CONSTRAINT "Transaction_Product_ID_fkey" FOREIGN KEY ("Product_ID") REFERENCES "Product"("Product_ID") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Transaction" ADD CONSTRAINT "Transaction_Service_ID_fkey" FOREIGN KEY ("Service_ID") REFERENCES "Service"("Service_ID") ON DELETE SET NULL ON UPDATE CASCADE;
