import { Body, Controller, Get, Inject, Param, Post, Put } from "@nestjs/common";
import { ShippingServiceInterface } from "./interfaces/shipping-service.interface";
import { ShippingOrderDto } from "./dto/data-order.dto";
import { ApiBearerAuth, ApiTags } from "@nestjs/swagger";
import { UpdateShippingOrderDto } from "./dto/update-order.dto";

@ApiTags("shipping")
@Controller('shipping')
export class ShippingController {
    constructor(
        @Inject("SHIPPING_SERVICE_TIENNT") private readonly shippingService: ShippingServiceInterface
    ) { }

    @ApiBearerAuth()
    @Get()
    getAllShipping() {
        return this.shippingService.getAllOrderShipping();
    }

    @ApiBearerAuth()
    @Get(':order_code')
    getOrderDetail(@Param('order_code') order_code: string) {
        return this.shippingService.getOrderDetail(order_code);
    }

    @ApiBearerAuth()
    @Post()
    async createShipping(@Body() data: ShippingOrderDto) {
        return this.shippingService.createOrderShipping(data);
    }

    @ApiBearerAuth()
    @Put(':order_code')
    async updateShippingStatus(@Param('order_code') order_code: string, @Body() data: UpdateShippingOrderDto) {
        return this.shippingService.updateOrderShipping(order_code, data);
    }
}