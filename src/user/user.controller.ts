import { Controller, Get, UseGuards } from '@nestjs/common';
import { JwtGuard } from 'src/auth/guard';

@UseGuards(JwtGuard)
@Controller('user')
export class UserController {
  @Get('me')
  getMe() {
    return 'user';
  }
}
