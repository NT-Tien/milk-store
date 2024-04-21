import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { AccountEntity } from "src/entities/account.entity";
import { GiftEntity } from "src/entities/gift.entity";
import { VoucherEntity } from "src/entities/voucher.entity";
import { GiftController } from "./gift.controller";
import { GiftService } from "./gift.service";

@Module({
    imports: [
        TypeOrmModule.forFeature([GiftEntity, AccountEntity, VoucherEntity]),
    ],
    controllers: [GiftController],
    providers: [
        {
            provide: "GIFT_SERVICE_TIENNT",
            useClass: GiftService,
        }
    ],
})
export class GiftModule { }