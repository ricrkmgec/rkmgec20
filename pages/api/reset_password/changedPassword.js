import { useRouter } from "next/router";
import User from "../../../models/User";
import AccessToken from "../../../models/AccessToken";
import dbConnect from "../../../lib/mongodb";
import bcrypt from "bcrypt";
import cookie from "js-cookie";
import jwt from "jsonwebtoken";
import sendResetPasswordEmail from "./mailer";
const SECRET_KEY = process.env.SECRET_KEY;

export default async function handler(req, res) {
    await dbConnect();
    const { method } = req;
    const { hash, password } = req.body;

    switch (method) {
        case "POST":
            try {

                const hashd = hash.hashed;
                const ahash = await AccessToken.findOne({ _id: hashd });


                if (!ahash || !ahash._id) {
                    res
                        .status(422)
                        .json({ error: true, message: "You Cannot Change Password" });
                } else {

                    const user = await User.findOne({ _id: ahash.userId });
                    if (!user) {
                        res.status(404).json({ error: true, message: "You Cannot Change Password" });
                    }
                    const saltRounds = 10;
                    const hashedPassword = await bcrypt.hash(password, saltRounds);
                    console.log(hashedPassword)
                    cookie.remove("token");
                    await ahash.remove();
                    User.findByIdAndUpdate(user._id, { password: hashedPassword }, (err) => {
                        if (err) {
                            return res.json({ error: true, message: "Password not Updated" })
                        } else {
                            res.json({ success: true, message: "Password Changed Successfully, Thanks" })
                        }
                    })
                }
            } catch (err) {

                return res.status(400).json({ message: err.message });
            }
    }
}
