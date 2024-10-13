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

import { LeaveStatus, LeaveType } from '@prisma/client';

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
    @IsOptional({ message: 'End Date is Optional'})
    JerseyNum?: string;

    @IsDateString({}, { message: 'Start date must be a valid date.' })
    Start_Date!: string;

    @IsDateString({}, { message: 'End date must be a valid date.' })
    End_Date!: string

    @IsNotEmpty({ message: 'Leave Type is Required'})
    @IsEnum(LeaveType, {})
    Type!: LeaveType;

    @IsNotEmpty({ message: 'Leave Status is Required'})
    @IsEnum(LeaveStatus, {})
    Status!: LeaveStatus;

     @IsOptional()
    @IsNumber({}, { message:'Personnel_ID must be Numbers' })
    @Min(0, { message: 'Personnel_ID must be a positive value.' })
    Personnel_ID?: number;

    @IsOptional()
    @IsNumber({},{ message:'Teacher_ID must be Numbers'})
    @Min(0, { message: 'Teacher_ID must be a positive value.' })
    Teacher_ID?: number;
}