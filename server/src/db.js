import mongoose from "mongoose";

mongoose.connect("mongodb://localhost:27017/twitter-clone");
const db = mongoose.connection;
db.on("connected", () => {
  console.log("MongoDB connected");
});

db.on("error", (err) => {
  console.error("MongoDB connection error:", err);
});

export default db;
