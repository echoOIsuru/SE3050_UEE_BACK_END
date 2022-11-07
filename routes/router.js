const express = require('express');
var router = express.Router();

const test = require('../controllers/userManagementControllers/test')
const userController = require('../controllers/userManagementControllers/userController')
const request = require('../controllers/fundDonor/requestList')
const create_donation=require('../controllers/fundDonor/createDonation')


router.post('/req/', request.addrequest);
router.get('/req/', request.findall);
router.put('/req/:id',request.update);
router.get('/req/:id',request.findbyid);
router.delete('/req/:id',request.delete);

router.post('/create_donation/', create_donation.addDonation);
router.get('/create_donation/', create_donation.findall);
router.put('/create_donation/:id',create_donation.update);
router.get('/create_donation/:id',create_donation.findbyid);
router.delete('/create_donation/:id',create_donation.delete);

module.exports = router