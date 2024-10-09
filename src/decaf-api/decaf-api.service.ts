import { Injectable, Logger } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';

@Injectable()
export class DecafApiService {
  private readonly logger = new Logger(DecafApiService.name);
  private readonly baseUrlDecaf = process.env.DECAF_BASE_SERVER_URL;
  private readonly sendNotificationEndpoint =
    process.env.DECAF_SEND_NOTIFICATION_ENDPOINT;

  constructor(private readonly httpService: HttpService) {}

  /**
   * Sends a notification to the Decaf API.
   *
   * @param {Object} notification - The notification payload to be sent.
   * @param {Function} callbackFn - The callback function to handle the API response.
   * @return {void} This method does not return a value directly; any response or error is handled via the callback function and logging.
   */
  async sendNotification(notification) {
    this.logger.log('🛰 Sending notification to Decaf API...');
    // Return the HTTP POST repose form the Decaf API
    return this.httpService.axiosRef.post(
      this.baseUrlDecaf + this.sendNotificationEndpoint,
      notification,
      {
        responseType: 'json',
        headers: {
          Accept: 'application/json',
          Authorization: `${process.env.DECAF_API_KEY}`,
        },
      },
    );
  }
}
