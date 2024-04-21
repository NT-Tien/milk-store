import { CreateFeedbackDto } from "../dto/create-feedback.dto";
import { UpdateFeedbackDto } from "../dto/update-feedback.dto";

export interface FeedbackServiceInterface {
    /** 
     * free for all
    */
    getFeedbacksByProductId(id: string): Promise<any>;
    /** 
    * for only user have permission to create
    */
    create(data: CreateFeedbackDto): Promise<any>;
    update(id: string, data: UpdateFeedbackDto): Promise<any>;
    delete(id: string): Promise<any>;
    /** 
     * for role admin and user have permission to read
     */
    getFeedbackByUserId(id: string): Promise<any>;
    /**
     * for role admin only
     */
    softDeleteFeedback(id: string): Promise<any>;
    unDeleteFeedback(id: string): Promise<any>;
    getAll(): Promise<any>;
}