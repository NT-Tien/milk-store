import { ApiProperty } from "@nestjs/swagger";
import { IsEmail, IsNotEmpty, IsNumber, IsPhoneNumber, IsUUID } from "class-validator";
import { BaseDTO } from "src/common/base/dto.base";

export class VoucherApplyUserDto extends BaseDTO {

    @ApiProperty()
    @IsUUID()
    @IsNotEmpty()
    voucherId: string;

    @ApiProperty()
    @IsPhoneNumber()
    @IsNotEmpty()
    phone: string;

    @ApiProperty()
    @IsEmail()
    @IsNotEmpty()
    email: string;

    @ApiProperty()
    @IsNumber()
    @IsNotEmpty()
    quantity: number;

}