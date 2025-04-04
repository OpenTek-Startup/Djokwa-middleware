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
exports.UpdateTeacherDto = exports.CreateTeacherDto = void 0;
const class_validator_1 = require("class-validator");
class CreateTeacherDto {
    First_Name;
    Last_Name;
    address;
    Hiring_Date;
    Salary;
    Specialty;
    gender;
    Email;
    Image;
    Phone;
    confirmPassword;
    password;
}
exports.CreateTeacherDto = CreateTeacherDto;
__decorate([
    (0, class_validator_1.IsString)({ message: 'First name must be a string.' }),
    (0, class_validator_1.IsNotEmpty)({ message: 'First name is required.' }),
    (0, class_validator_1.MaxLength)(50, { message: 'First name cannot exceed 50 characters.' }),
    __metadata("design:type", String)
], CreateTeacherDto.prototype, "First_Name", void 0);
__decorate([
    (0, class_validator_1.IsString)({ message: 'Last name must be a string.' }),
    (0, class_validator_1.IsNotEmpty)({ message: 'Last name is required.' }),
    (0, class_validator_1.MaxLength)(50, { message: 'Last name cannot exceed 50 characters.' }),
    __metadata("design:type", String)
], CreateTeacherDto.prototype, "Last_Name", void 0);
__decorate([
    (0, class_validator_1.IsString)({ message: 'Address must be a valid address.' }),
    (0, class_validator_1.IsNotEmpty)({ message: 'Address is required.' }),
    __metadata("design:type", String)
], CreateTeacherDto.prototype, "address", void 0);
__decorate([
    (0, class_validator_1.IsDateString)({}, { message: 'Hiring date must be a valid date.' }),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], CreateTeacherDto.prototype, "Hiring_Date", void 0);
__decorate([
    (0, class_validator_1.IsNumber)({}, { message: 'Salary must be a number.' }),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", Number)
], CreateTeacherDto.prototype, "Salary", void 0);
__decorate([
    (0, class_validator_1.IsString)({ message: 'Specialty must be a string.' }),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], CreateTeacherDto.prototype, "Specialty", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)({ message: 'The gender is required.' }),
    __metadata("design:type", String)
], CreateTeacherDto.prototype, "gender", void 0);
__decorate([
    (0, class_validator_1.IsEmail)({}, { message: 'Email must be a valid email address.' }),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], CreateTeacherDto.prototype, "Email", void 0);
__decorate([
    (0, class_validator_1.IsString)({ message: 'Image must be a string.' }),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], CreateTeacherDto.prototype, "Image", void 0);
__decorate([
    (0, class_validator_1.IsString)({ message: 'Phone must be a string.' }),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], CreateTeacherDto.prototype, "Phone", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)({ message: 'The confirm password must match the password' }),
    (0, class_validator_1.IsString)({ message: 'The confirm password must match the password' }),
    __metadata("design:type", String)
], CreateTeacherDto.prototype, "confirmPassword", void 0);
__decorate([
    (0, class_validator_1.IsString)({ message: 'Password must be a string' }),
    (0, class_validator_1.IsNotEmpty)({ message: 'Password is required' }),
    (0, class_validator_1.Length)(6, 20, {
        message: 'Password must be between 6 and 20 characters long',
    }),
    (0, class_validator_1.Matches)(/^(?=.*[0-9])/, {
        message: 'Password must contain at least one number',
    }),
    __metadata("design:type", String)
], CreateTeacherDto.prototype, "password", void 0);
class UpdateTeacherDto {
    Salary;
    Email;
    Image;
    Phone;
    password;
}
exports.UpdateTeacherDto = UpdateTeacherDto;
__decorate([
    (0, class_validator_1.IsNumber)({}, { message: 'Salary must be a number.' }),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", Number)
], UpdateTeacherDto.prototype, "Salary", void 0);
__decorate([
    (0, class_validator_1.IsEmail)({}, { message: 'Email must be a valid email address.' }),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], UpdateTeacherDto.prototype, "Email", void 0);
__decorate([
    (0, class_validator_1.IsString)({ message: 'Image must be a string.' }),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], UpdateTeacherDto.prototype, "Image", void 0);
__decorate([
    (0, class_validator_1.IsString)({ message: 'Phone must be a string.' }),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], UpdateTeacherDto.prototype, "Phone", void 0);
__decorate([
    (0, class_validator_1.IsString)({ message: 'Password must be a string.' }),
    (0, class_validator_1.IsNotEmpty)({ message: 'Password is required to update your information.' }),
    __metadata("design:type", String)
], UpdateTeacherDto.prototype, "password", void 0);
