import { Controller, Get } from '@nestjs/common';

@Controller('v2/user')
export class UserV2Controller {
  // userinfo api
  @Get('info')
  getUserInfo() {
    return 'user/info v2';
  }
}
