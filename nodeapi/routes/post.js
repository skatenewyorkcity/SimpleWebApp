const express = require('express');
const postController = require('../controllers/post');
const path = require('path');

const fs = require('fs');

const router = express.Router();

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
router.post("/addPerson", function(req, res){

  var jsonFile = fs.readFileSync("people.json")
  var jsonContent = JSON.parse(jsonFile);

  /*
  console.log("Message!!!");
  res.end(JSON.stringify(req.body));
  console.log(req.body.firstNameName);
  console.log(req.body.lastNameName);
  console.log(req.body.emailName);
  console.log(JSON.stringify(req.body));
  */

  var newPerson = {
  				"firstName":req.body.firstNameName, 
				"lastName":req.body.lastNameName, 
				"email":req.body.emailName
				};

  jsonContent.person.push(newPerson);

  for(i = 0; i < jsonContent.person.length; i++){
  	console.log("firstname: ", jsonContent.person[i].firstName);
	console.log("secondname: ", jsonContent.person[i].lastName);
	console.log("email: ", jsonContent.person[i].email);
	
  }

  /*{
	"person":
	[
		{"firstName": "John", "lastName": "Doe", "email": "john@example.com"},
		{"firstName": "Mary", "lastName": "Moe", "email": "mary@example.com"},
		{"firstName": "July", "lastName": "Dooley", "email": "july@example.com"},
		{"firstName": "July", "lastName": "Dooley", "email": "july@example.com"}
	]
  }*/

	fs.writeFile("people.json", '{"person":'+JSON.stringify(jsonContent.person)+'}', (err) => {
	 	if (err) console.log(err);
	 	console.log("Successfully Written to File.");

	});

	res.sendFile(path.join(__dirname, "../create.html"));

});

//"PUT"
router.post("/updatePerson", function(req, res){

  var jsonFile = fs.readFileSync("people.json")
  var jsonContent = JSON.parse(jsonFile);
  /*var updatePerson = {
  	"id":req.body.newPersonId,
  	"firstName":req.body.firstNameName, 
	"lastName":req.body.lastNameName, 
	"email":req.body.emailName
  };*/
  var updatePerson = {
  	"id":req.body.personToUpdateId,
  	"firstName":req.body.firstNameName, 
	"lastName":req.body.lastNameName, 
	"email":req.body.emailName
  };
 

  for(i = 0; i < jsonContent.person.length; i++){
  	if(req.body.personToUpdateId === jsonContent.person[i].id){
  		console.log(req.body.personToUpdateId);
  		console.log(updatePerson.firstName);
  		console.log(updatePerson.lastName);
  		console.log(updatePerson.email);

  		/*console.log("id: ", jsonContent.person[i].id);
  		console.log("firstname: ", jsonContent.person[i].firstName);
		console.log("secondname: ", jsonContent.person[i].lastName);
		console.log("email: ", jsonContent.person[i].email);*/

  		//jsonContent.person.slice(1, 1);
  		//jsonContent.person[i].push(updatePerson);
		jsonContent.person[i].firstName = updatePerson.firstName;
	  	jsonContent.person[i].lastName = updatePerson.lastName;
	  	jsonContent.person[i].email = updatePerson.email;
	}
  } 

  for(i = 0; i < jsonContent.person.length; i++){
  	console.log("id: ", jsonContent.person[i].id);
  	console.log("firstname: ", jsonContent.person[i].firstName);
	console.log("secondname: ", jsonContent.person[i].lastName);
	console.log("email: ", jsonContent.person[i].email);
  }

  fs.writeFile("people.json", '{"person":'+JSON.stringify(jsonContent.person)+'}', (err) => {
	if (err) console.log(err);
	console.log("Successfully Written to File.");
  });

  res.sendFile(path.join(__dirname, "../update.html"));

});

module.exports = router;
