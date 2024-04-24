import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsString } from "class-validator";

export class AddShippingOrderDto {

    @ApiProperty()
    @IsString()
    @IsNotEmpty()
    account: string;

    @ApiProperty()
    @IsString()
    @IsNotEmpty()
    shipping_code: string;

}