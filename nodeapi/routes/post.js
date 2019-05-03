const express = require('express');
const postController = require('../controllers/post');
const path = require('path');


const fs = require('fs');

const router = express.Router();

/*router.get("/", postController.getPosts);*/

//GET

router.get("/", function(req, res){
	res.sendFile(path.join(__dirname, "../index.html"));
});

router.get("/create", function(req, res){
	res.sendFile(path.join(__dirname, "../create.html"));
});

router.get("/update", function(req, res){
	res.sendFile(path.join(__dirname, "../update.html"));
});

router.get("/delete", function(req, res){
	res.sendFile(path.join(__dirname, "../delete.html"));
});

router.get("/read", function(req, res){
	res.sendFile(path.join(__dirname, "../read.html"));
});

router.get("/people", function(req, res){
	res.sendFile(path.join(__dirname, "../people.json"));
});

//POST

/*router.post("/addPerson", function(req, res){

  var jsonString = req.body.json;
  console.log('json string : %s', jsonString);

});*/

/*router.post('/addPerson', function(request, response){
  console.log(request.body);      // your JSON
  response.send(request.body);    // echo the result back
});*/


module.exports = router;
