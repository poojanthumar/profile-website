const express = require('express');
const router = express.Router();
const homeController = require('../controller/index');



router.get('/', homeController.home);
router.post('/contact', homeController.contact);



module.exports = router;