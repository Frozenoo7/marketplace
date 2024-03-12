import { CategoryService } from './category.service';
import { CreateCategoryDto, UpdateCategoryDto } from './dtos/index';
export declare class CategoryController {
    private readonly categoryService;
    constructor(categoryService: CategoryService);
    createCategory(body: CreateCategoryDto): Promise<import("../../common/responses").ISuccessReponse>;
    findAllCategories(): Promise<any[]>;
    findCategoryById(id: string): Promise<import("./response").ICategoryResponse>;
    updateCategory(id: string, body: UpdateCategoryDto): Promise<import("../../common/responses").ISuccessReponse>;
    deleteCategory(id: string): Promise<import("../../common/responses").ISuccessReponse>;
}
