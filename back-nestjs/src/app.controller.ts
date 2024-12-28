import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { Throttle } from '@nestjs/throttler';
import { Auth } from './auth/auth.decorator';
import { Role } from './users/roles/role.enum';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  // Override default configuration for Rate limiting and duration.
  @Throttle({ default: { limit: 10, ttl: 1000 } })
  @Auth(Role.Public)
  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
}
