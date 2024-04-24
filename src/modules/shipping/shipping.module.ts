import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { OrderEntity } from "src/entities/order.entity";
import { ShippingController } from "./shipping.controller";
import { ShippingService } from "./shipping.service";
import { ShippingEntity } from "src/entities/shipping.entity";

@Module({
    imports: [
        TypeOrmModule.forFeature([ShippingEntity]),
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