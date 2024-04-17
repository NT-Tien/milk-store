import { Inject, Injectable } from '@nestjs/common';
import * as io from 'socket.io-client';
import * as CryptoJS from 'crypto-js';
import * as dotenv from 'dotenv';
import { OrderServiceInterface } from '../interfaces/order-service.interface';
import { OrderStatus } from 'src/entities/order.entity';
dotenv.config();

const config = {
    key2: process.env.ZALO_PAY_KEY2,
    socket_url: process.env.ZALO_PAY_SOCKET,
};

@Injectable()
export class SocketService {
    private socket: any;

    constructor(
        @Inject('ORDER_SERVICE_TIENNT') private readonly orderService: OrderServiceInterface,
    ) {
        this.socket = io.connect(config.socket_url, { reconnection: true });
        this.setupListeners();
    }

    private async setupListeners(): Promise<void> {
        this.socket.on('new-payment', async (data: any) => {
            console.log('Received new payment:', data);

            let result = {
                return_code: 1,
                return_message: "success"
            };

            try {
                let dataStr = data.message.data;
                let reqMac = data.message.mac;

                let mac = CryptoJS.HmacSHA256(dataStr, config.key2).toString();

                // kiểm tra callback hợp lệ (đến từ ZaloPay server)
                if (reqMac !== mac) {
                    // callback không hợp lệ
                    result.return_code = -1;
                    result.return_message = "mac not equal";
                }
                else {
                    // thanh toán thành công
                    // merchant cập nhật trạng thái cho đơn hàng
                    let dataJson = JSON.parse(dataStr, config.key2 as any);
                    console.log("update order's status = success where app_trans_id =", dataJson["app_trans_id"]);
                    result.return_code = 1;
                    result.return_message = "success";
                    var status = await this.orderService.updateOrderStatusWithAppTransId(dataJson["app_trans_id"], OrderStatus.PAID);
                    console.log("status = ", status);
                }
            } catch (ex) {
                result.return_code = 0; // ZaloPay server sẽ callback lại (tối đa 3 lần)
                result.return_message = ex.message;
            }

            console.log("result webhook = ", result);

        });
    }
}
