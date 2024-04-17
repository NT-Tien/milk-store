import { IsNotEmpty, IsNumber, IsString, ValidateNested } from 'class-validator';
import { Type } from 'class-transformer';

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
  @IsNumber()
  @IsNotEmpty()
  payment_type_id: number;

  @IsString()
  note: string;

  @IsString()
  required_note: string;

  @IsString()
  from_name: string;

  @IsString()
  from_phone: string;

  @IsString()
  from_address: string;

  @IsString()
  from_ward_name: string;

  @IsString()
  from_district_name: string;

  @IsString()
  from_province_name: string;

  @IsString()
  return_phone: string;

  @IsString()
  return_address: string;

  return_district_id: number;

  return_ward_code: string;

  client_order_code: string;

  @IsString()
  to_name: string;

  @IsString()
  to_phone: string;

  @IsString()
  to_address: string;

  @IsString()
  to_ward_code: string;

  to_district_id: number;

  @IsNumber()
  cod_amount: number;

  @IsString()
  content: string;

  @IsNumber()
  weight: number;

  @IsNumber()
  length: number;

  @IsNumber()
  width: number;

  @IsNumber()
  height: number;

  pick_station_id: number;

  deliver_station_id: number;

  @IsNumber()
  insurance_value: number;

  service_id: number;

  @IsNumber()
  service_type_id: number;

  coupon: any;

  pick_shift: number[];

  @ValidateNested()
  @Type(() => ItemDto)
  items: ItemDto[];
}
