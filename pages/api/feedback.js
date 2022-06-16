import Feedback from "../../models/Feedback";
import dbConnect from "../../lib/mongodb";

export default async function handler(req, res) {
    await dbConnect();
    const { method } = req;
    const { userId, name, email, contact, category, feedback } = req.body;
    switch (method) {
        case "POST":
            try {
                const newFeedback = new Feedback({
                    userId,
                    name,
                    email,
                    contact,
                    category,
                    feedback,
                });      
                const savedFeedback = await newFeedback.save();
                return res.status(200).json({
                    message: 'Feedback is accespted',
                    success: true,
                });
            }
            catch (error) {
                return res.status(400).json({
                    message: new Error(error).message,
                    success: false,
                });
            }
    }
};