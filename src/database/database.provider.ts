import { TypeOrmModule } from '@nestjs/typeorm';
import { OrderEntity } from './entities/order.entity';
import { OrderItemEntity } from './entities/order.item.entity';

export const DatabaseProvider = [
  TypeOrmModule.forRoot({
    ssl: false,
    type: 'postgres',
    host: 'localhost',
    username: 'postgres',
    password: '123456',
    database: 'OrdersDB',
    port: 5432,
    entities: [OrderEntity, OrderItemEntity],
    synchronize: true,
    //entities: [__dirname + '../../modules/**/*.entity{.ts,.js}'],
    //migrations: [__dirname + '../migrations/*{.ts,.js}'],
  }),
];
