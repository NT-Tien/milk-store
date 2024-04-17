import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsPhoneNumber, IsString } from "class-validator";
import { BaseDTO } from "src/common/base/dto.base";


export class CreateFeedbackDto extends BaseDTO {

    @ApiProperty()
    @IsString()
    name: string;
    
    @ApiProperty()
    @IsPhoneNumber()
    phone: string;

    @ApiProperty()
    @IsString()
    content: string;

    @ApiProperty()
    @IsNotEmpty()
    rating: number;

}