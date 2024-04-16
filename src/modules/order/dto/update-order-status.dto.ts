import { ApiProperty } from "@nestjs/swagger";
import { OrderStatus } from "../../../entities/order.entity";
import { BaseDTO } from "src/common/base/dto.base";
import { IsNotEmpty } from "class-validator";

export class UpdateOrderStatusDto extends BaseDTO {

    @ApiProperty({
        enum: OrderStatus,
    })
    @IsNotEmpty()
    status: OrderStatus;

}