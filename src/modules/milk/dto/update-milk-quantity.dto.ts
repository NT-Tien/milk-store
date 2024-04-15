import { ApiProperty } from "@nestjs/swagger";
import { Expose } from "class-transformer";
import { IsNotEmpty, IsNumber, Min } from "class-validator";
import { BaseDTO } from "src/common/base/dto.base";

export class UpdateMilkQuantityDto extends BaseDTO {

    @ApiProperty()
    @IsNumber()
    @IsNotEmpty()
    @Min(1)
    @Expose()
    quantity: number

}