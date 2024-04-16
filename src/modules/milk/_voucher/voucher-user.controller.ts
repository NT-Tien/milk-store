import { ApiBearerAuth, ApiTags } from "@nestjs/swagger";
import { VoucherServiceInterface } from "./interfaces/voucher-milk.interface";
import { UserGuard } from "src/modules/auth/guards/user.guard";
import { Controller, Get, Inject, Param, UseGuards } from "@nestjs/common";

@ApiTags("voucher-user")
// @UseGuards(UserGuard)
@Controller("voucher-user")
export class VoucherUserController {
    constructor(
        @Inject("VOUCHER_SERVICE_TIENNT") private readonly voucherService: VoucherServiceInterface,
    ) { }

    @Get()
    // @ApiBearerAuth()
    getAll() {
        return this.voucherService.getVouchers();
    }

    @Get('/:id')
    // @ApiBearerAuth()
    getOne(@Param('id') id: string) {
        return this.voucherService.getVoucherById(id);
    }

}