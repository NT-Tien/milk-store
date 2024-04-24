import { HttpException, Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { BaseService } from "src/common/base/service.base";
import { AccountEntity } from "src/entities/account.entity";
import { GiftEntity } from "src/entities/gift.entity";
import { VoucherEntity } from "src/entities/voucher.entity";
import { Repository } from "typeorm";
import { GiftServiceInterface } from "./interfaces/gift-service.inteface";

@Injectable()
export class GiftService extends BaseService<GiftEntity> implements GiftServiceInterface {

    constructor(
        @InjectRepository(GiftEntity) private readonly giftRepository: Repository<GiftEntity>,
        @InjectRepository(AccountEntity) private readonly accountRepository: Repository<AccountEntity>,
        @InjectRepository(VoucherEntity) private readonly voucherRepository: Repository<VoucherEntity>,
    ) {
        super(giftRepository);
    }

    async exchangeScoreForVoucher(accountId: string, voucherId: string, quantity: number) {
        // get score of account
        const account = await this.accountRepository.findOne({where: {id: accountId}});
        // get voucher
        const voucher = await this.voucherRepository.findOne({where: {id: voucherId}});
        // check if account has enough score to exchange
        if (account.score < voucher.score * quantity) {
            throw new HttpException("Not enough score to exchange", 400);
        }
        // check if voucher has enough quantity to exchange
        if (voucher.quantity < quantity) {
            throw new HttpException("Not enough voucher to exchange", 400);
        }
        // exchange
        account.score -= voucher.score * quantity;
        await this.accountRepository.save(account);
        voucher.quantity -= quantity;
        await this.voucherRepository.save(voucher);
        // create gift
        const gift = new GiftEntity();
        gift.account = account.id;
        gift.voucher = voucher.id;
        gift.quantity = quantity;
        return await this.giftRepository.save(gift);
    }

    async getGiftsByAccount(accountId: string) {
        return await this.giftRepository.find({where: {account: accountId}});
    }
}