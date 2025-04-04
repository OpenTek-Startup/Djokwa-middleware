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
exports.UpdateCourseDto = exports.CreateCourseDto = exports.UpdateClassDto = exports.CreateClassDto = exports.UpdateAssignmentDto = exports.CreateAssignmentDto = void 0;
const class_validator_1 = require("class-validator");
class CreateAssignmentDto {
    title;
    description;
    dueDate;
    classId;
    courseId;
    teacherId;
}
exports.CreateAssignmentDto = CreateAssignmentDto;
__decorate([
    (0, class_validator_1.IsString)({ message: 'Title must be a string.' }),
    (0, class_validator_1.IsNotEmpty)({ message: 'Title is required.' }),
    (0, class_validator_1.MaxLength)(100, { message: 'Title cannot exceed 100 characters.' }),
    __metadata("design:type", String)
], CreateAssignmentDto.prototype, "title", void 0);
__decorate([
    (0, class_validator_1.IsString)({ message: 'Description must be a string.' }),
    (0, class_validator_1.IsNotEmpty)({ message: 'Description is required.' }),
    __metadata("design:type", String)
], CreateAssignmentDto.prototype, "description", void 0);
__decorate([
    (0, class_validator_1.IsDateString)({}, { message: 'Due date must be a valid date.' }),
    __metadata("design:type", String)
], CreateAssignmentDto.prototype, "dueDate", void 0);
__decorate([
    (0, class_validator_1.IsNumber)({}, { message: 'Class ID must be a number.' }),
    (0, class_validator_1.IsNotEmpty)({ message: 'Class ID is required.' }),
    __metadata("design:type", Number)
], CreateAssignmentDto.prototype, "classId", void 0);
__decorate([
    (0, class_validator_1.IsNumber)({}, { message: 'Course ID must be a number.' }),
    (0, class_validator_1.IsNotEmpty)({ message: 'Course ID is required.' }),
    __metadata("design:type", Number)
], CreateAssignmentDto.prototype, "courseId", void 0);
__decorate([
    (0, class_validator_1.IsNumber)({}, { message: 'Teacher ID must be a number.' }),
    (0, class_validator_1.IsNotEmpty)({ message: 'Teacher ID is required.' }),
    __metadata("design:type", Number)
], CreateAssignmentDto.prototype, "teacherId", void 0);
class UpdateAssignmentDto {
    title;
    description;
    dueDate;
    classId;
    courseId;
    teacherId;
}
exports.UpdateAssignmentDto = UpdateAssignmentDto;
__decorate([
    (0, class_validator_1.IsString)({ message: 'Title must be a string.' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.MaxLength)(100, { message: 'Title cannot exceed 100 characters.' }),
    __metadata("design:type", String)
], UpdateAssignmentDto.prototype, "title", void 0);
__decorate([
    (0, class_validator_1.IsString)({ message: 'Description must be a string.' }),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], UpdateAssignmentDto.prototype, "description", void 0);
__decorate([
    (0, class_validator_1.IsDateString)({}, { message: 'Due date must be a valid date.' }),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], UpdateAssignmentDto.prototype, "dueDate", void 0);
__decorate([
    (0, class_validator_1.IsNumber)({}, { message: 'Class ID must be a number.' }),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", Number)
], UpdateAssignmentDto.prototype, "classId", void 0);
__decorate([
    (0, class_validator_1.IsNumber)({}, { message: 'Course ID must be a number.' }),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", Number)
], UpdateAssignmentDto.prototype, "courseId", void 0);
__decorate([
    (0, class_validator_1.IsNumber)({}, { message: 'Teacher ID must be a number.' }),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", Number)
], UpdateAssignmentDto.prototype, "teacherId", void 0);
class CreateClassDto {
    name;
    classCode;
    capacity;
    teacherId;
}
exports.CreateClassDto = CreateClassDto;
__decorate([
    (0, class_validator_1.IsString)({ message: 'Name must be a string.' }),
    (0, class_validator_1.IsNotEmpty)({ message: 'Name is required.' }),
    (0, class_validator_1.MaxLength)(50, { message: 'Name cannot exceed 50 characters.' }),
    __metadata("design:type", String)
], CreateClassDto.prototype, "name", void 0);
__decorate([
    (0, class_validator_1.IsString)({ message: 'Class code must be a string.' }),
    (0, class_validator_1.IsNotEmpty)({ message: 'Class code is required.' }),
    __metadata("design:type", String)
], CreateClassDto.prototype, "classCode", void 0);
__decorate([
    (0, class_validator_1.IsNumber)({}, { message: 'Capacity must be a number.' }),
    (0, class_validator_1.IsNotEmpty)({ message: 'Capacity is required.' }),
    __metadata("design:type", Number)
], CreateClassDto.prototype, "capacity", void 0);
__decorate([
    (0, class_validator_1.IsNumber)({}, { message: 'Teacher ID must be a number.' }),
    (0, class_validator_1.IsNotEmpty)({ message: 'Teacher ID is required.' }),
    __metadata("design:type", Number)
], CreateClassDto.prototype, "teacherId", void 0);
class UpdateClassDto {
    name;
    classCode;
    capacity;
    teacherId;
}
exports.UpdateClassDto = UpdateClassDto;
__decorate([
    (0, class_validator_1.IsString)({ message: 'Name must be a string.' }),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], UpdateClassDto.prototype, "name", void 0);
__decorate([
    (0, class_validator_1.IsString)({ message: 'Class code must be a string.' }),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], UpdateClassDto.prototype, "classCode", void 0);
__decorate([
    (0, class_validator_1.IsNumber)({}, { message: 'Capacity must be a number.' }),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", Number)
], UpdateClassDto.prototype, "capacity", void 0);
__decorate([
    (0, class_validator_1.IsNumber)({}, { message: 'Teacher ID must be a number.' }),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", Number)
], UpdateClassDto.prototype, "teacherId", void 0);
class CreateCourseDto {
    Name;
    courseCode;
    Coefficient;
    Start_Date;
    End_Date;
    Teacher_ID;
    Class_Level;
    Class_ID;
}
exports.CreateCourseDto = CreateCourseDto;
__decorate([
    (0, class_validator_1.IsString)({ message: 'Name must be a string.' }),
    (0, class_validator_1.IsNotEmpty)({ message: 'Name is required.' }),
    (0, class_validator_1.MaxLength)(100, { message: 'Name cannot exceed 100 characters.' }),
    __metadata("design:type", String)
], CreateCourseDto.prototype, "Name", void 0);
__decorate([
    (0, class_validator_1.IsNumber)({}, { message: 'Course code must be a number.' }),
    (0, class_validator_1.IsNotEmpty)({ message: 'Course code is required.' }),
    __metadata("design:type", Number)
], CreateCourseDto.prototype, "courseCode", void 0);
__decorate([
    (0, class_validator_1.IsNumber)({}, { message: 'Coefficient must be a number.' }),
    (0, class_validator_1.IsNotEmpty)({ message: 'Coefficient is required.' }),
    __metadata("design:type", Number)
], CreateCourseDto.prototype, "Coefficient", void 0);
__decorate([
    (0, class_validator_1.IsDateString)({}, { message: 'Start date must be a valid date.' }),
    (0, class_validator_1.IsNotEmpty)({ message: 'Start date is required.' }),
    __metadata("design:type", String)
], CreateCourseDto.prototype, "Start_Date", void 0);
__decorate([
    (0, class_validator_1.IsDateString)({}, { message: 'End date must be a valid date.' }),
    (0, class_validator_1.IsNotEmpty)({ message: 'End date is required.' }),
    __metadata("design:type", String)
], CreateCourseDto.prototype, "End_Date", void 0);
__decorate([
    (0, class_validator_1.IsNumber)({}, { message: 'Teacher ID must be a number.' }),
    (0, class_validator_1.IsNotEmpty)({ message: 'Teacher ID is required.' }),
    __metadata("design:type", Number)
], CreateCourseDto.prototype, "Teacher_ID", void 0);
__decorate([
    (0, class_validator_1.IsNumber)({}, { message: 'Class level must be a number.' }),
    (0, class_validator_1.IsNotEmpty)({ message: 'Class level is required.' }),
    __metadata("design:type", Number)
], CreateCourseDto.prototype, "Class_Level", void 0);
__decorate([
    (0, class_validator_1.IsNumber)({}, { message: 'Class ID must be a number.' }),
    (0, class_validator_1.IsNotEmpty)({ message: 'Class ID is required.' }),
    __metadata("design:type", Number)
], CreateCourseDto.prototype, "Class_ID", void 0);
class UpdateCourseDto {
    Name;
    courseCode;
    Coefficient;
    Start_Date;
    End_Date;
    Teacher_ID;
    Class_Level;
    Class_ID;
}
exports.UpdateCourseDto = UpdateCourseDto;
__decorate([
    (0, class_validator_1.IsString)({ message: 'Name must be a string.' }),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], UpdateCourseDto.prototype, "Name", void 0);
__decorate([
    (0, class_validator_1.IsNumber)({}, { message: 'Course code must be a number.' }),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", Number)
], UpdateCourseDto.prototype, "courseCode", void 0);
__decorate([
    (0, class_validator_1.IsNumber)({}, { message: 'Coefficient must be a number.' }),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", Number)
], UpdateCourseDto.prototype, "Coefficient", void 0);
__decorate([
    (0, class_validator_1.IsDateString)({}, { message: 'Start date must be a valid date.' }),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], UpdateCourseDto.prototype, "Start_Date", void 0);
__decorate([
    (0, class_validator_1.IsDateString)({}, { message: 'End date must be a valid date.' }),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], UpdateCourseDto.prototype, "End_Date", void 0);
__decorate([
    (0, class_validator_1.IsNumber)({}, { message: 'Teacher ID must be a number.' }),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", Number)
], UpdateCourseDto.prototype, "Teacher_ID", void 0);
__decorate([
    (0, class_validator_1.IsNumber)({}, { message: 'Class level must be a number.' }),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", Number)
], UpdateCourseDto.prototype, "Class_Level", void 0);
__decorate([
    (0, class_validator_1.IsNumber)({}, { message: 'Class ID must be a number.' }),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", Number)
], UpdateCourseDto.prototype, "Class_ID", void 0);
