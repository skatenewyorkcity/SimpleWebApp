const express = require("express");
const app = express();
var mysql = require('mysql');

const port = process.env.PORT || 4000;

//---

const morgan = require("morgan");
const bodyParser = require('body-parser');

//bring in routes
const viewsRoutes = require("./routes/viewsRoutes");

//bring in controllers
const jsonRoutes = require("./routes/jsonRoutes")

//bring in JSON db
var people = require('./db/people.json');

//middleware 
const myOwnMiddleware = (req, res, next) =>{
	console.log('middelware applied!!!');
	next();
};

// to support URL-encoded bodies
app.use(bodyParser.urlencoded({     
  extended: true
})); 
//allows to parse jsons through application for sql, otherwise req.body would be null on requests
app.use(bodyParser.json());

app.use(morgan("dev"));
app.use(myOwnMiddleware);
app.use("/", viewsRoutes);
app.use("/", jsonRoutes);

console.log(people.person);

/*const port = 8080;
app.listen(port, () => {
	console.log(`A Node Js API is listening on port: ${port}`);
}); */

app.listen(port);