import { ApiProperty } from "@nestjs/swagger";
import { IsDate, IsNumber, IsString, ValidateIf } from "class-validator";
import { Expose, Transform, Type } from "class-transformer";

export class UpdateVoucherDto {

    @ApiProperty()
    @IsString()
    @ValidateIf((object, value) => value !== undefined)
    @Expose()
    code: string;

    @ApiProperty()
    @IsNumber()
    @ValidateIf((object, value) => value !== undefined)
    @Expose()
    discount: number;

    @ApiProperty()
    @IsNumber()
    @ValidateIf((object, value) => value !== undefined)
    @Expose()
    quantity: number;

    @ApiProperty()
    @IsDate()
    @Transform(({ value }) => value ? new Date(value) : value)
    @Type(() => Date)
    @ValidateIf((object, value) => value !== undefined)
    @Expose()
    startAt: string;

    @ApiProperty()
    @IsDate()
    @Transform(({ value }) => value ? new Date(value) : value)
    @Type(() => Date)
    @ValidateIf((object, value) => value !== undefined)
    @Expose()
    expiredAt: string;

}