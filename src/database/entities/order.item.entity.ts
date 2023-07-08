import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { OrderEntity } from './order.entity';

@Entity({ name: 'OrderItems' })
export class OrderItemEntity {
  @PrimaryGeneratedColumn('uuid')
  orderItemId: string;

  @Column()
  orderId: string;

  @Column()
  productId: string;

  @Column({ nullable: false, type: 'decimal' })
  price: number;

  @Column()
  quantity: number;

  @ManyToOne((type) => OrderEntity, (order) => order.orderItems)
  Order: OrderEntity;
}
