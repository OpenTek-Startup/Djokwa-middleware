/*
  Warnings:

  - You are about to drop the column `Class_ID` on the `Student` table. All the data in the column will be lost.
  - You are about to drop the `Class` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `_ClassToCourse` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `_ClassToStudent` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `_TeacherToclasses` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `classes` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "Absence" DROP CONSTRAINT "Absence_class_id_fkey";

-- DropForeignKey
ALTER TABLE "Assignment" DROP CONSTRAINT "Assignment_classId_fkey";

-- DropForeignKey
ALTER TABLE "Class" DROP CONSTRAINT "Class_teacherId_fkey";

-- DropForeignKey
ALTER TABLE "Course" DROP CONSTRAINT "Course_Class_ID_fkey";

-- DropForeignKey
ALTER TABLE "Student" DROP CONSTRAINT "Student_Class_ID_fkey";

-- DropForeignKey
ALTER TABLE "_ClassToCourse" DROP CONSTRAINT "_ClassToCourse_A_fkey";

-- DropForeignKey
ALTER TABLE "_ClassToCourse" DROP CONSTRAINT "_ClassToCourse_B_fkey";

-- DropForeignKey
ALTER TABLE "_ClassToStudent" DROP CONSTRAINT "_ClassToStudent_A_fkey";

-- DropForeignKey
ALTER TABLE "_ClassToStudent" DROP CONSTRAINT "_ClassToStudent_B_fkey";

-- DropForeignKey
ALTER TABLE "_TeacherToclasses" DROP CONSTRAINT "_TeacherToclasses_A_fkey";

-- DropForeignKey
ALTER TABLE "_TeacherToclasses" DROP CONSTRAINT "_TeacherToclasses_B_fkey";

-- AlterTable
ALTER TABLE "Student" DROP COLUMN "Class_ID";

-- DropTable
DROP TABLE "Class";

-- DropTable
DROP TABLE "_ClassToCourse";

-- DropTable
DROP TABLE "_ClassToStudent";

-- DropTable
DROP TABLE "_TeacherToclasses";

-- DropTable
DROP TABLE "classes";

-- CreateTable
CREATE TABLE "Classes" (
    "Class_id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "classCode" TEXT NOT NULL,
    "teacherId" INTEGER NOT NULL,
    "capacity" INTEGER NOT NULL,
    "currentEnrollment" INTEGER NOT NULL DEFAULT 0,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Classes_pkey" PRIMARY KEY ("Class_id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Classes_classCode_key" ON "Classes"("classCode");

-- AddForeignKey
ALTER TABLE "Student" ADD CONSTRAINT "Student_classId_fkey" FOREIGN KEY ("classId") REFERENCES "Classes"("Class_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Absence" ADD CONSTRAINT "Absence_class_id_fkey" FOREIGN KEY ("class_id") REFERENCES "Classes"("Class_id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Classes" ADD CONSTRAINT "Classes_teacherId_fkey" FOREIGN KEY ("teacherId") REFERENCES "Teacher"("Teacher_ID") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Course" ADD CONSTRAINT "Course_Class_ID_fkey" FOREIGN KEY ("Class_ID") REFERENCES "Classes"("Class_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Assignment" ADD CONSTRAINT "Assignment_classId_fkey" FOREIGN KEY ("classId") REFERENCES "Classes"("Class_id") ON DELETE RESTRICT ON UPDATE CASCADE;
