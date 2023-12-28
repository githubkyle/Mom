// require("dotenv").config({ path: "../.env" });
// const mongoose = require("mongoose");

// mongoose.connect(
//   process.env.MONGODB_URI || "mongodb://127.0.0.1:27017/workout-stuff"
// );

// module.exports = mongoose.connection;
import path from "path";
import express from "express";
import commentRouter from "./routes/commentRoutes.js";
import connectDB from "./config/connection.js";
import cors from "cors";
const __dirname = path.resolve();
const app = express();
const PORT = 3001;

app.use(
  cors({
    origin: "*"
  })
);
app.use(express.json());
// app.use(express.static(path.join(__dirname, "client/build")));

app.get("/", (req, res) => {
  res.send("server is up");
});

app.use("/api", commentRouter);
// app.get("/", (req, res) => {
//   res.send("SERVER IS UP");
// });
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname + "../build/index.html"));
});

app.listen(process.env.PORT || PORT, () => {
  connectDB();
  console.log(`SERVER IS RUNNING ON PORT ${PORT}`);
});
