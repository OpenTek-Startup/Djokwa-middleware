/*
  Warnings:

  - Added the required column `Department` to the `Expenses` table without a default value. This is not possible if the table is not empty.
  - Added the required column `Status` to the `Expenses` table without a default value. This is not possible if the table is not empty.
  - Added the required column `Type` to the `Expenses` table without a default value. This is not possible if the table is not empty.

*/
-- CreateEnum
CREATE TYPE "ExpenseType" AS ENUM ('PAYROLL', 'UTILITIES', 'MAINTENANCE', 'SUPPLIES', 'OTHER');

-- CreateEnum
CREATE TYPE "ApprovalStatus" AS ENUM ('PENDING', 'APPROVED', 'REJECTED');

-- AlterTable
ALTER TABLE "Expenses" ADD COLUMN     "ApprovedBy" INTEGER,
ADD COLUMN     "Department" TEXT NOT NULL,
ADD COLUMN     "Status" "ApprovalStatus" NOT NULL,
ADD COLUMN     "Type" "ExpenseType" NOT NULL,
ADD COLUMN     "Vendor" TEXT;

-- AddForeignKey
ALTER TABLE "Expenses" ADD CONSTRAINT "Expenses_ApprovedBy_fkey" FOREIGN KEY ("ApprovedBy") REFERENCES "Personnel"("Staff_ID") ON DELETE SET NULL ON UPDATE CASCADE;
