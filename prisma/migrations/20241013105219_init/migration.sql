/*
  Warnings:

  - You are about to drop the column `Status` on the `Leaves` table. All the data in the column will be lost.
  - You are about to drop the column `Create_Date` on the `PaySleep` table. All the data in the column will be lost.
  - You are about to drop the column `Status` on the `PaySleep` table. All the data in the column will be lost.
  - Added the required column `Position` to the `Leaves` table without a default value. This is not possible if the table is not empty.
  - Made the column `JerseyNum` on table `Leaves` required. This step will fail if there are existing NULL values in that column.
  - Added the required column `JerseyNum` to the `PaySleep` table without a default value. This is not possible if the table is not empty.
  - Added the required column `Position` to the `PaySleep` table without a default value. This is not possible if the table is not empty.
  - Made the column `Pay_Date` on table `PaySleep` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "Leaves" DROP COLUMN "Status",
ADD COLUMN     "Position" TEXT NOT NULL,
ALTER COLUMN "JerseyNum" SET NOT NULL,
ALTER COLUMN "Start_Date" DROP DEFAULT;

-- AlterTable
ALTER TABLE "PaySleep" DROP COLUMN "Create_Date",
DROP COLUMN "Status",
ADD COLUMN     "JerseyNum" TEXT NOT NULL,
ADD COLUMN     "Position" TEXT NOT NULL,
ALTER COLUMN "Pay_Date" SET NOT NULL;

-- DropEnum
DROP TYPE "LeaveStatus";
