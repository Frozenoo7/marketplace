import { EntityManager, Repository } from 'typeorm';
import { ProductEntity } from 'entities/index.entity';
export declare class ProductRepository extends Repository<ProductEntity> {
    private entityManager;
    constructor(entityManager: EntityManager);
}
