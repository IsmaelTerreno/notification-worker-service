import { Controller, Get } from '@nestjs/common';
import {
  HealthCheck,
  HealthCheckService,
  HttpHealthIndicator,
} from '@nestjs/terminus';

@Controller('health')
export class HealthController {
  constructor(
    private health: HealthCheckService,
    private http: HttpHealthIndicator,
  ) {}

  /**
   * Performs a health check by pinging several services.
   *
   * The method checks the health status of three external services:
   * 1. Decaf notification send
   *
   * @return {Observable<HealthCheckResult>} An observable containing the health check results.
   */
  @Get()
  @HealthCheck()
  check() {
    return this.health.check([
      () =>
        this.http.pingCheck(
          'notification-send-decaf',
          process.env.DECAF_BASE_SERVER_URL +
            process.env.DECAF_SEND_NOTIFICATION_ENDPOINT,
          { method: 'POST' },
        ),
    ]);
  }
}
