import { AddShippingOrderDto } from "../dto/add-shipping.dto";

export interface ShippingServiceInterface {
    addShippingOrder(data: AddShippingOrderDto): Promise<any>;
    getAllShippingOrderList(): Promise<any>;
    getShippingOrderListByUserId(userId: string): Promise<any>;
}