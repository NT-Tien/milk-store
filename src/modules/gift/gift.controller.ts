import { Body, Controller, Get, Inject, Param, Post } from "@nestjs/common";
import { ApiBody, ApiTags } from "@nestjs/swagger";
import { GiftService } from "./gift.service";

@ApiTags("gift")
@Controller("gift")
export class GiftController {
   constructor(
      @Inject('GIFT_SERVICE_TIENNT') private readonly giftService: GiftService,
   ) { }

   @ApiBody({
      schema: {
         type: 'object',
         properties: {
            accountId: { type: 'string' },
            voucherId: { type: 'string' },
            quantity: { type: 'number' }
         }
      }
   })
   @Post('exchange-score-for-voucher')
   async exchangeScoreForVoucher(@Body() body: { accountId: string, voucherId: string, quantity: number }) {
      return await this.giftService.exchangeScoreForVoucher(
         body.accountId,
         body.voucherId,
         body.quantity
      );
   }

   @Get('newest-score/userId')
   async getNewestScore(@Param('id') id: string){
      return await this.giftService.getNewestScore(id);
   }

   @Get('get-by-user-id/:id')
   async getGiftByUserId(@Param('id') id: string) {
      return await this.giftService.getGiftsByAccount(id);
   }
}