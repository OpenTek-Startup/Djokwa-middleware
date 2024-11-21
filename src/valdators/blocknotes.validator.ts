import {
  IsString,
  IsNotEmpty,
  IsOptional,
  IsDateString,
  MaxLength,
  IsBoolean,
} from 'class-validator';

export class CreateBlocknoteDto {
  @IsString({ message: 'Task must be a string' })
  @IsNotEmpty({ message: 'Task name is required.' })
  @MaxLength(50, { message: 'Task cannot exceed 50 characters.' })
  task!: string;

  @IsBoolean({ message: 'isComplete must be a boolean' })
  isComplete!: boolean;

  @IsDateString({}, { message: 'Deadline must be a valid date.' })
  @IsOptional()
  deadline?: string;

  @IsString({ message: 'Note must be a string' })
  @IsNotEmpty({ message: 'Note is required.' })
  @MaxLength(500, { message: 'Note cannot exceed 500 characters.' })
  note!: string;

  @IsString({ message: 'Title must be a string' })
  @IsNotEmpty({ message: 'Title is required.' })
  @MaxLength(20, { message: 'Title cannot exceed 20 characters.' })
  title!: string;

  @IsDateString({}, { message: 'Created at must be a valid date.' })
  @IsOptional()
  createdAt?: string;
}

export class UpdateBlocknoteDto {
  @IsString({ message: 'Task must be a string' })
  @IsOptional()
  @MaxLength(50, { message: 'Task cannot exceed 50 characters.' })
  task?: string;

  @IsBoolean({ message: 'isComplete must be a boolean' })
  @IsOptional()
  isComplete?: boolean;

  @IsDateString({}, { message: 'Deadline must be a valid date.' })
  @IsOptional()
  deadline?: string;

  @IsString({ message: 'Note must be a string' })
  @IsOptional()
  @MaxLength(500, { message: 'Note cannot exceed 500 characters.' })
  note?: string;

  @IsString({ message: 'Title must be a string' })
  @IsOptional()
  @MaxLength(20, { message: 'Title cannot exceed 20 characters.' })
  title?: string;

  @IsDateString({}, { message: 'CreatedAt must be a valid date.' })
  @IsOptional()
  createdAt?: string;
}
