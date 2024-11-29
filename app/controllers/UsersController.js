
import UsersModel from "../models/UsersModel.js";
import {EncodeToken} from "../utility/tokenUtility.js";

export const Registration = async (req, res) => {

    const reqBody=req.body
    const data=await UsersModel.findOne(reqBody);
    return res.json({
      status: "success",
      data: data,
      message: "User profile details successfully",
    });

}

export const Login = async (req, res) => {
try {
  const reqBody=req.body
  const user=await UsersModel.findOne(reqBody);
  if (!user) {
    return res.status(404).json({
      status: "error",
      message: "User not found",
    })}
    // log in successfully token generation
   let token =EncodeToken(user["email"], user["_id"]) ;
    return res.json({
      status: "success",
      token: token,
      Message: "User log-in successfully",
    });

}catch (err) {
  return res.status(500).json({
    status: "error",
    message: err.toString(),

})}
};

export const ProfileDetails = async (req, res) => {
  try {
        const user_id=req.headers["user_id"]
        if (!user_id){
          return res.status(401).json({
            status: "error",
            message: "Unauthorized access",
          })}
        const data=await UsersModel.findOne({"_id": user_id});
      return res.json({
          status: "success",
          data: data,
      });
      } catch (err) {
        return res.status(500).json({
          status: "error",
          message: err.toString(),
        })
      }
    }
;
export const ProfileUpdate = async (req, res) => {
  const data=await UsersModel.findOne(reqBody);
  const reqBody=req.body


};
export const EmailVerified = async (req, res) => {
  return res.json({
    status: "success",
    Message: "User Email Verified successfully",
  });
};
export const CodeVerified = async (req, res) => {
  return res.json({
    status: "success",
    Message: "User Code Verified successfully",
  });
};
export const ResetPassword = async (req, res) => {
  return res.json({
    status: "success",
    Message: "User password reset Verified successfully",
  });
};

/*
*
*
*
*
* try {
    const reqBody=req.body
    const data=await UsersModel.findOne(reqBody);
    if (data === null) {
      return res.status(404).json({
        status: "error",
        message: "User not found",
      });
    } else {
      // log in successfully token generation
      const token = EncodeToken(data["email"], data["_id"]);
      return res.json({
        status: "success",
        token: token,
        Message: "User log-in successfully",
      });
    }
  } catch (err) {
    console.error(err);
    return res.status(500).json({
      status: "error",
      message: err.toString(),
    });
  }
* */