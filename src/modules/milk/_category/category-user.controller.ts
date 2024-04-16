import { CategoryServiceInterface } from "./interfaces/category.interface";
import { ApiBearerAuth, ApiBody, ApiTags } from "@nestjs/swagger";
import { Body, Controller, Delete, Get, Inject, Param, Post, Put, UseGuards } from "@nestjs/common";
import { UserGuard } from "src/modules/auth/guards/user.guard";


@ApiTags("category-user")
// @UseGuards(UserGuard)
@Controller("category-user")
export class CategoryUserController {
    constructor(
        @Inject("CATEGORY_SERVICE_TIENNT") private readonly CategoryService: CategoryServiceInterface,
    ) { }

    @Get()
    // @ApiBearerAuth()
    getAll() {
        return this.CategoryService.getCategorys();
    }

    @Get('/:id')
    // @ApiBearerAuth()
    getOne(@Param('id') id: string) {
        return this.CategoryService.getCategoryById(id);
    }

}