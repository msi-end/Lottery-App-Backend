const express = require('express');
const router = express.Router();

const userController = require('../../controllers/app/_index.controller')


router.get('/',userController.test)



module.exports = router;
