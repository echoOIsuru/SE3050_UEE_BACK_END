const ModulesModel = require("../../models/skillDonorModels/modulesModel.js");

//save newly added module details to db
const addModule = async (req, res) => {
    try {
        const {
            instructor_id,
            subject_id,
            module_code,
            module_name,
            lectures_time,
            study_time,
            practicle_sessions_time,
        } = req.body;

        const findModule = await ModulesModel.find({
            $and: [
                { instructor_id: instructor_id },
                { subject_id: subject_id },
                { module_code: module_code }
            ]
        })

        if (findModule.length > 0) {
            return res.status(409).json({ message: `Subject's module code already exists! ` });
        }

        const module = new ModulesModel({
            instructor_id,
            subject_id,
            module_code,
            module_name,
            lectures_time,
            study_time,
            practicle_sessions_time,
        });

        await module.save();
        res.status(201).json(module);
    } catch (error) {
        res.status(500).json(error);
    };
};

//get modules list
const getModules = async (req, res) => {

    try {
        const module = await ModulesModel.find();
        res.status(200).json(module);
    } catch (error) {
        res.status(500).json(error);
    }
};

//get specific module record by object id
const getModuleById = async (req, res) => {

    const moduleID = req.params.id;
    try {
        const moduleData = await ModulesModel.findById(moduleID);
        res.status(200).json(moduleData);

        if (!moduleData) {
            return res.status(404).json("No module for the given id!!");
        }
    } catch (error) {
        res.status(500).json(error);
    }
};

//update a specific selected module
const updateModule = async (req, res) => {

    const moduleID = req.params.id;
    try {

        const moduleData = await ModulesModel.findById(moduleID);

        if (!moduleData) {
            return res.status(404).json("Not found such a module to update");
        }

        const { module_name,
            lectures_time,
            study_time,
            practicle_sessions_time,
        } = req.body;

        const Module = await ModulesModel.findByIdAndUpdate(moduleID, {
            module_name,
            lectures_time,
            study_time,
            practicle_sessions_time,
        });

        res.status(200).json(Module);

    } catch (error) {
        res.status(500).json(error.message);
    }

};

//delete a selected module record
const deleteModule = async (req, res) => {

    const moduleID = req.params.id;

    try {
        const Module = await ModulesModel.findById(moduleID);

        if (!Module) {
            return res.status(404).json("Not found such a module to delete");
        }

        const delModule = await ModulesModel.findByIdAndDelete(moduleID);
        res.status(200).json(delModule);

    } catch (error) {
        res.status(500).json(error.message);
    }
};

//get modules of the logged instructor
const getModuleByLoggedId = async (req, res) => {

    const {
        instructor_id,
        subject_id
    } = req.body;

    try {
        const moduleData = await ModulesModel.find({ instructor_id: instructor_id, subject_id: subject_id });
        if (moduleData.length > 0) {
            res.status(200).json(moduleData);
        }

        if (moduleData .length == 0) {
            return res.status(404).json(`You have not added any modules for the ${subject_id} subject!`);
        }
    } catch (error) {
        res.status(500).json(error);
    }
};

module.exports = {
    addModule,
    getModuleById,
    getModules,
    deleteModule,
    updateModule,
    getModuleByLoggedId
};
