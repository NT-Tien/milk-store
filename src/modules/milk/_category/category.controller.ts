import { Body, Controller, Delete, Get, HttpException, Inject, Param, Patch, Post, Put } from "@nestjs/common";
import { ApiBearerAuth, ApiBody, ApiProperty, ApiTags } from "@nestjs/swagger";
import { CategoryServiceInterface } from "./interfaces/category.interface";
import { CreateCategoryDto } from "./dto/create-category.dto";
import { UpdateCategoryDto } from "./dto/update-category.dto";

@ApiTags("category")
@Controller("category")
export class CategoryController {
    constructor(
        @Inject("CATEGORY_SERVICE_TIENNT") private readonly CategoryService: CategoryServiceInterface,
    ) { }

    @Get()
    @ApiBearerAuth()
    getAll() {
        return this.CategoryService.getCategorys();
    }

    @Get('/:id')
    @ApiBearerAuth()
    getOne(@Param('id') id: string) {
        return this.CategoryService.getCategoryById(id);
    }

    @Post()
    @ApiBearerAuth()
    create(@Body() data: CreateCategoryDto) {
        return this.CategoryService.createCategory(data);
    }

    @Put('/:id')
    @ApiBearerAuth()
    update(@Param('id') id: string, @Body() data: UpdateCategoryDto) {
        return this.CategoryService.updateCategory(id, data);
    }

    @Delete('/:id')
    @ApiBearerAuth()
    delete(@Param('id') id: string) {
        return this.CategoryService.softDeleteCategory(id);
    }

    @Put('/undelete/:id')
    @ApiBearerAuth()
    unDelete(@Param('id') id: string) {
        return this.CategoryService.unDeleteCategory(id);
    }
}