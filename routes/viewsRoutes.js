const express = require('express');
const path = require('path');
const fs = require('fs');
const router = express.Router();

//GET
router.get("/", function(req, res){
	res.sendFile(path.join(__dirname, "../views/index.html"));
});

router.get("/create", function(req, res){
	res.sendFile(path.join(__dirname, "../views/create.html"));
});

router.get("/update", function(req, res){
	res.sendFile(path.join(__dirname, "../views/update.html"));
});

router.get("/delete", function(req, res){
	res.sendFile(path.join(__dirname, "../views/delete.html"));
});

router.get("/read", function(req, res){
	res.sendFile(path.join(__dirname, "../views/read.html"));
});

module.exports = router;
