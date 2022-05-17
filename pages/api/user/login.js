import { useRouter } from "next/router";
import User from "../../../models/User";
import dbConnect from "../../../lib/mongodb";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
const SECRET_KEY = process.env.SECRET_KEY;

export default async function handler(req, res) {
  await dbConnect();
  const { method } = req;
  const { email, password } = req.body;

  switch (method) {
    case "POST":
      try {
        const user = await User.findOne({ email });
        if (!user) {
          res.status(404).json({ error: true, message: "User not found" });
        } else {
          const validPassword = await bcrypt.compare(password, user.password);
          if (!validPassword) {
            res.status(401).json({ error: true, message: "Auth Failed" });
          } else {
            const token = jwt.sign(
              {
                userId: user._id,
                name: user.name,
                email: user.email,
                admin: user.isAdmin,
                session: user.session,
              },
              SECRET_KEY,
              {
                expiresIn: 3600,
              }
            );
            res
              .status(200)
              .json({ token, success: true, message: "successfull login" });
            return;
          }
        }
      } catch (err) {
        return res.status(400).json({ message: err.message });
      }
  }
}
