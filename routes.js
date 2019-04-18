var express = require('express');
var passport = require('passport');
var router = express.Router();
var users = require('./gyak04_users');

router.post('/login', function(req, res) {
    passport.authenticate('local', function(error, username){
        if(error) {
            return res.status(403).send(error);
        } else {
            req.logIn(username, function(error) {
                if(error) {
                    return res.status(500).send({message: "Serialization error"});
                } else {
                    return res.status(200).send({message: "Welcome"});
                }
            });
        }
    })(req, res);
});

router.post('/signup', function(req, res) {
    var result = users.setUser(req.body.username, req.body.password);
    if(result) {
        return res.status(200).send({message: result + " registration success"});
    } return res.status(401).send({message: "username already taken"});
});

router.post('/logout', function(req, res) {
    if(req.isAuthenticated()) {
        req.logout();
        return res.status(200).send({message: "logout successful"});
    }
    return res.status(403).send({message: "log in first"});
    

});

router.get('/proba', function(req, res) {
    if(req.isAuthenticated()) {
        return res.status(200).send({message: "you are logged in"});
    } else {
        return res.status(403).send({message: "you have no access"});
    }

})

module.exports = router;