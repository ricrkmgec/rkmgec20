import mongoose from "mongoose";

const EbookSchema = new mongoose.Schema(
  {
    userId: {
      type: String,
      // required: [true, 'Please Enter your Userid.'],
      maxlength: [60, "id cannot be more than 60 characters"],
    },
    // name: {
    //   type: String,
    //   default: "subha",
    //   required: [true, "Please provide the  Book Title"],
    //   // required: [true, 'Please Enter your Userid.'],
    //   maxlength: [30, "Name cannot be more than 60 characters"],
    // },
    title: {
      type: String,
      required: [true, "Please provide the  Book Title"],
      maxlength: [20, "Book Title cannot be more than 20 characters"],
    },
    resource: {
      type: String,
      required: [true, "Please provide the author name"],
      maxlength: [40, "Resource  cannot be more than 40 characters"],
    },
    type: {
      type: String,
      maxlength: [30, "Type number must be 30 Digit"],
    },
    category: {
      type: String,
      maxlength: [30, "Category number must be 30 Digit"],
    },
    link: {
      type: String,
      // required: [true, 'Please Enter your Userid.'],
      maxlength: [200, "session cannot be more than 200 characters"],
    },
    likes: {
      type: Array,
      default: [],
    },
    isShow: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true }
);
export default mongoose.models.Ebook || mongoose.model("Ebook", EbookSchema);
