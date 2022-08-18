import mongoose from "mongoose";

const FeedbackSchema = new mongoose.Schema(
  {
    userId: {
      type: String,
      maxlength: [60, "id cannot be more than 60 characters"],
    },
    name: {
      type: String,
      required: [true, 'Please Enter your Name.'],
      maxlength: [30, "Name cannot be more than 60 characters"],
    },
    email: {
      type: String,
      required: [true, "Please provide the  Email"],
      maxlength: [50, "Email cannot be more than 50 characters"],
    },
    contact: {
      type: Number,
      required: [true, "Please provide the Contact Number"],
      maxlength: [10, "Contact cannot be more than 10 characters"],
    },
    category: {
      type: String,
      maxlength: [30, "Category number must be 30 Digit"],
    },
    feedback: {
      type: String,
      maxlength: [1000, "Feedback cannot be more than 1000 characters"],
    },
  },
  { timestamps: true }
);
export default mongoose.models.Feedback || mongoose.model("Feedback", FeedbackSchema);
