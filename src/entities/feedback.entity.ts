import { BaseEntity } from "src/common/base/entity.base";
import { Column, Entity, ManyToOne } from "typeorm";
import { OrderItemEntity } from "./order-item.entity";

@Entity({
    name: "FEEDBACK",
})
export class FeedbackEntity extends BaseEntity {

    @ManyToOne(() => OrderItemEntity, orderItem => orderItem.id)
    orderItem: OrderItemEntity;

    @Column({
        name: "name",
        type: "varchar",
        length: 100,
        nullable: false,
    })
    name: string;

    @Column({
        name: "phone",
        type: "varchar",
        length: 100,
        nullable: false,
    })
    phone: string;

    @Column({
        name: "content",
        type: "text",
        nullable: false,
    })
    content: string;

    @Column({
        name: "rating",
        type: "int",
        nullable: false,
    })
    rating: number;

}