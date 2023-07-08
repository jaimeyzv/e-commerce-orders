"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrderUpdateDto = void 0;
const mapped_types_1 = require("@nestjs/mapped-types");
const order_create_dto_1 = require("./order.create.dto");
class OrderUpdateDto extends (0, mapped_types_1.PartialType)(order_create_dto_1.OrderCreateDto) {
}
exports.OrderUpdateDto = OrderUpdateDto;
//# sourceMappingURL=order.update.dto.js.map