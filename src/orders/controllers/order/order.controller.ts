import { Body, Controller, Post } from '@nestjs/common';
import { OrderCreateDto } from 'src/orders/dtos/order.create.dto';
import { OrderService } from 'src/orders/services/order/order.service';

@Controller('orders')
export class OrderController {
  constructor(private readonly orderService: OrderService) {}

  @Post()
  create(@Body() orderDto: OrderCreateDto) {
    this.orderService.createOrder(orderDto);
  }
}
