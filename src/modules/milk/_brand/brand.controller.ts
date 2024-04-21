import { Body, Controller, Delete, Get, HttpException, Inject, Param, Patch, Post, Put, UseGuards } from "@nestjs/common";
import { ApiBearerAuth, ApiBody, ApiProperty, ApiTags } from "@nestjs/swagger";
import { BrandServiceInterface } from "./interfaces/brand.interface";
import { AdminGuard } from "src/modules/auth/guards/admin.guard";
import { UpdateBrandDto } from "./dto/update-brand.dto";
import { CreateBrandDto } from "./dto/create-brand.dto";

@ApiTags("brand")
@UseGuards(AdminGuard)
@Controller("brand")
export class BrandController {
    constructor(
        @Inject("BRAND_SERVICE_TIENNT") private readonly BrandService: BrandServiceInterface,
    ) { }

    @Get()
    @ApiBearerAuth()
    getAll() {
        return this.BrandService.getBrands();
    }

    @Get('/:id')
    @ApiBearerAuth()
    getOne(@Param('id') id: string) {
        return this.BrandService.getBrandById(id);
    }

    @Post()
    @ApiBearerAuth()
    create(@Body() data: CreateBrandDto) {
        return this.BrandService.createBrand(data);
    }

    @Put('/:id')
    @ApiBearerAuth()
    update(@Param('id') id: string, @Body() data: UpdateBrandDto) {
        return this.BrandService.updateBrand(id, data);
    }

    @Delete('/:id')
    @ApiBearerAuth()
    delete(@Param('id') id: string) {
        return this.BrandService.softDeleteBrand(id);
    }

    @Put('/undelete/:id')
    @ApiBearerAuth()
    unDelete(@Param('id') id: string) {
        return this.BrandService.unDeleteBrand(id);
    }
}