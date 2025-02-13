import { Body, Controller, Get, Post } from '@nestjs/common';
import { UserLoginDTO } from './dto';

@Controller('user')
export class UserController {
  @Get()
  index() {
    return 'index';
  }

  @Post()
  login(@Body() loginInfo: UserLoginDTO) {
    return loginInfo;
  }

  @Post('test')
  tets() {
    return 'test';
  }
}
