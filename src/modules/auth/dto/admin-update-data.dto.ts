import { ApiProperty } from "@nestjs/swagger";
import { IsPhoneNumber, IsString, ValidateIf } from "class-validator";
import { Role } from "../../../entities/account.entity";
import { Expose } from "class-transformer";


export class AdminUpdateAccountDataDto {

    @ApiProperty()
    @IsString()
    @ValidateIf((object, value) => value !== undefined)
    @Expose()
    username: string;

    @ApiProperty()
    @IsPhoneNumber()
    @ValidateIf((object, value) => value !== undefined)
    @Expose()
    phone: string;

    @ApiProperty()
    @IsString()
    @ValidateIf((object, value) => value !== undefined)
    @Expose()
    role: Role;

    @ApiProperty()
    @IsString()
    @ValidateIf((object, value) => value !== undefined)
    @Expose()
    password: string;

}