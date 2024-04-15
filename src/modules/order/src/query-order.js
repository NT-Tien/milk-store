// Node v10.15.3
const axios = require('axios').default; // npm install axios
const CryptoJS = require('crypto-js'); // npm install crypto-js
const qs = require('qs')
// require dotenv to read .env file
require('dotenv').config();

const config = {
    app_id: process.env.ZALO_PAY_APP_ID,
    key1: process.env.ZALO_PAY_KEY1,
    key2: process.env.ZALO_PAY_KEY2,
    endpoint: "https://sb-openapi.zalopay.vn/v2/query"
};

let postData = {
    app_id: config.app_id,
    app_trans_id: "240410_131158", // Input your app_trans_id
}

let data = postData.app_id + "|" + postData.app_trans_id + "|" + config.key1; // appid|app_trans_id|key1
postData.mac = CryptoJS.HmacSHA256(data, config.key1).toString();


let postConfig = {
    method: 'post',
    url: config.endpoint,
    headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
    },
    data: qs.stringify(postData)
};

axios(postConfig)
    .then(function (response) {
        console.log(response.data);
    })
    .catch(function (error) {
        console.error(error);
    });