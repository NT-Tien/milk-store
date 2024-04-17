import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { OrderEntity } from "src/entities/order.entity";
import { ShippingController } from "./shipping.controller";
import { ShippingService } from "./shipping.service";

@Module({
    imports: [
        TypeOrmModule.forFeature([OrderEntity]),
    ],
    providers: [
        {
            provide: "SHIPPING_SERVICE_TIENNT",
            useClass: ShippingService
        }
    ],
    controllers: [ShippingController],
})
export class ShippingModule { }