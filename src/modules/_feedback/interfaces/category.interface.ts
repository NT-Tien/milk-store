
export interface FeedbackServiceInterface {
    /** 
     * free for all
    */
    getFeedbacksByProductId(id: string): Promise<any>;
    /** 
    * for only user have permission to create
    */
    createFeedback(data: any): Promise<any>;
    updateFeedback(id: string, data: any): Promise<any>;
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