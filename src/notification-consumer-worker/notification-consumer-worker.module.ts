import { Module } from '@nestjs/common';
import { ScheduleModule } from '@nestjs/schedule';
import { NotificationServiceListenerController } from './notification-service-listener.controller';
import { NotificationConsumerWorkerService } from './notification-consumer-worker.service';
import { DecafApiModule } from '../decaf-api/decaf-api.module';

/**
 * This module is responsible for handling notification consumption and
 * processing within the application. It incorporates scheduling capabilities
 * and offers controller and service layers to manage notification-related
 * workflows.
 *
 * The module imports the ScheduleModule to facilitate scheduled tasks. It also
 * registers a controller for listening to notification service events and a service
 * for executing the worker logic to process these notifications.
 *
 * Key Components:
 * - ScheduleModule: Provides scheduling functionality for the module.
 * - NotificationServiceListenerController: Handles incoming notification events.
 * - NotificationConsumerWorkerService: Performs the core processing of notifications.
 */
@Module({
  imports: [DecafApiModule, ScheduleModule.forRoot()],
  controllers: [NotificationServiceListenerController],
  providers: [NotificationConsumerWorkerService],
})
export class NotificationConsumerWorkerModule {}
