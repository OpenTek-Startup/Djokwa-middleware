/*
  Warnings:

  - The primary key for the `Absence` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `Absence_ID` on the `Absence` table. All the data in the column will be lost.
  - The primary key for the `Chapter` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `Chapter_ID` on the `Chapter` table. All the data in the column will be lost.
  - The primary key for the `Course` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `Course_ID` on the `Course` table. All the data in the column will be lost.
  - The primary key for the `Discipline` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `Discipline_ID` on the `Discipline` table. All the data in the column will be lost.
  - The primary key for the `Evaluation` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `Evaluation_ID` on the `Evaluation` table. All the data in the column will be lost.
  - The primary key for the `Grade` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `Grade_ID` on the `Grade` table. All the data in the column will be lost.
  - The primary key for the `Lateness` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `Lateness_ID` on the `Lateness` table. All the data in the column will be lost.
  - The primary key for the `Parent` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `Email` on the `Parent` table. All the data in the column will be lost.
  - You are about to drop the column `First_Name` on the `Parent` table. All the data in the column will be lost.
  - You are about to drop the column `Last_Name` on the `Parent` table. All the data in the column will be lost.
  - You are about to drop the column `Parent_ID` on the `Parent` table. All the data in the column will be lost.
  - You are about to drop the column `Phone` on the `Parent` table. All the data in the column will be lost.
  - You are about to drop the column `password` on the `Parent` table. All the data in the column will be lost.
  - The primary key for the `ParentRelation` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `ParentRelation_ID` on the `ParentRelation` table. All the data in the column will be lost.
  - The primary key for the `PaySleep` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `JerseyNum` on the `PaySleep` table. All the data in the column will be lost.
  - You are about to drop the column `PaySleep_ID` on the `PaySleep` table. All the data in the column will be lost.
  - You are about to drop the column `Position` on the `PaySleep` table. All the data in the column will be lost.
  - The primary key for the `Payment` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `Payment_ID` on the `Payment` table. All the data in the column will be lost.
  - The primary key for the `Personnel` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `Email` on the `Personnel` table. All the data in the column will be lost.
  - You are about to drop the column `Staff_ID` on the `Personnel` table. All the data in the column will be lost.
  - You are about to drop the column `password` on the `Personnel` table. All the data in the column will be lost.
  - The primary key for the `Room` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `Room_ID` on the `Room` table. All the data in the column will be lost.
  - The primary key for the `Schedule` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `Schedule_ID` on the `Schedule` table. All the data in the column will be lost.
  - The primary key for the `Student` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `Class_ID` on the `Student` table. All the data in the column will be lost.
  - You are about to drop the column `First_Name` on the `Student` table. All the data in the column will be lost.
  - You are about to drop the column `Gender` on the `Student` table. All the data in the column will be lost.
  - You are about to drop the column `Last_Name` on the `Student` table. All the data in the column will be lost.
  - You are about to drop the column `Phone` on the `Student` table. All the data in the column will be lost.
  - You are about to drop the column `Student_ID` on the `Student` table. All the data in the column will be lost.
  - You are about to drop the column `password` on the `Student` table. All the data in the column will be lost.
  - The primary key for the `Teacher` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `Email` on the `Teacher` table. All the data in the column will be lost.
  - You are about to drop the column `First_Name` on the `Teacher` table. All the data in the column will be lost.
  - You are about to drop the column `Last_Name` on the `Teacher` table. All the data in the column will be lost.
  - You are about to drop the column `Phone` on the `Teacher` table. All the data in the column will be lost.
  - You are about to drop the column `Teacher_ID` on the `Teacher` table. All the data in the column will be lost.
  - You are about to drop the column `gender` on the `Teacher` table. All the data in the column will be lost.
  - You are about to drop the column `password` on the `Teacher` table. All the data in the column will be lost.
  - The primary key for the `Transcript` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `Transcript_ID` on the `Transcript` table. All the data in the column will be lost.
  - The primary key for the `User` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `Address` on the `User` table. All the data in the column will be lost.
  - You are about to drop the column `Created_At` on the `User` table. All the data in the column will be lost.
  - You are about to drop the column `Password` on the `User` table. All the data in the column will be lost.
  - You are about to drop the column `Updated_At` on the `User` table. All the data in the column will be lost.
  - You are about to drop the column `User_ID` on the `User` table. All the data in the column will be lost.
  - The primary key for the `roles` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `id` on the `roles` table. All the data in the column will be lost.
  - The primary key for the `user_roles` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `id` on the `user_roles` table. All the data in the column will be lost.
  - You are about to drop the column `staff_id` on the `user_roles` table. All the data in the column will be lost.
  - You are about to drop the column `student_id` on the `user_roles` table. All the data in the column will be lost.
  - You are about to drop the column `teacher_id` on the `user_roles` table. All the data in the column will be lost.
  - You are about to drop the `_TeacherToclasses` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `classes` table. If the table is not empty, all the data it contains will be lost.
  - A unique constraint covering the columns `[UserId]` on the table `Parent` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[UserId]` on the table `Personnel` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[UserId]` on the table `Student` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[UserId]` on the table `Teacher` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[user_id]` on the table `user_roles` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `courseCode` to the `Course` table without a default value. This is not possible if the table is not empty.
  - Added the required column `assignmentId` to the `Grade` table without a default value. This is not possible if the table is not empty.
  - Added the required column `UserId` to the `Parent` table without a default value. This is not possible if the table is not empty.
  - Added the required column `Status` to the `PaySleep` table without a default value. This is not possible if the table is not empty.
  - Added the required column `UserId` to the `Personnel` table without a default value. This is not possible if the table is not empty.
  - Added the required column `UserId` to the `Student` table without a default value. This is not possible if the table is not empty.
  - Added the required column `classId` to the `Student` table without a default value. This is not possible if the table is not empty.
  - Added the required column `UserId` to the `Teacher` table without a default value. This is not possible if the table is not empty.
  - Added the required column `password` to the `User` table without a default value. This is not possible if the table is not empty.
  - Added the required column `role` to the `User` table without a default value. This is not possible if the table is not empty.
  - Added the required column `updatedAt` to the `User` table without a default value. This is not possible if the table is not empty.
  - Added the required column `user_id` to the `user_roles` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Absence" DROP CONSTRAINT "Absence_Student_ID_fkey";

-- DropForeignKey
ALTER TABLE "Absence" DROP CONSTRAINT "Absence_class_id_fkey";

-- DropForeignKey
ALTER TABLE "Absence" DROP CONSTRAINT "Absence_teacher_id_fkey";

-- DropForeignKey
ALTER TABLE "Chapter" DROP CONSTRAINT "Chapter_Course_ID_fkey";

-- DropForeignKey
ALTER TABLE "Course" DROP CONSTRAINT "Course_Class_ID_fkey";

-- DropForeignKey
ALTER TABLE "Course" DROP CONSTRAINT "Course_Teacher_ID_fkey";

-- DropForeignKey
ALTER TABLE "Discipline" DROP CONSTRAINT "Discipline_Student_ID_fkey";

-- DropForeignKey
ALTER TABLE "Discipline" DROP CONSTRAINT "Discipline_Teacher_ID_fkey";

-- DropForeignKey
ALTER TABLE "Evaluation" DROP CONSTRAINT "Evaluation_Student_ID_fkey";

-- DropForeignKey
ALTER TABLE "Expenses" DROP CONSTRAINT "Expenses_ApprovedBy_fkey";

-- DropForeignKey
ALTER TABLE "Grade" DROP CONSTRAINT "Grade_Course_ID_fkey";

-- DropForeignKey
ALTER TABLE "Grade" DROP CONSTRAINT "Grade_Student_ID_fkey";

-- DropForeignKey
ALTER TABLE "Income" DROP CONSTRAINT "Income_User_ID_fkey";

-- DropForeignKey
ALTER TABLE "Lateness" DROP CONSTRAINT "Lateness_Student_ID_fkey";

-- DropForeignKey
ALTER TABLE "Leaves" DROP CONSTRAINT "Leaves_Personnel_ID_fkey";

-- DropForeignKey
ALTER TABLE "Leaves" DROP CONSTRAINT "Leaves_Teacher_ID_fkey";

-- DropForeignKey
ALTER TABLE "ParentRelation" DROP CONSTRAINT "ParentRelation_Parent_ID_fkey";

-- DropForeignKey
ALTER TABLE "ParentRelation" DROP CONSTRAINT "ParentRelation_Student_ID_fkey";

-- DropForeignKey
ALTER TABLE "PaySleep" DROP CONSTRAINT "PaySleep_Personnel_ID_fkey";

-- DropForeignKey
ALTER TABLE "PaySleep" DROP CONSTRAINT "PaySleep_Teacher_ID_fkey";

-- DropForeignKey
ALTER TABLE "Payment" DROP CONSTRAINT "Payment_Student_ID_fkey";

-- DropForeignKey
ALTER TABLE "RHEvaluation" DROP CONSTRAINT "RHEvaluation_Personnel_ID_fkey";

-- DropForeignKey
ALTER TABLE "RHEvaluation" DROP CONSTRAINT "RHEvaluation_Teacher_ID_fkey";

-- DropForeignKey
ALTER TABLE "Registration" DROP CONSTRAINT "Registration_Student_ID_fkey";

-- DropForeignKey
ALTER TABLE "Schedule" DROP CONSTRAINT "Schedule_Course_ID_fkey";

-- DropForeignKey
ALTER TABLE "Schedule" DROP CONSTRAINT "Schedule_Room_ID_fkey";

-- DropForeignKey
ALTER TABLE "Student" DROP CONSTRAINT "Student_Class_ID_fkey";

-- DropForeignKey
ALTER TABLE "Transcript" DROP CONSTRAINT "Transcript_Course_ID_fkey";

-- DropForeignKey
ALTER TABLE "Transcript" DROP CONSTRAINT "Transcript_Student_ID_fkey";

-- DropForeignKey
ALTER TABLE "_TeacherToclasses" DROP CONSTRAINT "_TeacherToclasses_A_fkey";

-- DropForeignKey
ALTER TABLE "_TeacherToclasses" DROP CONSTRAINT "_TeacherToclasses_B_fkey";

-- DropForeignKey
ALTER TABLE "user_roles" DROP CONSTRAINT "user_roles_role_id_fkey";

-- DropForeignKey
ALTER TABLE "user_roles" DROP CONSTRAINT "user_roles_staff_id_fkey";

-- DropForeignKey
ALTER TABLE "user_roles" DROP CONSTRAINT "user_roles_student_id_fkey";

-- DropForeignKey
ALTER TABLE "user_roles" DROP CONSTRAINT "user_roles_teacher_id_fkey";

-- DropIndex
DROP INDEX "Teacher_Email_key";

-- DropIndex
DROP INDEX "Teacher_Phone_key";

-- DropIndex
DROP INDEX "user_roles_staff_id_key";

-- DropIndex
DROP INDEX "user_roles_student_id_key";

-- DropIndex
DROP INDEX "user_roles_teacher_id_key";

-- AlterTable
ALTER TABLE "Absence" DROP CONSTRAINT "Absence_pkey",
DROP COLUMN "Absence_ID",
ADD COLUMN     "Id" SERIAL NOT NULL,
ADD CONSTRAINT "Absence_pkey" PRIMARY KEY ("Id");

-- AlterTable
ALTER TABLE "Chapter" DROP CONSTRAINT "Chapter_pkey",
DROP COLUMN "Chapter_ID",
ADD COLUMN     "Id" SERIAL NOT NULL,
ADD CONSTRAINT "Chapter_pkey" PRIMARY KEY ("Id");

-- AlterTable
ALTER TABLE "Course" DROP CONSTRAINT "Course_pkey",
DROP COLUMN "Course_ID",
ADD COLUMN     "Id" SERIAL NOT NULL,
ADD COLUMN     "courseCode" INTEGER NOT NULL,
ADD CONSTRAINT "Course_pkey" PRIMARY KEY ("Id");

-- AlterTable
ALTER TABLE "Discipline" DROP CONSTRAINT "Discipline_pkey",
DROP COLUMN "Discipline_ID",
ADD COLUMN     "Id" SERIAL NOT NULL,
ADD CONSTRAINT "Discipline_pkey" PRIMARY KEY ("Id");

-- AlterTable
ALTER TABLE "Evaluation" DROP CONSTRAINT "Evaluation_pkey",
DROP COLUMN "Evaluation_ID",
ADD COLUMN     "Id" SERIAL NOT NULL,
ADD CONSTRAINT "Evaluation_pkey" PRIMARY KEY ("Id");

-- AlterTable
ALTER TABLE "Grade" DROP CONSTRAINT "Grade_pkey",
DROP COLUMN "Grade_ID",
ADD COLUMN     "Id" SERIAL NOT NULL,
ADD COLUMN     "assignmentId" INTEGER NOT NULL,
ADD CONSTRAINT "Grade_pkey" PRIMARY KEY ("Id");

-- AlterTable
ALTER TABLE "Lateness" DROP CONSTRAINT "Lateness_pkey",
DROP COLUMN "Lateness_ID",
ADD COLUMN     "Id" SERIAL NOT NULL,
ADD CONSTRAINT "Lateness_pkey" PRIMARY KEY ("Id");

-- AlterTable
ALTER TABLE "Parent" DROP CONSTRAINT "Parent_pkey",
DROP COLUMN "Email",
DROP COLUMN "First_Name",
DROP COLUMN "Last_Name",
DROP COLUMN "Parent_ID",
DROP COLUMN "Phone",
DROP COLUMN "password",
ADD COLUMN     "Id" SERIAL NOT NULL,
ADD COLUMN     "UserId" INTEGER NOT NULL,
ADD CONSTRAINT "Parent_pkey" PRIMARY KEY ("Id");

-- AlterTable
ALTER TABLE "ParentRelation" DROP CONSTRAINT "ParentRelation_pkey",
DROP COLUMN "ParentRelation_ID",
ADD COLUMN     "Id" SERIAL NOT NULL,
ADD CONSTRAINT "ParentRelation_pkey" PRIMARY KEY ("Id");

-- AlterTable
ALTER TABLE "PaySleep" DROP CONSTRAINT "PaySleep_pkey",
DROP COLUMN "JerseyNum",
DROP COLUMN "PaySleep_ID",
DROP COLUMN "Position",
ADD COLUMN     "Create_Date" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "Id" SERIAL NOT NULL,
ADD COLUMN     "Status" "ProgressStatus" NOT NULL,
ALTER COLUMN "Pay_Date" DROP NOT NULL,
ADD CONSTRAINT "PaySleep_pkey" PRIMARY KEY ("Id");

-- AlterTable
ALTER TABLE "Payment" DROP CONSTRAINT "Payment_pkey",
DROP COLUMN "Payment_ID",
ADD COLUMN     "Id" SERIAL NOT NULL,
ADD CONSTRAINT "Payment_pkey" PRIMARY KEY ("Id");

-- AlterTable
ALTER TABLE "Personnel" DROP CONSTRAINT "Personnel_pkey",
DROP COLUMN "Email",
DROP COLUMN "Staff_ID",
DROP COLUMN "password",
ADD COLUMN     "Id" SERIAL NOT NULL,
ADD COLUMN     "UserId" INTEGER NOT NULL,
ADD CONSTRAINT "Personnel_pkey" PRIMARY KEY ("Id");

-- AlterTable
ALTER TABLE "Room" DROP CONSTRAINT "Room_pkey",
DROP COLUMN "Room_ID",
ADD COLUMN     "Id" SERIAL NOT NULL,
ADD CONSTRAINT "Room_pkey" PRIMARY KEY ("Id");

-- AlterTable
ALTER TABLE "Schedule" DROP CONSTRAINT "Schedule_pkey",
DROP COLUMN "Schedule_ID",
ADD COLUMN     "Id" SERIAL NOT NULL,
ADD CONSTRAINT "Schedule_pkey" PRIMARY KEY ("Id");

-- AlterTable
ALTER TABLE "Student" DROP CONSTRAINT "Student_pkey",
DROP COLUMN "Class_ID",
DROP COLUMN "First_Name",
DROP COLUMN "Gender",
DROP COLUMN "Last_Name",
DROP COLUMN "Phone",
DROP COLUMN "Student_ID",
DROP COLUMN "password",
ADD COLUMN     "Id" SERIAL NOT NULL,
ADD COLUMN     "UserId" INTEGER NOT NULL,
ADD COLUMN     "classId" INTEGER NOT NULL,
ADD CONSTRAINT "Student_pkey" PRIMARY KEY ("Id");

-- AlterTable
ALTER TABLE "Teacher" DROP CONSTRAINT "Teacher_pkey",
DROP COLUMN "Email",
DROP COLUMN "First_Name",
DROP COLUMN "Last_Name",
DROP COLUMN "Phone",
DROP COLUMN "Teacher_ID",
DROP COLUMN "gender",
DROP COLUMN "password",
ADD COLUMN     "Id" SERIAL NOT NULL,
ADD COLUMN     "UserId" INTEGER NOT NULL,
ADD CONSTRAINT "Teacher_pkey" PRIMARY KEY ("Id");

-- AlterTable
ALTER TABLE "Transcript" DROP CONSTRAINT "Transcript_pkey",
DROP COLUMN "Transcript_ID",
ADD COLUMN     "Id" SERIAL NOT NULL,
ADD CONSTRAINT "Transcript_pkey" PRIMARY KEY ("Id");

-- AlterTable
ALTER TABLE "User" DROP CONSTRAINT "User_pkey",
DROP COLUMN "Address",
DROP COLUMN "Created_At",
DROP COLUMN "Password",
DROP COLUMN "Updated_At",
DROP COLUMN "User_ID",
ADD COLUMN     "Id" SERIAL NOT NULL,
ADD COLUMN     "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "password" TEXT NOT NULL,
ADD COLUMN     "role" TEXT NOT NULL,
ADD COLUMN     "updatedAt" TIMESTAMP(3) NOT NULL,
ADD CONSTRAINT "User_pkey" PRIMARY KEY ("Id");

-- AlterTable
ALTER TABLE "roles" DROP CONSTRAINT "roles_pkey",
DROP COLUMN "id",
ADD COLUMN     "Id" SERIAL NOT NULL,
ADD CONSTRAINT "roles_pkey" PRIMARY KEY ("Id");

-- AlterTable
ALTER TABLE "user_roles" DROP CONSTRAINT "user_roles_pkey",
DROP COLUMN "id",
DROP COLUMN "staff_id",
DROP COLUMN "student_id",
DROP COLUMN "teacher_id",
ADD COLUMN     "Id" SERIAL NOT NULL,
ADD COLUMN     "user_id" INTEGER NOT NULL,
ADD CONSTRAINT "user_roles_pkey" PRIMARY KEY ("Id");

-- DropTable
DROP TABLE "_TeacherToclasses";

-- DropTable
DROP TABLE "classes";

-- CreateTable
CREATE TABLE "Incident" (
    "Id" SERIAL NOT NULL,
    "Student_ID" INTEGER NOT NULL,
    "place" TEXT NOT NULL,
    "witness" TEXT NOT NULL,
    "description" TEXT NOT NULL DEFAULT 'Pending',
    "disciplinary_recomendation" TEXT,
    "DateTime" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Incident_pkey" PRIMARY KEY ("Id")
);

-- CreateTable
CREATE TABLE "Classes" (
    "Id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "classCode" TEXT NOT NULL,
    "teacherId" INTEGER NOT NULL,
    "capacity" INTEGER NOT NULL,
    "currentEnrollment" INTEGER NOT NULL DEFAULT 0,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Classes_pkey" PRIMARY KEY ("Id")
);

-- CreateTable
CREATE TABLE "Assignment" (
    "Id" SERIAL NOT NULL,
    "dueDate" TIMESTAMP(3) NOT NULL,
    "title" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "classId" INTEGER NOT NULL,
    "courseId" INTEGER NOT NULL,
    "teacherId" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Assignment_pkey" PRIMARY KEY ("Id")
);

-- CreateTable
CREATE TABLE "Submission" (
    "Id" SERIAL NOT NULL,
    "teacherId" INTEGER NOT NULL,
    "studentId" INTEGER NOT NULL,
    "assignmentId" INTEGER NOT NULL,
    "fileUrl" TEXT NOT NULL,
    "submittedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Submission_pkey" PRIMARY KEY ("Id")
);

-- CreateTable
CREATE TABLE "Donation" (
    "Id" SERIAL NOT NULL,
    "Amount" DOUBLE PRECISION NOT NULL,
    "DonationDate" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "Reason" TEXT NOT NULL,
    "Type" TEXT NOT NULL,
    "First_Name" TEXT,
    "Last_Name" TEXT,
    "Email" TEXT,
    "Phone" TEXT,
    "Gender" "Gender",

    CONSTRAINT "Donation_pkey" PRIMARY KEY ("Id")
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
CREATE INDEX "Incident_Student_ID_idx" ON "Incident"("Student_ID");

-- CreateIndex
CREATE UNIQUE INDEX "Classes_classCode_key" ON "Classes"("classCode");

-- CreateIndex
CREATE INDEX "Classes_teacherId_idx" ON "Classes"("teacherId");

-- CreateIndex
CREATE INDEX "Assignment_teacherId_idx" ON "Assignment"("teacherId");

-- CreateIndex
CREATE INDEX "Assignment_classId_idx" ON "Assignment"("classId");

-- CreateIndex
CREATE INDEX "Assignment_courseId_idx" ON "Assignment"("courseId");

-- CreateIndex
CREATE INDEX "Submission_teacherId_idx" ON "Submission"("teacherId");

-- CreateIndex
CREATE INDEX "Submission_studentId_idx" ON "Submission"("studentId");

-- CreateIndex
CREATE INDEX "Submission_assignmentId_idx" ON "Submission"("assignmentId");

-- CreateIndex
CREATE UNIQUE INDEX "Donation_Email_key" ON "Donation"("Email");

-- CreateIndex
CREATE UNIQUE INDEX "_CourseToStudent_AB_unique" ON "_CourseToStudent"("A", "B");

-- CreateIndex
CREATE INDEX "_CourseToStudent_B_index" ON "_CourseToStudent"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_AssignmentToStudent_AB_unique" ON "_AssignmentToStudent"("A", "B");

-- CreateIndex
CREATE INDEX "_AssignmentToStudent_B_index" ON "_AssignmentToStudent"("B");

-- CreateIndex
CREATE INDEX "Absence_Student_ID_idx" ON "Absence"("Student_ID");

-- CreateIndex
CREATE INDEX "Absence_teacher_id_idx" ON "Absence"("teacher_id");

-- CreateIndex
CREATE INDEX "Absence_class_id_idx" ON "Absence"("class_id");

-- CreateIndex
CREATE INDEX "Chapter_Course_ID_idx" ON "Chapter"("Course_ID");

-- CreateIndex
CREATE INDEX "Course_Teacher_ID_idx" ON "Course"("Teacher_ID");

-- CreateIndex
CREATE INDEX "Course_Class_ID_idx" ON "Course"("Class_ID");

-- CreateIndex
CREATE INDEX "Discipline_Teacher_ID_idx" ON "Discipline"("Teacher_ID");

-- CreateIndex
CREATE INDEX "Discipline_Student_ID_idx" ON "Discipline"("Student_ID");

-- CreateIndex
CREATE INDEX "Evaluation_Student_ID_idx" ON "Evaluation"("Student_ID");

-- CreateIndex
CREATE INDEX "Grade_Student_ID_idx" ON "Grade"("Student_ID");

-- CreateIndex
CREATE INDEX "Grade_Course_ID_idx" ON "Grade"("Course_ID");

-- CreateIndex
CREATE INDEX "Lateness_Student_ID_idx" ON "Lateness"("Student_ID");

-- CreateIndex
CREATE UNIQUE INDEX "Parent_UserId_key" ON "Parent"("UserId");

-- CreateIndex
CREATE INDEX "ParentRelation_Parent_ID_idx" ON "ParentRelation"("Parent_ID");

-- CreateIndex
CREATE INDEX "ParentRelation_Student_ID_idx" ON "ParentRelation"("Student_ID");

-- CreateIndex
CREATE INDEX "PaySleep_Personnel_ID_idx" ON "PaySleep"("Personnel_ID");

-- CreateIndex
CREATE INDEX "PaySleep_Teacher_ID_idx" ON "PaySleep"("Teacher_ID");

-- CreateIndex
CREATE INDEX "PaySleep_Budget_ID_idx" ON "PaySleep"("Budget_ID");

-- CreateIndex
CREATE INDEX "Payment_Student_ID_idx" ON "Payment"("Student_ID");

-- CreateIndex
CREATE INDEX "Payment_Service_ID_idx" ON "Payment"("Service_ID");

-- CreateIndex
CREATE UNIQUE INDEX "Personnel_UserId_key" ON "Personnel"("UserId");

-- CreateIndex
CREATE INDEX "Schedule_Room_ID_idx" ON "Schedule"("Room_ID");

-- CreateIndex
CREATE INDEX "Schedule_Course_ID_idx" ON "Schedule"("Course_ID");

-- CreateIndex
CREATE UNIQUE INDEX "Student_UserId_key" ON "Student"("UserId");

-- CreateIndex
CREATE INDEX "Student_classId_idx" ON "Student"("classId");

-- CreateIndex
CREATE UNIQUE INDEX "Teacher_UserId_key" ON "Teacher"("UserId");

-- CreateIndex
CREATE INDEX "Transcript_Student_ID_idx" ON "Transcript"("Student_ID");

-- CreateIndex
CREATE INDEX "Transcript_Course_ID_idx" ON "Transcript"("Course_ID");

-- CreateIndex
CREATE UNIQUE INDEX "user_roles_user_id_key" ON "user_roles"("user_id");

-- CreateIndex
CREATE INDEX "user_roles_user_id_idx" ON "user_roles"("user_id");

-- CreateIndex
CREATE INDEX "user_roles_role_id_idx" ON "user_roles"("role_id");

-- AddForeignKey
ALTER TABLE "Registration" ADD CONSTRAINT "Registration_Student_ID_fkey" FOREIGN KEY ("Student_ID") REFERENCES "Student"("Id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Student" ADD CONSTRAINT "Student_UserId_fkey" FOREIGN KEY ("UserId") REFERENCES "User"("Id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Student" ADD CONSTRAINT "Student_classId_fkey" FOREIGN KEY ("classId") REFERENCES "Classes"("Id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Incident" ADD CONSTRAINT "Incident_Student_ID_fkey" FOREIGN KEY ("Student_ID") REFERENCES "Student"("Id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ParentRelation" ADD CONSTRAINT "ParentRelation_Parent_ID_fkey" FOREIGN KEY ("Parent_ID") REFERENCES "Parent"("Id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ParentRelation" ADD CONSTRAINT "ParentRelation_Student_ID_fkey" FOREIGN KEY ("Student_ID") REFERENCES "Student"("Id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Parent" ADD CONSTRAINT "Parent_UserId_fkey" FOREIGN KEY ("UserId") REFERENCES "User"("Id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Teacher" ADD CONSTRAINT "Teacher_UserId_fkey" FOREIGN KEY ("UserId") REFERENCES "User"("Id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "user_roles" ADD CONSTRAINT "user_roles_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "User"("Id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "user_roles" ADD CONSTRAINT "user_roles_role_id_fkey" FOREIGN KEY ("role_id") REFERENCES "roles"("Id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Chapter" ADD CONSTRAINT "Chapter_Course_ID_fkey" FOREIGN KEY ("Course_ID") REFERENCES "Course"("Id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Grade" ADD CONSTRAINT "Grade_Student_ID_fkey" FOREIGN KEY ("Student_ID") REFERENCES "Student"("Id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Grade" ADD CONSTRAINT "Grade_Course_ID_fkey" FOREIGN KEY ("Course_ID") REFERENCES "Course"("Id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Evaluation" ADD CONSTRAINT "Evaluation_Student_ID_fkey" FOREIGN KEY ("Student_ID") REFERENCES "Student"("Id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Transcript" ADD CONSTRAINT "Transcript_Student_ID_fkey" FOREIGN KEY ("Student_ID") REFERENCES "Student"("Id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Transcript" ADD CONSTRAINT "Transcript_Course_ID_fkey" FOREIGN KEY ("Course_ID") REFERENCES "Course"("Id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Absence" ADD CONSTRAINT "Absence_Student_ID_fkey" FOREIGN KEY ("Student_ID") REFERENCES "Student"("Id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Absence" ADD CONSTRAINT "Absence_teacher_id_fkey" FOREIGN KEY ("teacher_id") REFERENCES "Teacher"("Id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Absence" ADD CONSTRAINT "Absence_class_id_fkey" FOREIGN KEY ("class_id") REFERENCES "Classes"("Id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Lateness" ADD CONSTRAINT "Lateness_Student_ID_fkey" FOREIGN KEY ("Student_ID") REFERENCES "Student"("Id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Discipline" ADD CONSTRAINT "Discipline_Teacher_ID_fkey" FOREIGN KEY ("Teacher_ID") REFERENCES "Teacher"("Id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Discipline" ADD CONSTRAINT "Discipline_Student_ID_fkey" FOREIGN KEY ("Student_ID") REFERENCES "Student"("Id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Schedule" ADD CONSTRAINT "Schedule_Room_ID_fkey" FOREIGN KEY ("Room_ID") REFERENCES "Room"("Id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Schedule" ADD CONSTRAINT "Schedule_Course_ID_fkey" FOREIGN KEY ("Course_ID") REFERENCES "Course"("Id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Payment" ADD CONSTRAINT "Payment_Student_ID_fkey" FOREIGN KEY ("Student_ID") REFERENCES "Student"("Id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Classes" ADD CONSTRAINT "Classes_teacherId_fkey" FOREIGN KEY ("teacherId") REFERENCES "Teacher"("Id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Course" ADD CONSTRAINT "Course_Teacher_ID_fkey" FOREIGN KEY ("Teacher_ID") REFERENCES "Teacher"("Id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Course" ADD CONSTRAINT "Course_Class_ID_fkey" FOREIGN KEY ("Class_ID") REFERENCES "Classes"("Id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Assignment" ADD CONSTRAINT "Assignment_teacherId_fkey" FOREIGN KEY ("teacherId") REFERENCES "Teacher"("Id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Assignment" ADD CONSTRAINT "Assignment_classId_fkey" FOREIGN KEY ("classId") REFERENCES "Classes"("Id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Assignment" ADD CONSTRAINT "Assignment_courseId_fkey" FOREIGN KEY ("courseId") REFERENCES "Course"("Id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Submission" ADD CONSTRAINT "Submission_teacherId_fkey" FOREIGN KEY ("teacherId") REFERENCES "Teacher"("Id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Submission" ADD CONSTRAINT "Submission_studentId_fkey" FOREIGN KEY ("studentId") REFERENCES "Student"("Id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Submission" ADD CONSTRAINT "Submission_assignmentId_fkey" FOREIGN KEY ("assignmentId") REFERENCES "Assignment"("Id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Personnel" ADD CONSTRAINT "Personnel_UserId_fkey" FOREIGN KEY ("UserId") REFERENCES "User"("Id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "PaySleep" ADD CONSTRAINT "PaySleep_Personnel_ID_fkey" FOREIGN KEY ("Personnel_ID") REFERENCES "Personnel"("Id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "PaySleep" ADD CONSTRAINT "PaySleep_Teacher_ID_fkey" FOREIGN KEY ("Teacher_ID") REFERENCES "Teacher"("Id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Leaves" ADD CONSTRAINT "Leaves_Personnel_ID_fkey" FOREIGN KEY ("Personnel_ID") REFERENCES "Personnel"("Id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Leaves" ADD CONSTRAINT "Leaves_Teacher_ID_fkey" FOREIGN KEY ("Teacher_ID") REFERENCES "Teacher"("Id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "RHEvaluation" ADD CONSTRAINT "RHEvaluation_Personnel_ID_fkey" FOREIGN KEY ("Personnel_ID") REFERENCES "Personnel"("Id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "RHEvaluation" ADD CONSTRAINT "RHEvaluation_Teacher_ID_fkey" FOREIGN KEY ("Teacher_ID") REFERENCES "Teacher"("Id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Expenses" ADD CONSTRAINT "Expenses_ApprovedBy_fkey" FOREIGN KEY ("ApprovedBy") REFERENCES "Personnel"("Id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Income" ADD CONSTRAINT "Income_User_ID_fkey" FOREIGN KEY ("User_ID") REFERENCES "User"("Id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_CourseToStudent" ADD CONSTRAINT "_CourseToStudent_A_fkey" FOREIGN KEY ("A") REFERENCES "Course"("Id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_CourseToStudent" ADD CONSTRAINT "_CourseToStudent_B_fkey" FOREIGN KEY ("B") REFERENCES "Student"("Id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_AssignmentToStudent" ADD CONSTRAINT "_AssignmentToStudent_A_fkey" FOREIGN KEY ("A") REFERENCES "Assignment"("Id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_AssignmentToStudent" ADD CONSTRAINT "_AssignmentToStudent_B_fkey" FOREIGN KEY ("B") REFERENCES "Student"("Id") ON DELETE CASCADE ON UPDATE CASCADE;
