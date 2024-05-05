import mongoose, { Schema } from "mongoose";

const UserSachema = new Schema({
 
  about: String,
});

export const User =
  mongoose.models.users || mongoose.model("users", UserSachema);
