import Scholarship from "../../../models/Scholarship";
import dbConnect from "../../../lib/mongodb";

export default async function handler(req, res) {
  await dbConnect();
  const { method } = req;
  const { scholarship_name, details, type, } = req.body;
  switch (method) {
    case "POST":
      try {
        const newScholarship = new Scholarship({
          scholarship_name,
          details,
          type,
        });
        const savedScholarship = await newScholarship.save();
        return res.status(200).json({
          message: 'Scholarship is  added successfully in the list',
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
