import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsNumber, IsString } from "class-validator";
import { MilkStatus } from "../../../entities/milk.entity";

export class CreateMilkDto {

    @ApiProperty()
    @IsString()
    @IsNotEmpty()
    name: string;

    @ApiProperty()
    @IsString()
    @IsNotEmpty()
    description: string;

    @ApiProperty()
    @IsNumber()
    @IsNotEmpty()
    price: number;

    @ApiProperty()
    @IsNumber()
    @IsNotEmpty()
    quantity: number;

    // @ApiProperty()
    // @IsNumber()
    // @IsNotEmpty()
    // sold: number;

    @ApiProperty()
    @IsString({ each: true })
    @IsNotEmpty()
    images: string[];

    // @ApiProperty()
    // @IsString()
    // @IsNotEmpty()
    // status: MilkStatus;

}