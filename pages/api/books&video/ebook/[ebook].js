import Ebook from '../../../../models/Ebooks&video'
import dbConnect from "../../../../lib/mongodb";

    
    export default async function handler(req, res) {
        const BookID  = req.query;
        console.log(BookID.ebook);
    await dbConnect();
  const { method } = req;
//   console.log({_id:BookID.book})
  switch (method) {
    case "PUT":
      try {
        const { isshow} = req.body;
        // if (!name && !email) return "inavalid data";
        await Ebook.updateOne({ _id:BookID.ebook  }, { isShow:true});
        await res.status(200).json({ success: true ,message:"Ebook request is Approved"});
        // console.log('okkkkkkkkkkkkkk')
      } catch (error) {
        console.log(error);
        res.status(500).json({ success: false, error,message:"something is wrong" });
      }
      break;

    case "DELETE":
      try {
        await Ebook.deleteOne({ _id: BookID.ebook });
        // console.log("ok"+{_id: BookID.book} )
        res.status(200).json({ success: true,message:"Ebook request is Deleted" });
      } catch (error) {
        // console.log(error);
        res.status(500).json({ success: false, error ,message:"something is wrong"});
      }
      break;
  }
}