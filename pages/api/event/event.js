import Event from "../../../models/Events";
import dbConnect from "../../../lib/mongodb";

export default async function handler(req, res) {
  await dbConnect();
  const { method } = req;
  console.log(req.body)
  const { userId,eventName, type,link,date,imageUrl } = req.body;
  switch (method) {
    case "POST":
      try {
        const newEvent = new Event({
          userId,
          eventName,
          type,
          link,
          date,
          imageUrl
        });
        await newEvent.save();
        return res.status(200).json({
          message: 'Form is Successfully Submitted',
          success: true,
        });
      } catch (error) {
        return res.status(400).json({
          message: new Error(error).message,
          success: false,
        });
      }
  }
};
