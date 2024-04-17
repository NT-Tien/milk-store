import { ShippingOrderDto } from "../dto/data-order.dto";
import { UpdateShippingOrderDto } from "../dto/update-order.dto";

export interface ShippingServiceInterface {
    getAllOrderShipping(): Promise<any>;
    getOrderDetail(order_code: string): Promise<any>;
    createOrderShipping(data: ShippingOrderDto): Promise<any>;
    updateOrderShipping(order_code: string, data: UpdateShippingOrderDto): Promise<any>;
    returnOrderShipping(id: string): Promise<any>;
    cancelOrderShipping(id: string): Promise<any>;
    calculateOrderShippingFee(data: ShippingOrderDto): Promise<any>;
    getDistricts(): Promise<any>;
    getWards(district_id: number): Promise<any>;
    getPronvinces(): Promise<any>;
}