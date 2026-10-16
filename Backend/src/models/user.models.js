import mongoose from "mongoose";
import passportLocalMongoose from 'passport-local-mongoose';

const userSchema = new mongoose.Schema(
  {
    email: {
      type: String,
      require: true,
      unique: true,
      lowercase: true,
      trim: true,
    },
    fullName: {
      type: String,
      require: true,
    },
    dob: {
      type: String,
      require: true,
    },
    mobile: {
      type: Number,
      require: true,
      unique: true,
    },
  },
  {
    timestamps: true,
  },
);

userSchema.plugin(passportLocalMongoose, {
  usernameField: "email",
});

export const User = mongoose.model("User", userSchema);