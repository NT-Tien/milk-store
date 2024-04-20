import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsNumber, IsString, ValidateIf } from "class-validator";
import { MilkStatus } from "../../../entities/milk.entity";
import { Expose } from "class-transformer";

export class UpdateMilkDto {

    @ApiProperty()
    @IsString()
    @ValidateIf((object, value) => value !== undefined)
    @Expose()
    name: string;

    @ApiProperty()
    @IsString()
    @ValidateIf((object, value) => value !== undefined)
    @Expose()
    description: string;

    @ApiProperty()
    @IsNumber()
    @ValidateIf((object, value) => value !== undefined)
    @Expose()
    price: number;

    @ApiProperty()
    @IsNumber()
    @ValidateIf((object, value) => value !== undefined)
    @Expose()
    quantity: number;

    @ApiProperty()
    @IsNumber()
    @ValidateIf((object, value) => value !== undefined)
    @Expose()
    sold: number;

    @ApiProperty({
        description: "Category ID",
    })
    @IsString()
    @ValidateIf((object, value) => value !== undefined)
    @Expose()
    category: string;

    @ApiProperty({
        description: "Brand ID",
    })
    @IsString()
    @ValidateIf((object, value) => value !== undefined)
    @Expose()
    brand: string;

    @ApiProperty()
    @IsString({ each: true })
    @ValidateIf((object, value) => value !== undefined)
    @Expose()
    images: string[];

    @ApiProperty({
        enum: MilkStatus,
        enumName: "MilkStatus",
        description: "Milk status"
    })
    @IsString()
    @ValidateIf((object, value) => value !== undefined)
    @Expose()
    status: MilkStatus;

}