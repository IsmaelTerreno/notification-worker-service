import { Controller, Logger } from '@nestjs/common';
import { NotificationConsumerWorkerService } from './notification-consumer-worker.service';
import { Ctx, EventPattern, Payload, RmqContext } from '@nestjs/microservices';
import { EventNotificationMessageDto } from './event-notification-message.dto';

@Controller()
export class NotificationServiceListenerController {
  private readonly logger = new Logger(
    NotificationServiceListenerController.name,
  );
  constructor(
    private readonly consumerWorkerService: NotificationConsumerWorkerService,
  ) {}

  @EventPattern('notification-to-send')
  processNotificationsToSend(
    @Payload() eventMessage: EventNotificationMessageDto,
    @Ctx() context: RmqContext,
  ) {
    try {
      // Log the event received using the custom replacer function
      this.logger.log(
        `⚡ Event received. EventPattern: ${context.getPattern()} - ${JSON.stringify(eventMessage, null, 2)}`,
      );
      // this.consumerWorkerService.processNotificationsToSend(eventMessage);
    } catch (error) {
      this.logger.error(
        `❌ Failed processing event - Details: ${error.message}`,
      );
    }
  }
}
