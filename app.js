const express = require("express");
const app = express();
const routerjs = require("./router.js");
const ejs = require("ejs");
const port = 3500;

app.use("/", routerjs);

app.listen(port, ()=>{
	console.log(`Listen in port: ${port}`);
});

