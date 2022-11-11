const express = require('express');
var router = express.Router();

const test = require('../controllers/userManagementControllers/test')
const controllerSU = require('../controllers/skillsUnIdentified/contoller');



//User Management Routers
// router.post('/user_um', userController.addUser);
// router.get('/all_users_um', userController.getAllUsers);
// router.get('/all_doctors', userController.getAllDoctors);
// router.put('/user_um/:id', userController.updateUser);
// router.delete('/user_um/:id', userController.deleteUser);
// router.post('/user_validate', userController.login);
// router.get('/users_type', userController.getUserByCount);
// router.get('/doctors_by_special', userController.getDoctorsBySpecial);

//Skill Unidentified
router.post('/save_su', controllerSU.addCourse);
router.get('/get_all_su', controllerSU.getAllCourses);
router.get('/get_all_favorite_su', controllerSU.getAllFavoriteCourses);
router.patch('/update_course_su/:id', controllerSU.updateCourse);
router.patch('/update_favorite_course_su/:id', controllerSU.updateFavoriteCourse);
router.delete('/delete_favorite_course_su/:id', controllerSU.deleteFavoriteCourse);

module.exports = router