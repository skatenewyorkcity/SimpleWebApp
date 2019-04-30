const express = require("express");
const app = express();
const morgan = require("morgan");

//bring in routes
const postRoutes = require("./routes/post");

//middleware 
const myOwnMiddleware = (req, res, next) =>{
	console.log('middelware applied!!!');
	next();
};

app.use(morgan("dev"));
app.use(myOwnMiddleware);

/*app.get("/", getPosts);*/

app.use("/", postRoutes);

console.log("something");

const port = 8080;
app.listen(port, () => {
	console.log(`A Node Js API is listening on port: ${port}`);
});