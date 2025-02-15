import { Module } from '@nestjs/common';
import { UserController } from './user.controller';
import { UserV2Controller } from './user-v2.controller';

@Module({
  controllers: [UserController, UserV2Controller],
})
export class UserModule {}
