import {
  IsNotEmpty,
  IsString,
  MaxLength,
  IsBoolean,
  IsOptional,
} from 'class-validator';

export class CreateCategoryDto {
  @IsNotEmpty()
  @IsString()
  name: string;

  @IsOptional()
  @IsString()
  @MaxLength(255)
  description?: string;

  @IsNotEmpty()
  @IsString()
  icon: string;

  @IsNotEmpty()
  @IsBoolean()
  isActive: boolean;

  @IsOptional()
  parentId?: string;

  @IsOptional()
  isAvailable?: boolean;

  @IsOptional()
  imageUrl?: string;

  @IsOptional()
  createdBy?: string;

  @IsOptional()
  position?: string;

  @IsOptional()
  dept?: string;
}
