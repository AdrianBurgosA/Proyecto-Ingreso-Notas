const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
  
    email:{
        type: 'string',
        required: true
    },
    user:{
        type: 'string',
        required: true
    },
    password:{
        type: 'string',
        required: true
    },
    type:{
        type: 'number',
        required: true
    }
});

module.exports = mongoose.model('User', userSchema, 'Users');