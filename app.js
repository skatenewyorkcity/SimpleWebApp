const express = require("express");
const app = express();
var mysql = require('mysql');

const port = process.env.PORT || 4000;

//---

const morgan = require("morgan");

const bodyParser = require('body-parser');

//bring in routes
const postRoutes = require("./routes/post");

//bring in controllers
const jsonHandler = require("./controllers/dataHandlerJson")

//bring in JSON db
var people = require('./db/people.json');

//middleware 
const myOwnMiddleware = (req, res, next) =>{
	console.log('middelware applied!!!');
	next();
};

app.use(bodyParser.urlencoded({     // to support URL-encoded bodies
  extended: true
})); 

app.use(morgan("dev"));
app.use(myOwnMiddleware);
app.use("/", postRoutes);
app.use("/", jsonHandler);

console.log(people.person);


/*const port = 8080;
app.listen(port, () => {
	console.log(`A Node Js API is listening on port: ${port}`);
}); */

app.listen(port);