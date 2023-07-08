import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
} from 'typeorm';

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
}
