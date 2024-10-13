import {
    IsNumber,
    IsString,
    IsOptional,
    IsNotEmpty,
    IsEnum,
    IsDateString,
    Min
} from 'class-validator'

import { Days } from '@prisma/client'

export class CreateSceduleDto {

    @IsEnum(Days, {message: 'Day must be a valid Day'})
    @IsNotEmpty({message: 'Day is Required'})
    Day!: Days;

    @IsDateString({}, {message: 'Start time must be a valid date'})
    @IsNotEmpty({message: 'Start time is Required'})
    Start_Time!: string;

    @IsDateString({}, {message: 'End time must be a valid date'})
    @IsNotEmpty({message: 'End time is Required'})
    End_Time!: string;

    @IsNumber({}, {message: 'Room ID must be a number'})
    @Min(0, { message: 'Room_ID must be a positive value.' })
    @IsOptional()
    Room_ID?: number;

    @IsOptional()
    @IsNumber({}, {message: 'Class ID must be a number'})
    @Min(0, { message: 'Course_ID must be a positive value.' })
    Course_ID?: number;

}