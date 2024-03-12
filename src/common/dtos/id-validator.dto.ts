import { ApiProperty } from '@nestjs/swagger';
import { IsNumberString } from 'class-validator';

export class IdValidator {
  @ApiProperty()
  @IsNumberString()
  public id: string;
}
