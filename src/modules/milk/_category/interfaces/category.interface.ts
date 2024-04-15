
export interface CategoryServiceInterface {
    // CRUD only for admin account
    createCategory(data: any): Promise<any>;
    updateCategory(id: string, data: any): Promise<any>;
    deleteCategory(id: string): Promise<any>;
    softDeleteCategory(id: string): Promise<any>;
    unDeleteCategory(id: string): Promise<any>;
    getCategoryById(id: string): Promise<any>;
    getCategorys(): Promise<any>;
}