import { equal } from 'assert';
import { suite, test, slow, timeout } from "mocha-typescript";

import Event, { EventModel } from './event';

let connection;

@suite class EventTest {
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
}