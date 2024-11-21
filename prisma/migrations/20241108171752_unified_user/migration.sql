-- CreateEnum
CREATE TYPE "Gender" AS ENUM ('Male', 'Female');

-- CreateEnum
CREATE TYPE "RelationType" AS ENUM ('Mother', 'Father', 'Guardian', 'Other');

-- CreateEnum
CREATE TYPE "EvaluationType" AS ENUM ('Exam', 'Assignment', 'Quiz', 'Project', 'Other');

-- CreateEnum
CREATE TYPE "ProgressStatus" AS ENUM ('NotStarted', 'InProgress', 'Completed');

-- CreateEnum
CREATE TYPE "LeaveStatus" AS ENUM ('Pending', 'Approved', 'Denied');

-- CreateEnum
CREATE TYPE "AbsenceStatus" AS ENUM ('PRESENT', 'ABSENT', 'LATE', 'LEAVE');

-- CreateEnum
CREATE TYPE "Days" AS ENUM ('Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday');

-- CreateEnum
CREATE TYPE "LeaveType" AS ENUM ('Vacation', 'SickLeave', 'MaternityLeave', 'PaternityLeave', 'Other');

-- CreateTable
CREATE TABLE "SchoolYear" (
    "Id" SERIAL NOT NULL,
    "Start_date" TIMESTAMP(3) NOT NULL,
    "End_date" TIMESTAMP(3) NOT NULL,
    "year" TEXT NOT NULL,

    CONSTRAINT "SchoolYear_pkey" PRIMARY KEY ("Id")
);

-- CreateTable
CREATE TABLE "Registration" (
    "Id" SERIAL NOT NULL,
    "Registration_Date" TIMESTAMP(3) NOT NULL,
    "Student_ID" INTEGER NOT NULL,
    "Academic_ID" INTEGER NOT NULL,

    CONSTRAINT "Registration_pkey" PRIMARY KEY ("Id")
);

-- CreateTable
CREATE TABLE "User" (
    "Id" SERIAL NOT NULL,
    "First_Name" TEXT NOT NULL,
    "Last_Name" TEXT NOT NULL,
    "Email" TEXT NOT NULL,
    "Phone" TEXT,
    "password" TEXT NOT NULL,
    "role" TEXT NOT NULL,
    "Gender" "Gender" NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "User_pkey" PRIMARY KEY ("Id")
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
CREATE TABLE "Student" (
    "Id" SERIAL NOT NULL,
    "UserId" INTEGER NOT NULL,
    "Date_Of_Birth" TIMESTAMP(3) NOT NULL,
    "Address" TEXT NOT NULL,
    "classId" INTEGER NOT NULL,
    "Medical_Info" TEXT,
    "Image" TEXT,

    CONSTRAINT "Student_pkey" PRIMARY KEY ("Id")
);

-- CreateTable
CREATE TABLE "ParentRelation" (
    "Id" SERIAL NOT NULL,
    "Parent_ID" INTEGER NOT NULL,
    "Student_ID" INTEGER NOT NULL,
    "Relation_Type" "RelationType" NOT NULL,

    CONSTRAINT "ParentRelation_pkey" PRIMARY KEY ("Id")
);

-- CreateTable
CREATE TABLE "Parent" (
    "Id" SERIAL NOT NULL,
    "UserId" INTEGER NOT NULL,
    "Profession" TEXT,
    "Address" TEXT NOT NULL,
    "NIC_Information" TEXT,

    CONSTRAINT "Parent_pkey" PRIMARY KEY ("Id")
);

-- CreateTable
CREATE TABLE "Teacher" (
    "Id" SERIAL NOT NULL,
    "UserId" INTEGER NOT NULL,
    "Specialty" TEXT NOT NULL,
    "Hiring_Date" TIMESTAMP(3) NOT NULL,
    "Salary" DOUBLE PRECISION NOT NULL,
    "Image" TEXT,
    "address" TEXT NOT NULL,

    CONSTRAINT "Teacher_pkey" PRIMARY KEY ("Id")
);

-- CreateTable
CREATE TABLE "user_roles" (
    "Id" SERIAL NOT NULL,
    "user_id" INTEGER NOT NULL,
    "role_id" INTEGER NOT NULL,

    CONSTRAINT "user_roles_pkey" PRIMARY KEY ("Id")
);

-- CreateTable
CREATE TABLE "roles" (
    "Id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "roles_pkey" PRIMARY KEY ("Id")
);

-- CreateTable
CREATE TABLE "Chapter" (
    "Id" SERIAL NOT NULL,
    "Name" TEXT NOT NULL,
    "Description" TEXT,
    "Coefficient" INTEGER NOT NULL,
    "Start_Date" TIMESTAMP(3) NOT NULL,
    "End_Date" TIMESTAMP(3) NOT NULL,
    "Progress_Status" "ProgressStatus" NOT NULL,
    "Course_ID" INTEGER NOT NULL,

    CONSTRAINT "Chapter_pkey" PRIMARY KEY ("Id")
);

-- CreateTable
CREATE TABLE "Grade" (
    "Id" SERIAL NOT NULL,
    "Value" DOUBLE PRECISION NOT NULL,
    "Student_ID" INTEGER NOT NULL,
    "Course_ID" INTEGER NOT NULL,
    "assignmentId" INTEGER NOT NULL,

    CONSTRAINT "Grade_pkey" PRIMARY KEY ("Id")
);

-- CreateTable
CREATE TABLE "Evaluation" (
    "Id" SERIAL NOT NULL,
    "Type" "EvaluationType" NOT NULL,
    "Start_Date" TIMESTAMP(3) NOT NULL,
    "End_Date" TIMESTAMP(3) NOT NULL,
    "Description" TEXT,
    "Student_ID" INTEGER NOT NULL,

    CONSTRAINT "Evaluation_pkey" PRIMARY KEY ("Id")
);

-- CreateTable
CREATE TABLE "Transcript" (
    "Id" SERIAL NOT NULL,
    "Name" TEXT NOT NULL,
    "Logo" TEXT,
    "Student_ID" INTEGER NOT NULL,
    "Course_ID" INTEGER NOT NULL,

    CONSTRAINT "Transcript_pkey" PRIMARY KEY ("Id")
);

-- CreateTable
CREATE TABLE "Absence" (
    "Id" SERIAL NOT NULL,
    "Absence_Date" TIMESTAMP(3) NOT NULL,
    "Absence_Time" DOUBLE PRECISION,
    "class_id" INTEGER NOT NULL,
    "note" TEXT,
    "Justification" TEXT,
    "Status" "AbsenceStatus" NOT NULL,
    "Student_ID" INTEGER NOT NULL,
    "teacher_id" INTEGER NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Absence_pkey" PRIMARY KEY ("Id")
);

-- CreateTable
CREATE TABLE "Lateness" (
    "Id" SERIAL NOT NULL,
    "Lateness_Date" TIMESTAMP(3) NOT NULL,
    "Lateness_Time" DOUBLE PRECISION,
    "Justification" TEXT,
    "Student_ID" INTEGER NOT NULL,

    CONSTRAINT "Lateness_pkey" PRIMARY KEY ("Id")
);

-- CreateTable
CREATE TABLE "Discipline" (
    "Id" SERIAL NOT NULL,
    "Sanction" TEXT,
    "Justification" TEXT,
    "Student_ID" INTEGER NOT NULL,
    "Teacher_ID" INTEGER NOT NULL,

    CONSTRAINT "Discipline_pkey" PRIMARY KEY ("Id")
);

-- CreateTable
CREATE TABLE "Schedule" (
    "Id" SERIAL NOT NULL,
    "Day" "Days" NOT NULL,
    "Start_Time" TIMESTAMP(3) NOT NULL,
    "End_Time" TIMESTAMP(3) NOT NULL,
    "Room_ID" INTEGER NOT NULL,
    "Course_ID" INTEGER NOT NULL,

    CONSTRAINT "Schedule_pkey" PRIMARY KEY ("Id")
);

-- CreateTable
CREATE TABLE "Room" (
    "Id" SERIAL NOT NULL,
    "Name" TEXT NOT NULL,

    CONSTRAINT "Room_pkey" PRIMARY KEY ("Id")
);

-- CreateTable
CREATE TABLE "Payment" (
    "Id" SERIAL NOT NULL,
    "Amount" DOUBLE PRECISION NOT NULL,
    "Payment_Date" TIMESTAMP(3) NOT NULL,
    "Student_ID" INTEGER NOT NULL,
    "Service_ID" INTEGER NOT NULL,

    CONSTRAINT "Payment_pkey" PRIMARY KEY ("Id")
);

-- CreateTable
CREATE TABLE "Service" (
    "Id" SERIAL NOT NULL,
    "Name" TEXT NOT NULL,
    "Logo" TEXT,

    CONSTRAINT "Service_pkey" PRIMARY KEY ("Id")
);

-- CreateTable
CREATE TABLE "Event" (
    "Id" SERIAL NOT NULL,
    "Name" TEXT NOT NULL,
    "Logo" TEXT,

    CONSTRAINT "Event_pkey" PRIMARY KEY ("Id")
);

-- CreateTable
CREATE TABLE "Personnel" (
    "Id" SERIAL NOT NULL,
    "UserId" INTEGER NOT NULL,
    "Staff_Role" TEXT NOT NULL,

    CONSTRAINT "Personnel_pkey" PRIMARY KEY ("Id")
);

-- CreateTable
CREATE TABLE "PaySleep" (
    "Id" SERIAL NOT NULL,
    "FirstName" TEXT NOT NULL,
    "LastName" TEXT NOT NULL,
    "Pay_Date" TIMESTAMP(3),
    "Create_Date" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "Amount" DOUBLE PRECISION NOT NULL,
    "Status" "ProgressStatus" NOT NULL,
    "Personnel_ID" INTEGER,
    "Teacher_ID" INTEGER,
    "Budget_ID" INTEGER,

    CONSTRAINT "PaySleep_pkey" PRIMARY KEY ("Id")
);

-- CreateTable
CREATE TABLE "Warehouse" (
    "Id" SERIAL NOT NULL,
    "Name" TEXT NOT NULL,
    "Location" TEXT NOT NULL,

    CONSTRAINT "Warehouse_pkey" PRIMARY KEY ("Id")
);

-- CreateTable
CREATE TABLE "Product" (
    "Id" SERIAL NOT NULL,
    "Name" TEXT NOT NULL,
    "Category" TEXT NOT NULL,
    "Quantity" INTEGER NOT NULL,
    "Price" DOUBLE PRECISION NOT NULL,
    "Warehouse_ID" INTEGER NOT NULL,

    CONSTRAINT "Product_pkey" PRIMARY KEY ("Id")
);

-- CreateTable
CREATE TABLE "Leaves" (
    "Id" SERIAL NOT NULL,
    "FirstName" TEXT NOT NULL,
    "LastName" TEXT NOT NULL,
    "JerseyNum" TEXT,
    "Start_Date" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "End_Date" TIMESTAMP(3) NOT NULL,
    "Type" "LeaveType" NOT NULL,
    "Personnel_ID" INTEGER,
    "Teacher_ID" INTEGER,
    "Status" "LeaveStatus" NOT NULL,

    CONSTRAINT "Leaves_pkey" PRIMARY KEY ("Id")
);

-- CreateTable
CREATE TABLE "RHEvaluation" (
    "Id" SERIAL NOT NULL,
    "FirstName" TEXT NOT NULL,
    "LastName" TEXT NOT NULL,
    "JerseyNum" TEXT NOT NULL,
    "Position" TEXT NOT NULL,
    "Evaluation_Date" TIMESTAMP(3) NOT NULL,
    "Score" INTEGER NOT NULL,
    "Comments" TEXT,
    "Personnel_ID" INTEGER,
    "Teacher_ID" INTEGER,

    CONSTRAINT "RHEvaluation_pkey" PRIMARY KEY ("Id")
);

-- CreateTable
CREATE TABLE "Budget" (
    "Id" SERIAL NOT NULL,
    "Name" TEXT NOT NULL,
    "Description" TEXT NOT NULL,
    "Amount" DOUBLE PRECISION NOT NULL,
    "Year" TEXT NOT NULL,

    CONSTRAINT "Budget_pkey" PRIMARY KEY ("Id")
);

-- CreateTable
CREATE TABLE "Expenses" (
    "Id" SERIAL NOT NULL,
    "Name" TEXT NOT NULL,
    "Description" TEXT,
    "Amount" DOUBLE PRECISION NOT NULL,
    "Date" TIMESTAMP(3) NOT NULL,
    "Budget_ID" INTEGER NOT NULL,

    CONSTRAINT "Expenses_pkey" PRIMARY KEY ("Id")
);

-- CreateTable
CREATE TABLE "Income" (
    "Id" SERIAL NOT NULL,
    "Name" TEXT NOT NULL,
    "Description" TEXT,
    "Amount" DOUBLE PRECISION NOT NULL,
    "Date" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Income_pkey" PRIMARY KEY ("Id")
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
CREATE TABLE "Course" (
    "Id" SERIAL NOT NULL,
    "Name" TEXT NOT NULL,
    "courseCode" INTEGER NOT NULL,
    "Coefficient" INTEGER NOT NULL,
    "Start_Date" TIMESTAMP(3) NOT NULL,
    "End_Date" TIMESTAMP(3) NOT NULL,
    "Teacher_ID" INTEGER NOT NULL,
    "Class_Level" INTEGER NOT NULL,
    "Class_ID" INTEGER NOT NULL,

    CONSTRAINT "Course_pkey" PRIMARY KEY ("Id")
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
CREATE TABLE "BlockNote" (
    "Id" SERIAL NOT NULL,
    "task" TEXT NOT NULL,
    "isComplete" BOOLEAN NOT NULL DEFAULT false,
    "deadline" TIMESTAMP(3),
    "note" TEXT,
    "title" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "BlockNote_pkey" PRIMARY KEY ("Id")
);

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
CREATE TABLE "SchoolEvent" (
    "Id" SERIAL NOT NULL,
    "venue" TEXT NOT NULL,
    "organizer" TEXT NOT NULL,
    "date" TIMESTAMP(3) NOT NULL,
    "description" TEXT NOT NULL,
    "fieldTrip" TEXT NOT NULL,

    CONSTRAINT "SchoolEvent_pkey" PRIMARY KEY ("Id")
);

-- CreateTable
CREATE TABLE "TokenBlacklist" (
    "id" SERIAL NOT NULL,
    "token" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "TokenBlacklist_pkey" PRIMARY KEY ("id")
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
CREATE INDEX "Registration_Student_ID_idx" ON "Registration"("Student_ID");

-- CreateIndex
CREATE INDEX "Registration_Academic_ID_idx" ON "Registration"("Academic_ID");

-- CreateIndex
CREATE UNIQUE INDEX "User_Email_key" ON "User"("Email");

-- CreateIndex
CREATE UNIQUE INDEX "Donation_Email_key" ON "Donation"("Email");

-- CreateIndex
CREATE UNIQUE INDEX "Student_UserId_key" ON "Student"("UserId");

-- CreateIndex
CREATE INDEX "Student_classId_idx" ON "Student"("classId");

-- CreateIndex
CREATE INDEX "ParentRelation_Parent_ID_idx" ON "ParentRelation"("Parent_ID");

-- CreateIndex
CREATE INDEX "ParentRelation_Student_ID_idx" ON "ParentRelation"("Student_ID");

-- CreateIndex
CREATE UNIQUE INDEX "Parent_UserId_key" ON "Parent"("UserId");

-- CreateIndex
CREATE UNIQUE INDEX "Teacher_UserId_key" ON "Teacher"("UserId");

-- CreateIndex
CREATE UNIQUE INDEX "user_roles_user_id_key" ON "user_roles"("user_id");

-- CreateIndex
CREATE INDEX "user_roles_user_id_idx" ON "user_roles"("user_id");

-- CreateIndex
CREATE INDEX "user_roles_role_id_idx" ON "user_roles"("role_id");

-- CreateIndex
CREATE UNIQUE INDEX "roles_name_key" ON "roles"("name");

-- CreateIndex
CREATE INDEX "Chapter_Course_ID_idx" ON "Chapter"("Course_ID");

-- CreateIndex
CREATE INDEX "Grade_Student_ID_idx" ON "Grade"("Student_ID");

-- CreateIndex
CREATE INDEX "Grade_Course_ID_idx" ON "Grade"("Course_ID");

-- CreateIndex
CREATE INDEX "Evaluation_Student_ID_idx" ON "Evaluation"("Student_ID");

-- CreateIndex
CREATE INDEX "Transcript_Student_ID_idx" ON "Transcript"("Student_ID");

-- CreateIndex
CREATE INDEX "Transcript_Course_ID_idx" ON "Transcript"("Course_ID");

-- CreateIndex
CREATE INDEX "Absence_Student_ID_idx" ON "Absence"("Student_ID");

-- CreateIndex
CREATE INDEX "Absence_teacher_id_idx" ON "Absence"("teacher_id");

-- CreateIndex
CREATE INDEX "Absence_class_id_idx" ON "Absence"("class_id");

-- CreateIndex
CREATE INDEX "Lateness_Student_ID_idx" ON "Lateness"("Student_ID");

-- CreateIndex
CREATE INDEX "Discipline_Teacher_ID_idx" ON "Discipline"("Teacher_ID");

-- CreateIndex
CREATE INDEX "Discipline_Student_ID_idx" ON "Discipline"("Student_ID");

-- CreateIndex
CREATE INDEX "Schedule_Room_ID_idx" ON "Schedule"("Room_ID");

-- CreateIndex
CREATE INDEX "Schedule_Course_ID_idx" ON "Schedule"("Course_ID");

-- CreateIndex
CREATE INDEX "Payment_Student_ID_idx" ON "Payment"("Student_ID");

-- CreateIndex
CREATE INDEX "Payment_Service_ID_idx" ON "Payment"("Service_ID");

-- CreateIndex
CREATE UNIQUE INDEX "Personnel_UserId_key" ON "Personnel"("UserId");

-- CreateIndex
CREATE INDEX "PaySleep_Personnel_ID_idx" ON "PaySleep"("Personnel_ID");

-- CreateIndex
CREATE INDEX "PaySleep_Teacher_ID_idx" ON "PaySleep"("Teacher_ID");

-- CreateIndex
CREATE INDEX "PaySleep_Budget_ID_idx" ON "PaySleep"("Budget_ID");

-- CreateIndex
CREATE INDEX "Product_Warehouse_ID_idx" ON "Product"("Warehouse_ID");

-- CreateIndex
CREATE INDEX "Leaves_Personnel_ID_idx" ON "Leaves"("Personnel_ID");

-- CreateIndex
CREATE INDEX "Leaves_Teacher_ID_idx" ON "Leaves"("Teacher_ID");

-- CreateIndex
CREATE INDEX "RHEvaluation_Personnel_ID_idx" ON "RHEvaluation"("Personnel_ID");

-- CreateIndex
CREATE INDEX "RHEvaluation_Teacher_ID_idx" ON "RHEvaluation"("Teacher_ID");

-- CreateIndex
CREATE INDEX "Expenses_Budget_ID_idx" ON "Expenses"("Budget_ID");

-- CreateIndex
CREATE UNIQUE INDEX "Classes_classCode_key" ON "Classes"("classCode");

-- CreateIndex
CREATE INDEX "Classes_teacherId_idx" ON "Classes"("teacherId");

-- CreateIndex
CREATE INDEX "Course_Teacher_ID_idx" ON "Course"("Teacher_ID");

-- CreateIndex
CREATE INDEX "Course_Class_ID_idx" ON "Course"("Class_ID");

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
CREATE INDEX "Incident_Student_ID_idx" ON "Incident"("Student_ID");

-- CreateIndex
CREATE UNIQUE INDEX "TokenBlacklist_token_key" ON "TokenBlacklist"("token");

-- CreateIndex
CREATE UNIQUE INDEX "_CourseToStudent_AB_unique" ON "_CourseToStudent"("A", "B");

-- CreateIndex
CREATE INDEX "_CourseToStudent_B_index" ON "_CourseToStudent"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_AssignmentToStudent_AB_unique" ON "_AssignmentToStudent"("A", "B");

-- CreateIndex
CREATE INDEX "_AssignmentToStudent_B_index" ON "_AssignmentToStudent"("B");

-- AddForeignKey
ALTER TABLE "Registration" ADD CONSTRAINT "Registration_Student_ID_fkey" FOREIGN KEY ("Student_ID") REFERENCES "Student"("Id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Registration" ADD CONSTRAINT "Registration_Academic_ID_fkey" FOREIGN KEY ("Academic_ID") REFERENCES "SchoolYear"("Id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Student" ADD CONSTRAINT "Student_UserId_fkey" FOREIGN KEY ("UserId") REFERENCES "User"("Id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Student" ADD CONSTRAINT "Student_classId_fkey" FOREIGN KEY ("classId") REFERENCES "Classes"("Id") ON DELETE RESTRICT ON UPDATE CASCADE;

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
ALTER TABLE "Payment" ADD CONSTRAINT "Payment_Service_ID_fkey" FOREIGN KEY ("Service_ID") REFERENCES "Service"("Id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Personnel" ADD CONSTRAINT "Personnel_UserId_fkey" FOREIGN KEY ("UserId") REFERENCES "User"("Id") ON DELETE RESTRICT ON UPDATE CASCADE;

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
