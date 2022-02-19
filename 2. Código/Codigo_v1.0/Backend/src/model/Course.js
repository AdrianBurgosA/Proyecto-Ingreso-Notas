const mongoose = require("mongoose");

const courseSchema = mongoose.Schema({
  
    level:{
        type: 'string',
        required: true
    },
    parallel:{
        type: 'string',
        required: true
    },
    idSchoolYear:{
        type: 'string',
        required: true
    }
})

module.exports = mongoose.model('Course', courseSchema, 'Courses')