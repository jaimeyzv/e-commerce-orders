import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { OrderItemService } from '../services/order.item.service';
import { OrderItemCreateDto } from '../dtos/order.item.create.dto';

@Controller('order-items')
export class OrderItemController {
  constructor(private readonly orderItemService: OrderItemService) {}

  @Post(':orderId')
  async createItems(
    @Body() payload: OrderItemCreateDto[],
    @Param('orderId') orderId: string,
  ) {
    const result = this.orderItemService.createItems(orderId, payload);
  }

  @Get('orders/:orderId/items')
  async getAllItemsByOrderId(@Param('orderId') orderId: string) {
    const allItems = await this.orderItemService.getAllItemsByOrderId(orderId);
    return allItems;
  }
}
