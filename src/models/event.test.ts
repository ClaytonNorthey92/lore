import { equal } from 'assert';
import { suite, test, slow, timeout } from "mocha-typescript";

import Event from './event';

@suite class EventTest {
    @test validData() {
        const event: Event = new Event({name: "Test Event", data: {}});
        const error: Error = event.document.validateSync();
        equal(typeof(error), 'undefined');
    }

    @test validateName() {
        const event: Event = new Event({name: "", data: {}});
        const error: Error = event.document.validateSync();
        equal(error.name, 'ValidationError');
    }
}