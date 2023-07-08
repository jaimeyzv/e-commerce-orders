import { Module } from '@nestjs/common';
import { OrderController } from './controllers/order.controller';
import { OrderService } from './services/order.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { OrderEntity } from 'src/database/entities/order.entity';
import { OrderItemController } from './controllers/order.item.controller';
import { OrderItemService } from './services/order.item.service';
import { OrderItemEntity } from 'src/database/entities/order.item.entity';

@Module({
  imports: [TypeOrmModule.forFeature([OrderEntity, OrderItemEntity])],
  controllers: [OrderController, OrderItemController],
  providers: [OrderService, OrderItemService],
})
export class OrdersModule {}
