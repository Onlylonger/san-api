import { Controller, Get } from '@nestjs/common';

@Controller('v1/user')
export class UserController {
  // userinfo api
  @Get('info')
  getUserInfo() {
    return 'user/info';
  }
}
