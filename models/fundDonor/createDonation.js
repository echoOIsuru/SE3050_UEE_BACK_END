const mongoose = require('mongoose');

const requestManagementSchema = mongoose.Schema({

   request_id: {
        type: String,
        require: true,
       
    },

    name: {
        type: String,
        require: true
    },


    donation_type: {
        type: String,
        require: true
    },

})

const requestManagement = mongoose.model('create_donation',requestManagementSchema);
module.exports = requestManagement;