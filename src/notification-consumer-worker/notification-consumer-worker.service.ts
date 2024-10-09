import { Injectable } from '@nestjs/common';

@Injectable()
export class NotificationConsumerWorkerService {
  processNotificationsToSend(): string {
    return 'Hello World!';
  }
}
