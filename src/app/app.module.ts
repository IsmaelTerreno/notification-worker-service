import { Module } from '@nestjs/common';
import { NotificationServiceListenerController } from '../notification-consumer-worker/notification-service-listener.controller';
import { NotificationConsumerWorkerService } from '../notification-consumer-worker/notification-consumer-worker.service';
import { NotificationConsumerWorkerModule } from '../notification-consumer-worker/notification-consumer-worker.module';

@Module({
  imports: [NotificationConsumerWorkerModule],
  controllers: [NotificationServiceListenerController],
  providers: [NotificationConsumerWorkerService],
})
export class AppModule {}
