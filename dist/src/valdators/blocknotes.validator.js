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
exports.UpdateBlocknoteDto = exports.CreateBlocknoteDto = void 0;
const class_validator_1 = require("class-validator");
class CreateBlocknoteDto {
    task;
    isComplete;
    deadline;
    note;
    title;
    createdAt;
}
exports.CreateBlocknoteDto = CreateBlocknoteDto;
__decorate([
    (0, class_validator_1.IsString)({ message: 'Task must be a string' }),
    (0, class_validator_1.IsNotEmpty)({ message: 'Task name is required.' }),
    (0, class_validator_1.MaxLength)(50, { message: 'Task cannot exceed 50 characters.' }),
    __metadata("design:type", String)
], CreateBlocknoteDto.prototype, "task", void 0);
__decorate([
    (0, class_validator_1.IsBoolean)({ message: 'isComplete must be a boolean' }),
    __metadata("design:type", Boolean)
], CreateBlocknoteDto.prototype, "isComplete", void 0);
__decorate([
    (0, class_validator_1.IsDateString)({}, { message: 'Deadline must be a valid date.' }),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], CreateBlocknoteDto.prototype, "deadline", void 0);
__decorate([
    (0, class_validator_1.IsString)({ message: 'Note must be a string' }),
    (0, class_validator_1.IsNotEmpty)({ message: 'Note is required.' }),
    (0, class_validator_1.MaxLength)(500, { message: 'Note cannot exceed 500 characters.' }),
    __metadata("design:type", String)
], CreateBlocknoteDto.prototype, "note", void 0);
__decorate([
    (0, class_validator_1.IsString)({ message: 'Title must be a string' }),
    (0, class_validator_1.IsNotEmpty)({ message: 'Title is required.' }),
    (0, class_validator_1.MaxLength)(20, { message: 'Title cannot exceed 20 characters.' }),
    __metadata("design:type", String)
], CreateBlocknoteDto.prototype, "title", void 0);
__decorate([
    (0, class_validator_1.IsDateString)({}, { message: 'Created at must be a valid date.' }),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], CreateBlocknoteDto.prototype, "createdAt", void 0);
class UpdateBlocknoteDto {
    task;
    isComplete;
    deadline;
    note;
    title;
    createdAt;
}
exports.UpdateBlocknoteDto = UpdateBlocknoteDto;
__decorate([
    (0, class_validator_1.IsString)({ message: 'Task must be a string' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.MaxLength)(50, { message: 'Task cannot exceed 50 characters.' }),
    __metadata("design:type", String)
], UpdateBlocknoteDto.prototype, "task", void 0);
__decorate([
    (0, class_validator_1.IsBoolean)({ message: 'isComplete must be a boolean' }),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", Boolean)
], UpdateBlocknoteDto.prototype, "isComplete", void 0);
__decorate([
    (0, class_validator_1.IsDateString)({}, { message: 'Deadline must be a valid date.' }),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], UpdateBlocknoteDto.prototype, "deadline", void 0);
__decorate([
    (0, class_validator_1.IsString)({ message: 'Note must be a string' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.MaxLength)(500, { message: 'Note cannot exceed 500 characters.' }),
    __metadata("design:type", String)
], UpdateBlocknoteDto.prototype, "note", void 0);
__decorate([
    (0, class_validator_1.IsString)({ message: 'Title must be a string' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.MaxLength)(20, { message: 'Title cannot exceed 20 characters.' }),
    __metadata("design:type", String)
], UpdateBlocknoteDto.prototype, "title", void 0);
__decorate([
    (0, class_validator_1.IsDateString)({}, { message: 'CreatedAt must be a valid date.' }),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], UpdateBlocknoteDto.prototype, "createdAt", void 0);
