var express = require('express');
var router = express.Router();
var userController = require("../app/controllers/user.js")

/* GET home page. */
router.post('/signup', function(req, res) {
	userController.createUser(req.body, function(err, response) {
		res.send(response);
	})
});

router.get('/verifyemail/:auth_token', function(req, res) {
	userController.verifyemail(req.params.auth_token, function(err, response) {
		res.send(response);
	})
});

module.exports = router;