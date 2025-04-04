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
exports.UpdateStudentDto = exports.CreateStudentDto = void 0;
const class_validator_1 = require("class-validator");
// Enum for Gender
var Gender;
(function (Gender) {
    Gender[Gender["Female"] = 0] = "Female";
    Gender[Gender["Male"] = 1] = "Male";
})(Gender || (Gender = {}));
// Base User Class
class User {
    First_Name;
    Last_Name;
    Gender;
    Address;
}
__decorate([
    (0, class_validator_1.IsString)({ message: 'First name must be a string.' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.MaxLength)(50, { message: 'First name cannot exceed 50 characters.' }),
    __metadata("design:type", String)
], User.prototype, "First_Name", void 0);
__decorate([
    (0, class_validator_1.IsString)({ message: 'Last name must be a string.' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.MaxLength)(50, { message: 'Last name cannot exceed 50 characters.' }),
    __metadata("design:type", String)
], User.prototype, "Last_Name", void 0);
__decorate([
    (0, class_validator_1.IsEnum)(Gender, { message: 'Gender must be "Female" or "Male".' }),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", Number)
], User.prototype, "Gender", void 0);
__decorate([
    (0, class_validator_1.IsString)({ message: 'Address must be a string.' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.MaxLength)(100, { message: 'Address cannot exceed 100 characters.' }),
    __metadata("design:type", String)
], User.prototype, "Address", void 0);
// CreateStudentDto class extends User with required fields
class CreateStudentDto extends User {
    Email;
    password;
    confirmPassword;
    role;
    Phone;
    Image;
    Student_ID;
    DOB;
}
exports.CreateStudentDto = CreateStudentDto;
__decorate([
    (0, class_validator_1.IsEmail)({}, { message: 'Email must be a valid email address.' }),
    (0, class_validator_1.IsNotEmpty)({ message: 'Email is required.' }),
    __metadata("design:type", String)
], CreateStudentDto.prototype, "Email", void 0);
__decorate([
    (0, class_validator_1.IsString)({ message: 'PassWord cannot exceed 100 characters.' }),
    (0, class_validator_1.IsNotEmpty)({ message: 'Password is required.' }),
    __metadata("design:type", String)
], CreateStudentDto.prototype, "password", void 0);
__decorate([
    (0, class_validator_1.IsString)({ message: 'Confirm password does not match' }),
    (0, class_validator_1.IsNotEmpty)({ message: 'Password is required.' }),
    __metadata("design:type", String)
], CreateStudentDto.prototype, "confirmPassword", void 0);
__decorate([
    (0, class_validator_1.IsString)({ message: 'The role should be a string' }),
    __metadata("design:type", String)
], CreateStudentDto.prototype, "role", void 0);
__decorate([
    (0, class_validator_1.IsString)({ message: 'Phone must be a string.' }),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], CreateStudentDto.prototype, "Phone", void 0);
__decorate([
    (0, class_validator_1.IsString)({ message: 'Image must be a string.' }),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], CreateStudentDto.prototype, "Image", void 0);
__decorate([
    (0, class_validator_1.IsNumber)({}, { message: 'Student ID must be a number.' }),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", Number)
], CreateStudentDto.prototype, "Student_ID", void 0);
__decorate([
    (0, class_validator_1.IsDateString)({}, { message: 'Date of birth must be a valid date.' }),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], CreateStudentDto.prototype, "DOB", void 0);
// UpdateStudentDto class extends User and keeps fields optional
class UpdateStudentDto extends User {
    Phone;
    Image;
    // Student_ID should not be updated directly
    Student_ID;
}
exports.UpdateStudentDto = UpdateStudentDto;
__decorate([
    (0, class_validator_1.IsString)({ message: 'Phone must be a string.' }),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], UpdateStudentDto.prototype, "Phone", void 0);
__decorate([
    (0, class_validator_1.IsString)({ message: 'Image must be a string.' }),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], UpdateStudentDto.prototype, "Image", void 0);
__decorate([
    (0, class_validator_1.IsNumber)({}, { message: 'Student ID must be a number.' }),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", Number)
], UpdateStudentDto.prototype, "Student_ID", void 0);
