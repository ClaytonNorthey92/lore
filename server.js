'use strict';

const config = require('./config');
const Hapi = require('hapi');
const Event = require('./models/events');
const mongoose = require('mongoose');

let mongoCredentials = '';

if (config.database.username && config.database.password) {
  mongoCredentials = config.database.username
                     + ':'
                     + config.database.password
                     + '@';
}

mongoose.connect('mongodb://'
                  + mongoCredentials
                  + config.database.host
                  + ':'
                  + config.database.port
                  + '/'
                  + config.database.name);

const server = new Hapi.Server();

server.connection({
  host: config.host,
  port: config.port
});

server.route({
  method: 'POST',
  path: '/events',
  handler: (request, reply) => {

    const event = new Event({
      name: request.payload.name,
      data: request.payload.data,
      consumer: request.payload.consumer
    });

    event.save((err, savedEvent) => {

      const response = {
        errors: null,
        data: null
      };

      if (err) {
        response.errors = err;
        return reply(response).code(400);
      }

      response.data = {
        createdAt: savedEvent.createdAt,
        data: savedEvent.data,
        name: savedEvent.name
      };

      return reply(response).code(201);

    });
  }
});

server.start((err) => {
  if (err) {
    throw err;
  }

  console.log('Server running at on port', config.port);
});