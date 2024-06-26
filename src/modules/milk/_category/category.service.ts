import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { CategoryEntity } from "../../../entities/category.entity";
import { CategoryServiceInterface } from "./interfaces/category.interface";
import { CreateCategoryDto } from "./dto/create-category.dto";
import { UpdateCategoryDto } from "./dto/update-category.dto";

@Injectable()
export class CategoryService implements CategoryServiceInterface {

    constructor(
        @InjectRepository(CategoryEntity) private readonly categoryRepository: Repository<CategoryEntity>,
    ) { }

    createCategory(data: CreateCategoryDto): Promise<any> {
        return this.categoryRepository.save(data);
    }
    updateCategory(id: string, data: UpdateCategoryDto): Promise<any> {
        return this.categoryRepository.update(id, data);
    }
    deleteCategory(id: string): Promise<any> {
        throw new Error("Method not implemented.");
    }
    softDeleteCategory(id: string): Promise<any> {
        return this.categoryRepository.update(id, { deletedAt: new Date()});
    }
    unDeleteCategory(id: string): Promise<any> {
        return this.categoryRepository.update(id, { deletedAt: null });
    }
    getCategoryById(id: any): Promise<any> {
        return this.categoryRepository.findOne({where: {id}});
    }
    getCategorys(): Promise<any> {
        return this.categoryRepository.find();
    }
} 