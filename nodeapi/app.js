const express = require("express");
const app = express();
const morgan = require("morgan");

//bring in routes
const postRoutes = require("./routes/post");

const bodyParser = require('body-parser');
var people = require('./db/people.json');

//middleware 
const myOwnMiddleware = (req, res, next) =>{
	console.log('middelware applied!!!');
	next();
};

app.use(morgan("dev"));
app.use(myOwnMiddleware);
app.use(bodyParser.json());

/*app.get("/", getPosts);*/

app.use("/", postRoutes);

//

console.log(people.person);

//

const port = 8080;
app.listen(port, () => {
	console.log(`A Node Js API is listening on port: ${port}`);
}); 