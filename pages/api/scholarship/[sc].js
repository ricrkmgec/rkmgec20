import Scholarship from '../../../models/Scholarship'
import dbConnect from "../../../lib/mongodb";
export default async function handler(req, res) {
    const ID = req.query;
    await dbConnect();
    const { method } = req;
    switch (method) {
        case "DELETE":
            try {
                await Scholarship.deleteOne({ _id:ID.sc });
                res.status(200).json({ success: true, message: "Scholarship is Deleted" });
            } catch (error) {
                res.status(500).json({ success: false, error, message: "Something is wrong" });
            }
            break;
    }
}