const fs = require("fs");
const fileName = "target.txt";

const errHandler = err => console.log(err);

const dataHandler = data => console.log(data.toString());

/*const dataHandler = err => {
	console.log(data.toString());
}*/

/*fs.watch(fileName, () => console.log(`file changed!`));*/

fs.readFile(fileName, (err, data) => {
	if(err) {
		console.log(err);
	}

	console.log(data);
});

console.log("Node js async programming...?");

/*console.log("Node js async programming...?");*/
