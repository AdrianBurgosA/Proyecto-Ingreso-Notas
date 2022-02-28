const mongoose = require("mongoose");

const schoolYearSchema = mongoose.Schema({
  
    name:{
        type: 'string',
        required: true
    },
    startDate:{
        type: 'string',
        required: true
    },
    endDate:{
        type: 'string',
        required: true
    },
    actual:{
        type: 'boolean',
        required: true
    }
})

module.exports = mongoose.model('SchoolYear', schoolYearSchema, 'SchoolYears')