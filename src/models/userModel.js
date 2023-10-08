import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  username: String,
  password: String,
  refresh_token: String,
});

const User = mongoose.model("User", userSchema);

export default User;
