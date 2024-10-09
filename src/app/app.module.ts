import { Module } from '@nestjs/common';
import { NotificationServiceListenerController } from '../notification-consumer-worker/notification-service-listener.controller';
import { NotificationConsumerWorkerService } from '../notification-consumer-worker/notification-consumer-worker.service';
import { NotificationConsumerWorkerModule } from '../notification-consumer-worker/notification-consumer-worker.module';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [NotificationConsumerWorkerModule, ConfigModule.forRoot()],
  controllers: [NotificationServiceListenerController],
  providers: [NotificationConsumerWorkerService],
})
export class AppModule {}
