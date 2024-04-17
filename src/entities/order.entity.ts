import { BaseEntity } from "src/common/base/entity.base";
import { Column, Entity, OneToMany } from "typeorm";
import { OrderItemEntity } from "./order-item.entity";

export enum OrderStatus {
    PENDING = 'PENDING',
    PAID = 'PAID',
    CANCELED = 'CANCELED',
    EXPIRED = 'EXPIRED',
    SHIPPING = 'SHIPPING',
    COMPLETED = 'COMPLETED',
    REFUND = 'REFUND',
}   
@Entity({
    name: "ORDER",
})
export class OrderEntity extends BaseEntity {

    @Column({
        name: "email",
        type: "varchar",
        length: 100,
        nullable: false,
    })
    email: string;

    @Column({
        name: "phone",
        type: "varchar",
        length: 15,
        nullable: false,
    })
    phone: string;

    @Column({
        name: "username",
        type: "varchar",
        length: 100,
        nullable: false,
    })
    username: string;

    @Column({
        name: "address",
        type: "text",
        nullable: false,
    })
    address: string;

    @Column({
        name: "total",
        type: "float",
        nullable: false,
    })
    total: number;

    @Column({
        name: "voucher",
        type: 'jsonb',
        nullable: true,
    })
    voucher: any;

    @Column({
        name: "status",
        type: "enum",
        enum: OrderStatus,
        default: OrderStatus.PENDING,
    })
    status: OrderStatus;

    @Column({
        name: "payment",
        type: 'jsonb',
        nullable: true,
    })
    payment: any;

    @OneToMany(() => OrderItemEntity, orderItem => orderItem.orderId)
    items: OrderItemEntity[];

    @Column({
        name: "note",
        type: "text",
        nullable: true,
    })
    note: string;

}