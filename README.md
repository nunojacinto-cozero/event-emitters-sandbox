This project is a NestJS application that demonstrates event-driven architecture using the `@nestjs/event-emitter` package.

#### Links:
- https://docs.nestjs.com/techniques/events
- https://github.com/EventEmitter2/EventEmitter2#emitterprependlistenerevent-listener-options

## Core Functionality

The project consists of three main modules:

- **Users Module**: Manages user creation and related operations.
- **Loyalty Module**: Handles loyalty points and rewards.
- **Emails Module**: Manages email sending for welcome emails.

## Event Flow

When a new user is created:

1. The `UsersService` emits a `users.created event`
2. Both `EmailsService` and `LoyaltyService` listen for this event using @OnEvent decorator
3. `EmailsService` sends a welcome email
4. `LoyaltyService` adds registration points
