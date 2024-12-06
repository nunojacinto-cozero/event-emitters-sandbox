import { Injectable } from '@nestjs/common';
import { OnEvent } from '@nestjs/event-emitter';
import { LOYALTY_POINTS } from './loyalty.points';

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

  @OnEvent('users.created', {
    /**
     * If "true", prepends (instead of append) the given listener to the array of listeners.
     *
     * @see https://github.com/EventEmitter2/EventEmitter2#emitterprependlistenerevent-listener-options
     *
     * @default false
     */
    // prependListener: false,
    /**
     * If "true", the onEvent callback will not throw an error while handling the event. Otherwise, if "false" it will throw an error.
     *
     * @default true
     */
    // suppressErrors: false,
    // Whether to execute the listener asynchronously (default: false)
    // async: false,
    // Whether to wrap the listener in a Promise (default: false)
    // promisify: false,
    // Whether to execute the listener on the next tick (default: false)
    // nextTick: false,
    // Whether to transform the listener into an object with off() method (default: false)
    // objectify: false,
  })
  async handleUserCreated(event: { id: string }) {
    await this.addPoints({
      userId: event.id,
      points: LOYALTY_POINTS.REGISTRATION,
    });
  }
}
