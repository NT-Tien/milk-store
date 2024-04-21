import { ApiProperty } from "@nestjs/swagger";
import { IsBoolean, IsDate, IsNumber, IsString, ValidateIf } from "class-validator";
import { Expose, Transform, Type } from "class-transformer";
import { BaseDTO } from "src/common/base/dto.base";

export class UpdateVoucherDto extends BaseDTO {

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

    @ApiProperty()
    @IsBoolean()
    @ValidateIf((object, value) => value !== undefined)
    @Expose()
    isPublic: boolean;

}