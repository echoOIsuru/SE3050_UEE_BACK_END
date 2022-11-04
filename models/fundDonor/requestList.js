const mongoose = require('mongoose');

const requestManagementSchema = mongoose.Schema({

   request_id: {
        type: String,
        require: true,
        unique:true
    },

    name: {
        type: String,
        require: true
    },

    age: {
        type: String,
        require: true
    },

   phone: {
        type: String,
        require: true
    },

    donation_type: {
        type: String,
        require: true
    },

})

const requestManagement = mongoose.model('request_list',requestManagementSchema);
module.exports = requestManagement;