import { Inject, Injectable } from "@nestjs/common";
import { Interval } from "@nestjs/schedule";
import { OrderServiceInterface } from "./interfaces/order-service.interface";
import { OrderStatus } from "src/entities/order.entity";

@Injectable()
export class OrderScheduleService {
    constructor(
        @Inject('ORDER_SERVICE_TIENNT') private readonly orderService: OrderServiceInterface,
    ) { }

    @Interval(5 * 60 * 1000) // Every 5 * 60 seconds
    async checkPayment() {
        var list_pending = await this.orderService.getOrdersByStatus(OrderStatus.PENDING);
        console.log(list_pending);
        for (let i = 0; i < list_pending.length; i++) {
            console.log(new Date().getTime() - (list_pending[i].createdAt.getTime() + 7 * 60 * 60 * 1000));
            
            if (new Date().getTime() - (list_pending[i].createdAt.getTime() + 7 * 60 * 60 * 1000) > 15 * 60 * 1000) {
                await this.orderService.updateOrderStatus(list_pending[i].id, OrderStatus.EXPIRED);
            }
        }
    }

}