import { Process, Processor } from '@nestjs/bull';
import { Inject } from '@nestjs/common';
import { Job } from 'bull';
import { OrderServiceInterface } from './interfaces/order-service.interface';

@Processor('order-queue')
export class OrderProcessor {
    constructor(
        @Inject('ORDER_SERVICE_TIENNT') private orderService: OrderServiceInterface,
    ) { }

    @Process()
    async processJob(job: Job<any>) {
        try {
            const { data } = job;
            return await this.orderService.createOrder(data.data);
        } catch (error) {
            return error.toString();
        }

    }
}
