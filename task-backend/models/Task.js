// backend/models/Task.js
const mongoose = require('mongoose');

const taskSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    description: String,
    status: {
        type: String,
        enum: ['To Do', 'In Progress', 'Done'],
        default: 'To Do',
    },
}, { timestamps: true }); // This adds `createdAt` and `updatedAt` fields

const Task = mongoose.model('Task', taskSchema);

module.exports = Task;