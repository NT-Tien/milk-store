import { Injectable } from "@nestjs/common";
import axios from 'axios';
import * as dotenv from 'dotenv';
dotenv.config();
import { ShippingServiceInterface } from "./interfaces/shipping-service.interface";

@Injectable()
export class ShippingService implements ShippingServiceInterface {
  
  async createShippingOrder(orderData: any): Promise<any> {
    try {
      const headers = {
        'Content-Type': 'application/json',
        'ShopId': '885',
        'Token': '285518-c4bb-11ea-be3a-f636b1deefb9'
      };
      
      const response = await axios.post('https://dev-online-gateway.ghn.vn/shiip/public-api/v2/shipping-order/create', orderData, { headers });
      
      return response.data;
    } catch (error) {
      throw error;
    }
  }
  
  getShippingCost() {
    return 10;
  }
}
