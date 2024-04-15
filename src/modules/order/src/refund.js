const CryptoJS = require('crypto-js'); // npm install crypto-js
const moment = require('moment'); // npm install moment
require('dotenv').config();
const config = {
    app_id: process.env.ZALO_PAY_APP_ID,
    key1: process.env.ZALO_PAY_KEY1,
    key2: process.env.ZALO_PAY_KEY2,
    refund_url: "https://sb-openapi.zalopay.vn/v2/refund"
};

const timestamp = Date.now();
const uid = `${timestamp}${Math.floor(111 + Math.random() * 999)}`; // unique id

let params = {
  app_id: config.app_id,
  m_refund_id: `${moment().format('YYMMDD')}_${config.app_id}_${uid}`,
  timestamp, // miliseconds
  zp_trans_id: '240410000001569',
  amount: '50000',
  description: 'ZaloPay Refund Demo',
};

// app_id|zp_trans_id|amount|description|timestamp
let data = params.app_id + "|" + params.zp_trans_id + "|" + params.amount + "|" + params.description + "|" + params.timestamp;
params.mac = CryptoJS.HmacSHA256(data, config.key1).toString();
console.log(params);
fetch(config.refund_url, {
  method: 'POST',
  body: null,
  headers: {
    'Content-Type': 'application/json'
  }
})
  .then(res => res.json())
  .then(data => console.log(data))
  .catch(err => console.log(err));