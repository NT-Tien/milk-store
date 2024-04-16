import { HttpException, Inject, Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { DataSource, Repository } from "typeorm";
import { OrderEntity, OrderStatus } from "../../entities/order.entity";
import { OrderItemEntity } from "../../entities/order-item.entity";
import { OrderServiceInterface } from "./interfaces/order-service.interface";
import { CreateOrderDto } from "./dto/create-order.dto";
import { ZaloPayService } from "./zalo-pay/zalo-pay.service";
import { isUUID } from "class-validator";
import { MilkEntity } from "src/entities/milk.entity";
import { VoucherEntity } from "src/entities/voucher.entity";

@Injectable()
export class OrderService implements OrderServiceInterface {

    constructor(
        @InjectRepository(OrderEntity) private readonly orderRepository: Repository<OrderEntity>,
        @InjectRepository(OrderItemEntity) private readonly orderItemRepository: Repository<OrderItemEntity>,
        @Inject('ZALOPAY_SERVICE_TIENNT') private readonly zaloPayService: ZaloPayService,
        private dataSource: DataSource // for transaction
    ) { }
    async createOrder(data: CreateOrderDto): Promise<any> {
        const queryRunner = this.dataSource.createQueryRunner();
        await queryRunner.connect();
        await queryRunner.startTransaction("SERIALIZABLE");
        try {
            var total = 0;
            // check info item
            for (let item of data.items) {
                const milk = await queryRunner.manager.findOne(MilkEntity, { where: { id: item.milkId } });
                if (!milk) throw new HttpException(`Item with id ${item.name} is not exist`, 400);
                if (item.quantity > milk.quantity) throw new HttpException(`Milk - ${milk.name} is not enough`, 400);
                if (milk.deletedAt) throw new HttpException('Milk is deleted', 400);
                if (milk.price != item.price) throw new HttpException('Milk price is not correct', 400);
                if (milk.name != item.name) throw new HttpException('Milk name is not correct', 400);
                total += item.price * item.quantity;
            }
            // check info voucher if exist
            if (data.voucher) {
                if (!isUUID(data.voucher as any)) throw new HttpException('Ticket Voucher is not correct', 400)
                    var voucher = await queryRunner.manager.findOne(VoucherEntity, { where: { id: data.voucher } });
                    if (!voucher) throw new HttpException('Ticket Voucher not found', 404);
                    if (voucher.deletedAt) throw new HttpException('Ticket Voucher is deleted', 400);
            } else if (total != data.total) throw new HttpException('Total price is not correct', 400);
            // create order add order items
            var result = await this.zaloPayService.createOrder(data.total);
            data.payment = result;
            var order = await queryRunner.manager.save(OrderEntity, data);
            for (const item of data.items) {
                await queryRunner.manager.save(OrderItemEntity, {
                    orderId: order.id,
                    milkId: item.milkId,
                    name: item.name,
                    quantity: item.quantity,
                    price: item.price
                });
            }
            await queryRunner.commitTransaction();
        } catch (e) {
            await queryRunner.rollbackTransaction();
            throw new HttpException(e, 500);
        } finally {
            await queryRunner.release();
        }
    }
    updateOrderStatus(id: string, status: OrderStatus): Promise<any> {
        return this.orderRepository.update(id, { status });
    }
    getOrders(): Promise<any> {
        return this.orderRepository.find();
    }
    getOrdersByStatus(status: OrderStatus): Promise<any> {
        return this.orderRepository.find({ where: { status } });
    }
    getOrderById(id: string): Promise<any> {
        if (!isUUID(id as any)) throw new HttpException("Id is not valid", 400);
        return this.orderRepository.findOne(id as any);
    }
    getOrdersByUserPhone(phone: string): Promise<any> {
        return this.orderRepository.find({ where: { phone } });
    }

} 