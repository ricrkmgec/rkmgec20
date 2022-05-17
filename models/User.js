import mongoose from "mongoose";

const UserSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      require: true,
      min: 3,
      max: 20,
      unique: true,
    },
    email: {
      type: String,
      // required: true,
      max: 50,
      unique: true,
    },
    rollNo: {
      type: String,
      // required: true,
      max: 50,
      unique: true,
    },
    password: {
      type: String,
      required: true,
      // min: [6, "Contact number must be 10 Digit"],
    },
    profilePicture: {
      type: String,
      default: "",
    },
    isAdmin: {
      type: Boolean,
      default: false,
    },
    session: {
      type: String,
      default: "",
    },
    desc: {
      type: String,
      max: 50,
    },
  },
  // { timestamps: true }
);

// export default model("User", UserSchema);
export default mongoose.models.User || mongoose.model("User", UserSchema);
