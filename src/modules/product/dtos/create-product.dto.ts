import {
  IsNotEmpty,
  IsBoolean,
  IsOptional,
  IsUUID,
  IsArray,
  IsString,
  MaxLength,
  IsEnum,
} from "class-validator";

export class CreateProductDto {
  @IsNotEmpty()
  @IsString()
  @MaxLength(255)
  name: string;

  @IsOptional()
  @IsUUID()
  categoryId?: string;

  @IsNotEmpty()
  @IsBoolean()
  hasVariations: boolean;

  @IsNotEmpty()
  @IsBoolean()
  isAvailable: boolean;

  @IsOptional()
  @IsString()
  shortDescription?: string;

  @IsOptional()
  @IsString()
  description?: string;

  @IsOptional()
  price?: number;

  @IsOptional()
  discountedPrice?: number;

  @IsOptional()
  cost?: number;

  @IsOptional()
  weight?: number;

  @IsOptional()
  createdBy?: string;

  @IsOptional()
  taxRate?: number;

  @IsNotEmpty()
  @IsBoolean()
  isTaxable: boolean;

  @IsOptional()
  @IsArray()
  @IsString({ each: true })
  images?: string[];
}
