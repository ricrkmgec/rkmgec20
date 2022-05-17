import User from '../../../models/User';

// get a user
 const user= async  (req, res) => {
  const userId = req.query;
  const { method } = req;
  switch (method) {
    case "GET":
  try {
    const user = await User.findOne({_id:userId.user});
    // console.log(userId.user)
    // const user = await User.find({})
    // const { password, updatedAt, ...other } = user._doc;
    // res.status(200).json(user);
    res.status(200).json({success: true, data:user });
  } catch (err) {
    res.status(500).json({err:err.message});
  }
};}
 export default user;