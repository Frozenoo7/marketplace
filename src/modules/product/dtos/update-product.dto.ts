import {
  IsOptional,
  IsUUID,
  IsBoolean,
  IsDecimal,
  IsArray,
  IsString,
  MaxLength,
  IsEnum,
} from "class-validator";

export class UpdateProductDto {
  @IsOptional()
  @IsString()
  @MaxLength(255)
  name?: string;

  @IsOptional()
  @IsBoolean()
  isAvailable?: boolean;

  @IsOptional()
  @IsString()
  description?: string;

  @IsOptional()
  @IsDecimal({ decimal_digits: "2" })
  price?: number;

  @IsOptional()
  @IsDecimal({ decimal_digits: "2" })
  weight?: number;

  @IsOptional()
  @IsUUID()
  createdBy?: string;

  @IsOptional()
  @IsArray()
  @IsString({ each: true })
  images?: string[];
}
