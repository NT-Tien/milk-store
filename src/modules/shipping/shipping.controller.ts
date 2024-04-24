import { Body, Controller, Get, Inject, Param, Post, Put } from "@nestjs/common";
import { ShippingServiceInterface } from "./interfaces/shipping-service.interface";
import { ApiBearerAuth, ApiTags } from "@nestjs/swagger";

@ApiTags("shipping")
@Controller('shipping')
export class ShippingController {
    constructor(
        @Inject("SHIPPING_SERVICE_TIENNT") private readonly shippingService: ShippingServiceInterface
    ) { }

    @Post()
    @ApiBearerAuth()
    async addShippingOrder(@Body() data: any) {
        return this.shippingService.addShippingOrder(data);
    }

    @Get()
    @ApiBearerAuth()
    async getAllShippingOrderList() {
        return this.shippingService.getAllShippingOrderList();
    }

    @Get(':userId')
    @ApiBearerAuth()
    async getShippingOrderListByUserId(@Param('userId') userId: string) {
        return this.shippingService.getShippingOrderListByUserId(userId);
    }

}