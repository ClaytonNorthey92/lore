import { equal } from 'assert';
import { suite, test, slow, timeout } from "mocha-typescript";
import * as mongoose from 'mongoose';

import Event, { EventModel } from './event';
import EventService from './../services/event';
import BaseTestSuite from './../suites/BaseTestSuite';

let connection;

@suite class EventTest extends BaseTestSuite {
    @test validData() {
        const event: EventModel = new Event({name: "Test Event", data: {}});
        const error: Error = event.validateSync();
        equal(typeof(error), 'undefined');
    }

    @test validateName() {
        const event: EventModel = new Event({name: "", data: {}});
        const error: Error = event.validateSync();
        equal(error.name, 'ValidationError');
    }

    @test async saveEvent() {
        await mongoose.connect('mongodb://localhost:27017/test', {
            useNewUrlParser: true
        });
        const event: EventModel = await EventService.createEvent(
            'Test Event',
            {
                someKey: 'someValue'
            }
        );
        equal(event.name, 'Test Event');
    }
}