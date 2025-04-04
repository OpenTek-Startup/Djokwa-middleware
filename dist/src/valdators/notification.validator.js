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
exports.UpdateDataDto = exports.CreateDataDto = exports.BaseDataDto = exports.DataType = void 0;
const class_validator_1 = require("class-validator");
// Enum for Data Type
var DataType;
(function (DataType) {
    DataType["INFO"] = "info";
    DataType["ERROR"] = "error";
    DataType["WARNING"] = "warning";
    DataType["SUCCESS"] = "success";
})(DataType || (exports.DataType = DataType = {}));
class BaseDataDto {
    title;
    time;
    message;
    type;
}
exports.BaseDataDto = BaseDataDto;
__decorate([
    (0, class_validator_1.IsString)({ message: 'Title must be a string.' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.MaxLength)(100, { message: 'Title cannot exceed 100 characters.' }),
    __metadata("design:type", String)
], BaseDataDto.prototype, "title", void 0);
__decorate([
    (0, class_validator_1.IsDateString)({}, { message: 'Time must be a valid ISO 8601 date.' }),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], BaseDataDto.prototype, "time", void 0);
__decorate([
    (0, class_validator_1.IsString)({ message: 'Message must be a string.' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.MaxLength)(500, { message: 'Message cannot exceed 500 characters.' }),
    __metadata("design:type", String)
], BaseDataDto.prototype, "message", void 0);
__decorate([
    (0, class_validator_1.IsEnum)(DataType, {
        message: 'Type must be one of the following: info, error, warning, success.',
    }),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], BaseDataDto.prototype, "type", void 0);
// CreateDataDto extends BaseDataDto and makes all fields required for creation
class CreateDataDto extends BaseDataDto {
}
exports.CreateDataDto = CreateDataDto;
// UpdateDataDto extends BaseDataDto and makes fields optional for updates
class UpdateDataDto extends BaseDataDto {
}
exports.UpdateDataDto = UpdateDataDto;
