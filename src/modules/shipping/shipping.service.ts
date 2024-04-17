import { HttpException, Injectable } from "@nestjs/common";
import { ShippingOrderDto } from "./dto/data-order.dto";
import axios from 'axios';
import { ShippingServiceInterface } from "./interfaces/shipping-service.interface";
import * as dotenv from 'dotenv';
import { UpdateShippingOrderDto } from "./dto/update-order.dto";
dotenv.config();

const data = {
    "payment_type_id": 2,
    "note": "Tintest 123",
    "required_note": "KHONGCHOXEMHANG",
    "from_name": "TinTest124",
    "from_phone": "0987654321",
    "from_address": "72 Thành Thái, Phường 14, Quận 10, Hồ Chí Minh, Vietnam",
    "from_ward_name": "Phường 14",
    "from_district_name": "Quận 10",
    "from_province_name": "HCM",
    "return_phone": "0332190444",
    "return_address": "39 NTT",
    "return_district_id": null,
    "return_ward_code": "",
    "client_order_code": "",
    "to_name": "TinTest124",
    "to_phone": "0987654321",
    "to_address": "72 Thành Thái, Phường 14, Quận 10, Hồ Chí Minh, Vietnam",
    "to_ward_code": "20308",
    "to_district_id": 1444,
    "cod_amount": 200000,
    "content": "Theo New York Times",
    "weight": 200,
    "length": 1,
    "width": 19,
    "height": 10,
    "pick_station_id": 1444,
    "deliver_station_id": null,
    "insurance_value": 5000000,
    "service_id": 0,
    "service_type_id": 2,
    "coupon": null,
    "pick_shift": [2],
    "items": [{
        "name": "Áo Polo",
        "code": "Polo123",
        "quantity": 1,
        "price": 200000,
        "length": 12,
        "width": 12,
        "height": 12,
        "weight": 1200,
        "category": {
            "level1": "Áo"
        }
    }]
};

const dataUPdate = {
    note: "nhớ gọi 30p khi giao",
    order_code: "5F5NH3LN"
};

const headers = {
    'Content-Type': 'application/json',
    'ShopId': `${process.env.GHN_SHOP_ID}`,
    'Token': `${process.env.GHN_API_TOKEN}`
};

@Injectable()
export class ShippingService implements ShippingServiceInterface {
    constructor() { }

    getAllOrderShipping(): any {
        return axios.post('https://dev-online-gateway.ghn.vn/shiip/public-api/v2/shipping-order/search',
            {
                "shop_id": 191758,
                "status": [
                    "ready_to_pick",
                    "picking",
                    "money_collect_picking"
                ],
                "payment_type_id": [
                    1,
                    2,
                    4,
                    5
                ],
                "from_time": 1710694800,
                "to_time": 1713373200,
                "offset": 0,
                "limit": 100,
                "from_cod_amount": 0,
                "to_cod_amount": 0,
                "ignore_shop_id": false,
                "shop_ids": null,
                "is_search_exactly": false,
                "is_print": null,
                "is_cod_failed_collected": null,
                "is_document_pod": null,
                "source": "5sao"
            }, { headers })
            .then(response => {
                console.log('Response:', response.data);
                return response.data;
            })
            .catch(error => {
                console.error('Error:', error);
                throw new HttpException(error.response.data, error.response.status);
            });
    }

    getOrderDetail(order_code: string): any {
        return axios.post('https://dev-online-gateway.ghn.vn/shiip/public-api/v2/shipping-order/detail', {
            "order_code": order_code
        }, { headers })
            .then(response => {
                console.log('Response:', response.data);
                return response.data;
            })
            .catch(error => {
                console.error('Error:', error);
            });
    }

    createOrderShipping(data: ShippingOrderDto): any {
        return axios.post('https://dev-online-gateway.ghn.vn/shiip/public-api/v2/shipping-order/create', data, { headers })
            .then(response => {
                console.log('Response:', response.data);
                return response.data;
            })
            .catch(error => {
                console.error('Error:', error);
            });
    }

    updateOrderShipping(order_code: string, data: UpdateShippingOrderDto): any {
        return axios.post('https://dev-online-gateway.ghn.vn/shiip/public-api/v2/shipping-order/update', data, { headers })
            .then(response => {
                console.log('Response:', response.data);
                return response.data;
            })
            .catch(error => {
                console.error('Error:', error);
            });
    }
    returnOrderShipping(id: string): Promise<any> {
        throw new Error("Method not implemented.");
    }
    cancelOrderShipping(id: string): Promise<any> {
        throw new Error("Method not implemented.");
    }
    calculateOrderShippingFee(data: ShippingOrderDto): Promise<any> {
        throw new Error("Method not implemented.");
    }
    getDistricts(): Promise<any> {
        throw new Error("Method not implemented.");
    }
    getWards(district_id: number): Promise<any> {
        throw new Error("Method not implemented.");
    }
    getPronvinces(): Promise<any> {
        throw new Error("Method not implemented.");
    }

}
