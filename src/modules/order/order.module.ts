import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { OrderService } from "./order.service";
import { OrderController } from "./order.controller";
import { OrderEntity } from "src/entities/order.entity";
import { OrderItemEntity } from "src/entities/order-item.entity";
import { ZaloPayService } from "./zalo-pay/zalo-pay.service";
import { SocketService } from "./zalo-pay/zalopay.client";
import { OrderProcessor } from "./order.process";
import { BullModule } from "@nestjs/bull";
import { OrderScheduleService } from "./order.schedule";

@Module({
    imports: [
        TypeOrmModule.forFeature([
            OrderEntity,
            OrderItemEntity,
        ]),
        BullModule.registerQueue({name: 'order-queue'}),
    ],
    controllers: [
        OrderController,
    ],
    providers: [
        SocketService,
        OrderProcessor,
        OrderScheduleService,
        {
            provide: "ORDER_SERVICE_TIENNT",
            useClass: OrderService
        },
        {
            provide: "ZALOPAY_SERVICE_TIENNT",
            useClass: ZaloPayService
        },
    ],
})
export class OrderModule { }