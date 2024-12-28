import {
  Body,
  Controller,
  Get,
  HttpCode,
  HttpStatus,
  Post,
  Request,
} from '@nestjs/common';
import { AuthService } from './auth.service';
import { Role } from 'src/users/roles/role.enum';
import { Auth } from './auth.decorator';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Auth(Role.Public)
  @HttpCode(HttpStatus.OK)
  @Post('login')
  signIn(@Body() signInDto: Record<string, any>) {
    return this.authService.signIn(signInDto.username, signInDto.password);
  }

  @Auth(Role.Admin)
  @Get('profile')
  getProfile(@Request() req) {
    return req.user;
  }

  @Get('options')
  getOptions(@Request() req) {
    return req.roles;
  }
}
