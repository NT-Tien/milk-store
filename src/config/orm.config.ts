import * as dotenv from "dotenv";
dotenv.config();

export const TYPE_ORM_CONFIG = {
    type: process.env.DB_TYPE as any,
    host: process.env.DB_HOST,
    port: process.env.DB_PORT as any,
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE,
    synchronize: true,
    entities: [
        'dist/**/*.entity.js'
    ],
    ssl: process.env.ENV === 'local' ? false : { ca: process.env.DB_SSL_CA },

}