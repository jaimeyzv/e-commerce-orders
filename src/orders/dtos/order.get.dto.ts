import { PartialType } from '@nestjs/mapped-types';
import { OrderCreateDto } from './order.create.dto';

export class OrderGetDto extends PartialType(OrderCreateDto) {
  createdAt: Date;
}
