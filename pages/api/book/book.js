import { useRouter } from "next/router";
import Books from "../../../models/Books";
import dbConnect from "../../../lib/mongodb";

export default async function handler (req, res) {
    await dbConnect();
    const { bookId} = req.query
    const { method} = req;
    const {  userId,name,session,book_title,author,contact } = req.body;
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
          const already=await Books.findOne({book_title})
          if (already) {
            if (already.userId==userId) {
              return res.status(400).json({error:true,success:false,message:"Already Submitted"})
            }
          } else {
            
            const newBook = new Books({
              userId,
              name,
              session,
              book_title,
              author,
              contact,
            });
            const savedBook = await newBook.save();
            return res.status(200).json({message: 'Book is  added successfully in the list',
            success: true,});
          }
            } catch (error) {
              return res.status(400).json({  message: new Error(error).message,
                success: false, });
            }
            // break
        }
      };

       