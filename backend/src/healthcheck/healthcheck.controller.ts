import { Controller, Get } from '@nestjs/common';
import { HealthcheckService } from './healthcheck.service';

@Controller('healthcheck')
export class HealthcheckController {
  constructor(private readonly healthcheckService: HealthcheckService) {}

  @Get()
  async checkDatabase(): Promise<{ status: string }> {
    const isDatabaseHealthy = await this.healthcheckService.checkDatabase();
    return {
      status: isDatabaseHealthy ? 'Database is healthy' : 'Database is down',
    };
  }
}
