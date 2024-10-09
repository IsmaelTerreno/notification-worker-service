import { Injectable, Logger } from '@nestjs/common';
import { EventNotificationMessageDto } from './event-notification-message.dto';
import { DecafApiService } from '../decaf-api/decaf-api.service';

const safeStringify = (obj: any, spaces: number = 2) => {
  const cache: any[] = [];
  const json = JSON.stringify(
    obj,
    (key, value) =>
      typeof value === 'object' && value !== null
        ? cache.includes(value)
          ? undefined // Duplicate reference found, discard key
          : cache.push(value) && value // Store value in our collection
        : value,
    spaces,
  );
  return json;
};

@Injectable()
export class NotificationConsumerWorkerService {
  private readonly logger = new Logger(NotificationConsumerWorkerService.name);
  constructor(private decafApiService: DecafApiService) {}

  async processNotificationsToSend(
    eventMessage: EventNotificationMessageDto,
  ): Promise<void> {
    // Send the notification to the Decaf API
    await this.decafApiService.sendNotification(eventMessage);
  }
}
