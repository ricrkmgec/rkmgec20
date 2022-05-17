import mongoose from "mongoose";

const ScholarshipSchema = new mongoose.Schema(
  {
    scholarship_name: {
      type: String,
      maxlength: [60, "Name cannot be more than 60 characters"],
      required: [true, "Please provide the  Scholarship Title"],
    },
 
    details: {
      type: String,
  
      minlength: [20, "Book Title cannot be more than 60 characters"],
    },
    type: {
      type: String,
      required: [true, "Please provide the author name"],
      maxlength: [20, "Author cannot be more than 60 characters"],
    },
    
  },
  { timestamps: true }
);

export default mongoose.models.Scholarship || mongoose.model("Scholarship", ScholarshipSchema);
