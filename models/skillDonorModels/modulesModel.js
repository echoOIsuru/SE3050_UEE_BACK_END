const mongoose = require('mongoose');
const { Schema } = mongoose;

//Subject modules database schema
const subjectModulesSchema = new Schema({
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
    module_name: {
        type: String,
        required: true,
    },
    lectures_time: {
        type: Number,
        required: true,
    },
    study_time: {
        type: Number,
        required: true,
    },
    practicle_sessions_time: {
        type: Number,
        required: true,
    }

});

subjectModulesSchema.index({ instructor_id: 1, subject_id: 1, module_code: 1 }, { unique: true });

const SubjectModules = mongoose.model('subject_modules', subjectModulesSchema);
module.exports = SubjectModules;