import { ApiProperty } from "@nestjs/swagger";
import { Expose } from "class-transformer";
import { IsNotEmpty, IsPhoneNumber, IsString, ValidateIf } from "class-validator";
import { BaseDTO } from "src/common/base/dto.base";


export class UpdateFeedbackDto extends BaseDTO {

    @ApiProperty()
    @IsString()
    @ValidateIf((object, value) => value !== undefined)
    @Expose()
    name: string;
    
    @ApiProperty()
    @IsPhoneNumber()
    @ValidateIf((object, value) => value !== undefined)
    @Expose()
    phone: string;

    @ApiProperty()
    @IsString()
    @ValidateIf((object, value) => value !== undefined)
    @Expose()
    content: string;

    @ApiProperty()
    @IsNotEmpty()
    @ValidateIf((object, value) => value !== undefined)
    @Expose()
    rating: number;

}