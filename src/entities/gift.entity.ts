import { BaseEntity } from "src/common/base/entity.base";
import { Column, Entity, ManyToOne } from "typeorm";
import { AccountEntity } from "./account.entity";
import { VoucherEntity } from "./voucher.entity";

@Entity({
    name: "GIFT",
})
export class GiftEntity extends BaseEntity {

    @ManyToOne(() => AccountEntity, account => account.id)
    account: string;

    @ManyToOne(() => VoucherEntity, voucher => voucher.id)
    voucher: string;

    @Column({
        name: "quantity",
        type: "int",
    })
    quantity: number;

}