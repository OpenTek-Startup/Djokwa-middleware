/*
  Warnings:

  - You are about to drop the column `Course_ID` on the `Chapter` table. All the data in the column will be lost.
  - You are about to drop the column `Class_ID` on the `Course` table. All the data in the column will be lost.
  - You are about to drop the column `Class_Level` on the `Course` table. All the data in the column will be lost.
  - You are about to drop the column `Name` on the `Course` table. All the data in the column will be lost.
  - You are about to drop the column `Teacher_ID` on the `Course` table. All the data in the column will be lost.
  - You are about to drop the column `Student_ID` on the `Discipline` table. All the data in the column will be lost.
  - You are about to drop the column `Teacher_ID` on the `Discipline` table. All the data in the column will be lost.
  - You are about to drop the column `profile_img` on the `Teacher` table. All the data in the column will be lost.
  - You are about to drop the `_TeacherToclasses` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `classes` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `Course_Code` to the `Course` table without a default value. This is not possible if the table is not empty.
  - Added the required column `Course_name` to the `Course` table without a default value. This is not possible if the table is not empty.
  - Added the required column `Title` to the `Course` table without a default value. This is not possible if the table is not empty.
  - Added the required column `updated_at` to the `Course` table without a default value. This is not possible if the table is not empty.
  - Added the required column `Assignment_id` to the `Grade` table without a default value. This is not possible if the table is not empty.
  - Added the required column `updated_at` to the `Grade` table without a default value. This is not possible if the table is not empty.
  - Added the required column `Enrollment_id` to the `Student` table without a default value. This is not possible if the table is not empty.
  - Added the required column `Graduation_id` to the `Student` table without a default value. This is not possible if the table is not empty.
  - Added the required column `Program_id` to the `Student` table without a default value. This is not possible if the table is not empty.
  - Added the required column `admissionYear` to the `Student` table without a default value. This is not possible if the table is not empty.
  - Added the required column `updated_at` to the `Student` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Absence" DROP CONSTRAINT "Absence_class_id_fkey";

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
ALTER TABLE "Student" DROP CONSTRAINT "Student_Class_ID_fkey";

-- DropForeignKey
ALTER TABLE "_TeacherToclasses" DROP CONSTRAINT "_TeacherToclasses_A_fkey";

-- DropForeignKey
ALTER TABLE "_TeacherToclasses" DROP CONSTRAINT "_TeacherToclasses_B_fkey";

-- AlterTable
ALTER TABLE "Chapter" DROP COLUMN "Course_ID";

-- AlterTable
ALTER TABLE "Course" DROP COLUMN "Class_ID",
DROP COLUMN "Class_Level",
DROP COLUMN "Name",
DROP COLUMN "Teacher_ID",
ADD COLUMN     "Class_id" INTEGER NOT NULL DEFAULT 1,
ADD COLUMN     "Course_Code" TEXT NOT NULL,
ADD COLUMN     "Course_name" TEXT NOT NULL,
ADD COLUMN     "Title" TEXT NOT NULL,
ADD COLUMN     "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "updated_at" TIMESTAMP(3) NOT NULL;

-- AlterTable
ALTER TABLE "Discipline" DROP COLUMN "Student_ID",
DROP COLUMN "Teacher_ID";

-- AlterTable
ALTER TABLE "Grade" ADD COLUMN     "Assignment_id" INTEGER NOT NULL,
ADD COLUMN     "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "updated_at" TIMESTAMP(3) NOT NULL;

-- AlterTable
ALTER TABLE "Student" ADD COLUMN     "Enrollment_id" INTEGER NOT NULL,
ADD COLUMN     "Graduation_id" INTEGER NOT NULL,
ADD COLUMN     "Program_id" INTEGER NOT NULL,
ADD COLUMN     "admissionYear" INTEGER NOT NULL,
ADD COLUMN     "classRank" INTEGER,
ADD COLUMN     "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "cummulativeCredit" INTEGER,
ADD COLUMN     "gpa" DOUBLE PRECISION,
ADD COLUMN     "updated_at" TIMESTAMP(3) NOT NULL;

-- AlterTable
ALTER TABLE "Teacher" DROP COLUMN "profile_img";

-- DropTable
DROP TABLE "_TeacherToclasses";

-- DropTable
DROP TABLE "classes";

-- CreateTable
CREATE TABLE "Presence" (
    "Presence_id" SERIAL NOT NULL,
    "Presence_Date" TIMESTAMP(3) NOT NULL,
    "Presence_time" DOUBLE PRECISION,
    "Student_ID" INTEGER NOT NULL,

    CONSTRAINT "Presence_pkey" PRIMARY KEY ("Presence_id")
);

-- CreateTable
CREATE TABLE "Class" (
    "Class_id" SERIAL NOT NULL,
    "Class_name" TEXT NOT NULL,
    "Class_code" TEXT NOT NULL,
    "capacity" INTEGER NOT NULL,
    "currentEnrollment" INTEGER NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Class_pkey" PRIMARY KEY ("Class_id")
);

-- CreateTable
CREATE TABLE "Assignment" (
    "Assignment_id" SERIAL NOT NULL,
    "due_Date" TIMESTAMP(3) NOT NULL,
    "title" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Assignment_pkey" PRIMARY KEY ("Assignment_id")
);

-- CreateTable
CREATE TABLE "Submission" (
    "Submission_Id" SERIAL NOT NULL,
    "submitted_at" TIMESTAMP(3) NOT NULL,
    "assignment_id" INTEGER NOT NULL,
    "file_Url" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Submission_pkey" PRIMARY KEY ("Submission_Id")
);

-- CreateTable
CREATE TABLE "Attendance" (
    "Attendance_id" SERIAL NOT NULL,
    "student_id" INTEGER NOT NULL,
    "course_id" INTEGER NOT NULL,
    "date" TIMESTAMP(3) NOT NULL,
    "permission" TEXT,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Attendance_pkey" PRIMARY KEY ("Attendance_id")
);

-- CreateTable
CREATE TABLE "Enrollment" (
    "Enrollment_id" SERIAL NOT NULL,
    "Status" TEXT NOT NULL,

    CONSTRAINT "Enrollment_pkey" PRIMARY KEY ("Enrollment_id")
);

-- CreateTable
CREATE TABLE "AcademicProgram" (
    "Program_id" SERIAL NOT NULL,
    "Name" TEXT NOT NULL,
    "Duration" TEXT NOT NULL,
    "Year" INTEGER NOT NULL,

    CONSTRAINT "AcademicProgram_pkey" PRIMARY KEY ("Program_id")
);

-- CreateTable
CREATE TABLE "Extracurricular" (
    "Extracurricular_id" SERIAL NOT NULL,
    "Activity" TEXT NOT NULL,
    "student_id" INTEGER NOT NULL,
    "teacher_id" INTEGER NOT NULL,

    CONSTRAINT "Extracurricular_pkey" PRIMARY KEY ("Extracurricular_id")
);

-- CreateTable
CREATE TABLE "Assessment" (
    "Assessment_id" SERIAL NOT NULL,
    "ExamScore" DOUBLE PRECISION NOT NULL,
    "student_id" INTEGER NOT NULL,

    CONSTRAINT "Assessment_pkey" PRIMARY KEY ("Assessment_id")
);

-- CreateTable
CREATE TABLE "Graduation" (
    "Graduation_id" SERIAL NOT NULL,
    "Graduation_Year" TEXT NOT NULL,
    "Degree" TEXT NOT NULL,

    CONSTRAINT "Graduation_pkey" PRIMARY KEY ("Graduation_id")
);

-- CreateTable
CREATE TABLE "_AbsenceToAttendance" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL
);

-- CreateTable
CREATE TABLE "_DisciplineToStudent" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL
);

-- CreateTable
CREATE TABLE "_AttendanceToLateness" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL
);

-- CreateTable
CREATE TABLE "_AttendanceToPresence" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "Class_Class_code_key" ON "Class"("Class_code");

-- CreateIndex
CREATE UNIQUE INDEX "_AbsenceToAttendance_AB_unique" ON "_AbsenceToAttendance"("A", "B");

-- CreateIndex
CREATE INDEX "_AbsenceToAttendance_B_index" ON "_AbsenceToAttendance"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_DisciplineToStudent_AB_unique" ON "_DisciplineToStudent"("A", "B");

-- CreateIndex
CREATE INDEX "_DisciplineToStudent_B_index" ON "_DisciplineToStudent"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_AttendanceToLateness_AB_unique" ON "_AttendanceToLateness"("A", "B");

-- CreateIndex
CREATE INDEX "_AttendanceToLateness_B_index" ON "_AttendanceToLateness"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_AttendanceToPresence_AB_unique" ON "_AttendanceToPresence"("A", "B");

-- CreateIndex
CREATE INDEX "_AttendanceToPresence_B_index" ON "_AttendanceToPresence"("B");

-- AddForeignKey
ALTER TABLE "Student" ADD CONSTRAINT "Student_Graduation_id_fkey" FOREIGN KEY ("Graduation_id") REFERENCES "Graduation"("Graduation_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Student" ADD CONSTRAINT "Student_Program_id_fkey" FOREIGN KEY ("Program_id") REFERENCES "AcademicProgram"("Program_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Student" ADD CONSTRAINT "Student_Class_ID_fkey" FOREIGN KEY ("Class_ID") REFERENCES "Class"("Class_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Student" ADD CONSTRAINT "Student_Enrollment_id_fkey" FOREIGN KEY ("Enrollment_id") REFERENCES "Enrollment"("Enrollment_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Grade" ADD CONSTRAINT "Grade_Assignment_id_fkey" FOREIGN KEY ("Assignment_id") REFERENCES "Assignment"("Assignment_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Presence" ADD CONSTRAINT "Presence_Student_ID_fkey" FOREIGN KEY ("Student_ID") REFERENCES "Student"("Student_ID") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Course" ADD CONSTRAINT "Course_Class_id_fkey" FOREIGN KEY ("Class_id") REFERENCES "Class"("Class_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Submission" ADD CONSTRAINT "Submission_assignment_id_fkey" FOREIGN KEY ("assignment_id") REFERENCES "Assignment"("Assignment_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Attendance" ADD CONSTRAINT "Attendance_student_id_fkey" FOREIGN KEY ("student_id") REFERENCES "Student"("Student_ID") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Attendance" ADD CONSTRAINT "Attendance_course_id_fkey" FOREIGN KEY ("course_id") REFERENCES "Course"("Course_ID") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Extracurricular" ADD CONSTRAINT "Extracurricular_student_id_fkey" FOREIGN KEY ("student_id") REFERENCES "Student"("Student_ID") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Extracurricular" ADD CONSTRAINT "Extracurricular_teacher_id_fkey" FOREIGN KEY ("teacher_id") REFERENCES "Teacher"("Teacher_ID") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Assessment" ADD CONSTRAINT "Assessment_student_id_fkey" FOREIGN KEY ("student_id") REFERENCES "Student"("Student_ID") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_AbsenceToAttendance" ADD CONSTRAINT "_AbsenceToAttendance_A_fkey" FOREIGN KEY ("A") REFERENCES "Absence"("Absence_ID") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_AbsenceToAttendance" ADD CONSTRAINT "_AbsenceToAttendance_B_fkey" FOREIGN KEY ("B") REFERENCES "Attendance"("Attendance_id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_DisciplineToStudent" ADD CONSTRAINT "_DisciplineToStudent_A_fkey" FOREIGN KEY ("A") REFERENCES "Discipline"("Discipline_ID") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_DisciplineToStudent" ADD CONSTRAINT "_DisciplineToStudent_B_fkey" FOREIGN KEY ("B") REFERENCES "Student"("Student_ID") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_AttendanceToLateness" ADD CONSTRAINT "_AttendanceToLateness_A_fkey" FOREIGN KEY ("A") REFERENCES "Attendance"("Attendance_id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_AttendanceToLateness" ADD CONSTRAINT "_AttendanceToLateness_B_fkey" FOREIGN KEY ("B") REFERENCES "Lateness"("Lateness_ID") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_AttendanceToPresence" ADD CONSTRAINT "_AttendanceToPresence_A_fkey" FOREIGN KEY ("A") REFERENCES "Attendance"("Attendance_id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_AttendanceToPresence" ADD CONSTRAINT "_AttendanceToPresence_B_fkey" FOREIGN KEY ("B") REFERENCES "Presence"("Presence_id") ON DELETE CASCADE ON UPDATE CASCADE;
