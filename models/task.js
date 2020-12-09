const mongoose = require('mongoose');

const taskSchema = new mongoose.Schema({
    description: {
        type: String,
        required: true
    },
    category: {
        type: String,
        required: true
    },
    dueDate: {
        type: Date,
        required: true
    }

});

const Task = mongoose.model('Task',taskSchema);
console.log('Task model:',Task);

module.exports = Task;
