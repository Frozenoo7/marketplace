import { EntityManager, Repository } from 'typeorm';
import { CategoryEntity } from 'entities/index.entity';
export declare class CategoryRepository extends Repository<CategoryEntity> {
    private entityManager;
    constructor(entityManager: EntityManager);
}
