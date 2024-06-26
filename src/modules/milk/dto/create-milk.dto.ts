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

    @ApiProperty({
        description: "Category ID",
    })
    @IsString()
    @IsNotEmpty()
    category: string;

    @ApiProperty({
        description: "Brand ID",
    })
    @IsString()
    @IsNotEmpty()
    brand: string;

    @ApiProperty()
    @IsDate()
    @Transform(({ value }) => new Date(value))
    @Type(() => Date)
    @IsNotEmpty()
    expiredAt: Date;
    

}