import { Body, Controller, Get, Inject, Param, Post, Put } from "@nestjs/common";
import { FeedbackServiceInterface } from "./interfaces/category.interface";
import { CreateFeedbackDto } from "./dto/create-feedback.dto";
import { UpdateFeedbackDto } from "./dto/update-feedback.dto";
import { ApiTags } from "@nestjs/swagger";

@ApiTags('feedback')
@Controller('feedback')
export class FeedbackController {
    constructor(
        @Inject('FEEDBACK_SERVICE_TIENNT') private readonly feedbackService: FeedbackServiceInterface,
    ) { }

    @Get()
    getFeedbacks() {
        return this.feedbackService.getFeedbacks();
    }

    @Get('getFeedbacksByProductId/:id')
    getFeedbackByProductId(@Param('id') id: string) {
        return this.feedbackService.getFeedbacksByProductId(id);
    }

    @Get('getFeedbackByUserId/:id')
    getFeedbackByUserId(@Param('id') id: string) {
        return this.feedbackService.getFeedbackByUserId(id);
    }

    @Post()
    createFeedback(@Body() data: CreateFeedbackDto) {
        return this.feedbackService.createFeedback(data);
    }

    @Put(':id')
    updateFeedback(@Param('id') id: string, @Body() data: UpdateFeedbackDto) {
        return this.feedbackService.updateFeedback(id, data);
    }



}