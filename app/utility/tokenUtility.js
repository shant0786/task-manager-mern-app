import { JWT_SECRET, JWT_EXPIRATION_TIME } from "../config/config.js";
import jwt from "jsonwebtoken"

 const EncodeToken = function (email, user_id) {
   const KEY=JWT_SECRET
   const EXPIRE={expiresIn: JWT_EXPIRATION_TIME}
   const PAYLOAD={email:email,user_id:user_id}
   return jwt.sign(PAYLOAD,KEY,EXPIRE)
};
export default EncodeToken;


export const DecodeToken = function (token) {
  try {
    const PAYLOAD = jwt.verify(token, JWT_SECRET);
    return PAYLOAD;
  } catch (err) {
    console.error(err.message);
  }
};
