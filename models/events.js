const config = require('./config');
const mongoose = require('mongoose');

const eventSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  data: {
    type: Object,
    required: true
  },
  createdAt: {
    type: Date,
    required: true,
    default: Date.now
  },
  consumer: {
    type: String,
    required: true,
    validate: {
      validator: (value) => {
        return !!config.consumerMap[value];
      },
      message: 'Invalid consumer.'
    }
  }
});

eventSchema.pre('save', (next) => {
  this.consumer = config.consumerMap[this.consumer];
  next();
});

module.exports = mongoose.model('Event', eventSchema);