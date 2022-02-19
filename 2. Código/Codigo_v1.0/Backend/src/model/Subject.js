const mongoose = require("mongoose");

const subjectSchema = mongoose.Schema({
  
    name:{
        type: 'string',
        required: true
    },
    level:{
        type: 'string',
        required: true
    }
    
})

module.exports = mongoose.model('Subject', subjectSchema, 'Subjects')