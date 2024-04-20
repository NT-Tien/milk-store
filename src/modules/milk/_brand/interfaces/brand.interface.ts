
export interface BrandServiceInterface {
    // CRUD only for admin account
    createBrand(data: any): Promise<any>;
    updateBrand(id: string, data: any): Promise<any>;
    deleteBrand(id: string): Promise<any>;
    softDeleteBrand(id: string): Promise<any>;
    unDeleteBrand(id: string): Promise<any>;
    getBrandById(id: string): Promise<any>;
    getBrands(): Promise<any>;
}