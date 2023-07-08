import { OrderCreateDto } from 'src/orders/dtos/order.create.dto';
import { OrderService } from 'src/orders/services/order/order.service';
export declare class OrderController {
    private readonly orderService;
    constructor(orderService: OrderService);
    create(orderDto: OrderCreateDto): void;
}
