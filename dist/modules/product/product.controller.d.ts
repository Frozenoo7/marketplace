import { ProductService } from './product.service';
import { CreateProductDto, UpdateProductDto } from './dtos/index';
export declare class ProductController {
    private readonly productService;
    constructor(productService: ProductService);
    createProduct(createDto: CreateProductDto): Promise<import("../../common/responses").ISuccessReponse>;
    updateProduct(id: string, updateDto: UpdateProductDto): Promise<import("../../common/responses").ISuccessReponse>;
    findallAllProducts(): Promise<import("./response").IProductResponse[]>;
    findProductById(id: string): Promise<import("./response").IProductResponse>;
    deleteProduct(id: string): Promise<import("../../common/responses").ISuccessReponse>;
}
