const mongoose = require('mongoose');
const { Schema } = mongoose;

//Course Details database schema
const courseDetailsSchema = new Schema({
    instructor_id: {
        type: String,
        required: true
    },
    subject_id: {
        type: String,
        required: true
    },
    module_code: {
        type: String,
        required: true
    },
    published_meeting_link : {
        type: String,
        required: true,
    },
    note: {
        type: String
    },
    references: {
        type: String
    },
    quizes: {
        type: String
    },

});

const CourseDetails = mongoose.model('course_details', courseDetailsSchema);
module.exports = CourseDetails;