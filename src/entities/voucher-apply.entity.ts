import { BaseEntity } from "src/common/base/entity.base";
import { Column, Entity, ManyToOne, Unique } from "typeorm";
import { VoucherEntity } from "./voucher.entity";

@Entity({
    name: "VOUCHER_APPLY",
})
export class VoucherApllyEntity extends BaseEntity {

    @ManyToOne(() => VoucherEntity, voucher => voucher.id)
    voucher: string;

    @Column({
        name: "phone",
        type: "varchar",
        length: 15,
        nullable: false,
    })
    phone: string;

    @Column({
        name: "email",
        type: "varchar",
        length: 100,
    })
    email: string;

    @Column({
        name: "quantity",
        type: "int",
        default: 1,
    })
    quantity: number;

}