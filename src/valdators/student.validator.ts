import { IsString, IsOptional, IsNumber, IsDateString } from 'class-validator';
import { User } from './base-user.validator';

// CreateStudentDto class extends User with required fields
export class CreateStudentDto extends User {
  @IsString({ message: 'Image must be a string.' })
  @IsOptional()
  Image?: string;

  @IsNumber({}, { message: 'Student ID must be a number.' })
  @IsOptional()
  Student_ID?: number;

  @IsDateString({}, { message: 'Date of birth must be a valid date.' })
  @IsOptional()
  DOB?: string;
}

// UpdateStudentDto class extends User and keeps fields optional
export class UpdateStudentDto extends User {
  @IsString({ message: 'Image must be a string.' })
  @IsOptional()
  Image?: string;

  // Student_ID should not be updated directly
  @IsNumber({}, { message: 'Student ID must be a number.' })
  @IsOptional()
  Student_ID?: number;
}
