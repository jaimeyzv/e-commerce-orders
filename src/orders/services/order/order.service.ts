import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { OrderEntity } from 'src/database/entities/order.entity';
import { OrderCreateDto } from 'src/orders/dtos/order.create.dto';
import { Repository } from 'typeorm';

@Injectable()
export class OrderService {
  constructor(
    @InjectRepository(OrderEntity)
    private readonly orderRepository: Repository<OrderEntity>,
  ) {}

  async createOrder(order: OrderCreateDto) {
    const newOrderCreated = await this.orderRepository.save({
      customerId: order.customerId,
      total: order.total,
    });
  }
}
