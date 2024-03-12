import { CategoryEntity, BaseEntity } from "./index.entity";
export declare class ProductEntity extends BaseEntity {
    name: string;
    description: string;
    isNegotiable: boolean;
    isAvailable: boolean;
    price: number;
    discount: number;
    createdBy: string;
    slug: string;
    condition: string;
    images: string[];
    category: CategoryEntity;
}
