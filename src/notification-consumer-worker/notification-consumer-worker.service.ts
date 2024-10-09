import { Injectable, Logger } from '@nestjs/common';
import { EventNotificationMessageDto } from './event-notification-message.dto';
import { DecafApiService } from '../decaf-api/decaf-api.service';

@Injectable()
export class NotificationConsumerWorkerService {
  private readonly logger = new Logger(NotificationConsumerWorkerService.name);
  constructor(private decafApiService: DecafApiService) {}

  processNotificationsToSend(eventMessage: EventNotificationMessageDto): void {
    // Send the notification to the Decaf API
    this.decafApiService.sendNotification(eventMessage, (response) => {
      // Log the response from the Decaf API
      this.logger.log('🚀 Response from Decaf API:', response);
    });
  }
}
