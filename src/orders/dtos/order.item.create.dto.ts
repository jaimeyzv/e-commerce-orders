import { IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class OrderItemCreateDto {
  @IsNotEmpty()
  @IsString()
  private readonly productId: string;

  @IsNotEmpty()
  @IsNumber()
  private readonly price: number;

  @IsNotEmpty()
  @IsNumber()
  private readonly quantity: number;
}
