import { Body, Controller, Delete, Get, HttpException, Inject, Param, Patch, Post, Put, UseGuards } from "@nestjs/common";
import { MilkServiceInterface } from "./interfaces/milk-service.interface";
import { ApiBearerAuth, ApiTags } from "@nestjs/swagger";
import { CreateMilkDto } from "./dto/create-milk.dto";
import { UpdateMilkDto } from "./dto/update-milk.dto";
import { AdminGuard } from "../auth/guards/admin.guard";

@ApiTags("milk")
@UseGuards(AdminGuard)
@Controller("milk")
export class MilkController {
    constructor(
        @Inject("MILK_SERVICE_TIENNT") private readonly milkService: MilkServiceInterface,
    ) { }

    @Get()
    @ApiBearerAuth()
    getAll() {
        return this.milkService.getMilks();
    }

    @Get('/:id')
    @ApiBearerAuth()
    getOne(@Param('id') id: string) {
        return this.milkService.getMilkById(id);
    }

    @Post()
    @ApiBearerAuth()
    create(@Body() data: CreateMilkDto) {
        return this.milkService.createMilk(data);
    }

    @Put('/:id')
    @ApiBearerAuth()
    update(@Param('id') id: string, @Body() data: UpdateMilkDto) {
        return this.milkService.updateMilk(id, data);
    }

    @Delete('/:id')
    @ApiBearerAuth()
    delete(@Param('id') id: string) {
        return this.milkService.softDeleteMilk(id);
    }

    @Put('/undelete/:id')
    @ApiBearerAuth()
    unDelete(@Param('id') id: string) {
        return this.milkService.unDeleteMilk(id);
    }
}