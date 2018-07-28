import { prop, Typegoose, InstanceType } from 'typegoose'; 

class Event extends Typegoose {
    @prop({required: true})
    public name: string;

    @prop({required: true})
    public data: any;

    @prop({required: true, default: Date.now})
    private createdAt: Date;
}

export type EventModel = InstanceType<Event>;
export default new Event().getModelForClass(Event);
