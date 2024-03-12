export class IProductResponse {
  id: string;
  name: string;
  isAvailable: boolean;
  description?: string;
  price?: number;
  discountedPrice?: number;
  weight?: number;
  productType?: string;
  images?: string[];
}
