import jwt from 'jsonwebtoken'
const jwtSecret = process.env.SECRET_KEY;
const auth = (req, res) => {
    const token = req.headers["x-auth-token"]
    console.log(token)
    if (!token)
        return res.status(401).json({ "error": "true", "msg": "no authentication token" })
    
    const verifiedToken = jwt.verify(token, process.env.JWT_SECRET)
    if (!verifiedToken)
        return res.status(401).json({ "error": "true", "msg": "token failed" })
    
    req.user = verifiedToken.id
}

export default auth