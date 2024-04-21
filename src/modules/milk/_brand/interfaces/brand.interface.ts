import { CreateBrandDto } from "../dto/create-brand.dto";
import { UpdateBrandDto } from "../dto/update-brand.dto";

export interface BrandServiceInterface {
    // CRUD only for admin account
    createBrand(data: CreateBrandDto): Promise<any>;
    updateBrand(id: string, data: UpdateBrandDto): Promise<any>;
    deleteBrand(id: string): Promise<any>;
    softDeleteBrand(id: string): Promise<any>;
    unDeleteBrand(id: string): Promise<any>;
    getBrandById(id: string): Promise<any>;
    getBrands(): Promise<any>;
}