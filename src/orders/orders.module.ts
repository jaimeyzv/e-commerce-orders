import { Module } from '@nestjs/common';
import { OrderController } from './controllers/order/order.controller';
import { OrderService } from './services/order/order.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { OrderEntity } from 'src/database/entities/order.entity';

@Module({
  imports: [TypeOrmModule.forFeature([OrderEntity])],
  controllers: [OrderController],
  providers: [OrderService],
})
export class OrdersModule {}
