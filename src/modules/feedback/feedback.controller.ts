import { Body, Controller, Get, Inject, Param, Post, Put } from "@nestjs/common";
import { CreateFeedbackDto } from "./dto/create-feedback.dto";
import { UpdateFeedbackDto } from "./dto/update-feedback.dto";
import { ApiTags } from "@nestjs/swagger";
import { FeedbackServiceInterface } from "./interfaces/feedback.interface";

@ApiTags('feedback')
@Controller('feedback')
export class FeedbackController {
    constructor(
        @Inject('FEEDBACK_SERVICE_TIENNT') private readonly feedbackService: FeedbackServiceInterface,
    ) { }

    @Get()
    getFeedbacks() {
        return this.feedbackService.getAll();
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
        return this.feedbackService.create(data);
    }

    @Put(':id')
    updateFeedback(@Param('id') id: string, @Body() data: UpdateFeedbackDto) {
        return this.feedbackService.update(id, data);
    }



}