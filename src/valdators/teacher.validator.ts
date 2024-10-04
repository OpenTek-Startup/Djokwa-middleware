import {
  IsString,
  IsNotEmpty,
  IsEmail,
  IsOptional,
  IsNumber,
  IsDateString,
  MaxLength,
  Length,
  Matches,
} from 'class-validator';

export class CreateTeacherDto {
  @IsString({ message: 'First name must be a string.' })
  @IsNotEmpty({ message: 'First name is required.' })
  @MaxLength(50, { message: 'First name cannot exceed 50 characters.' })
  First_Name!: string;

  @IsString({ message: 'Last name must be a string.' })
  @IsNotEmpty({ message: 'Last name is required.' })
  @MaxLength(50, { message: 'Last name cannot exceed 50 characters.' })
  Last_Name!: string;

  @IsString({ message: 'Address must be a valid address.' })
  @IsNotEmpty({ message: 'Address is required.' })
  address!: string;

  @IsDateString({}, { message: 'Hiring date must be a valid date.' })
  @IsOptional()
  Hiring_Date?: string;

  @IsNumber({}, { message: 'Salary must be a number.' })
  @IsOptional()
  Salary?: number;

  @IsString({ message: 'Specialty must be a string.' })
  @IsOptional()
  Specialty?: string;

  @IsNotEmpty({ message: 'The gender is required.' })
  gender!: 'Male' | 'Female';

  @IsEmail({}, { message: 'Email must be a valid email address.' })
  @IsOptional()
  Email!: string;

  @IsString({ message: 'Image must be a string.' })
  @IsOptional()
  Image?: string;

  @IsString({ message: 'Phone must be a string.' })
  @IsOptional()
  Phone!: string;

  @IsNotEmpty({ message: 'The confirm password must match the password' })
  @IsString({ message: 'The confirm password must match the password' })
  confirmPassword!: string;

  @IsString({ message: 'Password must be a string' })
  @IsNotEmpty({ message: 'Password is required' })
  @Length(6, 20, {
    message: 'Password must be between 6 and 20 characters long',
  })
  @Matches(/^(?=.*[0-9])/, {
    message: 'Password must contain at least one number',
  })
  password!: string;
  // Define additional fields for Courses, Disciplines, Leaves, PaySleeps, and RHEvaluations
}

export class UpdateTeacherDto {
  @IsNumber({}, { message: 'Salary must be a number.' })
  @IsOptional()
  Salary?: number;

  @IsEmail({}, { message: 'Email must be a valid email address.' })
  @IsOptional()
  Email?: string;

  @IsString({ message: 'Image must be a string.' })
  @IsOptional()
  Image?: string;

  @IsString({ message: 'Phone must be a string.' })
  @IsOptional()
  Phone?: string;

  // @IsString({ message: 'Password must be a string.' })
  // @IsNotEmpty({ message: 'Password is required to update your information.' })
  // password!: string;
}
