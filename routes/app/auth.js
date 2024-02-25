const express = require('express');
const router = express.Router();
const UserAuth = require('../../controllers/app/userAuth.js')

// for login and logout, auth 

router.get('/', UserAuth.CheckLoginServe);
router.post('/0auth', UserAuth.Auth);
router.get('/logout', UserAuth.logout);


module.exports = router;
