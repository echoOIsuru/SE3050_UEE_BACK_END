const mongoose = require('mongoose');

const schema = mongoose.Schema({
    skill: {
        type: String,
        require: true
    },
    career_paths: {
        type: Array,
        require: true
    }
})

const CareerModel = mongoose.model('CareerModel', schema);
module.exports = CareerModel;