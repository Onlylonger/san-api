import { Controller, Post } from '@nestjs/common';

@Controller('v1/auth')
export class AuthController {
  /**
   * sign with different stratigy
   * 1. username + password +captcha
   * 2. telphone + message code
   * 3. thirty part
   *
   * need to use passport lib
   */
  @Post('signin')
  signin() {
    return 'signin';
  }

  // sign out
  @Post('signout')
  signout() {
    return 'signout';
  }
}
