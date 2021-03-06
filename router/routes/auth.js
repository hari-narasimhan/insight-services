"use strict";

var express         = require('express');
var router          = express.Router();
var userService     = require('../../services/user-service');

// POST /auth/login

router.post ('/login',  function (req, res) {
    
    userService.login(req.body.email, req.body.password, function (err, result) {
        
        if (err) {
            return res.status(401).send(err);
        }

        res.send(result);
    });
});

// POST /auth/signup
router.post('/signup', function (req, res) {

    userService.signup(req.body.email, req.body.password, req.body.fullname, function (err, result) {
        
        if(err) {
            return res.status(401).send(err);
        }

        res.send(result);
    });
});


module.exports = router;
