import { IsString, IsNotEmpty, IsNumberString } from "class-validator";

export class CreateMarketplaceProfileDto {
  @IsNotEmpty()
  @IsString()
  name: string;

  @IsNumberString()
  public latitude: number;

  @IsNumberString()
  public longitude: number;

  @IsNotEmpty()
  @IsString()
  entityId: string;

  @IsNotEmpty()
  @IsString()
  type: string;

  @IsNotEmpty()
  @IsString()
  createdBy: string;
}
