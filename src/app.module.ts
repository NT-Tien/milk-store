import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TYPE_ORM_CONFIG } from './config/orm.config';
import { APP_INTERCEPTOR } from '@nestjs/core';
import { ResponseInterceptor } from './common/interceptors/response.interceptor';
import { MyMiddlewareModule } from './middlewares/middleware.module';
import { AuthModule } from './modules/auth/auth.module';
import { MilkModule } from './modules/milk/milk.module';
import { OrderModule } from './modules/order/order.module';
import { ImageModule } from './modules/upload/image/image.module';
import { QUEUE_CONFIG } from './config/queue.config';
import { BullModule } from '@nestjs/bull';
import { CacheModule } from '@nestjs/cache-manager';
import { ScheduleModule } from '@nestjs/schedule';
import { ShippingModule } from './modules/shipping/shipping.module';
import { FeedbackModule } from './modules/feedback/feedback.module';

@Module({
  imports: [
    TypeOrmModule.forRoot(TYPE_ORM_CONFIG),
    BullModule.forRoot(QUEUE_CONFIG),
    ScheduleModule.forRoot(),
    CacheModule.register({
      isGlobal: true,
    }),
    MyMiddlewareModule,
    ImageModule,
    AuthModule,
    MilkModule,
    OrderModule,
    FeedbackModule,
  ],
  providers: [
    {
      provide: APP_INTERCEPTOR,
      useClass: ResponseInterceptor
    },
  ]
})
export class AppModule {}
