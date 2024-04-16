import { ApiProperty } from "@nestjs/swagger";
import { IsDate, IsNotEmpty, IsNumber, IsString } from "class-validator";
import { Transform, Type } from "class-transformer";

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

    @ApiProperty()
    @IsString({ each: true })
    @IsNotEmpty()
    images: string[];

    @ApiProperty()
    @IsString()
    @IsNotEmpty()
    categoryId: string;

    @ApiProperty()
    @IsDate()
    @Transform(({ value }) => new Date(value))
    @Type(() => Date)
    @IsNotEmpty()
    expiredAt: Date;
    

}