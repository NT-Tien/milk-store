import { IsNotEmpty, IsNumber, IsString, ValidateIf, ValidateNested } from 'class-validator';
import { Expose, Type } from 'class-transformer';
import { ApiProperty } from '@nestjs/swagger';

export class UpdateShippingOrderDto {
  @ApiProperty()
  @IsNumber()
  @ValidateIf((object, value) => value !== undefined)
  @Expose()
  payment_type_id: number;

  @ApiProperty()
  @IsString()
  @ValidateIf((object, value) => value !== undefined)
  @Expose()
  note: string;

  @ApiProperty()
  @IsString()
  @ValidateIf((object, value) => value !== undefined)
  @Expose()
  required_note: string;

  @ApiProperty()
  @IsString()
  @ValidateIf((object, value) => value !== undefined)
  @Expose()
  from_name: string;

  @ApiProperty()
  @IsString()
  @ValidateIf((object, value) => value !== undefined)
  @Expose()
  from_phone: string;

  @ApiProperty()
  @IsString()
  @ValidateIf((object, value) => value !== undefined)
  @Expose()
  from_address: string;

  @ApiProperty()
  @IsString()
  @ValidateIf((object, value) => value !== undefined)
  @Expose()
  from_ward_name: string;

  @ApiProperty()
  @IsString()
  @ValidateIf((object, value) => value !== undefined)
  @Expose()
  from_district_name: string;

  @ApiProperty()
  @IsString()
  @ValidateIf((object, value) => value !== undefined)
  @Expose()
  from_province_name: string;

  @ApiProperty()
  @IsString()
  @ValidateIf((object, value) => value !== undefined)
  @Expose()
  return_phone: string;

  @ApiProperty()
  @IsString()
  @ValidateIf((object, value) => value !== undefined)
  @Expose()
  return_address: string;

  @ApiProperty()
  @ValidateIf((object, value) => value !== undefined)
  @Expose()
  return_district_id: number;

  @ApiProperty()
  @ValidateIf((object, value) => value !== undefined)
  @Expose()
  return_ward_code: string;

  @ApiProperty()
  @ValidateIf((object, value) => value !== undefined)
  @Expose()
  client_order_code: string;

  @ApiProperty()
  @IsString()
  @ValidateIf((object, value) => value !== undefined)
  @Expose()
  to_name: string;

  @ApiProperty()
  @IsString()
  @ValidateIf((object, value) => value !== undefined)
  @Expose()
  to_phone: string;

  @ApiProperty()
  @IsString()
  @ValidateIf((object, value) => value !== undefined)
  @Expose()
  to_address: string;

  @ApiProperty()
  @IsString()
  @ValidateIf((object, value) => value !== undefined)
  @Expose()
  to_ward_code: string;

  @ApiProperty()
  @ValidateIf((object, value) => value !== undefined)
  @Expose()
  to_district_id: number;

  @ApiProperty()
  @IsNumber()
  @ValidateIf((object, value) => value !== undefined)
  @Expose()
  cod_amount: number;

  @ApiProperty()
  @IsString()
  @ValidateIf((object, value) => value !== undefined)
  @Expose()
  content: string;

  @ApiProperty()
  @IsNumber()
  @ValidateIf((object, value) => value !== undefined)
  @Expose()
  weight: number;

  @ApiProperty()
  @IsNumber()
  @ValidateIf((object, value) => value !== undefined)
  @Expose()
  length: number;

  @ApiProperty()
  @IsNumber()
  @ValidateIf((object, value) => value !== undefined)
  @Expose()
  width: number;

  @ApiProperty()
  @IsNumber()
  @ValidateIf((object, value) => value !== undefined)
  @Expose()
  height: number;

  @ApiProperty()
  pick_station_id: number;

  @ApiProperty()
  deliver_station_id: number;

  @ApiProperty()
  @IsNumber()
  @ValidateIf((object, value) => value !== undefined)
  @Expose()
  insurance_value: number;

  @ApiProperty()
  service_id: number;

  @ApiProperty()
  @IsNumber()
  @ValidateIf((object, value) => value !== undefined)
  @Expose()
  service_type_id: number;

  @ApiProperty()
  coupon: any;

  @ApiProperty()
  pick_shift: number[];

}
