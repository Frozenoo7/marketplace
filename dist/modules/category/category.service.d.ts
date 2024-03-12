import { ISuccessReponse } from 'common/responses';
import { CategoryRepository } from 'repository/category.repository';
import { CreateCategoryDto, UpdateCategoryDto } from './dtos';
import { ICategoryResponse } from './response';
export declare class CategoryService {
    private readonly categoryRepository;
    constructor(categoryRepository: CategoryRepository);
    createCategory(body: CreateCategoryDto): Promise<ISuccessReponse>;
    findAllCategories(): Promise<any[]>;
    findCategoryById(id: string): Promise<ICategoryResponse>;
    findCategoryByName(name: string): Promise<ICategoryResponse>;
    updateCategory(id: string, body: UpdateCategoryDto): Promise<ISuccessReponse>;
    deleteCategory(id: string): Promise<ISuccessReponse>;
    private checkForExistingCategory;
    private transformToCategoryResponse;
}
