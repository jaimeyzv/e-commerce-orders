import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('Orders')
export class OrderEntity {
  @PrimaryGeneratedColumn()
  id: string;

  @Column()
  customerId: string;

  @Column()
  total: number;
}
