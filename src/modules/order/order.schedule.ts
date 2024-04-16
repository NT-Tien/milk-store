import { Inject, Injectable } from "@nestjs/common";
import { Interval } from "@nestjs/schedule";
import { OrderServiceInterface } from "./interfaces/order-service.interface";
import { OrderStatus } from "src/entities/order.entity";
import { ZaloPayService } from "./zalo-pay/zalo-pay.service";

@Injectable()
export class OrderScheduleService {
    constructor(
        @Inject('ORDER_SERVICE_TIENNT') private readonly orderService: OrderServiceInterface,
        @Inject('ZALOPAY_SERVICE_TIENNT') private readonly zaloPayService: ZaloPayService,
    ) { }

    @Interval(5 * 60 * 1000) // Every 5 * 60 seconds
    async checkPayment() {
        var list_pending = await this.orderService.getOrdersByStatus(OrderStatus.PENDING);
        console.log(list_pending);
        for (let i = 0; i < list_pending.length; i++) {
            if(new Date().getTime() - list_pending[i].createdAt.getTime() > 15 * 60 * 1000) {
                await this.orderService.updateOrderStatus(list_pending[i].id, OrderStatus.EXPIRED);
            }
        }
    }

}