
export interface MilkServiceInterface {
    // CRUD only for admin account
    createMilk(data: any): Promise<any>;
    updateMilk(id: string, data: any): Promise<any>;
    increaseMilkQuantity(id: string, quantity: number): Promise<any>;
    decreaseMilkQuantity(id: string, quantity: number): Promise<any>;
    deleteMilk(id: string): Promise<any>;
    softDeleteMilk(id: string): Promise<any>;
    unDeleteMilk(id: string): Promise<any>;
    getMilkById(id: string): Promise<any>;
    getMilks(): Promise<any>;
}