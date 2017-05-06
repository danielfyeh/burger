var express = require("express");

var port = 3000;
var burgers = require("../models/burgers.js");

var router = express.Router();

router.get("/", function(req,res){
	burger.all(function(data){
		var hbsObject = {
			burger: data
		};
		console.log(hbsObject);
		res.render("index", hbsObject);
	});
});

router.post("/", function(req, res){
	burger.create([
		"name", "devoured"
		], [
		req.body.bame, req.body.devoured
		], function(){
			res.redirect("/");
		});
});

module.exports = router;