import { IsNotEmpty } from "class-validator";


export class PayloadTokenDto {
    @IsNotEmpty()
    id: string;
    @IsNotEmpty()
    username: string;
    @IsNotEmpty()
    email: string;
    @IsNotEmpty()
    phone: string;
    @IsNotEmpty()
    score: number;
    @IsNotEmpty()
    role: string;
    exp?: any
}