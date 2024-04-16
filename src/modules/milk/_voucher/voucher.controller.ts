import { Body, Controller, Delete, Get, Inject, Param, Post, Put } from "@nestjs/common";
import { ApiBearerAuth, ApiTags } from "@nestjs/swagger";
import { VoucherServiceInterface } from "./interfaces/voucher-milk.interface";
import { CreateVoucherDto } from "./dto/create-voucher.dto";
import { UpdateVoucherDto } from "./dto/update-voucher.dto";

@ApiTags("voucher")
@Controller("voucher")
export class VoucherController {
    constructor(
        @Inject("VOUCHER_SERVICE_TIENNT") private readonly voucherService: VoucherServiceInterface,
    ) { }

    @Get()
    @ApiBearerAuth()
    getAll() {
        return this.voucherService.getVouchers();
    }

    @Get('/:id')
    @ApiBearerAuth()
    getOne(@Param('id') id: string) {
        return this.voucherService.getVoucherById(id);
    }

    @Post()
    @ApiBearerAuth()
    create(@Body() data: CreateVoucherDto) {
        return this.voucherService.createVoucher(data);
    }

    @Put('/:id')
    @ApiBearerAuth()
    update(@Param('id') id: string, @Body() data: UpdateVoucherDto) {
        return this.voucherService.updateVoucher(id, data);
    }

    @Delete('/:id')
    @ApiBearerAuth()
    delete(@Param('id') id: string) {
        return this.voucherService.softDeleteVoucher(id);
    }

    @Put('/undelete/:id')
    @ApiBearerAuth()
    unDelete(@Param('id') id: string) {
        return this.voucherService.unDeleteVoucher(id);
    }
}