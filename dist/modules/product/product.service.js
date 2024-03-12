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
exports.ProductService = void 0;
const common_1 = require("@nestjs/common");
const category_service_1 = require("../category/category.service");
const product_repository_1 = require("../../repository/product.repository");
let ProductService = class ProductService {
    constructor(productRepository, categoryservice) {
        this.productRepository = productRepository;
        this.categoryservice = categoryservice;
    }
    async createProduct(createDto) {
        const { categoryId } = createDto;
        const category = await this.categoryservice.findCategoryById(categoryId);
        if (!category) {
            throw new common_1.NotFoundException(`Category with ID ${createDto.categoryId} not found`);
        }
        const product = this.productRepository.create({ ...createDto, category });
        await this.productRepository.save(product);
        return { message: "product successfully created." };
    }
    async findProductById(id) {
        const product = await this.productRepository.findOne({ where: { id: id } });
        if (!product) {
            throw new common_1.HttpException("Product not found", 404);
        }
        return this.transformToProductResponse(product);
    }
    async findallAllProducts() {
        const productlist = await this.productRepository.find();
        return productlist.map((each) => this.transformToProductResponse(each));
    }
    async updateProduct(id, updateDto) {
        await this.productRepository.update(id, updateDto);
        return { message: "product successfully updated." };
    }
    async deleteProduct(id) {
        await this.productRepository.delete(id);
        return { message: "product deleted successfully" };
    }
    transformToProductResponse(product) {
        return {
            id: product.id,
            name: product.name,
            isAvailable: product.isAvailable,
            description: product.description,
            price: product.price,
            images: product.images,
        };
    }
};
exports.ProductService = ProductService;
exports.ProductService = ProductService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [product_repository_1.ProductRepository,
        category_service_1.CategoryService])
], ProductService);
//# sourceMappingURL=product.service.js.map