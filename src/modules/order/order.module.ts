import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { OrderService } from "./order.service";
import { OrderController } from "./order.controller";
import { OrderEntity } from "src/entities/order.entity";
import { OrderItemEntity } from "src/entities/order-item.entity";

@Module({
    imports: [
        TypeOrmModule.forFeature([
            OrderEntity,
            OrderItemEntity,
        ])
    ],
    controllers: [
        OrderController
    ],
    providers: [
        {
            provide: "ORDER_SERVICE_TIENNT",
            useClass: OrderService
        },
    ],
})
export class OrderModule { }