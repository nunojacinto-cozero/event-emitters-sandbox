import { Injectable } from '@nestjs/common';
import { OnEvent } from '@nestjs/event-emitter';

@Injectable()
export class EmailsService {
  async sendWelcomeEmail({ email }: { email: string }): Promise<void> {
    console.log(`📧 [EmailsService] Welcome Email sent to ${email}`);
  }

  @OnEvent('users.created')
  async handleUserCreated(event: { email: string }) {
    await this.sendWelcomeEmail({ email: event.email });
  }
}
