const mongoose = require("mongoose");

//Creating Schema for storing Database
const userSchema = new mongoose.Schema ({
    name : {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    phone: {
        type: String
    },
    message: {
        type: String
    }
})

//Creating a model of that schema
const User = mongoose.model('User', userSchema);
module.exports = User;