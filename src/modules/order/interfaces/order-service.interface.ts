import { CreateOrderDto } from "../dto/create-order.dto";
import { OrderStatus } from "../../../entities/order.entity";

export interface OrderServiceInterface {
    createOrder(data: CreateOrderDto): Promise<any>;
    updateOrderStatus(id: string, status: OrderStatus): Promise<any>;
    getOrders(): Promise<any>;
    getOrderById(id: string): Promise<any>;
    getOrdersByPhone(phone: string): Promise<any>;
}