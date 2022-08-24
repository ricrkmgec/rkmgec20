import mongoose from "mongoose";

const EventSchema = new mongoose.Schema(
  {
    userId: {
      type: String,
      required: [true, 'Please Enter your Userid.'],
      maxlength: [30, "id cannot be more than 60 characters"],
    },
    eventName: {
      type: String,
      required: [true, "Please provide the Event Name"],
      maxlength: [30, "Event name cannot be more than 30 characters"],
    },
    type: {
      type: String,
      required: [true, "Please provide the type"],
      maxlength: [30, "type cannot be more than 30 characters"],
    },
    link: {
      type: String,
      required: [true, "Please provide the Google form Link"],
      minlength: [5, "link cannot be less than 5 characters"],
    },
    date:{
      type: String,
      // default:02-2-677;
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
EventSchema.index({ createdAt: 1 }, { expireAfterSeconds: 2628000 });

export default mongoose.models.Event || mongoose.model("Event", EventSchema);
