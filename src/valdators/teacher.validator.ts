import { IsString, IsNotEmpty, IsEmail, IsOptional, IsNumber, IsDateString, MaxLength } from 'class-validator';

export class CreateTeacherDto {
    @IsString({ message: 'First name must be a string.' })
    @IsNotEmpty({ message: 'First name is required.' })
    @MaxLength(50, { message: 'First name cannot exceed 50 characters.' })
    First_Name!: string;
  
    @IsString({ message: 'Last name must be a string.' })
    @IsNotEmpty({ message: 'Last name is required.' })
    @MaxLength(50, { message: 'Last name cannot exceed 50 characters.' })
    Last_Name!: string;
  
    @IsDateString({}, { message: 'Hiring date must be a valid date.' })
    @IsOptional()
    Hiring_Date?: string;
  
    @IsNumber({}, { message: 'Salary must be a number.' })
    @IsOptional()
    Salary?: number;
  
    @IsString({ message: 'Specialty must be a string.' })
    @IsOptional()
    Specialty?: string;
  
    @IsEmail({}, { message: 'Email must be a valid email address.' })
    @IsOptional()
    Email?: string;
  
    @IsString({ message: 'Image must be a string.' })
    @IsOptional()
    Image?: string;
  
    @IsString({ message: 'Phone must be a string.' })
    @IsOptional()
    Phone?: string;
  
    @IsNumber({}, { message: 'Teacher ID must be a number.' })
    @IsOptional()
    Teacher_ID?: number;

  // Define additional fields for Courses, Disciplines, Leaves, PaySleeps, and RHEvaluations
}