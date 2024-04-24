export interface GiftServiceInterface {
    exchangeScoreForVoucher(accountId: string, voucherId: string, quantity: number): Promise<any>;
    getGiftsByAccount(accountId: string): Promise<any>;
}