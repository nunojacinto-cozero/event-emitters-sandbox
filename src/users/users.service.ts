import { Injectable } from '@nestjs/common';
import { randomUUID } from 'crypto';
import { EmailsService } from 'src/emails/emails.service';
import { LOYALTY_POINTS } from 'src/loyalty/loyalty.points';
import { LoyaltyService } from 'src/loyalty/loyalty.service';

export class CreateUserDto {
  email: string;
}

export class UserDto {
  id: string;
}

@Injectable()
export class UsersService {
  constructor(
    private readonly emailService: EmailsService,
    private readonly loyaltyService: LoyaltyService,
  ) {}

  async createUser({ email }: CreateUserDto): Promise<UserDto> {
    console.log(`----------------------------------------------`);
    const userId = randomUUID();
    console.log(`👤 [UsersService] Created user ${userId}`);

    // Send welcome email
    await this.emailService.sendWelcomeEmail({ email });

    // Provide points for registration
    await this.loyaltyService.addPoints({
      userId,
      points: LOYALTY_POINTS.REGISTRATION,
    });

    console.log(`----------------------------------------------`);
    return {
      id: userId,
    };
  }
}
