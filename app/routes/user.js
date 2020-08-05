const express = require('express');
const router = express.Router();
const path = require('path');


router.get('/login', function(req, res) {
    res.sendFile(path.join(__dirname,  '/../public/login.html'))
})

router.get('/register', function(req, res) {
    res.sendFile(path.join(__dirname,  '/../public/register.html'))
})


module.exports = router;