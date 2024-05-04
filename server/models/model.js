// models/model.js (Fix)
import mongoose, { model } from "mongoose";

const Schema = mongoose.Schema;

const userSchema = new Schema({
  fname: String,
  lname: String,
  email: String,
  pass: String,
});

const User = mongoose.model("User", userSchema);

export default User;
