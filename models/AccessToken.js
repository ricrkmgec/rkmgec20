import mongoose from "mongoose";

const AccessTokenSchema = new mongoose.Schema(
  {
    userId: {
      type: String,
      // require: true,
      // min: 3,
      // max: 20,
      // unique: true,
    },
    hashedToken: {
      type: String,
    },
  },
  { timestamps: true }
);

AccessTokenSchema.index({ createdAt: 1 }, { expireAfterSeconds: 300 });
// export default model("User", UserSchema);
export default mongoose.models.AccessToken ||
  mongoose.model("AccessToken", AccessTokenSchema);
