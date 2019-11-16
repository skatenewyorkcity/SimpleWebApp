const express = require('express');
/*const postController = require('../controllers/dataHandlerJson.js');*/
const path = require('path');
const fs = require('fs');
const router = express.Router();

//READ
router.get("/people", function(req, res){
  res.sendFile(path.join(__dirname, "../db/people.json"));
});

//CREATE-POST
router.post("/addPerson", function(req, res){

  var jsonFile = fs.readFileSync("db/people.json")
  var jsonContent = JSON.parse(jsonFile);
  var newPersonId;

  for(i = 0; i < jsonContent.person.length; i++){

    newPersonId = i + 1;
  
  }

  var newPerson = {
        "firstName":req.body.firstNameName, 
        "lastName":req.body.lastNameName, 
        "email":req.body.emailName,
        "id":JSON.stringify(newPersonId)
        };

  jsonContent.person.push(newPerson);

  for(i = 0; i < jsonContent.person.length; i++){
    console.log("firstname: ", jsonContent.person[i].firstName);
   console.log("secondname: ", jsonContent.person[i].lastName);
   console.log("email: ", jsonContent.person[i].email);
   console.log("id:", newPersonId);
  
  }

  fs.writeFile("db/people.json", '{"person":'+JSON.stringify(jsonContent.person)+'}', (err) => {
    if (err) console.log(err);
    console.log("Successfully Written to File.");

  });

  res.sendFile(path.join(__dirname, "../views/create.html"));

});

//"UPDATE" *cough* PUT
router.post("/updatePerson", function(req, res){

  var jsonFile = fs.readFileSync("db/people.json")
  var jsonContent = JSON.parse(jsonFile);
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

  fs.writeFile("db/people.json", '{"person":'+JSON.stringify(jsonContent.person)+'}', (err) => {
  if (err) console.log(err);
  console.log("Successfully Written to File.");
  });

  res.sendFile(path.join(__dirname, "../views/update.html"));

});

//DELETE
router.post("/deletePerson", function(req, res){

  var jsonFile = fs.readFileSync("db/people.json")
  var jsonContent = JSON.parse(jsonFile);
  var jsonAfterContentDeleted = {"person":[]};
  var jsonAfterContentDeletedFinal = {"person":[]};
  var deletePerson = {
    "id":req.body.personToDeleteId,
    "firstName":req.body.firstNameName, 
    "lastName":req.body.lastNameName, 
    "email":req.body.emailName
  };
  var text = {"person":[]};
 
  for(i = 0; i < jsonContent.person.length; i++){
    if(req.body.personToDeleteId === jsonContent.person[i].id){
      delete jsonContent.person[i].id;
      delete jsonContent.person[i].firstName;
      delete jsonContent.person[i].lastName;
      delete jsonContent.person[i].email;
   }
  } 

  for(i = 0; i < jsonContent.person.length; i++){
    text = jsonContent.person[i];
    if((jsonContent.person[i].id !== undefined)/* || (jsonAfterContentDeleted.person[i] !== null)*/){
      /*console.log("id: ", jsonContent.person[i].id);
      console.log("firstname: ", jsonContent.person[i].firstName);
      console.log("secondname: ", jsonContent.person[i].lastName);
      console.log("email: ", jsonContent.person[i].email); */    
      for(u = 0; u < 1; u++){
        var firstName = text.firstName;
        var lastName = text.lastName ;
        var email = text.email;
        var id = text.id;

        domPersonJson = { firstName, 
                          lastName, 
                          email, 
                          id };

        jsonAfterContentDeleted.person.push(domPersonJson);
      } 
      
    }

  }

  //console.log("Language: "+JSON.stringify(jsonAfterContentDeletedFinal));  

  fs.writeFile("db/people.json", '{"person":'+JSON.stringify(jsonAfterContentDeleted.person)+'}', (err) => {
  if (err) console.log(err);
  console.log("Successfully Written to File.");
  });

  res.sendFile(path.join(__dirname, "../views/delete.html"));

});

module.exports = router;