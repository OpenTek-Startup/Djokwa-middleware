import {
  IsString,
  IsNotEmpty,
  IsDateString,
  IsNumber,
  IsOptional,
  MaxLength,
} from 'class-validator';

export class CreateAssignmentDto {
  @IsString({ message: 'Title must be a string.' })
  @IsNotEmpty({ message: 'Title is required.' })
  @MaxLength(100, { message: 'Title cannot exceed 100 characters.' })
  title!: string;

  @IsString({ message: 'Description must be a string.' })
  @IsNotEmpty({ message: 'Description is required.' })
  description!: string;

  @IsDateString({}, { message: 'Due date must be a valid date.' })
  dueDate!: string;

  @IsNumber({}, { message: 'Class ID must be a number.' })
  @IsNotEmpty({ message: 'Class ID is required.' })
  classId!: number;

  @IsNumber({}, { message: 'Course ID must be a number.' })
  @IsNotEmpty({ message: 'Course ID is required.' })
  courseId!: number;

  @IsNumber({}, { message: 'Teacher ID must be a number.' })
  @IsNotEmpty({ message: 'Teacher ID is required.' })
  teacherId!: number;
}

export class UpdateAssignmentDto {
  @IsString({ message: 'Title must be a string.' })
  @IsOptional()
  @MaxLength(100, { message: 'Title cannot exceed 100 characters.' })
  title?: string;

  @IsString({ message: 'Description must be a string.' })
  @IsOptional()
  description?: string;

  @IsDateString({}, { message: 'Due date must be a valid date.' })
  @IsOptional()
  dueDate?: string;

  @IsNumber({}, { message: 'Class ID must be a number.' })
  @IsOptional()
  classId?: number;

  @IsNumber({}, { message: 'Course ID must be a number.' })
  @IsOptional()
  courseId?: number;

  @IsNumber({}, { message: 'Teacher ID must be a number.' })
  @IsOptional()
  teacherId?: number;
}

export class CreateClassDto {
  @IsString({ message: 'Name must be a string.' })
  @IsNotEmpty({ message: 'Name is required.' })
  @MaxLength(50, { message: 'Name cannot exceed 50 characters.' })
  name!: string;

  @IsString({ message: 'Class code must be a string.' })
  @IsNotEmpty({ message: 'Class code is required.' })
  classCode!: string;

  @IsNumber({}, { message: 'Capacity must be a number.' })
  @IsNotEmpty({ message: 'Capacity is required.' })
  capacity!: number;

  @IsNumber({}, { message: 'Teacher ID must be a number.' })
  @IsNotEmpty({ message: 'Teacher ID is required.' })
  teacherId!: number;
}

export class UpdateClassDto {
  @IsString({ message: 'Name must be a string.' })
  @IsOptional()
  name?: string;

  @IsString({ message: 'Class code must be a string.' })
  @IsOptional()
  classCode?: string;

  @IsNumber({}, { message: 'Capacity must be a number.' })
  @IsOptional()
  capacity?: number;

  @IsNumber({}, { message: 'Teacher ID must be a number.' })
  @IsOptional()
  teacherId?: number;
}

export class CreateCourseDto {
  @IsString({ message: 'Name must be a string.' })
  @IsNotEmpty({ message: 'Name is required.' })
  @MaxLength(100, { message: 'Name cannot exceed 100 characters.' })
  Name!: string;

  @IsNumber({}, { message: 'Course code must be a number.' })
  @IsNotEmpty({ message: 'Course code is required.' })
  courseCode!: number;

  @IsNumber({}, { message: 'Coefficient must be a number.' })
  @IsNotEmpty({ message: 'Coefficient is required.' })
  Coefficient!: number;

  @IsDateString({}, { message: 'Start date must be a valid date.' })
  @IsNotEmpty({ message: 'Start date is required.' })
  Start_Date!: string;

  @IsDateString({}, { message: 'End date must be a valid date.' })
  @IsNotEmpty({ message: 'End date is required.' })
  End_Date!: string;

  @IsNumber({}, { message: 'Teacher ID must be a number.' })
  @IsNotEmpty({ message: 'Teacher ID is required.' })
  Teacher_ID!: number;

  @IsNumber({}, { message: 'Class level must be a number.' })
  @IsNotEmpty({ message: 'Class level is required.' })
  Class_Level!: number;

  @IsNumber({}, { message: 'Class ID must be a number.' })
  @IsNotEmpty({ message: 'Class ID is required.' })
  Class_ID!: number;
}

export class UpdateCourseDto {
  @IsString({ message: 'Name must be a string.' })
  @IsOptional()
  Name?: string;

  @IsNumber({}, { message: 'Course code must be a number.' })
  @IsOptional()
  courseCode?: number;

  @IsNumber({}, { message: 'Coefficient must be a number.' })
  @IsOptional()
  Coefficient?: number;

  @IsDateString({}, { message: 'Start date must be a valid date.' })
  @IsOptional()
  Start_Date?: string;

  @IsDateString({}, { message: 'End date must be a valid date.' })
  @IsOptional()
  End_Date?: string;

  @IsNumber({}, { message: 'Teacher ID must be a number.' })
  @IsOptional()
  Teacher_ID?: number;

  @IsNumber({}, { message: 'Class level must be a number.' })
  @IsOptional()
  Class_Level?: number;

  @IsNumber({}, { message: 'Class ID must be a number.' })
  @IsOptional()
  Class_ID?: number;
}
