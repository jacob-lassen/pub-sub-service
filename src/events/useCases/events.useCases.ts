import { Injectable } from "@nestjs/common";
import { Event } from "../interfaces/event.interface";

@Injectable()
export class EventsUseCases {
    private readonly events: Event[] = [
        'Event name',
    ];

    getAll(): string[] {
        return this.events;
    }
}