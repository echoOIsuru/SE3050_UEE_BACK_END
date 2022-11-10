const express = require('express');
var router = express.Router();

//All controllers related subjects modules functionality

const { addModule,
    getModuleById,
    getModuleByLoggedId,
    getModules,
    updateModule,
    deleteModule
} = require('../controllers/skillDonorControllers/modulesController.js');

//All controllers related to module course deatils

const { addCourseInfo,
    getCourseInfoById,
    getCourseInfos,
    deleteCourseInfo,
    updateCourseInfo,
    getCourseInfoByModuleId
} = require('../controllers/skillDonorControllers/courseDetailsController.js')


//modules routes

//post request
router.post("/addModule", addModule);

//get request
router.get("/modules", getModules);

//get request by id
router.post("/userModules", getModuleByLoggedId);

//get request by object id
router.get("/moduleById/:id", getModuleById);

//put request
router.put("/module/:id", updateModule);

//delete request
router.delete("/module/:id", deleteModule);


// course details routes

//post request
router.post("/courseDetails", addCourseInfo);

//get request
router.get("/courseDetails", getCourseInfos);

//get request by id
router.get("/courseDataByObj/:id", getCourseInfoById);

//get request by id
router.post("/courseDetailsByModule", getCourseInfoByModuleId);

//put request
router.put("/courseDetails/:id", updateCourseInfo);

//delete request
router.delete("/courseDetails/:id", deleteCourseInfo);

module.exports = router;