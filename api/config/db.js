"use strict";

const mongoose = require("mongoose"); // Mongoose module
// eslint-disable-next-line import/no-extraneous-dependencies
const { MongoMemoryServer } = require("mongodb-memory-server");

const connectDB = (dbString = process.env.DB_STRING) => new Promise((resolve, reject) => {
    mongoose.connect(dbString || "mongodb://127.0.0.1:27017/perfanalytics", { useNewUrlParser: true, useUnifiedTopology: true }); // Connect to the remote db
    mongoose.set("useCreateIndex", true); // Use create index same as T-SQL

    mongoose.connection.on("open", () => {
        // Connection is successful
        console.log("MongoDB Connection is Successful");
        resolve(true);
    });
    mongoose.connection.on("error", (err) => {
        // Connection is unsuccessful
        console.log("MongoDB Error: ", err);
        reject(false);
    });

    mongoose.Promise = global.Promise;
});

let server;
const createDB = async () => {
    try {
        server = await MongoMemoryServer.create();
        const url = `${server.getUri()}perfanalytics_test`;
        await mongoose.connect(url);
    } catch (err) {
        console.log(err);
        throw err;
    }
};

const destroyDatabase = async () => {
    await mongoose.connection.dropDatabase();
    await mongoose.connection.db.collections();
    await mongoose.connection.close();
    await server.stop();
};

module.exports = {
    connectDB,
    createDB,
    destroyDatabase,
};
