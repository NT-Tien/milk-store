import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { OrderEntity } from "src/entities/order.entity";

@Module({
    imports: [
        TypeOrmModule.forFeature([OrderEntity]),
    ],
    providers: [],
    controllers: [],
})
export class ShippingModule { }