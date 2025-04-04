"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateSceduleDto = exports.CreatePaySleepDto = exports.CreateLeaveDto = void 0;
const class_validator_1 = require("class-validator");
const client_1 = require("@prisma/client");
// create LeaveDTO
class CreateLeaveDto {
    FirstName;
    LastName;
    JerseyNum;
    Start_Date;
    End_Date;
    Type;
    // @IsNotEmpty({ message: 'Leave Status is Required' })
    // @IsEnum(LeaveStatus, {})
    // Status!: LeaveStatus;
    Personnel_ID;
    Teacher_ID;
}
exports.CreateLeaveDto = CreateLeaveDto;
__decorate([
    (0, class_validator_1.IsString)({ message: 'First name must be a string.' }),
    (0, class_validator_1.IsNotEmpty)({ message: 'First name is required.' }),
    (0, class_validator_1.MaxLength)(50, { message: 'First name cannot exceed 50 characters.' }),
    __metadata("design:type", String)
], CreateLeaveDto.prototype, "FirstName", void 0);
__decorate([
    (0, class_validator_1.IsString)({ message: 'Last name must be a string.' }),
    (0, class_validator_1.IsNotEmpty)({ message: 'Last name is required.' }),
    (0, class_validator_1.MaxLength)(50, { message: 'Last name cannot exceed 50 characters.' }),
    __metadata("design:type", String)
], CreateLeaveDto.prototype, "LastName", void 0);
__decorate([
    (0, class_validator_1.IsString)({ message: 'Jersey Number must be a string.' }),
    (0, class_validator_1.IsOptional)({ message: 'End Date is Optional' }),
    __metadata("design:type", String)
], CreateLeaveDto.prototype, "JerseyNum", void 0);
__decorate([
    (0, class_validator_1.IsDateString)({}, { message: 'Start date must be a valid date.' }),
    __metadata("design:type", String)
], CreateLeaveDto.prototype, "Start_Date", void 0);
__decorate([
    (0, class_validator_1.IsDateString)({}, { message: 'End date must be a valid date.' }),
    __metadata("design:type", String)
], CreateLeaveDto.prototype, "End_Date", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)({ message: 'Leave Type is Required' }),
    (0, class_validator_1.IsEnum)(client_1.LeaveType, {}),
    __metadata("design:type", String)
], CreateLeaveDto.prototype, "Type", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsNumber)({}, { message: 'Personnel_ID must be Numbers' }),
    (0, class_validator_1.Min)(0, { message: 'Personnel_ID must be a positive value.' }),
    __metadata("design:type", Number)
], CreateLeaveDto.prototype, "Personnel_ID", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsNumber)({}, { message: 'Teacher_ID must be Numbers' }),
    (0, class_validator_1.Min)(0, { message: 'Teacher_ID must be a positive value.' }),
    __metadata("design:type", Number)
], CreateLeaveDto.prototype, "Teacher_ID", void 0);
// create PaySleepDTO
class CreatePaySleepDto {
    FirstName;
    LastName;
    Pay_Date;
    Create_Date;
    Amount;
    Status;
    Personnel_ID;
    Teacher_ID;
    Budget_ID;
}
exports.CreatePaySleepDto = CreatePaySleepDto;
__decorate([
    (0, class_validator_1.IsString)({ message: 'First name must be a string.' }),
    (0, class_validator_1.IsNotEmpty)({ message: 'First name is required.' }),
    (0, class_validator_1.MaxLength)(50, { message: 'First name cannot exceed 50 characters.' }),
    __metadata("design:type", String)
], CreatePaySleepDto.prototype, "FirstName", void 0);
__decorate([
    (0, class_validator_1.IsString)({ message: 'Last name must be a string.' }),
    (0, class_validator_1.IsNotEmpty)({ message: 'Last name is required.' }),
    (0, class_validator_1.MaxLength)(50, { message: 'Last name cannot exceed 50 characters.' }),
    __metadata("design:type", String)
], CreatePaySleepDto.prototype, "LastName", void 0);
__decorate([
    (0, class_validator_1.IsDateString)({}),
    (0, class_validator_1.IsOptional)({ message: 'Pay Date is Optional' }),
    __metadata("design:type", String)
], CreatePaySleepDto.prototype, "Pay_Date", void 0);
__decorate([
    (0, class_validator_1.IsDateString)({}, { message: 'Create date must be a valid date.' }),
    __metadata("design:type", String)
], CreatePaySleepDto.prototype, "Create_Date", void 0);
__decorate([
    (0, class_validator_1.IsNumber)({ maxDecimalPlaces: 2 }, { message: 'Amount must be a valid float with at most 2 decimal places.' }),
    (0, class_validator_1.Min)(0, { message: 'Amount must be a positive number.' }),
    __metadata("design:type", Number)
], CreatePaySleepDto.prototype, "Amount", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)({ message: 'PaySleep Status is Required' }),
    (0, class_validator_1.IsEnum)(client_1.ProgressStatus, {}),
    __metadata("design:type", String)
], CreatePaySleepDto.prototype, "Status", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsNumber)({}, { message: 'Personnel_ID must be Numbers' }),
    (0, class_validator_1.Min)(0, { message: 'Personnel_ID must be a positive value.' }),
    __metadata("design:type", Number)
], CreatePaySleepDto.prototype, "Personnel_ID", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsNumber)({}, { message: 'Teacher_ID must be Numbers' }),
    (0, class_validator_1.Min)(0, { message: 'Teacher_ID must be a positive value.' }),
    __metadata("design:type", Number)
], CreatePaySleepDto.prototype, "Teacher_ID", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsNumber)({}, { message: 'Budget_ID must be Numbers' }),
    (0, class_validator_1.Min)(0, { message: 'Budget_ID must be a positive value.' }),
    __metadata("design:type", Number)
], CreatePaySleepDto.prototype, "Budget_ID", void 0);
class CreateSceduleDto {
    Day;
    Start_Time;
    End_Time;
    Room_ID;
    Course_ID;
}
exports.CreateSceduleDto = CreateSceduleDto;
__decorate([
    (0, class_validator_1.IsEnum)(client_1.Days, { message: 'Day must be a valid Day' }),
    (0, class_validator_1.IsNotEmpty)({ message: 'Day is Required' }),
    __metadata("design:type", String)
], CreateSceduleDto.prototype, "Day", void 0);
__decorate([
    (0, class_validator_1.IsDateString)({}, { message: 'Start time must be a valid date' }),
    (0, class_validator_1.IsNotEmpty)({ message: 'Start time is Required' }),
    __metadata("design:type", String)
], CreateSceduleDto.prototype, "Start_Time", void 0);
__decorate([
    (0, class_validator_1.IsDateString)({}, { message: 'End time must be a valid date' }),
    (0, class_validator_1.IsNotEmpty)({ message: 'End time is Required' }),
    __metadata("design:type", String)
], CreateSceduleDto.prototype, "End_Time", void 0);
__decorate([
    (0, class_validator_1.IsNumber)({}, { message: 'Room ID must be a number' }),
    (0, class_validator_1.Min)(0, { message: 'Room_ID must be a positive value.' }),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", Number)
], CreateSceduleDto.prototype, "Room_ID", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsNumber)({}, { message: 'Class ID must be a number' }),
    (0, class_validator_1.Min)(0, { message: 'Course_ID must be a positive value.' }),
    __metadata("design:type", Number)
], CreateSceduleDto.prototype, "Course_ID", void 0);
