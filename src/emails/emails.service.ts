import { Injectable } from '@nestjs/common';

@Injectable()
export class EmailsService {
  async sendWelcomeEmail({ email }: { email: string }): Promise<void> {
    console.log(`📧 [EmailsService] Welcome Email sent to ${email}`);
  }
}
