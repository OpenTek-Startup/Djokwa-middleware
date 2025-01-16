import {
  IsString,
  IsNotEmpty,
  IsOptional,
  MaxLength,
  IsEnum,
  IsEmail,
} from 'class-validator';

// Enum for Gender
enum Gender {
  Female,
  Male,
}

export class User {
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
}
