import { ProductEntity, BaseEntity } from './index.entity';
export declare class CategoryEntity extends BaseEntity {
    name: string;
    description?: string;
    icon: string;
    isActive: boolean;
    isAvailable: boolean;
    imageUrl: string;
    createdBy: string;
    position: string;
    dept: string;
    childrens?: CategoryEntity[];
    parent: CategoryEntity;
    product?: ProductEntity[];
}
