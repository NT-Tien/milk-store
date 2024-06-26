import { CreateOrderDto } from "../dto/create-order.dto";
import { OrderStatus } from "../../../entities/order.entity";

export interface OrderServiceInterface {
    createOrder(data: CreateOrderDto): Promise<any>;
    updateOrderStatusForSchedule(id: string, status: OrderStatus): Promise<any>;
    updateOrderStatus(id: string, status: OrderStatus): Promise<any>;
    updateOrderStatusWithAppTransId(app_trans_id: string, status: OrderStatus): Promise<any>;
    getOrders(): Promise<any>;
    getOrdersByStatus(status: OrderStatus): Promise<any>;
    getOrderById(id: string): Promise<any>;
    getOrdersByUserPhone(phone: string): Promise<any>;
}