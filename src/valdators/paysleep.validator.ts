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

import { ProgressStatus } from '@prisma/client';

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
    @IsOptional({ message: 'Pay Date is Optional'})
    Pay_Date?: string;

    @IsDateString({}, { message: 'Create date must be a valid date.' })
    Create_Date!: string;

    @IsNumber({ maxDecimalPlaces: 2 }, { message: 'Amount must be a valid float with at most 2 decimal places.' })
    @Min(0, { message: 'Amount must be a positive number.' })
    Amount!: number;

    @IsNotEmpty({ message: 'PaySleep Status is Required'})
    @IsEnum(ProgressStatus, {})
    Status!: ProgressStatus;

    @IsOptional()
    @IsNumber({}, { message:'Personnel_ID must be Numbers' })
    @Min(0, { message: 'Personnel_ID must be a positive value.' })
    Personnel_ID?: number;

    @IsOptional()
    @IsNumber({},{ message:'Teacher_ID must be Numbers'})
    @Min(0, { message: 'Teacher_ID must be a positive value.' })
    Teacher_ID?: number;

    @IsOptional()
    @IsNumber({},{ message:'Budget_ID must be Numbers'})
    @Min(0, { message: 'Budget_ID must be a positive value.' })
    Budget_ID?: number;
}