import { Module } from '@nestjs/common';
import { ScheduleModule } from '@nestjs/schedule';
import { NotificationServiceListenerController } from './notification-service-listener.controller';
import { NotificationConsumerWorkerService } from './notification-consumer-worker.service';

@Module({
  imports: [ScheduleModule.forRoot()],
  controllers: [NotificationServiceListenerController],
  providers: [NotificationConsumerWorkerService],
})
export class NotificationConsumerWorkerModule {}
