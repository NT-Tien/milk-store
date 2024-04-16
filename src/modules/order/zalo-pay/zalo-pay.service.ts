import { Injectable } from "@nestjs/common";
import axios from "axios";
import * as CryptoJS from "crypto-js";
import * as moment from "moment";
import qs from "qs";
import * as donenv from 'dotenv';
donenv.config();

const config = {
    app_id: process.env.ZALO_PAY_APP_ID,
    key1: process.env.ZALO_PAY_KEY1,
    key2: process.env.ZALO_PAY_KEY2,
};

@Injectable()
export class ZaloPayService {

    async createOrder(total: number): Promise<any> {
        const endpoint = "https://sb-openapi.zalopay.vn/v2/create";
        const embed_data = {
            "preferred_payment_method": []
        };
        const items = [{}];
        const transID = Math.floor(Math.random() * 1000000);
        const order = {
            app_id: config.app_id,
            app_trans_id: `${moment().format('YYMMDD')}_${transID}`, // translation missing: vi.docs.shared.sample_code.comments.app_trans_id
            app_user: "TIENNT",
            app_time: Date.now(), // miliseconds
            item: [{}],
            embed_data: JSON.stringify(embed_data),
            amount: total,
            description: `Demo Zalopay #${transID}`,
            bank_code: "zalopayapp",
            mac: "",
            callback_url:  `${process.env.ZALO_PAY_CALLBACK}`,
        };
        // appid|app_trans_id|appuser|amount|apptime|embeddata|item
        const mac = config.app_id + "|" + order.app_trans_id + "|" + order.app_user + "|" + order.amount + "|" + order.app_time + "|" + order.embed_data + "|" + order.item;
        order.mac = CryptoJS.HmacSHA256(mac, config.key1).toString();
        return await axios.post(endpoint, null, { params: order })
            .then(res => {
                return {
                    payemnt: res.data,
                    info: order
                };
            })
            .catch(err => console.log(err));
    }
    async getOrderStatus(data: any): Promise<any> {
        const endpoint = "https://sb-openapi.zalopay.vn/v2/query";
        let postData = {
            app_id: config.app_id,
            app_trans_id: data.app_trans_id, // Input your app_trans_id
            mac: "",
        }
        let mac = postData.app_id + "|" + postData.app_trans_id + "|" + config.key1; // appid|app_trans_id|key1
        postData.mac = CryptoJS.HmacSHA256(mac, config.key1).toString();
        let postConfig = {
            method: 'post',
            url: endpoint,
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            },
            data: qs.stringify(postData)
        };
        return await axios(postConfig)
            .then(function (response) {
                console.log(response.data);
                return response.data;
            })
            .catch(function (error) {
                console.error(error);
            });
    }

}