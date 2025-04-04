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
export class CreateDataDto extends BaseDataDto {}

// UpdateDataDto extends BaseDataDto and makes fields optional for updates
export class UpdateDataDto extends BaseDataDto {}
