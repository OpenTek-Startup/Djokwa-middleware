import {
  IsString,
  IsNotEmpty,
  IsOptional,
  IsNumber,
  IsDateString,
  MaxLength,
  IsEnum,
} from 'class-validator';

// Enum for Gender
enum Gender {
  FEMALE = 'Female',
  MALE = 'Male',
}

// Base User Class
class User {
  @IsString({ message: 'First name must be a string.' })
  @IsOptional()
  @MaxLength(50, { message: 'First name cannot exceed 50 characters.' })
  First_Name?: string;

  @IsString({ message: 'Last name must be a string.' })
  @IsOptional()
  @MaxLength(50, { message: 'Last name cannot exceed 50 characters.' })
  Last_Name?: string;

  @IsDateString({}, { message: 'Date of birth must be a valid date.' })
  @IsOptional()
  Date_Of_Birth?: string;

  @IsEnum(Gender, { message: 'Gender must be "Female" or "Male".' })
  @IsOptional()
  Gender?: Gender;

  @IsString({ message: 'Address must be a string.' })
  @IsOptional()
  @MaxLength(100, { message: 'Address cannot exceed 100 characters.' })
  Address?: string;
}

// CreateStudentDto class extends User with required fields
export class CreateStudentDto extends User {
  @IsNotEmpty({ message: 'First name is required.' })
  First_Name!: string;

  @IsNotEmpty({ message: 'Last name is required.' })
  Last_Name!: string;

  @IsNotEmpty({ message: 'Date of birth is required.' })
  Date_Of_Birth!: string;

  @IsNotEmpty({ message: 'Gender is required.' })
  Gender!: Gender;

  @IsNotEmpty({ message: 'Address is required.' })
  Address!: string;

  @IsString({ message: 'Phone must be a string.' })
  @IsOptional()
  Phone?: string;

  @IsString({ message: 'Image must be a string.' })
  @IsOptional()
  Image?: string;

  @IsNumber({}, { message: 'Student ID must be a number.' })
  @IsOptional()
  Student_ID?: number;
}

// UpdateStudentDto class extends User and keeps fields optional
export class UpdateStudentDto extends User {
  @IsString({ message: 'Phone must be a string.' })
  @IsOptional()
  Phone?: string;

  @IsString({ message: 'Image must be a string.' })
  @IsOptional()
  Image?: string;

  // Student_ID should not be updated directly
  @IsNumber({}, { message: 'Student ID must be a number.' })
  @IsOptional()
  Student_ID?: number;
}
