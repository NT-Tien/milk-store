import { IsNotEmpty, IsNumber, IsString, ValidateNested } from 'class-validator';
import { Type } from 'class-transformer';
import { ApiProperty } from '@nestjs/swagger';

export class CategoryDto {
  @IsString()
  @IsNotEmpty()
  level1: string;
}

export class ItemDto {
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsString()
  @IsNotEmpty()
  code: string;

  @IsNumber()
  @IsNotEmpty()
  quantity: number;

  @IsNumber()
  @IsNotEmpty()
  price: number;

  @IsNumber()
  @IsNotEmpty()
  length: number;

  @IsNumber()
  @IsNotEmpty()
  width: number;

  @IsNumber()
  @IsNotEmpty()
  height: number;

  @IsNumber()
  @IsNotEmpty()
  weight: number;

  @ValidateNested()
  @Type(() => CategoryDto)
  category: CategoryDto;
}

export class ShippingOrderDto {
  @ApiProperty()
  @IsNumber()
  @IsNotEmpty()
  payment_type_id: number;

  @ApiProperty()
  @IsString()
  note: string;

  @ApiProperty()
  @IsString()
  required_note: string;

  @ApiProperty()
  @IsString()
  from_name: string;

  @ApiProperty()
  @IsString()
  from_phone: string;

  @ApiProperty()
  @IsString()
  from_address: string;

  @ApiProperty()
  @IsString()
  from_ward_name: string;

  @ApiProperty()
  @IsString()
  from_district_name: string;

  @ApiProperty()
  @IsString()
  from_province_name: string;

  @ApiProperty()
  @IsString()
  return_phone: string;

  @ApiProperty()
  @IsString()
  return_address: string;

  @ApiProperty()
  return_district_id: number;

  @ApiProperty()
  return_ward_code: string;

  @ApiProperty()
  client_order_code: string;

  @ApiProperty()
  @IsString()
  to_name: string;

  @ApiProperty()
  @IsString()
  to_phone: string;

  @ApiProperty()
  @IsString()
  to_address: string;

  @ApiProperty()
  @IsString()
  to_ward_code: string;

  @ApiProperty()
  to_district_id: number;

  @ApiProperty()
  @IsNumber()
  cod_amount: number;

  @ApiProperty()
  @IsString()
  content: string;

  @ApiProperty()
  @IsNumber()
  weight: number;

  @ApiProperty()
  @IsNumber()
  length: number;

  @ApiProperty()
  @IsNumber()
  width: number;

  @ApiProperty()
  @IsNumber()
  height: number;

  @ApiProperty()
  pick_station_id: number;

  @ApiProperty()
  deliver_station_id: number;

  @ApiProperty()
  @IsNumber()
  insurance_value: number;

  @ApiProperty()
  service_id: number;

  @ApiProperty()
  @IsNumber()
  service_type_id: number;

  @ApiProperty()
  coupon: any;

  @ApiProperty()
  pick_shift: number[];

  @ApiProperty()
  @ValidateNested()
  @Type(() => ItemDto)
  items: ItemDto[];
}
