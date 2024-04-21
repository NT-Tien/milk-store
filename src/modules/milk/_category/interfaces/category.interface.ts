import { CreateCategoryDto } from "../dto/create-category.dto";
import { UpdateCategoryDto } from "../dto/update-category.dto";

export interface CategoryServiceInterface {
    // CRUD only for admin account
    createCategory(data: CreateCategoryDto): Promise<any>;
    updateCategory(id: string, data: UpdateCategoryDto): Promise<any>;
    deleteCategory(id: string): Promise<any>;
    softDeleteCategory(id: string): Promise<any>;
    unDeleteCategory(id: string): Promise<any>;
    getCategoryById(id: string): Promise<any>;
    getCategorys(): Promise<any>;
}