/*
  Warnings:

  - The primary key for the `Product` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `Product_ID` on the `Product` table. All the data in the column will be lost.
  - The primary key for the `Service` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `Service_ID` on the `Service` table. All the data in the column will be lost.
  - The primary key for the `Transaction` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `Transaction_ID` on the `Transaction` table. All the data in the column will be lost.
  - The primary key for the `Warehouse` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `Warehouse_ID` on the `Warehouse` table. All the data in the column will be lost.
  - Changed the type of `Status` on the `Leaves` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- DropForeignKey
ALTER TABLE "Payment" DROP CONSTRAINT "Payment_Service_ID_fkey";

-- DropForeignKey
ALTER TABLE "Product" DROP CONSTRAINT "Product_Warehouse_ID_fkey";

-- DropForeignKey
ALTER TABLE "Transaction" DROP CONSTRAINT "Transaction_Product_ID_fkey";

-- DropForeignKey
ALTER TABLE "Transaction" DROP CONSTRAINT "Transaction_Service_ID_fkey";

-- AlterTable
ALTER TABLE "Leaves" DROP COLUMN "Status",
ADD COLUMN     "Status" "ApprovalStatus" NOT NULL;

-- AlterTable
ALTER TABLE "Product" DROP CONSTRAINT "Product_pkey",
DROP COLUMN "Product_ID",
ADD COLUMN     "Id" SERIAL NOT NULL,
ADD CONSTRAINT "Product_pkey" PRIMARY KEY ("Id");

-- AlterTable
ALTER TABLE "Service" DROP CONSTRAINT "Service_pkey",
DROP COLUMN "Service_ID",
ADD COLUMN     "Id" SERIAL NOT NULL,
ADD CONSTRAINT "Service_pkey" PRIMARY KEY ("Id");

-- AlterTable
ALTER TABLE "Transaction" DROP CONSTRAINT "Transaction_pkey",
DROP COLUMN "Transaction_ID",
ADD COLUMN     "Id" SERIAL NOT NULL,
ADD CONSTRAINT "Transaction_pkey" PRIMARY KEY ("Id");

-- AlterTable
ALTER TABLE "Warehouse" DROP CONSTRAINT "Warehouse_pkey",
DROP COLUMN "Warehouse_ID",
ADD COLUMN     "Id" SERIAL NOT NULL,
ADD CONSTRAINT "Warehouse_pkey" PRIMARY KEY ("Id");

-- DropEnum
DROP TYPE "LeaveStatus";

-- AddForeignKey
ALTER TABLE "Payment" ADD CONSTRAINT "Payment_Service_ID_fkey" FOREIGN KEY ("Service_ID") REFERENCES "Service"("Id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Product" ADD CONSTRAINT "Product_Warehouse_ID_fkey" FOREIGN KEY ("Warehouse_ID") REFERENCES "Warehouse"("Id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Transaction" ADD CONSTRAINT "Transaction_Product_ID_fkey" FOREIGN KEY ("Product_ID") REFERENCES "Product"("Id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Transaction" ADD CONSTRAINT "Transaction_Service_ID_fkey" FOREIGN KEY ("Service_ID") REFERENCES "Service"("Id") ON DELETE SET NULL ON UPDATE CASCADE;
