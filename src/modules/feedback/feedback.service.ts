import { Injectable } from "@nestjs/common";
import { FeedbackServiceInterface } from "./interfaces/feedback.interface";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { FeedbackEntity } from "src/entities/feedback.entity";
import { OrderItemEntity } from "src/entities/order-item.entity";
import { CreateFeedbackDto } from "./dto/create-feedback.dto";
import { UpdateFeedbackDto } from "./dto/update-feedback.dto";
import { AccountEntity } from "src/entities/account.entity";
import { isUUID } from "class-validator";
import { BaseService } from "src/common/base/service.base";

@Injectable()
export class FeedbackService extends BaseService<FeedbackEntity> implements FeedbackServiceInterface {
    constructor(
        @InjectRepository(FeedbackEntity) private readonly feedbackRepository: Repository<FeedbackEntity>,
        @InjectRepository(OrderItemEntity) private readonly orderItemRepository: Repository<OrderItemEntity>,
        @InjectRepository(AccountEntity) private readonly accountRepository: Repository<AccountEntity>
    ) {
        super(feedbackRepository);
    }

    async getFeedbacksByProductId(id: string): Promise<any> {

        // return this.milkRepository
        //     .createQueryBuilder("MILK")
        //     .leftJoinAndSelect("MILK.category", "CATEGORY")
        //     .leftJoinAndSelect("MILK.brand", "BRAND")
        //     .select(["MILK", "CATEGORY.id", "CATEGORY.name", "BRAND.id", "BRAND.name"])
        //     .where("MILK.id = :id", { id })
        //     .getOne();


        var list_order_items = await this.orderItemRepository.find({ where: { milkId: id } });
        console.log(list_order_items);
        var list_feedback = [];
        for (let order_item of list_order_items) {
            var feedback = await this.feedbackRepository.createQueryBuilder("FEEDBACK")
                .leftJoinAndSelect("FEEDBACK.orderItem", "ORDER_ITEM")
                .select(["FEEDBACK", "ORDER_ITEM"])
                .where("FEEDBACK.orderItem = :id", { id: order_item.id })
                .getOne();
            list_feedback.push(feedback);
        }
        return list_feedback;
    }
    async getFeedbackByUserId(id: string): Promise<any> {
        if (!isUUID(id)) throw new Error("Id is not valid");
        var account = await this.accountRepository.findOne({ where: { id: id } });
        return await this.feedbackRepository.find({ where: { phone: account.phone } });
    }
    softDeleteFeedback(id: string): Promise<any> {
        throw new Error("Method not implemented.");
    }
    unDeleteFeedback(id: string): Promise<any> {
        throw new Error("Method not implemented.");
    }

}