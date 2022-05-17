import { useRouter } from "next/router";
import User from "../../../models/User";
import AccessToken from "../../../models/AccessToken";
import dbConnect from "../../../lib/mongodb";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import sendResetPasswordEmail from './mailer'
import { toast } from "react-toastify";
const SECRET_KEY = process.env.SECRET_KEY;

export default async function handler(req, res) {
  await dbConnect();
  const { method } = req;
  const { email} = req.body;

  switch (method) {
    case "POST":
      try {
        const user = await User.findOne({ email });
        // console.log(user);
        if (!user) {
          res.status(404).json({ error: true, message: "User not found" });
        }
        else {
          // return res.status(100).json({
            //     success: true,
            //     message: "Email to reset password was already sent !",
            //   });
            const userId = user._id;
        const hashedtokenn = await AccessToken.findOne({ userId });
        // user
        if (hashedtokenn) {
          try {
           
              res.status(200).json({
              success: true,
              message: "Email to reset password was already sent !",
            });
          } catch (error) {
            toast.error(error.name)
          }
        } else {
          try {
            
            const hash = new AccessToken({ userId });
            await hash.save();
           await sendResetPasswordEmail({User:user, hash:hash._id});
           return  res.status(200).json({
              success: true,
              message:
                "We send Reset link in Your Official Email,Please check it",
            });
          } catch (error) {
            toast.error(error.name)
          }
          }
        }
      } catch (err) {
     toast.error(err.name)
        return res.status(400).json({ message: err.message });
      }
  }
}
