import { ApiProperty } from "@nestjs/swagger";
import { IsEmail, IsNotEmpty, IsNumber, IsPhoneNumber, IsString } from "class-validator";
import { OrderItemEntity } from "../../../entities/order-item.entity";

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

    @ApiProperty({
        type: 'string',
        nullable: true,
        default: null,
        description: 'Voucher Code'
    })
    voucher: string | null;

    @ApiProperty({
        type: 'array',
        items: {
            type: 'object',
            properties: {
                milkId: { type: 'string' },
                name: { type: 'string' },
                quantity: { type: 'number' },
                price: { type: 'number' }
            }
        }
    })
    @IsNotEmpty()
    items: OrderItemEntity[];

    payment?: any;

}