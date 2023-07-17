const express = require('express');
const router = express.Router();
const userController = require('../controllers/user.controllers')


router.post('/', userController.create )

module.exports = router
