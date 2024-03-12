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
exports.CategoryService = void 0;
const common_1 = require("@nestjs/common");
const category_repository_1 = require("../../repository/category.repository");
let CategoryService = class CategoryService {
    constructor(categoryRepository) {
        this.categoryRepository = categoryRepository;
    }
    async createCategory(body) {
        const { name, parentId } = body;
        await this.checkForExistingCategory(name);
        if (parentId) {
            const parentCatById = await this.categoryRepository.findOne({
                where: { id: parentId },
            });
            if (!parentCatById) {
                throw new common_1.HttpException({ error: 'Parent category not found.' }, common_1.HttpStatus.BAD_REQUEST);
            }
        }
        const category = this.categoryRepository.create(body);
        await this.categoryRepository.save({
            ...category,
            parent: { id: parentId },
        });
        return { message: 'Category successfully created.' };
    }
    async findAllCategories() {
        const findManyOptions = {
            relations: { childrens: { childrens: true } },
            where: { parent: null },
        };
        const data = await this.categoryRepository.find(findManyOptions);
        return data;
    }
    async findCategoryById(id) {
        const data = await this.categoryRepository.findOne({
            where: { id: id },
            relations: { childrens: true },
        });
        return this.transformToCategoryResponse(data);
    }
    async findCategoryByName(name) {
        const data = await this.categoryRepository.findOne({
            where: { name: name },
        });
        if (data !== null)
            return this.transformToCategoryResponse(data ?? data);
    }
    async updateCategory(id, body) {
        const { parentId, name } = body;
        const categoryById = await this.findCategoryById(id);
        if (categoryById.name.toLowerCase() !== name.toLowerCase()) {
            await this.checkForExistingCategory(name);
        }
        if (parentId) {
            const parent = await this.findCategoryById(parentId);
            if (!parent) {
                throw new common_1.HttpException('Parent Category Not Found', common_1.HttpStatus.NOT_FOUND);
            }
            body['parent'] = parent;
        }
        delete body.parentId;
        await this.categoryRepository.update(id, body);
        return { message: 'Category successfully updated.' };
    }
    async deleteCategory(id) {
        const savedCategory = await this.findCategoryById(id);
        if (!savedCategory) {
            throw new common_1.HttpException('Category Not Found', 404);
        }
        await this.categoryRepository.delete(id);
        return { message: 'Category successfully deleted.' };
    }
    async checkForExistingCategory(name) {
        const existingCategory = await this.findCategoryByName(name);
        if (existingCategory) {
            throw new common_1.HttpException('Category with the same name already exists', common_1.HttpStatus.CONFLICT);
        }
    }
    transformToCategoryResponse(data) {
        const { id, name, description, isActive, icon, childrens } = data;
        const transformedChildrens = childrens.map(({ id, name, description, icon, isActive }) => ({
            id,
            name,
            description,
            icon,
            isActive,
        }));
        return {
            id,
            name,
            description,
            isActive,
            icon,
            childrens: transformedChildrens,
        };
    }
};
exports.CategoryService = CategoryService;
exports.CategoryService = CategoryService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [category_repository_1.CategoryRepository])
], CategoryService);
//# sourceMappingURL=category.service.js.map