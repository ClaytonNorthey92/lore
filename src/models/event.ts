import { Schema, model as Model, next, Document } from 'mongoose';

export interface IEvent {
    name: string;
    data: any;
};

const EventSchema: Schema = new Schema({
    name: {
        type: String,
        required: true
    },
    createdAt: {
        type: Date,
        required: true,
        default: Date.now
    },
    data: {
        type: Schema.Types.Mixed,
        required: true
    }
});

const EventModel: Model = Model('Event', EventSchema);

export default class Event {
    public readonly document: Model;
    
    constructor(params: IEvent) {
        this.document = new EventModel(params);
    }
}



