/*
  Warnings:

  - The primary key for the `Absence` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `Absence_ID` on the `Absence` table. All the data in the column will be lost.
  - The primary key for the `Assignment` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `Assignment_id` on the `Assignment` table. All the data in the column will be lost.
  - The primary key for the `BlockNote` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `id` on the `BlockNote` table. All the data in the column will be lost.
  - The primary key for the `Budget` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `Budget_ID` on the `Budget` table. All the data in the column will be lost.
  - The primary key for the `Chapter` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `Chapter_ID` on the `Chapter` table. All the data in the column will be lost.
  - The primary key for the `Classes` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `Class_id` on the `Classes` table. All the data in the column will be lost.
  - The primary key for the `Course` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `Course_ID` on the `Course` table. All the data in the column will be lost.
  - The primary key for the `Discipline` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `Discipline_ID` on the `Discipline` table. All the data in the column will be lost.
  - The primary key for the `Evaluation` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `Evaluation_ID` on the `Evaluation` table. All the data in the column will be lost.
  - The primary key for the `Event` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `Event_ID` on the `Event` table. All the data in the column will be lost.
  - The primary key for the `Expenses` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `Expense_ID` on the `Expenses` table. All the data in the column will be lost.
  - The primary key for the `Grade` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `Grade_ID` on the `Grade` table. All the data in the column will be lost.
  - The primary key for the `Incident` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `Incident_ID` on the `Incident` table. All the data in the column will be lost.
  - The primary key for the `Income` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `Income_ID` on the `Income` table. All the data in the column will be lost.
  - The primary key for the `Lateness` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `Lateness_ID` on the `Lateness` table. All the data in the column will be lost.
  - The primary key for the `Leaves` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `Leave_ID` on the `Leaves` table. All the data in the column will be lost.
  - The primary key for the `Parent` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `Parent_ID` on the `Parent` table. All the data in the column will be lost.
  - The primary key for the `ParentRelation` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `ParentRelation_ID` on the `ParentRelation` table. All the data in the column will be lost.
  - The primary key for the `PaySleep` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `PaySleep_ID` on the `PaySleep` table. All the data in the column will be lost.
  - The primary key for the `Payment` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `Payment_ID` on the `Payment` table. All the data in the column will be lost.
  - The primary key for the `Personnel` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `Staff_ID` on the `Personnel` table. All the data in the column will be lost.
  - The primary key for the `Product` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `Product_ID` on the `Product` table. All the data in the column will be lost.
  - The primary key for the `RHEvaluation` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `RHEvaluation_ID` on the `RHEvaluation` table. All the data in the column will be lost.
  - The primary key for the `Registration` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `Registration_ID` on the `Registration` table. All the data in the column will be lost.
  - The primary key for the `Room` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `Room_ID` on the `Room` table. All the data in the column will be lost.
  - The primary key for the `Schedule` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `Schedule_ID` on the `Schedule` table. All the data in the column will be lost.
  - The primary key for the `SchoolEvent` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `Event_ID` on the `SchoolEvent` table. All the data in the column will be lost.
  - The primary key for the `SchoolYear` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `Academic_ID` on the `SchoolYear` table. All the data in the column will be lost.
  - The primary key for the `Service` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `Service_ID` on the `Service` table. All the data in the column will be lost.
  - The primary key for the `Student` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `Student_ID` on the `Student` table. All the data in the column will be lost.
  - The primary key for the `Submission` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `submissionId` on the `Submission` table. All the data in the column will be lost.
  - The primary key for the `Teacher` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `Teacher_ID` on the `Teacher` table. All the data in the column will be lost.
  - The primary key for the `Transcript` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `Transcript_ID` on the `Transcript` table. All the data in the column will be lost.
  - The primary key for the `Warehouse` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `Warehouse_ID` on the `Warehouse` table. All the data in the column will be lost.
  - The primary key for the `roles` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `id` on the `roles` table. All the data in the column will be lost.
  - The primary key for the `user_roles` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `id` on the `user_roles` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[Email]` on the table `Parent` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[Email]` on the table `Personnel` will be added. If there are existing duplicate values, this will fail.
  - Made the column `Email` on table `Parent` required. This step will fail if there are existing NULL values in that column.

*/
-- DropForeignKey
ALTER TABLE "Absence" DROP CONSTRAINT "Absence_Student_ID_fkey";

-- DropForeignKey
ALTER TABLE "Absence" DROP CONSTRAINT "Absence_class_id_fkey";

-- DropForeignKey
ALTER TABLE "Absence" DROP CONSTRAINT "Absence_teacher_id_fkey";

-- DropForeignKey
ALTER TABLE "Assignment" DROP CONSTRAINT "Assignment_classId_fkey";

-- DropForeignKey
ALTER TABLE "Assignment" DROP CONSTRAINT "Assignment_courseId_fkey";

-- DropForeignKey
ALTER TABLE "Assignment" DROP CONSTRAINT "Assignment_teacherId_fkey";

-- DropForeignKey
ALTER TABLE "Chapter" DROP CONSTRAINT "Chapter_Course_ID_fkey";

-- DropForeignKey
ALTER TABLE "Classes" DROP CONSTRAINT "Classes_teacherId_fkey";

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
ALTER TABLE "Expenses" DROP CONSTRAINT "Expenses_Budget_ID_fkey";

-- DropForeignKey
ALTER TABLE "Grade" DROP CONSTRAINT "Grade_Course_ID_fkey";

-- DropForeignKey
ALTER TABLE "Grade" DROP CONSTRAINT "Grade_Student_ID_fkey";

-- DropForeignKey
ALTER TABLE "Incident" DROP CONSTRAINT "Incident_Student_ID_fkey";

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
ALTER TABLE "PaySleep" DROP CONSTRAINT "PaySleep_Budget_ID_fkey";

-- DropForeignKey
ALTER TABLE "PaySleep" DROP CONSTRAINT "PaySleep_Personnel_ID_fkey";

-- DropForeignKey
ALTER TABLE "PaySleep" DROP CONSTRAINT "PaySleep_Teacher_ID_fkey";

-- DropForeignKey
ALTER TABLE "Payment" DROP CONSTRAINT "Payment_Service_ID_fkey";

-- DropForeignKey
ALTER TABLE "Payment" DROP CONSTRAINT "Payment_Student_ID_fkey";

-- DropForeignKey
ALTER TABLE "Product" DROP CONSTRAINT "Product_Warehouse_ID_fkey";

-- DropForeignKey
ALTER TABLE "RHEvaluation" DROP CONSTRAINT "RHEvaluation_Personnel_ID_fkey";

-- DropForeignKey
ALTER TABLE "RHEvaluation" DROP CONSTRAINT "RHEvaluation_Teacher_ID_fkey";

-- DropForeignKey
ALTER TABLE "Registration" DROP CONSTRAINT "Registration_Academic_ID_fkey";

-- DropForeignKey
ALTER TABLE "Registration" DROP CONSTRAINT "Registration_Student_ID_fkey";

-- DropForeignKey
ALTER TABLE "Schedule" DROP CONSTRAINT "Schedule_Course_ID_fkey";

-- DropForeignKey
ALTER TABLE "Schedule" DROP CONSTRAINT "Schedule_Room_ID_fkey";

-- DropForeignKey
ALTER TABLE "Student" DROP CONSTRAINT "Student_classId_fkey";

-- DropForeignKey
ALTER TABLE "Submission" DROP CONSTRAINT "Submission_assignmentId_fkey";

-- DropForeignKey
ALTER TABLE "Submission" DROP CONSTRAINT "Submission_studentId_fkey";

-- DropForeignKey
ALTER TABLE "Submission" DROP CONSTRAINT "Submission_teacherId_fkey";

-- DropForeignKey
ALTER TABLE "Transcript" DROP CONSTRAINT "Transcript_Course_ID_fkey";

-- DropForeignKey
ALTER TABLE "Transcript" DROP CONSTRAINT "Transcript_Student_ID_fkey";

-- DropForeignKey
ALTER TABLE "_AssignmentToStudent" DROP CONSTRAINT "_AssignmentToStudent_A_fkey";

-- DropForeignKey
ALTER TABLE "_AssignmentToStudent" DROP CONSTRAINT "_AssignmentToStudent_B_fkey";

-- DropForeignKey
ALTER TABLE "_CourseToStudent" DROP CONSTRAINT "_CourseToStudent_A_fkey";

-- DropForeignKey
ALTER TABLE "_CourseToStudent" DROP CONSTRAINT "_CourseToStudent_B_fkey";

-- DropForeignKey
ALTER TABLE "user_roles" DROP CONSTRAINT "user_roles_role_id_fkey";

-- DropForeignKey
ALTER TABLE "user_roles" DROP CONSTRAINT "user_roles_staff_id_fkey";

-- DropForeignKey
ALTER TABLE "user_roles" DROP CONSTRAINT "user_roles_student_id_fkey";

-- DropForeignKey
ALTER TABLE "user_roles" DROP CONSTRAINT "user_roles_teacher_id_fkey";

-- AlterTable
ALTER TABLE "Absence" DROP CONSTRAINT "Absence_pkey",
DROP COLUMN "Absence_ID",
ADD COLUMN     "Id" SERIAL NOT NULL,
ADD CONSTRAINT "Absence_pkey" PRIMARY KEY ("Id");

-- AlterTable
ALTER TABLE "Assignment" DROP CONSTRAINT "Assignment_pkey",
DROP COLUMN "Assignment_id",
ADD COLUMN     "Id" SERIAL NOT NULL,
ADD CONSTRAINT "Assignment_pkey" PRIMARY KEY ("Id");

-- AlterTable
ALTER TABLE "BlockNote" DROP CONSTRAINT "BlockNote_pkey",
DROP COLUMN "id",
ADD COLUMN     "Id" SERIAL NOT NULL,
ADD CONSTRAINT "BlockNote_pkey" PRIMARY KEY ("Id");

-- AlterTable
ALTER TABLE "Budget" DROP CONSTRAINT "Budget_pkey",
DROP COLUMN "Budget_ID",
ADD COLUMN     "Id" SERIAL NOT NULL,
ADD CONSTRAINT "Budget_pkey" PRIMARY KEY ("Id");

-- AlterTable
ALTER TABLE "Chapter" DROP CONSTRAINT "Chapter_pkey",
DROP COLUMN "Chapter_ID",
ADD COLUMN     "Id" SERIAL NOT NULL,
ADD CONSTRAINT "Chapter_pkey" PRIMARY KEY ("Id");

-- AlterTable
ALTER TABLE "Classes" DROP CONSTRAINT "Classes_pkey",
DROP COLUMN "Class_id",
ADD COLUMN     "Id" SERIAL NOT NULL,
ADD CONSTRAINT "Classes_pkey" PRIMARY KEY ("Id");

-- AlterTable
ALTER TABLE "Course" DROP CONSTRAINT "Course_pkey",
DROP COLUMN "Course_ID",
ADD COLUMN     "Id" SERIAL NOT NULL,
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
ALTER TABLE "Event" DROP CONSTRAINT "Event_pkey",
DROP COLUMN "Event_ID",
ADD COLUMN     "Id" SERIAL NOT NULL,
ADD CONSTRAINT "Event_pkey" PRIMARY KEY ("Id");

-- AlterTable
ALTER TABLE "Expenses" DROP CONSTRAINT "Expenses_pkey",
DROP COLUMN "Expense_ID",
ADD COLUMN     "Id" SERIAL NOT NULL,
ADD CONSTRAINT "Expenses_pkey" PRIMARY KEY ("Id");

-- AlterTable
ALTER TABLE "Grade" DROP CONSTRAINT "Grade_pkey",
DROP COLUMN "Grade_ID",
ADD COLUMN     "Id" SERIAL NOT NULL,
ADD CONSTRAINT "Grade_pkey" PRIMARY KEY ("Id");

-- AlterTable
ALTER TABLE "Incident" DROP CONSTRAINT "Incident_pkey",
DROP COLUMN "Incident_ID",
ADD COLUMN     "Id" SERIAL NOT NULL,
ADD CONSTRAINT "Incident_pkey" PRIMARY KEY ("Id");

-- AlterTable
ALTER TABLE "Income" DROP CONSTRAINT "Income_pkey",
DROP COLUMN "Income_ID",
ADD COLUMN     "Id" SERIAL NOT NULL,
ADD CONSTRAINT "Income_pkey" PRIMARY KEY ("Id");

-- AlterTable
ALTER TABLE "Lateness" DROP CONSTRAINT "Lateness_pkey",
DROP COLUMN "Lateness_ID",
ADD COLUMN     "Id" SERIAL NOT NULL,
ADD CONSTRAINT "Lateness_pkey" PRIMARY KEY ("Id");

-- AlterTable
ALTER TABLE "Leaves" DROP CONSTRAINT "Leaves_pkey",
DROP COLUMN "Leave_ID",
ADD COLUMN     "Id" SERIAL NOT NULL,
ADD CONSTRAINT "Leaves_pkey" PRIMARY KEY ("Id");

-- AlterTable
ALTER TABLE "Parent" DROP CONSTRAINT "Parent_pkey",
DROP COLUMN "Parent_ID",
ADD COLUMN     "Id" SERIAL NOT NULL,
ALTER COLUMN "Email" SET NOT NULL,
ADD CONSTRAINT "Parent_pkey" PRIMARY KEY ("Id");

-- AlterTable
ALTER TABLE "ParentRelation" DROP CONSTRAINT "ParentRelation_pkey",
DROP COLUMN "ParentRelation_ID",
ADD COLUMN     "Id" SERIAL NOT NULL,
ADD CONSTRAINT "ParentRelation_pkey" PRIMARY KEY ("Id");

-- AlterTable
ALTER TABLE "PaySleep" DROP CONSTRAINT "PaySleep_pkey",
DROP COLUMN "PaySleep_ID",
ADD COLUMN     "Id" SERIAL NOT NULL,
ADD CONSTRAINT "PaySleep_pkey" PRIMARY KEY ("Id");

-- AlterTable
ALTER TABLE "Payment" DROP CONSTRAINT "Payment_pkey",
DROP COLUMN "Payment_ID",
ADD COLUMN     "Id" SERIAL NOT NULL,
ADD CONSTRAINT "Payment_pkey" PRIMARY KEY ("Id");

-- AlterTable
ALTER TABLE "Personnel" DROP CONSTRAINT "Personnel_pkey",
DROP COLUMN "Staff_ID",
ADD COLUMN     "Id" SERIAL NOT NULL,
ADD CONSTRAINT "Personnel_pkey" PRIMARY KEY ("Id");

-- AlterTable
ALTER TABLE "Product" DROP CONSTRAINT "Product_pkey",
DROP COLUMN "Product_ID",
ADD COLUMN     "Id" SERIAL NOT NULL,
ADD CONSTRAINT "Product_pkey" PRIMARY KEY ("Id");

-- AlterTable
ALTER TABLE "RHEvaluation" DROP CONSTRAINT "RHEvaluation_pkey",
DROP COLUMN "RHEvaluation_ID",
ADD COLUMN     "Id" SERIAL NOT NULL,
ADD CONSTRAINT "RHEvaluation_pkey" PRIMARY KEY ("Id");

-- AlterTable
ALTER TABLE "Registration" DROP CONSTRAINT "Registration_pkey",
DROP COLUMN "Registration_ID",
ADD COLUMN     "Id" SERIAL NOT NULL,
ADD CONSTRAINT "Registration_pkey" PRIMARY KEY ("Id");

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
ALTER TABLE "SchoolEvent" DROP CONSTRAINT "SchoolEvent_pkey",
DROP COLUMN "Event_ID",
ADD COLUMN     "Id" SERIAL NOT NULL,
ADD CONSTRAINT "SchoolEvent_pkey" PRIMARY KEY ("Id");

-- AlterTable
ALTER TABLE "SchoolYear" DROP CONSTRAINT "SchoolYear_pkey",
DROP COLUMN "Academic_ID",
ADD COLUMN     "Id" SERIAL NOT NULL,
ADD CONSTRAINT "SchoolYear_pkey" PRIMARY KEY ("Id");

-- AlterTable
ALTER TABLE "Service" DROP CONSTRAINT "Service_pkey",
DROP COLUMN "Service_ID",
ADD COLUMN     "Id" SERIAL NOT NULL,
ADD CONSTRAINT "Service_pkey" PRIMARY KEY ("Id");

-- AlterTable
ALTER TABLE "Student" DROP CONSTRAINT "Student_pkey",
DROP COLUMN "Student_ID",
ADD COLUMN     "Id" SERIAL NOT NULL,
ADD CONSTRAINT "Student_pkey" PRIMARY KEY ("Id");

-- AlterTable
ALTER TABLE "Submission" DROP CONSTRAINT "Submission_pkey",
DROP COLUMN "submissionId",
ADD COLUMN     "Id" SERIAL NOT NULL,
ADD CONSTRAINT "Submission_pkey" PRIMARY KEY ("Id");

-- AlterTable
ALTER TABLE "Teacher" DROP CONSTRAINT "Teacher_pkey",
DROP COLUMN "Teacher_ID",
ADD COLUMN     "Id" SERIAL NOT NULL,
ADD CONSTRAINT "Teacher_pkey" PRIMARY KEY ("Id");

-- AlterTable
ALTER TABLE "Transcript" DROP CONSTRAINT "Transcript_pkey",
DROP COLUMN "Transcript_ID",
ADD COLUMN     "Id" SERIAL NOT NULL,
ADD CONSTRAINT "Transcript_pkey" PRIMARY KEY ("Id");

-- AlterTable
ALTER TABLE "Warehouse" DROP CONSTRAINT "Warehouse_pkey",
DROP COLUMN "Warehouse_ID",
ADD COLUMN     "Id" SERIAL NOT NULL,
ADD CONSTRAINT "Warehouse_pkey" PRIMARY KEY ("Id");

-- AlterTable
ALTER TABLE "roles" DROP CONSTRAINT "roles_pkey",
DROP COLUMN "id",
ADD COLUMN     "Id" SERIAL NOT NULL,
ADD CONSTRAINT "roles_pkey" PRIMARY KEY ("Id");

-- AlterTable
ALTER TABLE "user_roles" DROP CONSTRAINT "user_roles_pkey",
DROP COLUMN "id",
ADD COLUMN     "Id" SERIAL NOT NULL,
ADD CONSTRAINT "user_roles_pkey" PRIMARY KEY ("Id");

-- CreateIndex
CREATE UNIQUE INDEX "Parent_Email_key" ON "Parent"("Email");

-- CreateIndex
CREATE UNIQUE INDEX "Personnel_Email_key" ON "Personnel"("Email");

-- AddForeignKey
ALTER TABLE "Registration" ADD CONSTRAINT "Registration_Student_ID_fkey" FOREIGN KEY ("Student_ID") REFERENCES "Student"("Id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Registration" ADD CONSTRAINT "Registration_Academic_ID_fkey" FOREIGN KEY ("Academic_ID") REFERENCES "SchoolYear"("Id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Student" ADD CONSTRAINT "Student_classId_fkey" FOREIGN KEY ("classId") REFERENCES "Classes"("Id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ParentRelation" ADD CONSTRAINT "ParentRelation_Parent_ID_fkey" FOREIGN KEY ("Parent_ID") REFERENCES "Parent"("Id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ParentRelation" ADD CONSTRAINT "ParentRelation_Student_ID_fkey" FOREIGN KEY ("Student_ID") REFERENCES "Student"("Id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "user_roles" ADD CONSTRAINT "user_roles_teacher_id_fkey" FOREIGN KEY ("teacher_id") REFERENCES "Teacher"("Id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "user_roles" ADD CONSTRAINT "user_roles_role_id_fkey" FOREIGN KEY ("role_id") REFERENCES "roles"("Id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "user_roles" ADD CONSTRAINT "user_roles_student_id_fkey" FOREIGN KEY ("student_id") REFERENCES "Student"("Id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "user_roles" ADD CONSTRAINT "user_roles_staff_id_fkey" FOREIGN KEY ("staff_id") REFERENCES "Personnel"("Id") ON DELETE CASCADE ON UPDATE CASCADE;

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
ALTER TABLE "Payment" ADD CONSTRAINT "Payment_Service_ID_fkey" FOREIGN KEY ("Service_ID") REFERENCES "Service"("Id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "PaySleep" ADD CONSTRAINT "PaySleep_Personnel_ID_fkey" FOREIGN KEY ("Personnel_ID") REFERENCES "Personnel"("Id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "PaySleep" ADD CONSTRAINT "PaySleep_Teacher_ID_fkey" FOREIGN KEY ("Teacher_ID") REFERENCES "Teacher"("Id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "PaySleep" ADD CONSTRAINT "PaySleep_Budget_ID_fkey" FOREIGN KEY ("Budget_ID") REFERENCES "Budget"("Id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Product" ADD CONSTRAINT "Product_Warehouse_ID_fkey" FOREIGN KEY ("Warehouse_ID") REFERENCES "Warehouse"("Id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Leaves" ADD CONSTRAINT "Leaves_Personnel_ID_fkey" FOREIGN KEY ("Personnel_ID") REFERENCES "Personnel"("Id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Leaves" ADD CONSTRAINT "Leaves_Teacher_ID_fkey" FOREIGN KEY ("Teacher_ID") REFERENCES "Teacher"("Id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "RHEvaluation" ADD CONSTRAINT "RHEvaluation_Personnel_ID_fkey" FOREIGN KEY ("Personnel_ID") REFERENCES "Personnel"("Id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "RHEvaluation" ADD CONSTRAINT "RHEvaluation_Teacher_ID_fkey" FOREIGN KEY ("Teacher_ID") REFERENCES "Teacher"("Id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Expenses" ADD CONSTRAINT "Expenses_Budget_ID_fkey" FOREIGN KEY ("Budget_ID") REFERENCES "Budget"("Id") ON DELETE RESTRICT ON UPDATE CASCADE;

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
ALTER TABLE "Incident" ADD CONSTRAINT "Incident_Student_ID_fkey" FOREIGN KEY ("Student_ID") REFERENCES "Student"("Id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_CourseToStudent" ADD CONSTRAINT "_CourseToStudent_A_fkey" FOREIGN KEY ("A") REFERENCES "Course"("Id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_CourseToStudent" ADD CONSTRAINT "_CourseToStudent_B_fkey" FOREIGN KEY ("B") REFERENCES "Student"("Id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_AssignmentToStudent" ADD CONSTRAINT "_AssignmentToStudent_A_fkey" FOREIGN KEY ("A") REFERENCES "Assignment"("Id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_AssignmentToStudent" ADD CONSTRAINT "_AssignmentToStudent_B_fkey" FOREIGN KEY ("B") REFERENCES "Student"("Id") ON DELETE CASCADE ON UPDATE CASCADE;
