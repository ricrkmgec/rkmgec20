import Necessity from "../../../models/Necessity";
import dbConnect from "../../../lib/mongodb";

export default async function handler(req, res) {
  await dbConnect();
  const { method } = req;
  console.log(req.body)
  const { userId,product_name, details,price,contact,selected,imageUrl } = req.body;
  switch (method) {
    case "POST":
      try {
        const newNecessity = new Necessity({
          userId,
          product_name,
          details,
          price,
          contact,
          tags:selected,
          imageUrl
        });
        const savedScholarship = await newNecessity.save();
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
