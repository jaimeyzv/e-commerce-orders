import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'Orders' })
export class OrderEntity {
  @PrimaryGeneratedColumn('uuid')
  orderId: string;

  @Column()
  customerId: string;

  @Column({ nullable: false, type: 'decimal' })
  total: number;
}
