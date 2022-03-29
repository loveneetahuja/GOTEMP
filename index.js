const express = require("express");

const app = express();

if (process.env.NODE_ENV == "production") {
	//Express will serve up production assets
	app.use(express.static("public"));

	const path = require("path");
	app.get("*", (req, res) => {
		res.sendFile(path.resolve(__dirname, "public", "index.html"));
	});

	const PORT = process.env.PORT || 5000;
	app.listen(PORT);
	console.log("Glitch Over Temporary Website " + PORT);
} else {
	app.use(express.static("public"));

	const path = require("path");
	app.get("*", (req, res) => {
		res.sendFile(path.resolve(__dirname, "public", "index.html"));
	});

	const PORT = process.env.PORT || 5000;
	//server.listen(PORT);

	app.listen(PORT);
	console.log("Temporary Website " + PORT);
}
