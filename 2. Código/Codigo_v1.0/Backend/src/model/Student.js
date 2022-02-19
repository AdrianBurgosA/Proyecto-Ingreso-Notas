const mongoose = require("mongoose");

const studentSchema = mongoose.Schema({
  
    name:{
        type: 'string',
        required: true
    },
    lastName:{
        type: 'string',
        required: true
    },
    bornYear:{
        type: 'string',
        required: true
    },
    idCard:{
        type: 'string',
        required: true
    },
    genre:{
        type: 'string',
        required: true
    },
    nationality:{
        type: 'string',
        required: true
    },
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
    idCourse:{
        type: 'string',
        required: true
    }
})

module.exports = mongoose.model('Student', studentSchema, 'Students')