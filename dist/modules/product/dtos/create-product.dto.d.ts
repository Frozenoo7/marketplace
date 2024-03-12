export declare class CreateProductDto {
    name: string;
    categoryId?: string;
    hasVariations: boolean;
    isAvailable: boolean;
    shortDescription?: string;
    description?: string;
    price?: number;
    discountedPrice?: number;
    cost?: number;
    weight?: number;
    createdBy?: string;
    taxRate?: number;
    isTaxable: boolean;
    images?: string[];
}
