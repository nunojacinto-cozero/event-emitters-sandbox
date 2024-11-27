import { Injectable } from '@nestjs/common';

@Injectable()
export class LoyaltyService {
  async addPoints({
    userId,
    points,
  }: {
    userId: string;
    points: number;
  }): Promise<void> {
    console.log(`🏆 [LoyaltyService] Added ${points} points to user ${userId}`);
  }
}
