import { CategoryService } from "category/category.service";
import { ISuccessReponse } from "common/responses";
import { ProductEntity } from "entities/product.entity";
import { ProductRepository } from "repository/product.repository";
import { CreateProductDto, UpdateProductDto } from "./dtos";
import { IProductResponse } from "./response";
export declare class ProductService {
    private readonly productRepository;
    private readonly categoryservice;
    constructor(productRepository: ProductRepository, categoryservice: CategoryService);
    createProduct(createDto: CreateProductDto): Promise<ISuccessReponse>;
    findProductById(id: string): Promise<IProductResponse>;
    findallAllProducts(): Promise<IProductResponse[]>;
    updateProduct(id: string, updateDto: UpdateProductDto): Promise<ISuccessReponse>;
    deleteProduct(id: string): Promise<ISuccessReponse>;
    transformToProductResponse(product: ProductEntity): IProductResponse;
}
