import { HttpException, Injectable, NotFoundException } from "@nestjs/common";

import { CategoryService } from "category/category.service";
import { ISuccessReponse } from "common/responses";
import { ProductEntity } from "entities/product.entity";
import { ProductRepository } from "repository/product.repository";

import { CreateProductDto, UpdateProductDto } from "./dtos";
import { IProductResponse } from "./response";

@Injectable()
export class ProductService {
  constructor(
    private readonly productRepository: ProductRepository,
    private readonly categoryservice: CategoryService
  ) {}

  async createProduct(createDto: CreateProductDto): Promise<ISuccessReponse> {
    const { categoryId } = createDto;
    const category = await this.categoryservice.findCategoryById(categoryId);
    if (!category) {
      throw new NotFoundException(
        `Category with ID ${createDto.categoryId} not found`
      );
    }
    const product = this.productRepository.create({ ...createDto, category });

    await this.productRepository.save(product);
    return { message: "product successfully created." };
  }
  async findProductById(id: string): Promise<IProductResponse> {
    const product = await this.productRepository.findOne({ where: { id: id } });
    if (!product) {
      throw new HttpException("Product not found", 404);
    }

    return this.transformToProductResponse(product);
  }

  async findallAllProducts(): Promise<IProductResponse[]> {
    const productlist = await this.productRepository.find();

    return productlist.map((each) => this.transformToProductResponse(each));
  }

  async updateProduct(
    id: string,
    updateDto: UpdateProductDto
  ): Promise<ISuccessReponse> {
    await this.productRepository.update(id, updateDto);

    return { message: "product successfully updated." };
  }

  async deleteProduct(id: string): Promise<ISuccessReponse> {
    await this.productRepository.delete(id);

    return { message: "product deleted successfully" };
  }

  public transformToProductResponse(product: ProductEntity): IProductResponse {
    return {
      id: product.id,
      name: product.name,
      isAvailable: product.isAvailable,
      description: product.description,
      price: product.price,
      images: product.images,
    };
  }
}
