import { Injectable } from "@nestjs/common";
import { FeedbackServiceInterface } from "./interfaces/category.interface";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { FeedbackEntity } from "src/entities/feedback.entity";
import { OrderItemEntity } from "src/entities/order-item.entity";
import { CreateFeedbackDto } from "./dto/create-feedback.dto";
import { UpdateFeedbackDto } from "./dto/update-feedback.dto";
import { AccountEntity } from "src/entities/account.entity";
import { isUUID } from "class-validator";

@Injectable()
export class FeedbackService implements FeedbackServiceInterface {
    constructor(
        @InjectRepository(FeedbackEntity) private readonly feedbackRepository: Repository<FeedbackEntity>,
        @InjectRepository(OrderItemEntity) private readonly orderItemRepository: Repository<OrderItemEntity>,
        @InjectRepository(AccountEntity) private readonly accountRepository: Repository<AccountEntity>,
    ) { }

    async getFeedbacksByProductId(id: string): Promise<any> {
        var list_order_items = await this.orderItemRepository.find({ where: { id: id } });
        var list_feedback = [];
        for (let order_item of list_order_items) {
            var feedback = await this.feedbackRepository.findOne({ where: { orderItem: order_item } });
            list_feedback.push(feedback);
        }
        return list_feedback;
    }
    createFeedback(data: CreateFeedbackDto): Promise<any> {
        return this.feedbackRepository.save(data);
    }
    updateFeedback(id: string, data: UpdateFeedbackDto): Promise<any> {
        return this.feedbackRepository.update(id, UpdateFeedbackDto.plainToClass(data));
    }
    deleteFeedback(id: string): Promise<any> {
        throw new Error("Method not implemented.");
    }
    async getFeedbackByUserId(id: string): Promise<any> {
        if(!isUUID(id)) throw new Error("Id is not valid");
        var account = await this.accountRepository.findOne({ where: { id: id } });
        return await this.feedbackRepository.find({ where: { phone: account.phone } });
    }
    softDeleteFeedback(id: string): Promise<any> {
        throw new Error("Method not implemented.");
    }
    unDeleteFeedback(id: string): Promise<any> {
        throw new Error("Method not implemented.");
    }
    getFeedbacks(): Promise<any> {
        return this.feedbackRepository.find();
    }

}