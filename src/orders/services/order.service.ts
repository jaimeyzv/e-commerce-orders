import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { OrderEntity } from 'src/database/entities/order.entity';
import { OrderCreateDto } from 'src/orders/dtos/order.create.dto';
import { Repository } from 'typeorm';
import { OrderCreateResponseDto } from '../dtos/order.create.response.dto';

@Injectable()
export class OrderService {
  constructor(
    @InjectRepository(OrderEntity)
    private readonly orderRepository: Repository<OrderEntity>,
  ) {}

  async createOrder(order: OrderCreateDto): Promise<OrderCreateResponseDto> {
    const newOrderCreated = await this.orderRepository.save({
      customerId: order.customerId,
      total: order.total,
    });
    const orderResponseDto = new OrderCreateResponseDto();
    orderResponseDto.orderId = newOrderCreated.orderId;
    orderResponseDto.customerId = newOrderCreated.customerId;
    orderResponseDto.total = newOrderCreated.total;
    orderResponseDto.createdAt = newOrderCreated.createdAt;

    return orderResponseDto;
  }

  async getOrderById(id: string) {
    const orderFound = await this.orderRepository.findOne({
      where: { orderId: id },
    });
    return orderFound;
  }
}
