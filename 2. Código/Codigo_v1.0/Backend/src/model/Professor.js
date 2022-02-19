const mongoose = require("mongoose");

const professorSchema = mongoose.Schema({
  
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
    specialization:{
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
        required: false
    },
    idSubject:{
        type: 'string',
        required: false
    }
})

module.exports = mongoose.model('Professor', professorSchema, 'Professors')