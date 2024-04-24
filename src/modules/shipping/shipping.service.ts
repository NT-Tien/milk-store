import { HttpException, Injectable } from "@nestjs/common";
import { ShippingServiceInterface } from "./interfaces/shipping-service.interface";
import * as dotenv from 'dotenv';
import { AddShippingOrderDto } from "./dto/add-shipping.dto";
import { InjectRepository } from "@nestjs/typeorm";
import { ShippingEntity } from "src/entities/shipping.entity";
import { Repository } from "typeorm";
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
    constructor(
        @InjectRepository(ShippingEntity) private readonly shippingRepository: Repository<ShippingEntity>
    ) { }
    addShippingOrder(data: AddShippingOrderDto): Promise<any> {
        return this.shippingRepository.save(data);
    }
    getAllShippingOrderList(): Promise<any> {
        return this.shippingRepository.find();
    }
    getShippingOrderListByUserId(userId: string): Promise<any> {
        return this.shippingRepository.find({where: {account: userId}});
    }
}
