const mongoose = require('mongoose');

const schema = mongoose.Schema({
    name: {
        type: String,
        require: true
    },
    contact: {
        type: String,
        require: true
    },
    profile: {
        type: String,
        require: true
    },
    job: {
        type: String,
        require: true
    },
    status: {
        type: String,
        require: true
    }
})

const RequestModel = mongoose.model('RequestModel', schema);
module.exports = RequestModel;