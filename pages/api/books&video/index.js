import { useRouter } from "next/router";
import Ebook from "../../../models/Ebooks&video";
import dbConnect from "../../../lib/mongodb";

export default async function handler (req, res) {
    await dbConnect();
    const { bookId} = req.query
    const { method} = req;
    const {  userId,link,title,resource,type,category } = req.body;
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
            //   const user = await User.findOne({ email  book_title  });
            //   if (user) {
            //     return res.status(422).json({ error: "please another email" });
            //   }
          // console.log(name)
          // console.log(userId)
          const already =await Ebook.findOne({link})
          if (already) {
            return res.status(400).json({  message: "The link is already there",
              success: false, });
          } else {
            
            const newEbook = new Ebook({
              userId,
              // name,
              title,
              resource,
              type,
              category,
              link,
            });
            const savedBook = await newEbook.save();
            return res.status(200).json({message: 'Ebook or Video is  added successfully in the list',
            success: true,});
          }
            } catch (error) {
              return res.status(400).json({  message: new Error(error).message,
                success: false, });
            }
            // break
        }
      };