import { Module } from '@nestjs/common';
import { EventsController } from './controllers/events.controller';
import { EventsUseCases } from './useCases/events.useCases';

@Module({
    controllers: [EventsController],
    providers: [EventsUseCases],
})
export class EventsModule {}
