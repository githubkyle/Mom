require("dotenv").config({ path: "../.env" });
const mongoose = require("mongoose");

mongoose.connect(process.env.MONGODB_URI);

module.exports = mongoose.connection;
