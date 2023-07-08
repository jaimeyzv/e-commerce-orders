import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { OrderItemEntity } from 'src/database/entities/order.item.entity';
import { Repository } from 'typeorm';
import { OrderItemCreateDto } from '../dtos/order.item.create.dto';

@Injectable()
export class OrderItemService {
  constructor(
    @InjectRepository(OrderItemEntity)
    private readonly orderItemRepository: Repository<OrderItemEntity>,
  ) {}

  async createItems(orderId: string, items: OrderItemCreateDto[]) {
    items.forEach((i) => {
      this.orderItemRepository.save({ orderId: orderId, ...i });
    });
  }

  async getAllItemsByOrderId(orderId: string) {
    const orderItems = await this.orderItemRepository.find({
      where: { orderId: orderId },
    });

    return orderItems;
  }
}
