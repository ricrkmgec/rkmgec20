import Books from '../../../models/Books'
import dbConnect from "../../../lib/mongodb";

    
    export default async function handler(req, res) {
        const BookID  = req.query;
        
    await dbConnect();
  const { method } = req;
//   console.log({_id:BookID.book})
  switch (method) {
    case "PUT":
      try {
        const { isshow} = req.body;
        // if (!name && !email) return "inavalid data";
        await Books.updateOne({ _id:BookID.book  }, { isShow:true});
        await res.status(200).json({ success: true ,message:"Book request is Approved"});
        // console.log('okkkkkkkkkkkkkk')
      } catch (error) {
        res.status(500).json({ success: false, error,message:"something is wrong" });
      }
      break;

    case "DELETE":
      try {
        await Books.deleteOne({ _id: BookID.book });
        // console.log("ok"+{_id: BookID.book} )
        res.status(200).json({ success: true,message:"Book request is Deleted" });
      } catch (error) {
        // console.log(error);
        res.status(500).json({ success: false, error ,message:"something is wrong"});
      }
      break;
  }
}