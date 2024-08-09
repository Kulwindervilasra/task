// backend/app.js
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');
const tasksRouter = require('./routes');

const app = express();

mongoose.connect(process.env.MONGOURI || 'mongodb://root:root@localhost:27017/demo');

app.use(cors());
app.use(bodyParser.json());

app.use('/api/tasks', tasksRouter);

module.exports = app;
