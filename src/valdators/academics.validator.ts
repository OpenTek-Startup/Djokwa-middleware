import { 
    IsString, 
    IsNotEmpty, 
    IsOptional, 
    IsInt, 
    IsPositive,
    IsNumber,
    IsDateString, 
    MaxLength, 
    IsUrl 
  } from 'class-validator';
  
  // Assignment Validator
  export class CreateAssignmentDto {
    @IsDateString({}, { message: 'Due date must be a valid date (ISO format).' })
    @IsNotEmpty({ message: 'Due date is required.' })
    dueDate!: string;
  
    @IsString({ message: 'Title must be a string.' })
    @IsNotEmpty({ message: 'Title is required.' })
    @MaxLength(50, { message: 'Title cannot exceed 50 characters.' })
    title!: string;
  
    @IsInt({ message: 'Class ID must be an integer.' })
    @IsNotEmpty({ message: 'Class ID is required.' })
    classId!: number;
  
    @IsInt({ message: 'Course ID must be an integer.' })
    @IsNotEmpty({ message: 'Course ID is required.' })
    courseId!: number;
  
    @IsInt({ message: 'Teacher ID must be an integer.' })
    @IsNotEmpty({ message: 'Teacher ID is required.' })
    teacherId!: number;
  
    @IsString({ message: 'Description must be a string.' })
    @IsOptional()
    @MaxLength(500, { message: 'Description cannot exceed 500 characters.' })
    description?: string;
  }
  
  export class SubmitAssignmentDto {
    @IsInt({ message: 'Assignment ID must be an integer.' })
    @IsNotEmpty({ message: 'Assignment ID is required.' })
    assignmentId!: number;
  
    @IsInt({ message: 'Student ID must be an integer.' })
    @IsNotEmpty({ message: 'Student ID is required.' })
    studentId!: number;
  
    @IsUrl({}, { message: 'File URL must be a valid URL.' })
    @IsNotEmpty({ message: 'File URL is required.' })
    fileUrl!: string;
  
    @IsInt({ message: 'Teacher ID must be an integer.' })
    @IsNotEmpty({ message: 'Teacher ID is required.' })
    teacherId!: number;
  }
  
  // Class Validator
  export class CreateClassDto {
    @IsString({ message: 'Name must be a string.' })
    @IsNotEmpty({ message: 'Name is required.' })
    @MaxLength(50, { message: 'Name cannot exceed 50 characters.' })
    name!: string;
  
    @IsString({ message: 'Class code must be a string.' })
    @IsNotEmpty({ message: 'Class code is required.' })
    classCode!: string;
  
    @IsInt({ message: 'Teacher ID must be an integer.' })
    @IsNotEmpty({ message: 'Teacher ID is required.' })
    teacherId!: number;
  
    @IsInt({ message: 'Capacity must be an integer.' })
    @IsNotEmpty({ message: 'Capacity is required.' })
    capacity!: number;
  
    @IsInt({ message: 'Current enrollment must be an integer.' })
    @IsOptional()
    currentEnrollment?: number;
  }
  
  // Course Validator
  export class CreateCourseDto {
    @IsString({ message: 'Course name must be a string.' })
    @IsNotEmpty({ message: 'Course name is required.' })
    Name!: string;
  
    @IsString({ message: 'Course code must be a string.' })
    @IsNotEmpty({ message: 'Course code is required.' })
    courseCode!: string;
  
    @IsInt({ message: 'Coefficient must be an integer.' })
    @IsNotEmpty({ message: 'Coefficient is required.' })
    Coefficient!: number;
  
    @IsInt({ message: 'Teacher ID must be an integer.' })
    @IsNotEmpty({ message: 'Teacher ID is required.' })
    teacherId!: number;
  
    @IsInt({ message: 'Class ID must be an integer.' })
    @IsNotEmpty({ message: 'Class ID is required.' })
    classId!: number;
  
    @IsDateString({}, { message: 'End date must be a valid date.' })
    @IsNotEmpty({ message: 'End date is required.' })
    EndDate!: string;
  
    @IsDateString({}, { message: 'Start date must be a valid date.' })
    @IsNotEmpty({ message: 'Start date is required.' })
    StartDate!: string;
  }
  export class UpdateClassDto {
    @IsString({ message: 'Class name must be a string' })
    @IsOptional()
    @MaxLength(50, { message: 'Class name cannot exceed 50 characters' })
    name?: string;
  
    @IsString({ message: 'Class code must be a string' })
    @IsOptional()
    @MaxLength(10, { message: 'Class code cannot exceed 10 characters' })
    classCode?: string;
  
    @IsInt({ message: 'Teacher ID must be an integer' })
    @IsOptional()
    teacherId?: number;
  
    @IsInt({ message: 'Capacity must be an integer' })
    @IsOptional()
    capacity?: number;
  
    @IsInt({ message: 'Current enrollment must be an integer' })
    @IsOptional()
    currentEnrollment?: number;
  }
  
  export class UpdateCourseDto {
    @IsString({ message: 'Course name must be a string' })
    @IsOptional()
    @MaxLength(100, { message: 'Course name cannot exceed 100 characters' })
    Name?: string;
  
    @IsString({ message: 'Course code must be a string' })
    @IsOptional()
    @MaxLength(10, { message: 'Course code cannot exceed 10 characters' })
    courseCode?: string;
  
    @IsInt({ message: 'Teacher ID must be an integer' })
    @IsOptional()
    teacherId?: number;
  
    @IsInt({ message: 'Class ID must be an integer' })
    @IsOptional()
    classId?: number;
  
    @IsDateString({}, { message: 'Start date must be a valid date' })
    @IsOptional()
    StartDate?: string;
  
    @IsDateString({}, { message: 'End date must be a valid date' })
    @IsOptional()
    EndDate?: string;
  
    @IsInt({ message: 'Coefficient must be an integer' })
    @IsOptional()
    Coefficient?: number;
  }

export class CreateGradeDto {
  @IsNumber({}, { message: 'Value must be a number' })
  @IsNotEmpty({ message: 'Value is required' })
  @IsPositive({ message: 'Value must be a positive number' })
  Value!: number;

  @IsInt({ message: 'Student ID must be an integer' })
  @IsNotEmpty({ message: 'Student ID is required' })
  Student_ID!: number;

  @IsInt({ message: 'Course ID must be an integer' })
  @IsNotEmpty({ message: 'Course ID is required' })
  Course_ID!: number;

  @IsInt({ message: 'Assignment ID must be an integer' })
  @IsOptional()
  assignmentId?: number;
}

export class UpdateGradeDto {
  @IsNumber({}, { message: 'Value must be a number' })
  @IsOptional()
  @IsPositive({ message: 'Value must be a positive number' })
  Value?: number;

  @IsInt({ message: 'Student ID must be an integer' })
  @IsOptional()
  Student_ID?: number;

  @IsInt({ message: 'Course ID must be an integer' })
  @IsOptional()
  Course_ID?: number;

  @IsInt({ message: 'Assignment ID must be an integer' })
  @IsOptional()
  assignmentId?: number;
}
