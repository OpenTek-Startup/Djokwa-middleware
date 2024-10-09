-- CreateEnum
CREATE TYPE "Gender" AS ENUM ('Male', 'Female');

-- CreateEnum
CREATE TYPE "RelationType" AS ENUM ('Mother', 'Father', 'Guardian', 'Other');

-- CreateEnum
CREATE TYPE "EvaluationType" AS ENUM ('Exam', 'Assignment', 'Quiz', 'Project', 'Other');

-- CreateEnum
CREATE TYPE "ProgressStatus" AS ENUM ('NotStarted', 'InProgress', 'Completed');

-- CreateEnum
CREATE TYPE "AbsenceStatus" AS ENUM ('PRESENT', 'ABSENT', 'LATE', 'LEAVE');

-- CreateEnum
CREATE TYPE "Days" AS ENUM ('Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday');

-- CreateEnum
CREATE TYPE "LeaveType" AS ENUM ('Vacation', 'SickLeave', 'MaternityLeave', 'PaternityLeave', 'Other');

-- CreateTable
CREATE TABLE "SchoolYear" (
    "Academic_ID" SERIAL NOT NULL,
    "Start_date" TIMESTAMP(3) NOT NULL,
    "End_date" TIMESTAMP(3) NOT NULL,
    "year" TEXT NOT NULL,

    CONSTRAINT "SchoolYear_pkey" PRIMARY KEY ("Academic_ID")
);

-- CreateTable
CREATE TABLE "Registration" (
    "Registration_ID" SERIAL NOT NULL,
    "Registration_Date" TIMESTAMP(3) NOT NULL,
    "Student_ID" INTEGER NOT NULL,
    "Academic_ID" INTEGER NOT NULL,

    CONSTRAINT "Registration_pkey" PRIMARY KEY ("Registration_ID")
);

-- CreateTable
CREATE TABLE "Student" (
    "Student_ID" SERIAL NOT NULL,
    "First_Name" TEXT NOT NULL,
    "Last_Name" TEXT NOT NULL,
    "Date_Of_Birth" TIMESTAMP(3) NOT NULL,
    "Gender" "Gender" NOT NULL,
    "Address" TEXT NOT NULL,
    "Phone" TEXT,
    "Medical_Info" TEXT,
    "Image" TEXT,
    "password" TEXT NOT NULL,
    "Class_ID" INTEGER NOT NULL,

    CONSTRAINT "Student_pkey" PRIMARY KEY ("Student_ID")
);

-- CreateTable
CREATE TABLE "ParentRelation" (
    "ParentRelation_ID" SERIAL NOT NULL,
    "Parent_ID" INTEGER NOT NULL,
    "Student_ID" INTEGER NOT NULL,
    "Relation_Type" "RelationType" NOT NULL,

    CONSTRAINT "ParentRelation_pkey" PRIMARY KEY ("ParentRelation_ID")
);

-- CreateTable
CREATE TABLE "Parent" (
    "Parent_ID" SERIAL NOT NULL,
    "Last_Name" TEXT NOT NULL,
    "First_Name" TEXT NOT NULL,
    "Profession" TEXT,
    "Address" TEXT NOT NULL,
    "Email" TEXT,
    "Phone" TEXT,
    "NIC_Information" TEXT,
    "password" TEXT NOT NULL,

    CONSTRAINT "Parent_pkey" PRIMARY KEY ("Parent_ID")
);

-- CreateTable
CREATE TABLE "Teacher" (
    "Teacher_ID" SERIAL NOT NULL,
    "Last_Name" TEXT NOT NULL,
    "First_Name" TEXT NOT NULL,
    "Email" TEXT NOT NULL,
    "Phone" TEXT NOT NULL,
    "Specialty" TEXT NOT NULL,
    "Hiring_Date" TIMESTAMP(3) NOT NULL,
    "Image" TEXT,
    "Salary" DOUBLE PRECISION NOT NULL,
    "password" TEXT NOT NULL,
    "gender" "Gender" NOT NULL,
    "address" TEXT NOT NULL,

    CONSTRAINT "Teacher_pkey" PRIMARY KEY ("Teacher_ID")
);

-- CreateTable
CREATE TABLE "user_roles" (
    "id" SERIAL NOT NULL,
    "teacher_id" INTEGER,
    "student_id" INTEGER,
    "staff_id" INTEGER,
    "role_id" INTEGER NOT NULL,

    CONSTRAINT "user_roles_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "roles" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "roles_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "classes" (
    "class_id" SERIAL NOT NULL,
    "class_name" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "classes_pkey" PRIMARY KEY ("class_id")
);

-- CreateTable
CREATE TABLE "Course" (
    "Course_ID" SERIAL NOT NULL,
    "Name" TEXT NOT NULL,
    "Class_Level" INTEGER NOT NULL,
    "Coefficient" INTEGER NOT NULL,
    "Start_Date" TIMESTAMP(3) NOT NULL,
    "End_Date" TIMESTAMP(3) NOT NULL,
    "Teacher_ID" INTEGER NOT NULL,
    "Class_ID" INTEGER NOT NULL,

    CONSTRAINT "Course_pkey" PRIMARY KEY ("Course_ID")
);

-- CreateTable
CREATE TABLE "Chapter" (
    "Chapter_ID" SERIAL NOT NULL,
    "Name" TEXT NOT NULL,
    "Description" TEXT,
    "Coefficient" INTEGER NOT NULL,
    "Start_Date" TIMESTAMP(3) NOT NULL,
    "End_Date" TIMESTAMP(3) NOT NULL,
    "Progress_Status" "ProgressStatus" NOT NULL,
    "Course_ID" INTEGER NOT NULL,

    CONSTRAINT "Chapter_pkey" PRIMARY KEY ("Chapter_ID")
);

-- CreateTable
CREATE TABLE "Grade" (
    "Grade_ID" SERIAL NOT NULL,
    "Value" DOUBLE PRECISION NOT NULL,
    "Student_ID" INTEGER NOT NULL,
    "Course_ID" INTEGER NOT NULL,

    CONSTRAINT "Grade_pkey" PRIMARY KEY ("Grade_ID")
);

-- CreateTable
CREATE TABLE "Evaluation" (
    "Evaluation_ID" SERIAL NOT NULL,
    "Type" "EvaluationType" NOT NULL,
    "Start_Date" TIMESTAMP(3) NOT NULL,
    "End_Date" TIMESTAMP(3) NOT NULL,
    "Description" TEXT,
    "Student_ID" INTEGER NOT NULL,

    CONSTRAINT "Evaluation_pkey" PRIMARY KEY ("Evaluation_ID")
);

-- CreateTable
CREATE TABLE "Transcript" (
    "Transcript_ID" SERIAL NOT NULL,
    "Name" TEXT NOT NULL,
    "Logo" TEXT,
    "Student_ID" INTEGER NOT NULL,
    "Course_ID" INTEGER NOT NULL,

    CONSTRAINT "Transcript_pkey" PRIMARY KEY ("Transcript_ID")
);

-- CreateTable
CREATE TABLE "Absence" (
    "Absence_ID" SERIAL NOT NULL,
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

    CONSTRAINT "Absence_pkey" PRIMARY KEY ("Absence_ID")
);

-- CreateTable
CREATE TABLE "Lateness" (
    "Lateness_ID" SERIAL NOT NULL,
    "Lateness_Date" TIMESTAMP(3) NOT NULL,
    "Lateness_Time" DOUBLE PRECISION,
    "Justification" TEXT,
    "Student_ID" INTEGER NOT NULL,

    CONSTRAINT "Lateness_pkey" PRIMARY KEY ("Lateness_ID")
);

-- CreateTable
CREATE TABLE "Discipline" (
    "Discipline_ID" SERIAL NOT NULL,
    "Sanction" TEXT,
    "Justification" TEXT,
    "Student_ID" INTEGER NOT NULL,
    "Teacher_ID" INTEGER NOT NULL,

    CONSTRAINT "Discipline_pkey" PRIMARY KEY ("Discipline_ID")
);

-- CreateTable
CREATE TABLE "Schedule" (
    "Schedule_ID" SERIAL NOT NULL,
    "Day" "Days" NOT NULL,
    "Start_Time" TIMESTAMP(3) NOT NULL,
    "End_Time" TIMESTAMP(3) NOT NULL,
    "Room_ID" INTEGER NOT NULL,
    "Course_ID" INTEGER NOT NULL,

    CONSTRAINT "Schedule_pkey" PRIMARY KEY ("Schedule_ID")
);

-- CreateTable
CREATE TABLE "Room" (
    "Room_ID" SERIAL NOT NULL,
    "Name" TEXT NOT NULL,

    CONSTRAINT "Room_pkey" PRIMARY KEY ("Room_ID")
);

-- CreateTable
CREATE TABLE "Payment" (
    "Payment_ID" SERIAL NOT NULL,
    "Amount" DOUBLE PRECISION NOT NULL,
    "Payment_Date" TIMESTAMP(3) NOT NULL,
    "Student_ID" INTEGER NOT NULL,
    "Service_ID" INTEGER NOT NULL,

    CONSTRAINT "Payment_pkey" PRIMARY KEY ("Payment_ID")
);

-- CreateTable
CREATE TABLE "Service" (
    "Service_ID" SERIAL NOT NULL,
    "Name" TEXT NOT NULL,
    "Logo" TEXT,

    CONSTRAINT "Service_pkey" PRIMARY KEY ("Service_ID")
);

-- CreateTable
CREATE TABLE "Event" (
    "Event_ID" SERIAL NOT NULL,
    "Name" TEXT NOT NULL,
    "Logo" TEXT,

    CONSTRAINT "Event_pkey" PRIMARY KEY ("Event_ID")
);

-- CreateTable
CREATE TABLE "Personnel" (
    "Staff_ID" SERIAL NOT NULL,
    "Email" TEXT NOT NULL,
    "Staff_Role" TEXT NOT NULL,
    "password" TEXT NOT NULL,

    CONSTRAINT "Personnel_pkey" PRIMARY KEY ("Staff_ID")
);

-- CreateTable
CREATE TABLE "PaySleep" (
    "PaySleep_ID" SERIAL NOT NULL,
    "FirstName" TEXT NOT NULL,
    "LastName" TEXT NOT NULL,
    "JerseyNum" TEXT NOT NULL,
    "Position" TEXT NOT NULL,
    "Pay_Date" TIMESTAMP(3) NOT NULL,
    "Amount" DOUBLE PRECISION NOT NULL,
    "Personnel_ID" INTEGER,
    "Teacher_ID" INTEGER,
    "Budget_ID" INTEGER,

    CONSTRAINT "PaySleep_pkey" PRIMARY KEY ("PaySleep_ID")
);

-- CreateTable
CREATE TABLE "Warehouse" (
    "Warehouse_ID" SERIAL NOT NULL,
    "Name" TEXT NOT NULL,
    "Location" TEXT NOT NULL,

    CONSTRAINT "Warehouse_pkey" PRIMARY KEY ("Warehouse_ID")
);

-- CreateTable
CREATE TABLE "Product" (
    "Product_ID" SERIAL NOT NULL,
    "Name" TEXT NOT NULL,
    "Category" TEXT NOT NULL,
    "Quantity" INTEGER NOT NULL,
    "Price" DOUBLE PRECISION NOT NULL,
    "Warehouse_ID" INTEGER NOT NULL,

    CONSTRAINT "Product_pkey" PRIMARY KEY ("Product_ID")
);

-- CreateTable
CREATE TABLE "Leaves" (
    "Leave_ID" SERIAL NOT NULL,
    "FirstName" TEXT NOT NULL,
    "LastName" TEXT NOT NULL,
    "JerseyNum" TEXT NOT NULL,
    "Position" TEXT NOT NULL,
    "Start_Date" TIMESTAMP(3) NOT NULL,
    "End_Date" TIMESTAMP(3) NOT NULL,
    "Type" "LeaveType" NOT NULL,
    "Personnel_ID" INTEGER,
    "Teacher_ID" INTEGER,

    CONSTRAINT "Leaves_pkey" PRIMARY KEY ("Leave_ID")
);

-- CreateTable
CREATE TABLE "RHEvaluation" (
    "RHEvaluation_ID" SERIAL NOT NULL,
    "FirstName" TEXT NOT NULL,
    "LastName" TEXT NOT NULL,
    "JerseyNum" TEXT NOT NULL,
    "Position" TEXT NOT NULL,
    "Evaluation_Date" TIMESTAMP(3) NOT NULL,
    "Score" INTEGER NOT NULL,
    "Comments" TEXT,
    "Personnel_ID" INTEGER,
    "Teacher_ID" INTEGER,

    CONSTRAINT "RHEvaluation_pkey" PRIMARY KEY ("RHEvaluation_ID")
);

-- CreateTable
CREATE TABLE "Budget" (
    "Budget_ID" SERIAL NOT NULL,
    "Name" TEXT NOT NULL,
    "Description" TEXT NOT NULL,
    "Amount" DOUBLE PRECISION NOT NULL,
    "Year" TEXT NOT NULL,

    CONSTRAINT "Budget_pkey" PRIMARY KEY ("Budget_ID")
);

-- CreateTable
CREATE TABLE "Expenses" (
    "Expense_ID" SERIAL NOT NULL,
    "Name" TEXT NOT NULL,
    "Description" TEXT,
    "Amount" DOUBLE PRECISION NOT NULL,
    "Date" TIMESTAMP(3) NOT NULL,
    "Budget_ID" INTEGER NOT NULL,

    CONSTRAINT "Expenses_pkey" PRIMARY KEY ("Expense_ID")
);

-- CreateTable
CREATE TABLE "Income" (
    "Income_ID" SERIAL NOT NULL,
    "Name" TEXT NOT NULL,
    "Description" TEXT,
    "Amount" DOUBLE PRECISION NOT NULL,
    "Date" TIMESTAMP(3) NOT NULL,
    "IncomeType" TEXT NOT NULL,

    CONSTRAINT "Income_pkey" PRIMARY KEY ("Income_ID")
);

-- CreateTable
CREATE TABLE "_TeacherToclasses" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "Teacher_Email_key" ON "Teacher"("Email");

-- CreateIndex
CREATE UNIQUE INDEX "Teacher_Phone_key" ON "Teacher"("Phone");

-- CreateIndex
CREATE UNIQUE INDEX "user_roles_teacher_id_key" ON "user_roles"("teacher_id");

-- CreateIndex
CREATE UNIQUE INDEX "user_roles_student_id_key" ON "user_roles"("student_id");

-- CreateIndex
CREATE UNIQUE INDEX "user_roles_staff_id_key" ON "user_roles"("staff_id");

-- CreateIndex
CREATE UNIQUE INDEX "roles_name_key" ON "roles"("name");

-- CreateIndex
CREATE UNIQUE INDEX "classes_class_name_key" ON "classes"("class_name");

-- CreateIndex
CREATE UNIQUE INDEX "_TeacherToclasses_AB_unique" ON "_TeacherToclasses"("A", "B");

-- CreateIndex
CREATE INDEX "_TeacherToclasses_B_index" ON "_TeacherToclasses"("B");

-- AddForeignKey
ALTER TABLE "Registration" ADD CONSTRAINT "Registration_Student_ID_fkey" FOREIGN KEY ("Student_ID") REFERENCES "Student"("Student_ID") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Registration" ADD CONSTRAINT "Registration_Academic_ID_fkey" FOREIGN KEY ("Academic_ID") REFERENCES "SchoolYear"("Academic_ID") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Student" ADD CONSTRAINT "Student_Class_ID_fkey" FOREIGN KEY ("Class_ID") REFERENCES "classes"("class_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ParentRelation" ADD CONSTRAINT "ParentRelation_Parent_ID_fkey" FOREIGN KEY ("Parent_ID") REFERENCES "Parent"("Parent_ID") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ParentRelation" ADD CONSTRAINT "ParentRelation_Student_ID_fkey" FOREIGN KEY ("Student_ID") REFERENCES "Student"("Student_ID") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "user_roles" ADD CONSTRAINT "user_roles_teacher_id_fkey" FOREIGN KEY ("teacher_id") REFERENCES "Teacher"("Teacher_ID") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "user_roles" ADD CONSTRAINT "user_roles_role_id_fkey" FOREIGN KEY ("role_id") REFERENCES "roles"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "user_roles" ADD CONSTRAINT "user_roles_student_id_fkey" FOREIGN KEY ("student_id") REFERENCES "Student"("Student_ID") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "user_roles" ADD CONSTRAINT "user_roles_staff_id_fkey" FOREIGN KEY ("staff_id") REFERENCES "Personnel"("Staff_ID") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Course" ADD CONSTRAINT "Course_Class_ID_fkey" FOREIGN KEY ("Class_ID") REFERENCES "classes"("class_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Course" ADD CONSTRAINT "Course_Teacher_ID_fkey" FOREIGN KEY ("Teacher_ID") REFERENCES "Teacher"("Teacher_ID") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Chapter" ADD CONSTRAINT "Chapter_Course_ID_fkey" FOREIGN KEY ("Course_ID") REFERENCES "Course"("Course_ID") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Grade" ADD CONSTRAINT "Grade_Student_ID_fkey" FOREIGN KEY ("Student_ID") REFERENCES "Student"("Student_ID") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Grade" ADD CONSTRAINT "Grade_Course_ID_fkey" FOREIGN KEY ("Course_ID") REFERENCES "Course"("Course_ID") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Evaluation" ADD CONSTRAINT "Evaluation_Student_ID_fkey" FOREIGN KEY ("Student_ID") REFERENCES "Student"("Student_ID") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Transcript" ADD CONSTRAINT "Transcript_Student_ID_fkey" FOREIGN KEY ("Student_ID") REFERENCES "Student"("Student_ID") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Transcript" ADD CONSTRAINT "Transcript_Course_ID_fkey" FOREIGN KEY ("Course_ID") REFERENCES "Course"("Course_ID") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Absence" ADD CONSTRAINT "Absence_Student_ID_fkey" FOREIGN KEY ("Student_ID") REFERENCES "Student"("Student_ID") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Absence" ADD CONSTRAINT "Absence_teacher_id_fkey" FOREIGN KEY ("teacher_id") REFERENCES "Teacher"("Teacher_ID") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Absence" ADD CONSTRAINT "Absence_class_id_fkey" FOREIGN KEY ("class_id") REFERENCES "classes"("class_id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Lateness" ADD CONSTRAINT "Lateness_Student_ID_fkey" FOREIGN KEY ("Student_ID") REFERENCES "Student"("Student_ID") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Discipline" ADD CONSTRAINT "Discipline_Teacher_ID_fkey" FOREIGN KEY ("Teacher_ID") REFERENCES "Teacher"("Teacher_ID") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Discipline" ADD CONSTRAINT "Discipline_Student_ID_fkey" FOREIGN KEY ("Student_ID") REFERENCES "Student"("Student_ID") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Schedule" ADD CONSTRAINT "Schedule_Room_ID_fkey" FOREIGN KEY ("Room_ID") REFERENCES "Room"("Room_ID") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Schedule" ADD CONSTRAINT "Schedule_Course_ID_fkey" FOREIGN KEY ("Course_ID") REFERENCES "Course"("Course_ID") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Payment" ADD CONSTRAINT "Payment_Student_ID_fkey" FOREIGN KEY ("Student_ID") REFERENCES "Student"("Student_ID") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Payment" ADD CONSTRAINT "Payment_Service_ID_fkey" FOREIGN KEY ("Service_ID") REFERENCES "Service"("Service_ID") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "PaySleep" ADD CONSTRAINT "PaySleep_Personnel_ID_fkey" FOREIGN KEY ("Personnel_ID") REFERENCES "Personnel"("Staff_ID") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "PaySleep" ADD CONSTRAINT "PaySleep_Teacher_ID_fkey" FOREIGN KEY ("Teacher_ID") REFERENCES "Teacher"("Teacher_ID") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "PaySleep" ADD CONSTRAINT "PaySleep_Budget_ID_fkey" FOREIGN KEY ("Budget_ID") REFERENCES "Budget"("Budget_ID") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Product" ADD CONSTRAINT "Product_Warehouse_ID_fkey" FOREIGN KEY ("Warehouse_ID") REFERENCES "Warehouse"("Warehouse_ID") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Leaves" ADD CONSTRAINT "Leaves_Personnel_ID_fkey" FOREIGN KEY ("Personnel_ID") REFERENCES "Personnel"("Staff_ID") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Leaves" ADD CONSTRAINT "Leaves_Teacher_ID_fkey" FOREIGN KEY ("Teacher_ID") REFERENCES "Teacher"("Teacher_ID") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "RHEvaluation" ADD CONSTRAINT "RHEvaluation_Personnel_ID_fkey" FOREIGN KEY ("Personnel_ID") REFERENCES "Personnel"("Staff_ID") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "RHEvaluation" ADD CONSTRAINT "RHEvaluation_Teacher_ID_fkey" FOREIGN KEY ("Teacher_ID") REFERENCES "Teacher"("Teacher_ID") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Expenses" ADD CONSTRAINT "Expenses_Budget_ID_fkey" FOREIGN KEY ("Budget_ID") REFERENCES "Budget"("Budget_ID") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_TeacherToclasses" ADD CONSTRAINT "_TeacherToclasses_A_fkey" FOREIGN KEY ("A") REFERENCES "Teacher"("Teacher_ID") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_TeacherToclasses" ADD CONSTRAINT "_TeacherToclasses_B_fkey" FOREIGN KEY ("B") REFERENCES "classes"("class_id") ON DELETE CASCADE ON UPDATE CASCADE;
