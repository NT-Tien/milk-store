import { BaseEntity } from "src/common/base/entity.base";
import { Column, Entity, Unique } from "typeorm";

@Unique(["code"])
@Entity({
    name: "VOUCHER",
})
export class VoucherEntity extends BaseEntity {

    @Column({
        name: "code",
        type: "varchar",
        length: 100,
        nullable: false,
    })
    code: string;

    @Column({
        name: "discount",
        type: "float",
        nullable: false,
    })
    discount: number; // discount in VND

    @Column({
        name: "quantity",
        type: "int",
        nullable: false,
    })
    quantity: number;

    @Column({
        name: "startAt",
        type: "timestamp",
        nullable: false,
    })
    startAt: Date;

    @Column({
        name: "expiredAt",
        type: "timestamp",
        nullable: false,
    })
    expiredAt: Date;

}