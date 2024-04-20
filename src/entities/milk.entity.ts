import { BaseEntity } from "src/common/base/entity.base";
import { Column, Entity, ManyToOne, Unique } from "typeorm";
import { CategoryEntity } from "./category.entity";
import { BrandEntity } from "./brand.entity";

// status for know milk are being sold or not
export enum MilkStatus {
    ACTIVE = "ACTIVE",
    INACTIVE = "INACTIVE",
}

@Unique(["name"])
@Entity({
    name: "MILK",
})
export class MilkEntity extends BaseEntity {

    @Column({
        name: "name",
        type: "varchar",
        length: 100,
        nullable: false,
    })
    name: string;

    @Column({
        name: "description",
        type: "text",
        nullable: false,
    })
    description: string;

    @Column({
        name: "price",
        type: "float",
        nullable: false,
    })
    price: number;

    @Column({
        name: "quantity",
        type: "int",
        nullable: false,
    })
    quantity: number;

    @Column({
        name: "sold",
        type: "int",
        default: 0,
    })
    sold: number;

    @Column({
        type: 'varchar',
        array: true,
        nullable: false,
        name: 'images'
    })
    images: string[];

    @Column({
        name: "status",
        type: "enum",
        enum: MilkStatus,
        default: MilkStatus.ACTIVE,
    })
    status: MilkStatus;

    @ManyToOne(() => CategoryEntity, category => category.id)
    category: string;

    @ManyToOne(() => BrandEntity, brand => brand.id)
    brand: string;

    @Column({
        name: "expiredAt",
        type: "timestamp",
        nullable: false,
    })
    expiredAt: Date;

}