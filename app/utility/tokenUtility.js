import { JWT_SECRET, JWT_EXPIRATION_TIME } from "../config/config.js";
import { jwt } from "jsonwebtoken";

export const EncodeToken = function (email, user_id) {
  const PAYLOAD = { email: email, user_id: user_id };
  return jwt.sign(PAYLOAD, JWT_SECRET, JWT_EXPIRATION_TIME);
};

export const DecodeToken = function (token) {
  try {
    const PAYLOAD = jwt.verify(token, JWT_SECRET);
    return PAYLOAD;
  } catch (err) {
    console.error(err.message);
  }
};
