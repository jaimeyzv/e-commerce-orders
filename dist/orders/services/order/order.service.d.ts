import { OrderEntity } from 'src/database/entities/order.entity';
import { OrderCreateDto } from 'src/orders/dtos/order.create.dto';
import { Repository } from 'typeorm';
export declare class OrderService {
    private readonly orderRepository;
    constructor(orderRepository: Repository<OrderEntity>);
    createOrder(order: OrderCreateDto): Promise<void>;
}
