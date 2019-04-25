// We required the mongoose in our file and then, we create a model of
// how our collection should look like. The task collection(table) will 
// contain a name: a string, and the date it was created. It also contains
// task status which we have defined as pending - a default value for 
// every task created.


// 'use strict';
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const TaskSchema = new Schema({
  name: {
    type: String,
    required: 'Kindly enter the name of the task'
  },
  createdAt: {
    type: Date,
    default: Date.now
  },
  status: {
    type: [{
      type: String,
      enum: ['pending', 'ongoing', 'completed']
    }],
    default: ['pending']
  }
});

module.exports = mongoose.model('Tasks', TaskSchema);