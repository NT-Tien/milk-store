import { Module } from "@nestjs/common";
import { FeedbackController } from "./feedback.controller";
import { FeedbackService } from "./feedback.service";
import { TypeOrmModule } from "@nestjs/typeorm";
import { FeedbackEntity } from "src/entities/feedback.entity";
import { OrderItemEntity } from "src/entities/order-item.entity";
import { AuthModule } from "../auth/auth.module";
import { AccountEntity } from "src/entities/account.entity";
import { BaseService } from "src/common/base/service.base";

@Module({
    imports: [
        TypeOrmModule.forFeature([FeedbackEntity, OrderItemEntity, AccountEntity]),
        AuthModule,
    ],
    controllers: [FeedbackController],
    providers: [
        BaseService,
        {
            provide: 'FEEDBACK_SERVICE_TIENNT',
            useClass: FeedbackService
        }
    ],
})
export class FeedbackModule { }