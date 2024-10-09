import { Module } from '@nestjs/common';
import { NotificationConsumerWorkerModule } from '../notification-consumer-worker/notification-consumer-worker.module';
import { ConfigModule } from '@nestjs/config';
import { HealthModule } from '../health/health.module';

/**
 * AppModule class is the root module of the application.
 *
 * This module imports several other modules:
 * - NotificationConsumerWorkerModule: Module responsible for handling notification consumer worker-related functionalities.
 * - HealthModule: Module responsible for the health checks of the application.
 * - ConfigModule: Configuration module used to manage application settings and environment variables.
 *
 * It also declares the following controller:
 * - NotificationServiceListenerController: Controller managing notification service listening functionalities.
 *
 * Finally, it provides the following service:
 * - NotificationConsumerWorkerService: Service handling the business logic for notification consumption.
 */
@Module({
  imports: [
    NotificationConsumerWorkerModule,
    HealthModule,
    ConfigModule.forRoot(),
  ],
})
export class AppModule {}
