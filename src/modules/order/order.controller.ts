import { Body, Controller, Get, HttpException, Inject, Param, Post } from "@nestjs/common";
import { OrderServiceInterface } from "./interfaces/order-service.interface";
import { ApiBody, ApiTags } from "@nestjs/swagger";
import { ZaloPayService } from "./zalo-pay/zalo-pay.service";
import { InjectQueue } from "@nestjs/bull";
import { Job, Queue } from "bull";
import { CreateOrderDto } from "./dto/create-order.dto";

@ApiTags("order")
@Controller("order")
export class OrderController { 
    constructor(
        @Inject("ORDER_SERVICE_TIENNT") private readonly orderService: OrderServiceInterface,
        @Inject("ZALOPAY_SERVICE_TIENNT") private readonly zaloPayService: ZaloPayService,
        @InjectQueue('order-queue') private readonly orderQueue: Queue,
    ) { }

    @Post()
    createOrder(@Body() order: CreateOrderDto) {
        return this.orderService.createOrder(order);
        // return this.orderQueue.add({ data: order } as Job<any>, { delay: 2000 });
    }

    @Get('get-result/:orderId')
    async getResult(@Param('orderId') orderId: string) {
        const job = await this.orderQueue.getJob(orderId);
        if (!job) {
            throw new HttpException('Job not found', 404);
        }
        return job;
    }
    
}