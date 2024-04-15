
export interface VoucherServiceInterface {
    // CRUD only for admin account
    createVoucher(data: any): Promise<any>;
    updateVoucher(id: string, data: any): Promise<any>;
    increaseVoucherQuantity(id: string, quantity: number): Promise<any>;
    decreaseVoucherQuantity(id: string, quantity: number): Promise<any>;
    deleteVoucher(id: string): Promise<any>;
    softDeleteVoucher(id: string): Promise<any>;
    unDeleteVoucher(id: string): Promise<any>;
    getVoucherById(id: string): Promise<any>;
    getVouchers(): Promise<any>;
}