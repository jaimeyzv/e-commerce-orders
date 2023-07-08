import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { OrderCreateDto } from 'src/orders/dtos/order.create.dto';
import { OrderService } from 'src/orders/services/order.service';

@Controller('orders')
export class OrderController {
  constructor(private readonly orderService: OrderService) {}

  @Post()
  async create(@Body() orderDto: OrderCreateDto) {
    return await this.orderService.createOrder(orderDto);
  }

  @Get(':orderId')
  async getById(@Param('orderId') orderId: string): Promise<any> {
    return this.orderService.getOrderById(orderId);
  }
}
