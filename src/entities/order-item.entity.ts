import { BaseEntity } from "src/common/base/entity.base";
import { Column, Entity, OneToMany } from "typeorm";
 
@Entity({
    name: "ORDER_ITEM",
})
export class OrderItemEntity extends BaseEntity {

    @Column({
        name: "orderId",
        type: "uuid",
        nullable: false,
    })
    orderId: string;

    @Column({
        name: "milkId",
        type: "uuid",
        nullable: false,
    })
    milkId: string;

    @Column({
        name: "quantity",
        type: "int",
        nullable: false,
    })
    quantity: number;

    @Column({
        name: "price",
        type: "float",
        nullable: false,
    })
    price: number; // price of one milk

}