const mongoose = require("mongoose");

const gradesSchema = mongoose.Schema({
  
    grade:{
        type: 'string',
        required: true
    },
    idStudent:{
        type: 'string',
        required: false
    },
    idProfessor:{
        type: 'string',
        required: false
    },
    idSubject:{
        type: 'string',
        required: false
    },
    quimester:{
        type: 'number',
        required: true
    }
})

module.exports = mongoose.model('Grades', gradesSchema, 'Grades')