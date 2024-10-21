import {
  IsString,
  IsNotEmpty,
  IsOptional,
  IsNumber,
  IsDateString,
  IsEnum,
  MaxLength,
  Min,
} from 'class-validator';

import { Days, LeaveType, ProgressStatus } from '@prisma/client';

// create LeaveDTO

export class CreateLeaveDto {
  @IsString({ message: 'First name must be a string.' })
  @IsNotEmpty({ message: 'First name is required.' })
  @MaxLength(50, { message: 'First name cannot exceed 50 characters.' })
  FirstName!: string;

  @IsString({ message: 'Last name must be a string.' })
  @IsNotEmpty({ message: 'Last name is required.' })
  @MaxLength(50, { message: 'Last name cannot exceed 50 characters.' })
  LastName!: string;

  @IsString({ message: 'Jersey Number must be a string.' })
  @IsOptional({ message: 'End Date is Optional' })
  JerseyNum?: string;

  @IsDateString({}, { message: 'Start date must be a valid date.' })
  Start_Date!: string;

  @IsDateString({}, { message: 'End date must be a valid date.' })
  End_Date!: string;

  @IsNotEmpty({ message: 'Leave Type is Required' })
  @IsEnum(LeaveType, {})
  Type!: LeaveType;

  // @IsNotEmpty({ message: 'Leave Status is Required' })
  // @IsEnum(LeaveStatus, {})
  // Status!: LeaveStatus;

  @IsOptional()
  @IsNumber({}, { message: 'Personnel_ID must be Numbers' })
  @Min(0, { message: 'Personnel_ID must be a positive value.' })
  Personnel_ID?: number;

  @IsOptional()
  @IsNumber({}, { message: 'Teacher_ID must be Numbers' })
  @Min(0, { message: 'Teacher_ID must be a positive value.' })
  Teacher_ID?: number;
}

// create PaySleepDTO

export class CreatePaySleepDto {
  @IsString({ message: 'First name must be a string.' })
  @IsNotEmpty({ message: 'First name is required.' })
  @MaxLength(50, { message: 'First name cannot exceed 50 characters.' })
  FirstName!: string;

  @IsString({ message: 'Last name must be a string.' })
  @IsNotEmpty({ message: 'Last name is required.' })
  @MaxLength(50, { message: 'Last name cannot exceed 50 characters.' })
  LastName!: string;

  @IsDateString({})
  @IsOptional({ message: 'Pay Date is Optional' })
  Pay_Date?: string;

  @IsDateString({}, { message: 'Create date must be a valid date.' })
  Create_Date!: string;

  @IsNumber(
    { maxDecimalPlaces: 2 },
    { message: 'Amount must be a valid float with at most 2 decimal places.' }
  )
  @Min(0, { message: 'Amount must be a positive number.' })
  Amount!: number;

  @IsNotEmpty({ message: 'PaySleep Status is Required' })
  @IsEnum(ProgressStatus, {})
  Status!: ProgressStatus;

  @IsOptional()
  @IsNumber({}, { message: 'Personnel_ID must be Numbers' })
  @Min(0, { message: 'Personnel_ID must be a positive value.' })
  Personnel_ID?: number;

  @IsOptional()
  @IsNumber({}, { message: 'Teacher_ID must be Numbers' })
  @Min(0, { message: 'Teacher_ID must be a positive value.' })
  Teacher_ID?: number;

  @IsOptional()
  @IsNumber({}, { message: 'Budget_ID must be Numbers' })
  @Min(0, { message: 'Budget_ID must be a positive value.' })
  Budget_ID?: number;
}

export class CreateSceduleDto {
  @IsEnum(Days, { message: 'Day must be a valid Day' })
  @IsNotEmpty({ message: 'Day is Required' })
  Day!: Days;

  @IsDateString({}, { message: 'Start time must be a valid date' })
  @IsNotEmpty({ message: 'Start time is Required' })
  Start_Time!: string;

  @IsDateString({}, { message: 'End time must be a valid date' })
  @IsNotEmpty({ message: 'End time is Required' })
  End_Time!: string;

  @IsNumber({}, { message: 'Room ID must be a number' })
  @Min(0, { message: 'Room_ID must be a positive value.' })
  @IsOptional()
  Room_ID?: number;

  @IsOptional()
  @IsNumber({}, { message: 'Class ID must be a number' })
  @Min(0, { message: 'Course_ID must be a positive value.' })
  Course_ID?: number;
}
