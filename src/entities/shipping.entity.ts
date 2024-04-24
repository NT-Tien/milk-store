import { BaseEntity } from "src/common/base/entity.base";
import { Column, Entity, ManyToOne } from "typeorm";
import { OrderEntity } from "./order.entity";
import { AccountEntity } from "./account.entity";

@Entity({
    name: "SHIPPING",
})
export class ShippingEntity extends BaseEntity {

    @ManyToOne(() => AccountEntity, account => account.id)
    account: string;

    @ManyToOne(() => OrderEntity, order => order.id)
    order: string;
    
}