import Necessity from '../../../models/Necessity'
import dbConnect from "../../../lib/mongodb";

    
    export default async function handler(req, res) {
        const NcsID  = req.query;
        
    await dbConnect();
  const { method } = req;
//   console.log({_id:BookID.book})
  switch (method) {
    case "PUT":
      try {
        const { isshow} = req.body;
        // if (!name && !email) return "inavalid data";
        await Necessity.updateOne({ _id:NcsID.ncs}, { isShow:true});
        await res.status(200).json({ success: true ,message:"Necessity request is Approved"});
        // console.log('okkkkkkkkkkkkkk')
      } catch (error) {
        res.status(500).json({ success: false, error,message:"something is wrong" });
      }
      break;

    case "DELETE":
      try {
        await Necessity.deleteOne({ _id: NcsID.ncs });
        // console.log("ok"+{_id: BookID.book} )
        res.status(200).json({ success: true,message:"Necessity request is Deleted" });
      } catch (error) {
        // console.log(error);
        res.status(500).json({ success: false, error ,message:"something is wrong"});
      }
      break;
  }
}