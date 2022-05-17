import Ebook from "../../../models/Ebooks&video";
import dbConnect from "../../../lib/mongodb";

export default async function handler(req, res) {
  const EbookId = req.query;
  await dbConnect();
  const { method } = req;
  switch (method) {
    case "PUT":
      try {
        const likes = req.body.likes;
        const ebooklike = await Ebook.findById(EbookId.likes);
        if (!ebooklike.likes.includes(likes)) {
          await ebooklike.updateOne({ $push: { likes: likes } });
          await res
            .status(200)
            .json({ success: true, message: "Likes is added" });
        } else {
          await ebooklike.updateOne({ $pull: { likes } });
          await res
            .status(200)
            .json({ success: false, message: "Like is removed" });
        }
      } catch (error) {
        await res
          .status(500)
          .json({ success: false, error, message: "something is wrong" });
      }
      break;
  }
}
