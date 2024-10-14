/*
  Warnings:

  - You are about to drop the column `Position` on the `Leaves` table. All the data in the column will be lost.
  - You are about to drop the column `JerseyNum` on the `PaySleep` table. All the data in the column will be lost.
  - You are about to drop the column `Position` on the `PaySleep` table. All the data in the column will be lost.
  - Added the required column `courseCode` to the `Course` table without a default value. This is not possible if the table is not empty.
  - Added the required column `assignmentId` to the `Grade` table without a default value. This is not possible if the table is not empty.
  - Added the required column `Status` to the `Leaves` table without a default value. This is not possible if the table is not empty.
  - Added the required column `Status` to the `PaySleep` table without a default value. This is not possible if the table is not empty.
  - Added the required column `classId` to the `Student` table without a default value. This is not possible if the table is not empty.

*/
-- CreateEnum
CREATE TYPE "LeaveStatus" AS ENUM ('Pending', 'Approved', 'Denied');

-- AlterTable
ALTER TABLE "Course" ADD COLUMN     "courseCode" INTEGER NOT NULL;

-- AlterTable
ALTER TABLE "Grade" ADD COLUMN     "assignmentId" INTEGER NOT NULL;

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
ALTER TABLE "Student" ADD COLUMN     "classId" INTEGER NOT NULL;

-- CreateTable
CREATE TABLE "Class" (
    "Class_id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "classCode" TEXT NOT NULL,
    "teacherId" INTEGER NOT NULL,
    "capacity" INTEGER NOT NULL,
    "currentEnrollment" INTEGER NOT NULL DEFAULT 0,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Class_pkey" PRIMARY KEY ("Class_id")
);

-- CreateTable
CREATE TABLE "Assignment" (
    "Assignment_id" SERIAL NOT NULL,
    "dueDate" TIMESTAMP(3) NOT NULL,
    "title" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "classId" INTEGER NOT NULL,
    "courseId" INTEGER NOT NULL,
    "teacherId" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Assignment_pkey" PRIMARY KEY ("Assignment_id")
);

-- CreateTable
CREATE TABLE "Submission" (
    "submissionId" SERIAL NOT NULL,
    "teacherId" INTEGER NOT NULL,
    "studentId" INTEGER NOT NULL,
    "assignmentId" INTEGER NOT NULL,
    "fileUrl" TEXT NOT NULL,
    "submittedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Submission_pkey" PRIMARY KEY ("submissionId")
);

-- CreateTable
CREATE TABLE "_ClassToCourse" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL
);

-- CreateTable
CREATE TABLE "_ClassToStudent" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL
);

-- CreateTable
CREATE TABLE "_CourseToStudent" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL
);

-- CreateTable
CREATE TABLE "_AssignmentToStudent" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "Class_classCode_key" ON "Class"("classCode");

-- CreateIndex
CREATE UNIQUE INDEX "_ClassToCourse_AB_unique" ON "_ClassToCourse"("A", "B");

-- CreateIndex
CREATE INDEX "_ClassToCourse_B_index" ON "_ClassToCourse"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_ClassToStudent_AB_unique" ON "_ClassToStudent"("A", "B");

-- CreateIndex
CREATE INDEX "_ClassToStudent_B_index" ON "_ClassToStudent"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_CourseToStudent_AB_unique" ON "_CourseToStudent"("A", "B");

-- CreateIndex
CREATE INDEX "_CourseToStudent_B_index" ON "_CourseToStudent"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_AssignmentToStudent_AB_unique" ON "_AssignmentToStudent"("A", "B");

-- CreateIndex
CREATE INDEX "_AssignmentToStudent_B_index" ON "_AssignmentToStudent"("B");

-- AddForeignKey
ALTER TABLE "Class" ADD CONSTRAINT "Class_teacherId_fkey" FOREIGN KEY ("teacherId") REFERENCES "Teacher"("Teacher_ID") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Assignment" ADD CONSTRAINT "Assignment_teacherId_fkey" FOREIGN KEY ("teacherId") REFERENCES "Teacher"("Teacher_ID") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Assignment" ADD CONSTRAINT "Assignment_classId_fkey" FOREIGN KEY ("classId") REFERENCES "Class"("Class_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Assignment" ADD CONSTRAINT "Assignment_courseId_fkey" FOREIGN KEY ("courseId") REFERENCES "Course"("Course_ID") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Submission" ADD CONSTRAINT "Submission_teacherId_fkey" FOREIGN KEY ("teacherId") REFERENCES "Teacher"("Teacher_ID") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Submission" ADD CONSTRAINT "Submission_studentId_fkey" FOREIGN KEY ("studentId") REFERENCES "Student"("Student_ID") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Submission" ADD CONSTRAINT "Submission_assignmentId_fkey" FOREIGN KEY ("assignmentId") REFERENCES "Assignment"("Assignment_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_ClassToCourse" ADD CONSTRAINT "_ClassToCourse_A_fkey" FOREIGN KEY ("A") REFERENCES "Class"("Class_id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_ClassToCourse" ADD CONSTRAINT "_ClassToCourse_B_fkey" FOREIGN KEY ("B") REFERENCES "Course"("Course_ID") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_ClassToStudent" ADD CONSTRAINT "_ClassToStudent_A_fkey" FOREIGN KEY ("A") REFERENCES "Class"("Class_id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_ClassToStudent" ADD CONSTRAINT "_ClassToStudent_B_fkey" FOREIGN KEY ("B") REFERENCES "Student"("Student_ID") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_CourseToStudent" ADD CONSTRAINT "_CourseToStudent_A_fkey" FOREIGN KEY ("A") REFERENCES "Course"("Course_ID") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_CourseToStudent" ADD CONSTRAINT "_CourseToStudent_B_fkey" FOREIGN KEY ("B") REFERENCES "Student"("Student_ID") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_AssignmentToStudent" ADD CONSTRAINT "_AssignmentToStudent_A_fkey" FOREIGN KEY ("A") REFERENCES "Assignment"("Assignment_id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_AssignmentToStudent" ADD CONSTRAINT "_AssignmentToStudent_B_fkey" FOREIGN KEY ("B") REFERENCES "Student"("Student_ID") ON DELETE CASCADE ON UPDATE CASCADE;
