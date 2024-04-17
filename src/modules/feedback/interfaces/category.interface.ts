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
    createFeedback(data: CreateFeedbackDto): Promise<any>;
    updateFeedback(id: string, data: UpdateFeedbackDto): Promise<any>;
    deleteFeedback(id: string): Promise<any>;
    /** 
     * for role admin and user have permission to read
     */
    getFeedbackByUserId(id: string): Promise<any>;
    /**
     * for role admin only
     */
    softDeleteFeedback(id: string): Promise<any>;
    unDeleteFeedback(id: string): Promise<any>;
    getFeedbacks(): Promise<any>;
}