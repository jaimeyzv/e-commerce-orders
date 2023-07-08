import {
  Column,
  CreateDateColumn,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { OrderItemEntity } from './order.item.entity';

@Entity({ name: 'Orders' })
export class OrderEntity {
  @PrimaryGeneratedColumn('uuid')
  orderId: string;

  @Column()
  customerId: string;

  @Column({ nullable: false, type: 'decimal' })
  total: number;

  @CreateDateColumn({ type: 'timestamptz' })
  createdAt: Date;

  @OneToMany((type) => OrderItemEntity, (orderItems) => orderItems.Order)
  orderItems: OrderItemEntity[];
}
