import { BrandServiceInterface } from "./interfaces/brand.interface";
import { ApiBearerAuth, ApiBody, ApiTags } from "@nestjs/swagger";
import { Body, Controller, Delete, Get, Inject, Param, Post, Put, UseGuards } from "@nestjs/common";
import { UserGuard } from "src/modules/auth/guards/user.guard";


@ApiTags("brand-user")
// @UseGuards(UserGuard)
@Controller("brand-user")
export class BrandUserController {
    constructor(
        @Inject("BRAND_SERVICE_TIENNT") private readonly brandService: BrandServiceInterface,
    ) { }

    @Get()
    // @ApiBearerAuth()
    getAll() {
        return this.brandService.getBrands();
    }

    @Get('/:id')
    // @ApiBearerAuth()
    getOne(@Param('id') id: string) {
        return this.brandService.getBrandById(id);
    }

}