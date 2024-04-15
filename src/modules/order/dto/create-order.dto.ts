import { ApiProperty } from "@nestjs/swagger";
import { IsEmail, IsNotEmpty, IsNumber, IsPhoneNumber, IsString } from "class-validator";
import { OrderItemEntity } from "../../../entities/order-item.entity";
import { OrderStatus } from "../../../entities/order.entity";

export class CreateOrderDto {

    @ApiProperty()
    @IsEmail()
    @IsNotEmpty()
    email: string;

    @ApiProperty()
    @IsPhoneNumber()
    @IsNotEmpty()
    phone: string;

    @ApiProperty()
    @IsString()
    @IsNotEmpty()
    username: string;

    @ApiProperty()
    @IsNumber()
    @IsNotEmpty()
    total: number;

    @ApiProperty()
    ticketVoucher: any;

    @ApiProperty({
        enum: OrderStatus,
        default: OrderStatus.PENDING,
    })
    status: OrderStatus;

    @ApiProperty()
    payment: any;

    @ApiProperty()
    @IsString()
    @IsNotEmpty()
    items: OrderItemEntity[];

}