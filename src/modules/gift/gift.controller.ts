import { Controller, Inject } from "@nestjs/common";
import { ApiTags } from "@nestjs/swagger";
import { GiftService } from "./gift.service";

@ApiTags("gift")
@Controller("gift")
export class GiftController {
   constructor(
    @Inject('GIFT_SERVICE_TIENNT') private readonly giftService: GiftService,
   ) {}
   
}