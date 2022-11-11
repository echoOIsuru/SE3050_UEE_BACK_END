const express = require('express');
var router = express.Router();

const test = require('../controllers/userManagementControllers/test')
const userController = require('../controllers/userManagementControllers/userController')
const controller = require('../controllers/IT20218058/controller');



//User Management Routers
// router.post('/user_um', userController.addUser);
// router.get('/all_users_um', userController.getAllUsers);
// router.get('/all_doctors', userController.getAllDoctors);
// router.put('/user_um/:id', userController.updateUser);
// router.delete('/user_um/:id', userController.deleteUser);
// router.post('/user_validate', userController.login);
// router.get('/users_type', userController.getUserByCount);
// router.get('/doctors_by_special', userController.getDoctorsBySpecial);

// IT20218058 Routes
router.post('/get_career_paths', controller.retrieveCareerPaths);
router.post('/add_request', controller.addRequest);
router.get('/get_requests', controller.retrieveRequests);
router.get('/get_requests/:id', controller.retrieveRequestData);
router.delete('/delete_request/:id', controller.deleteRequest);
router.put('/update_request/:id', controller.updateRequest);

module.exports = router