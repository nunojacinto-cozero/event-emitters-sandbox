import { Injectable } from '@nestjs/common';
import { EventEmitter2 } from '@nestjs/event-emitter';
import { randomUUID } from 'crypto';

export class CreateUserDto {
  email: string;
}

export class UserDto {
  id: string;
}

@Injectable()
export class UsersService {
  constructor(private readonly eventEmitter: EventEmitter2) {}

  async createUser({ email }: CreateUserDto): Promise<UserDto> {
    console.log(`----------------------------------------------`);
    const userId = randomUUID();
    console.log(`👤 [UsersService] Created user ${userId}`);

    // Emit user created event
    await this.eventEmitter.emitAsync('users.created', {
      email,
      id: userId,
    });

    console.log(`----------------------------------------------`);
    return {
      id: userId,
    };
  }
}
