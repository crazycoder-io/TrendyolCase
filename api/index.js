"use strict";
const mongoose = require('mongoose'); // Mongoose module
const express = require("express")
const createServer = require("./server") // new

mongoose
	.connect(process.env.DB_STRING, {useNewUrlParser: true, useUnifiedTopology: true})
	.then(() => {
		const app = createServer() // new
		app.listen(process.env.PORT || 5000, () => {
			console.log("Server has started!")
		})
	});

