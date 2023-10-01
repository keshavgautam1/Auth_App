const mongoose = require('mongoose');
require('dotenv').config();

// Define your MongoDB URI here
const mongoURI = process.env.MONGO_URL; // Use MONGO_URL instead of MONGO_URI

mongoose.set('strictQuery', false);

mongoose.connect(mongoURI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'Error connecting to MongoDB'));

db.once('open', function () {
  console.log('Connected to Database :: MongoDB');
});

module.exports = db;
