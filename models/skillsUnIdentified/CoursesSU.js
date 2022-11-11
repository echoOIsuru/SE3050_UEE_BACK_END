const mongoose = require('mongoose');

const schema = mongoose.Schema({
    title: {
        type: String,
        require: true
    },
    description: {
        type: String,
        require: true
    },
    favorite: {
        type: Boolean,
        require: true
    },
    email: {
        type: String,
        require: true
    }
})

const coursesSU = mongoose.model('Courses_SU', schema);
module.exports = coursesSU;