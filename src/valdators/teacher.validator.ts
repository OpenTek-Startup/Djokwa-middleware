import {
  IsString,
  IsNotEmpty,
  IsEmail,
  IsOptional,
  IsNumber,
  IsDateString,
} from 'class-validator';
import { User } from './base-user.validator';

export class CreateTeacherDto extends User {
  @IsDateString({}, { message: 'Hiring date must be a valid date.' })
  @IsOptional()
  Hiring_Date?: string;

  @IsNumber({}, { message: 'Salary must be a number.' })
  @IsOptional()
  Salary?: number;

  @IsString({ message: 'Specialty must be a string.' })
  @IsOptional()
  Specialty?: string;

  @IsString({ message: 'Image must be a string.' })
  @IsOptional()
  Image?: string;
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

  @IsString({ message: 'Password must be a string.' })
  @IsNotEmpty({ message: 'Password is required to update your information.' })
  password?: string;
}
