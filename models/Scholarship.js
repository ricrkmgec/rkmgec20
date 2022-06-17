import mongoose from "mongoose";

const ScholarshipSchema = new mongoose.Schema(
  {
    scholarship_name: {
      type: String,
      maxlength: [50, "Scholarship Title cannot be more than 50 characters"],
      required: [true, "Please provide the  Scholarship Title"],
    },
 
    details: {
      type: String,
  
      minlength: [10, "Scholarship details cannot be less than 10 characters"],
    },
    link: {
      type: String,
    },
    type: {
      type: String,
      required: [true, "Please provide the type"],
      maxlength: [20, "Type cannot be more than 20 characters"],
    },
    
  },
  { timestamps: true }
);

export default mongoose.models.Scholarship || mongoose.model("Scholarship", ScholarshipSchema);
