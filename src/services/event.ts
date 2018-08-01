import Event, { EventModel } from './../models/event';

export default class EventService {
    public static async createEvent(name: string, data: any): Promise<EventModel> {
        const event: EventModel = new Event({
            name,
            data
        });

        await event.save();
        return event;
    }
}