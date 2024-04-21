import { ApiProperty } from "@nestjs/swagger";
import { Expose } from "class-transformer";
import { IsNotEmpty, IsString, ValidateIf } from "class-validator";
import { BaseDTO } from "src/common/base/dto.base";

export class UpdateCategoryDto extends BaseDTO {

    @ApiProperty()
    @IsString()
    @IsNotEmpty()
    @ValidateIf((object, value) => value !== undefined)
    @Expose()
    name: string;

    @ApiProperty()
    @IsString()
    @IsNotEmpty()
    @ValidateIf((object, value) => value !== undefined)
    @Expose()
    images: string;

}