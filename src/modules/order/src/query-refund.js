const CryptoJS = require('crypto-js'); // npm install crypto-js

require('dotenv').config();

const config = {
    app_id: process.env.ZALO_PAY_APP_ID,
    key1: process.env.ZALO_PAY_KEY1,
    key2: process.env.ZALO_PAY_KEY2,
    endpoint: "https://sb-openapi.zalopay.vn/v2/query_refund"
};

const params = {
    app_id: config.app_id,
    timestamp: Date.now(), // miliseconds
    m_refund_id: "240410_2554_1712766104440532",
};

const data = config.app_id + "|" + params.m_refund_id + "|" + params.timestamp; // app_id|m_refund_id|timestamp
params.mac = CryptoJS.HmacSHA256(data, config.key1).toString();

const url = new URL(config.endpoint);
Object.keys(params).forEach(key => url.searchParams.append(key, params[key]));

fetch(url, { method: 'POST' })
    .then(response => {
        if (!response.ok) {
            throw new Error(`Request failed with status ${response.status}`);
        }
        return response.json(); // Parse response data as JSON
    })
    .then(data => {
        console.log('Response data:', data);
    })
    .catch(error => {
        console.error('Error:', error.message);
    });
