const mongoose = require("mongoose");

const gradesSchema = mongoose.Schema({
  
    grade:{
        type: 'string',
        required: true
    },
    idStudent:{
        type: 'string',
        required: true
    },
    idProfessor:{
        type: 'string',
        required: true
    },
    idSubject:{
        type: 'string',
        required: true
    },
    quimester:{
        type: 'number',
        required: true
    }
})

module.exports = mongoose.model('Grades', gradesSchema, 'Grades')