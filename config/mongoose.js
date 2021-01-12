const mongoose = require('mongoose');
const env = require('./environment');
mongoose.connect(`mongodb://localhost/${env.db}`);

const db = mongoose.connection;

db.on('err', console.error.bind(console, "Error"));

db.once('open', function() {
    console.log("Successfully connected to the database");
});

module.exports = db;