const mongoose = require('mongoose');

const schema = mongoose.Schema({
    oid: {
        type: String,
        require: true
    },
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

const coursesSU = mongoose.model('Favorite_Courses_SU', schema);
module.exports = coursesSU;