"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DatabaseProvider = void 0;
const typeorm_1 = require("@nestjs/typeorm");
const order_entity_1 = require("./entities/order.entity");
exports.DatabaseProvider = [
    typeorm_1.TypeOrmModule.forRoot({
        ssl: false,
        type: 'postgres',
        host: 'localhost',
        username: 'postgres',
        password: '123456',
        database: 'OrdersDB',
        port: 5432,
        entities: [order_entity_1.OrderEntity],
        synchronize: true,
    }),
];
//# sourceMappingURL=database.provider.js.map