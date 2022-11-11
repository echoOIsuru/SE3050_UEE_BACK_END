const CourseInfosModel = require("../../models/skillDonorModels/courseDetailsModel.js");

//save newly added course deatils to db
const addCourseInfo = async (req, res) => {
    try {
        const {
            instructor_id,
            subject_id,
            module_code,
            published_meeting_link,
            note,
            references,
            quizes

        } = req.body;

        const module = new CourseInfosModel({
            instructor_id,
            subject_id,
            module_code,
            published_meeting_link,
            note,
            references,
            quizes
        });

        await module.save();
        res.status(201).json(module);
    } catch (error) {
        res.status(500).json(error);
    };
};

//get course details list
const getCourseInfos = async (req, res) => {

    try {
        const module = await CourseInfosModel.find();
        res.status(200).json(module);
    } catch (error) {
        res.status(500).json(error);
    }
};

//get specific course deatils record by object id
const getCourseInfoById = async (req, res) => {

    const moduleID = req.params.id;
    try {
        const moduleData = await CourseInfosModel.findById(moduleID);
        res.status(200).json(moduleData);

        if (!moduleData) {
            return res.status(404).json("No course deatils available for the given id!!");
        }
    } catch (error) {
        res.status(500).json(error);
    }
};

//update a specific selected course deatils
const updateCourseInfo = async (req, res) => {

    const moduleID = req.params.id;
    try {

        const moduleData = await CourseInfosModel.findById(moduleID);

        if (!moduleData) {
            return res.status(404).json("Not found such course deatils to update");
        }

        const { published_meeting_link,
            note,
            references,
            quizes
        } = req.body;

        const CourseInfo = await CourseInfosModel.findByIdAndUpdate(moduleID, {
            published_meeting_link,
            note,
            references,
            quizes
        });

        res.status(200).json(CourseInfo);

    } catch (error) {
        res.status(500).json(error.message);
    }

};

//delete a course deatils record
const deleteCourseInfo = async (req, res) => {

    const moduleID = req.params.id;

    try {
        const CourseInfo = await CourseInfosModel.findById(moduleID);

        if (!CourseInfo) {
            return res.status(404).json("Not found such course deatils to delete");
        }

        const delCourseInfo = await CourseInfosModel.findByIdAndDelete(moduleID);
        res.status(200).json(delCourseInfo);

    } catch (error) {
        res.status(500).json(error.message);
    }
};

//get course deatils of the selected module
const getCourseInfoByModuleId = async (req, res) => {

    const {
        instructor_id,
        subject_id,
        module_code
    } = req.body;

    try {
        const moduleData = await CourseInfosModel.find({ instructor_id: instructor_id, subject_id: subject_id, module_code: module_code });
        if (moduleData.length > 0) {
            res.status(200).json(moduleData);
        }

        if (moduleData.length == 0) {
            return res.status(404).json(`You have not added any course deatils for the ${module_code} module!`);
        }
    } catch (error) {
        res.status(500).json(error);
    }
};

module.exports = {
    addCourseInfo,
    getCourseInfoById,
    getCourseInfos,
    deleteCourseInfo,
    updateCourseInfo,
    getCourseInfoByModuleId
};
