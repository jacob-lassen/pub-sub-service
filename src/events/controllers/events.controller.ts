import { Controller, Get } from '@nestjs/common';
import { EventsUseCases } from '../useCases/events.useCases';

@Controller('events')
export class EventsController {
    constructor(private readonly useCases: EventsUseCases) {}
    @Get()
    findAll(): Array<string> {
        return this.useCases.getAll();
    }
}
