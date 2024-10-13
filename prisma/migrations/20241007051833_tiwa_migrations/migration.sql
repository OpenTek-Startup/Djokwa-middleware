/*
  Warnings:

  - You are about to drop the column `Position` on the `Leaves` table. All the data in the column will be lost.
  - You are about to drop the column `JerseyNum` on the `PaySleep` table. All the data in the column will be lost.
  - You are about to drop the column `Position` on the `PaySleep` table. All the data in the column will be lost.
  - You are about to drop the column `profile_img` on the `Teacher` table. All the data in the column will be lost.
  - Added the required column `Status` to the `Leaves` table without a default value. This is not possible if the table is not empty.
  - Added the required column `Status` to the `PaySleep` table without a default value. This is not possible if the table is not empty.

*/
-- CreateEnum
CREATE TYPE "LeaveStatus" AS ENUM ('Pending', 'Approved', 'Denied');

-- AlterTable
ALTER TABLE "Leaves" DROP COLUMN "Position",
ADD COLUMN     "Status" "LeaveStatus" NOT NULL,
ALTER COLUMN "JerseyNum" DROP NOT NULL,
ALTER COLUMN "Start_Date" SET DEFAULT CURRENT_TIMESTAMP;

-- AlterTable
ALTER TABLE "PaySleep" DROP COLUMN "JerseyNum",
DROP COLUMN "Position",
ADD COLUMN     "Create_Date" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "Status" "ProgressStatus" NOT NULL,
ALTER COLUMN "Pay_Date" DROP NOT NULL;

-- AlterTable
ALTER TABLE "Teacher" DROP COLUMN "profile_img";
