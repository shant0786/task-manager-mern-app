import { JWT_SECRET, JWT_EXPIRATION_TIME } from "../config/config.js";
import jwt from "jsonwebtoken"
import {response} from "express";

    const EXPIRE = {expiresIn: JWT_EXPIRATION_TIME}
    const KEY = JWT_SECRET
 export const EncodeToken = function (email, user_id) {
  try {
    const PAYLOAD = {email: email, user_id: user_id}
    return jwt.sign(PAYLOAD, KEY, EXPIRE)
  }catch(err){
    console.error(err.message);
  }
};



export const DecodeToken = function (token) {
  try {
    const PAYLOAD = jwt.verify(token,KEY );
    return PAYLOAD;
  } catch (err) {
    console.error(err.message);
    return null;
  }
};

