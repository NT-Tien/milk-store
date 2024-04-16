import { MilkServiceInterface } from "./interfaces/milk-service.interface";
import { ApiBearerAuth, ApiTags } from "@nestjs/swagger";
import { UserGuard } from "../auth/guards/user.guard";
import { UseGuards } from "@nestjs/common";
import { Controller, Get, Inject, Param } from "@nestjs/common";

@ApiTags("milk-user")
// @UseGuards(UserGuard)
@Controller("milk-user")
export class MilkUserController {
    constructor(
        @Inject("MILK_SERVICE_TIENNT") private readonly milkService: MilkServiceInterface,
    ) { }

    @Get()
    // @ApiBearerAuth()
    getAll() {
        return this.milkService.getMilks();
    }

    @Get('/:id')
    // @ApiBearerAuth()
    getOne(@Param('id') id: string) {
        return this.milkService.getMilkById(id);
    }

}