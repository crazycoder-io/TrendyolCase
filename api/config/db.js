'use strict';

const mongoose = require('mongoose'); // Mongoose module

module.exports = () => {
	mongoose.connect(process.env.DB_STRING, {useNewUrlParser: true, useUnifiedTopology: true}); // Connect to the remote db
	mongoose.set('useCreateIndex', true); // Use create index same as T-SQL

	mongoose.connection.on('open', () => {
		//Connection is successful
		console.log('MongoDB Connection is Successful');
	});
	mongoose.connection.on('error', err => {
		//Connection is unsuccessful
		console.log('MongoDB Error: ', err);
	});

	mongoose.Promise = global.Promise;
};