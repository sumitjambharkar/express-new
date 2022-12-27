const express = require('express'); //import express

// 1.
const router  = express.Router(); 
// 2.
const homeController = require('../controllers/home'); 
const registerController = require('../controllers/register')

// 3.
router.get('/', homeController.home); 
router.post('/register',registerController.register)
// 4. 
module.exports = router; // export to use in server.js
