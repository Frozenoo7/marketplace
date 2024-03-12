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
exports.CategoryEntity = void 0;
const typeorm_1 = require("typeorm");
const index_entity_1 = require("./index.entity");
let CategoryEntity = class CategoryEntity extends index_entity_1.BaseEntity {
};
exports.CategoryEntity = CategoryEntity;
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], CategoryEntity.prototype, "name", void 0);
__decorate([
    (0, typeorm_1.Column)({ length: 1024, nullable: true }),
    __metadata("design:type", String)
], CategoryEntity.prototype, "description", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], CategoryEntity.prototype, "icon", void 0);
__decorate([
    (0, typeorm_1.Column)({ default: true, type: 'boolean' }),
    __metadata("design:type", Boolean)
], CategoryEntity.prototype, "isActive", void 0);
__decorate([
    (0, typeorm_1.Column)({ default: false }),
    __metadata("design:type", Boolean)
], CategoryEntity.prototype, "isAvailable", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", String)
], CategoryEntity.prototype, "imageUrl", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", String)
], CategoryEntity.prototype, "createdBy", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", String)
], CategoryEntity.prototype, "position", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", String)
], CategoryEntity.prototype, "dept", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => CategoryEntity, (category) => category.parent, {
        nullable: true,
    }),
    __metadata("design:type", Array)
], CategoryEntity.prototype, "childrens", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => CategoryEntity, (category) => category.childrens, {
        nullable: true,
    }),
    __metadata("design:type", CategoryEntity)
], CategoryEntity.prototype, "parent", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => index_entity_1.ProductEntity, (product) => product.category, {
        nullable: true,
    }),
    __metadata("design:type", Array)
], CategoryEntity.prototype, "product", void 0);
exports.CategoryEntity = CategoryEntity = __decorate([
    (0, typeorm_1.Entity)({ name: 'category' })
], CategoryEntity);
//# sourceMappingURL=category.entity.js.map