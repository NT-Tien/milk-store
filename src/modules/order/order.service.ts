import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { OrderEntity } from "../../entities/order.entity";
import { OrderItemEntity } from "../../entities/order-item.entity";
import { OrderServiceInterface } from "./interfaces/order-service.interface";

@Injectable()
export class OrderService {

    constructor(
        @InjectRepository(OrderEntity) private readonly orderRepository: Repository<OrderEntity>,
        @InjectRepository(OrderItemEntity) private readonly orderItemRepository: Repository<OrderItemEntity>,
    ) { }



} 