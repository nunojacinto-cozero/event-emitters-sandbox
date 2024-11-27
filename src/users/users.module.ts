import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import { EmailsModule } from 'src/emails/emails.module';
import { LoyaltyModule } from 'src/loyalty/loyalty.module';

@Module({
  imports: [EmailsModule, LoyaltyModule],
  providers: [UsersService],
  controllers: [UsersController],
})
export class UsersModule {}
