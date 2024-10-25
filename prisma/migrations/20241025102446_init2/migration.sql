-- CreateIndex
CREATE INDEX "Absence_Student_ID_idx" ON "Absence"("Student_ID");

-- CreateIndex
CREATE INDEX "Absence_teacher_id_idx" ON "Absence"("teacher_id");

-- CreateIndex
CREATE INDEX "Absence_class_id_idx" ON "Absence"("class_id");

-- CreateIndex
CREATE INDEX "Assignment_teacherId_idx" ON "Assignment"("teacherId");

-- CreateIndex
CREATE INDEX "Assignment_classId_idx" ON "Assignment"("classId");

-- CreateIndex
CREATE INDEX "Assignment_courseId_idx" ON "Assignment"("courseId");

-- CreateIndex
CREATE INDEX "Chapter_Course_ID_idx" ON "Chapter"("Course_ID");

-- CreateIndex
CREATE INDEX "Classes_teacherId_idx" ON "Classes"("teacherId");

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
CREATE INDEX "Expenses_Budget_ID_idx" ON "Expenses"("Budget_ID");

-- CreateIndex
CREATE INDEX "Grade_Student_ID_idx" ON "Grade"("Student_ID");

-- CreateIndex
CREATE INDEX "Grade_Course_ID_idx" ON "Grade"("Course_ID");

-- CreateIndex
CREATE INDEX "Incident_Student_ID_idx" ON "Incident"("Student_ID");

-- CreateIndex
CREATE INDEX "Lateness_Student_ID_idx" ON "Lateness"("Student_ID");

-- CreateIndex
CREATE INDEX "Leaves_Personnel_ID_idx" ON "Leaves"("Personnel_ID");

-- CreateIndex
CREATE INDEX "Leaves_Teacher_ID_idx" ON "Leaves"("Teacher_ID");

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
CREATE INDEX "Product_Warehouse_ID_idx" ON "Product"("Warehouse_ID");

-- CreateIndex
CREATE INDEX "RHEvaluation_Personnel_ID_idx" ON "RHEvaluation"("Personnel_ID");

-- CreateIndex
CREATE INDEX "RHEvaluation_Teacher_ID_idx" ON "RHEvaluation"("Teacher_ID");

-- CreateIndex
CREATE INDEX "Registration_Student_ID_idx" ON "Registration"("Student_ID");

-- CreateIndex
CREATE INDEX "Registration_Academic_ID_idx" ON "Registration"("Academic_ID");

-- CreateIndex
CREATE INDEX "Schedule_Room_ID_idx" ON "Schedule"("Room_ID");

-- CreateIndex
CREATE INDEX "Schedule_Course_ID_idx" ON "Schedule"("Course_ID");

-- CreateIndex
CREATE INDEX "Student_classId_idx" ON "Student"("classId");

-- CreateIndex
CREATE INDEX "Submission_teacherId_idx" ON "Submission"("teacherId");

-- CreateIndex
CREATE INDEX "Submission_studentId_idx" ON "Submission"("studentId");

-- CreateIndex
CREATE INDEX "Submission_assignmentId_idx" ON "Submission"("assignmentId");

-- CreateIndex
CREATE INDEX "Transcript_Student_ID_idx" ON "Transcript"("Student_ID");

-- CreateIndex
CREATE INDEX "Transcript_Course_ID_idx" ON "Transcript"("Course_ID");

-- CreateIndex
CREATE INDEX "user_roles_teacher_id_idx" ON "user_roles"("teacher_id");

-- CreateIndex
CREATE INDEX "user_roles_staff_id_idx" ON "user_roles"("staff_id");

-- CreateIndex
CREATE INDEX "user_roles_student_id_idx" ON "user_roles"("student_id");

-- CreateIndex
CREATE INDEX "user_roles_parent_id_idx" ON "user_roles"("parent_id");

-- CreateIndex
CREATE INDEX "user_roles_role_id_idx" ON "user_roles"("role_id");
