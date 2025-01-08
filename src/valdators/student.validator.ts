import {
  IsString,
  IsNotEmpty,
  IsOptional,
  IsNumber,
  IsDateString,
  MaxLength,
  IsEnum,
  IsEmail,
} from 'class-validator';

// Enum for Gender
enum Gender {
  Female,
  Male,
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
  @IsEmail({}, { message: 'Email must be a valid email address.' })
  @IsNotEmpty({ message: 'Email is required.' })
  Email!: string;

  @IsString({ message: 'PassWord cannot exceed 100 characters.' })
  @IsNotEmpty({ message: 'Password is required.' })
  password!: String;

  @IsString({ message: 'Confirm password does not match' })
  @IsNotEmpty({ message: 'Password is required.' })
  confirmPassword!: String;

  @IsString({ message: 'The role should be a string' })
  role!: String;

  @IsString({ message: 'Phone must be a string.' })
  @IsOptional()
  Phone?: string;

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
