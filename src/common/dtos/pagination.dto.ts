import { IsNumberString } from 'class-validator';

export class PaginationParamsDto {
  @IsNumberString()
  public page: number;

  @IsNumberString()
  public take: number;
}
