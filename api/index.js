"use strict";

const mongoose = require("mongoose"); // Mongoose module
const createServer = require("./server"); // new server
const { connectDB } = require("./config/db");

(() => {
    connectDB()
        .then((dbStatus) => {
            const app = createServer(); // new
            if (dbStatus) {
                app.listen(process.env.PORT || 5000, () => {
                    console.log("Server has started!");
                });
            }
        });
})();
