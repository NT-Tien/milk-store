import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { MilkEntity } from "../../entities/milk.entity";
import { MilkController } from "./milk.controller";
import { MilkService } from "./milk.service";
import { VoucherEntity } from "../../entities/voucher.entity";
import { VoucherController } from "./_voucher/voucher.controller";
import { CategoryController } from "./_category/category.controller";
import { VoucherService } from "./_voucher/voucher.service";
import { CategoryService } from "./_category/category.service";
import { CategoryEntity } from "../../entities/category.entity";
import { VoucherApllyEntity } from "src/entities/voucher-apply.entity";
import { AuthModule } from "../auth/auth.module";
import { MilkUserController } from "./milk-user.controller";
import { CategoryUserController } from "./_category/category-user.controller";
import { VoucherUserController } from "./_voucher/voucher-user.controller";
import { BrandService } from "./_brand/brand.service";
import { BrandController } from "./_brand/brand.controller";
import { BrandEntity } from "src/entities/brand.entity";
import { BrandUserController } from "./_brand/brand-user.controller";

@Module({
    imports: [
        TypeOrmModule.forFeature([
            MilkEntity,
            VoucherEntity,
            VoucherApllyEntity,
            CategoryEntity,
            BrandEntity,
        ]),
        AuthModule,
    ],
    controllers: [
        MilkController,
        MilkUserController,
        VoucherController,
        VoucherUserController,
        CategoryController,
        CategoryUserController,
        BrandController,
        BrandUserController,
    ],
    providers: [
        {
            provide: "MILK_SERVICE_TIENNT",
            useClass: MilkService
        },
        {
            provide: "VOUCHER_SERVICE_TIENNT",
            useClass: VoucherService
        },
        {
            provide: "CATEGORY_SERVICE_TIENNT",
            useClass: CategoryService
        },
        {
            provide: "BRAND_SERVICE_TIENNT",
            useClass: BrandService
        }
    ],
})
export class MilkModule { }