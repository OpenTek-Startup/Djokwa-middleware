import {
  IsString,
  IsNotEmpty,
  IsEmail,
  IsOptional,
  IsNumber,
  IsDateString,
  MaxLength,
  isEnum,
  IsEnum,
} from 'class-validator';

enum Gender {
  FEMALE = 'female',
  MALE = 'male',
  OTHER = 'other',
}

export class CreateStudentDto {
  @IsString({ message: 'First name must be a string.' })
  @IsNotEmpty({ message: 'First name is required.' })
  @MaxLength(50, { message: 'First name cannot exceed 50 characters.' })
  First_Name!: string;

  @IsString({ message: 'Last name must be a string.' })
  @IsNotEmpty({ message: 'Last name is required.' })
  @MaxLength(50, { message: 'Last name cannot exceed 50 characters.' })
  Last_Name!: string;

  @IsDateString({}, { message: 'Date of birth must be a valid date.' })
  @IsNotEmpty({ message: 'Date of birth is required.' })
  Date_Of_Birth!: string;

  @IsNotEmpty({ message: 'Gender is required.' })
  @IsEnum(Gender, { message: 'Gender must either be female,male or other' })
  Gender!: string;

  @IsString({ message: 'Address must be a string.' })
  @IsNotEmpty({ message: 'Address is required.' })
  @MaxLength(100, { message: 'Address cannot exceed 100 characters.' })
  Address!: string;

  @IsString({ message: 'Phone must be a string.' })
  @IsOptional()
  Phone?: string;

  @IsString({ message: 'Image must be a string.' })
  @IsOptional()
  Image?: string;

  @IsNumber({}, { message: 'Teacher ID must be a number.' })
  @IsOptional()
  Student_ID?: number;
}
