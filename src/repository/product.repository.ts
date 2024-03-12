import { Injectable } from '@nestjs/common';
import { EntityManager, Repository } from 'typeorm';

import { ProductEntity } from 'entities/index.entity';

@Injectable()
export class ProductRepository extends Repository<ProductEntity> {
  constructor(private entityManager: EntityManager) {
    super(ProductEntity, entityManager);
  }
}
