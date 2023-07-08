import { IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class OrderCreateDto {
  @IsNotEmpty()
  @IsString()
  readonly id: string;

  @IsNotEmpty()
  @IsString()
  readonly customerId: string;

  @IsNotEmpty()
  @IsNumber()
  readonly total: number;
}
