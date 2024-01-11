import mongoose from "mongoose";
import "dotenv/config";
import express from "express";
import connectDB from "./db/db.js";

connectDB();

const app = express();
app.on("error", (e) => {
  console.log("can't connect with express", e);
  throw e;
});
app.get("/", (req, res) => {
  res.send("hello world");
});
app.listen(process.env.PORT, () => {
  console.log("server listening on port", process.env.PORT);
});
