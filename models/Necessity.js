import mongoose from "mongoose";

const NecessitySchema = new mongoose.Schema(
  {
    userId: {
      type: String,
      // required: [true, 'Please Enter your Userid.'],
      maxlength: [30, "id cannot be more than 60 characters"],
    },
    // name: {
    //   type: String,
    //   default: "subha",
    //   required: [true, "Please provide the  Book Title"],
    //   // required: [true, 'Please Enter your Userid.'],
    //   maxlength: [30, "Name cannot be more than 60 characters"],
    // },
    // session: {
    //   type: String,
    //   // required: [true, 'Please Enter your Userid.'],
    //   maxlength: [30, "session cannot be more than 60 characters"],
    // },
    product_name: {
      type: String,
      required: [true, "Please provide the  Book Title"],
      maxlength: [30, "Product name cannot be more than 30 characters"],
    },
    details: {
      type: String,
      required: [true, "Please provide the author name"],
      minlength: [20, "Details cannot be less than 20 characters"],
    },
    price: {
      type: Number,
      maxlength: [5, "price number must be less than 6 Digit"],
    },
    contact: {
      type: Number,
      maxlength: [10, "Contact number must be 10 Digit"],
    },
    imageUrl: {
      type:Array,
    },
    isShow: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true }
);
NecessitySchema.index({ createdAt: 1 }, { expireAfterSeconds: 2628000 });

export default mongoose.models.Necessity || mongoose.model("Necessity", NecessitySchema);
