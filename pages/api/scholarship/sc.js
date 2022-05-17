import { useRouter } from "next/router";
import Scholarship from "../../../models/Scholarship";
import dbConnect from "../../../lib/mongodb";

export default async function handler (req, res) {
    await dbConnect();
    // const { bookId} = req.query
    const { method} = req;
    const {  scholarship_name,details,type, } = req.body;
    // console.log(req.body)
    switch (method) {
    //  case "GET":
    // try {
    //   const book = Books.find(book => book._id === parseInt(bookId))
    //   res.status(200)
    //     .json(book)
    // } catch (error) {
    //   return res.status(400).json({  message: new Error(error).message,
    //     success: false, });
    // }
//     case "DELETE":
//      try{
//       const deletedbook = Books.deleteOne({bookId});
//       // find(
//       //   book => book._id === parse(bookId)
//       // )
//       // const index = Books.findIndex(
//       //   book => book._id === parseInt(bookId)
//       // )
//       // books.splice(index, 1)
//       res.status(200)
//         .json(deletedbook)
//     } catch (error) {
//       return res.status(400).json({  message: new Error(error).message,
//         success: false, });
//     }
// break;
        case "POST":
            try {
              const newScholarship = new Scholarship({
                scholarship_name,
                details,
                type,
              });
              const savedScholarship = await newScholarship.save();
              console.log(savedScholarship)
              return res.status(200).json({message: 'Scholarship is  added successfully in the list',
              // console.log("success"),
              success: true,});
            } catch (error) {
              return res.status(400).json({  message: new Error(error).message,
                // console.log("ERRor is given"),
                success: false, });
            }
            // break
        }
      };
