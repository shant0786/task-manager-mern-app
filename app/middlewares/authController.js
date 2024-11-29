import {DecodeToken} from "../utility/tokenUtility.js";

export default (req, res, next) => {
    const token = req.headers['token'];
    const decoded = DecodeToken(token);
    if (!decoded) {
        res.status(401).send({status:"fail", message:"Unauthorized access"});
    }else{
        const email=decoded.email;
        const user_id = decoded.user_id;

        // email, user_id add with request header

        req.headders.email = email;
        req.headders.user_id = user_id;
        next();
    }
}
