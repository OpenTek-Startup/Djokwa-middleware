import {
  IsString,
  IsNotEmpty,
  IsOptional,
  IsDateString,
  MaxLength,
  IsEnum,
} from 'class-validator';

// Enum for Data Type
export enum DataType {
  INFO = 'info',
  ERROR = 'error',
  WARNING = 'warning',
  SUCCESS = 'success',
}

export class BaseDataDto {
  @IsString({ message: 'Title must be a string.' })
  @IsOptional()
  @MaxLength(100, { message: 'Title cannot exceed 100 characters.' })
  title?: string;

  @IsDateString({}, { message: 'Time must be a valid ISO 8601 date.' })
  @IsOptional()
  time?: string;

  @IsString({ message: 'Message must be a string.' })
  @IsOptional()
  @MaxLength(500, { message: 'Message cannot exceed 500 characters.' })
  message?: string;

  @IsEnum(DataType, {
    message:
      'Type must be one of the following: info, error, warning, success.',
  })
  @IsOptional()
  type?: DataType;
}

// CreateDataDto extends BaseDataDto and makes all fields required for creation
export class CreateDataDto extends BaseDataDto {
  // 'title' is now required, and an error message is provided if it's missing
  @IsNotEmpty({ message: 'Title is required.' })
  title!: string; // '!' indicates that this field is now required (not optional)

  // 'time' is also required
  @IsNotEmpty({ message: 'Time is required.' })
  time!: string;

  // 'message' is required and cannot be empty
  @IsNotEmpty({ message: 'Message is required.' })
  message!: string;

  // 'type' is required and must be one of the specified enum values
  @IsNotEmpty({ message: 'Type is required.' })
  type!: DataType;
}

// UpdateDataDto extends BaseDataDto and makes fields optional for updates
export class UpdateDataDto extends BaseDataDto {
  // All fields are optional for updates.
  // If the field is provided, validation is applied, otherwise, it's ignored.

  @IsOptional() // 'title' is optional for updates
  title?: string;

  @IsOptional() // 'time' is optional for updates
  time?: string;

  @IsOptional() // 'message' is optional for updates
  message?: string;

  // 'type' is optional, but if provided, it must be a valid enum value
  @IsOptional()
  @IsEnum(DataType, {
    message:
      'Type must be one of the following: info, error, warning, success.',
  })
  type?: DataType;
}
