const express = require('express');
var router = express.Router();

const test = require('../controllers/userManagementControllers/test')
const userController = require('../controllers/userManagementControllers/userController')



//User Management Routers
// router.post('/user_um', userController.addUser);
// router.get('/all_users_um', userController.getAllUsers);
// router.get('/all_doctors', userController.getAllDoctors);
// router.put('/user_um/:id', userController.updateUser);
// router.delete('/user_um/:id', userController.deleteUser);
// router.post('/user_validate', userController.login);
// router.get('/users_type', userController.getUserByCount);
// router.get('/doctors_by_special', userController.getDoctorsBySpecial);

module.exports = router