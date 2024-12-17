import UsersModel from "../models/UsersModel.js";
import { EncodeToken } from "../utility/tokenUtility.js";
import usersModel from "../models/UsersModel.js";
import { EmailSender } from "../utility/emailUtility.js";

export const Registration = async (req, res) => {
  try {
    const reqBody = req.body;
    const data = await UsersModel.create(reqBody);
    return res.json({
      status: "success",
      data: data,
      message: "User profile details successfully",
    });
  } catch (err) {
    return res.status(500).json({
      status: "error",
      message: err.toString(),
    });
  }
};

export const Login = async (req, res) => {
  try {
    const reqBody = req.body;
    const user = await UsersModel.findOne(reqBody);
    if (!user) {
      return res.status(404).json({
        status: "error",
        message: "User not found",
      });
    }
    // log in successfully token generation
    let token = EncodeToken(user["email"], user["_id"]);
    return res.json({
      status: "success",
      token: token,
      Message: "User log-in successfully",
    });
  } catch (err) {
    return res.status(500).json({
      status: "error",
      message: err.toString(),
    });
  }
};

export const ProfileDetails = async (req, res) => {
  try {
    const user_id = req.headers["user_id"];
    if (!user_id) {
      return res.status(401).json({
        status: "error",
        message: "Unauthorized access",
      });
    }
    const data = await UsersModel.findOne({ _id: user_id });
    return res.json({
      status: "success",
      data: data,
    });
  } catch (err) {
    return res.status(500).json({
      status: "error",
      message: err.toString(),
    });
  }
};

export const ProfileUpdate = async (req, res) => {
  try {
    const reqBody = req.body;
    const user_id = req.headers["user_id"];
    await UsersModel.updateOne({ _id: user_id }, reqBody);
    return res.json({
      status: "success",
      message: "User profile details updated successfully",
    });
  } catch (err) {
    return res.status(500).json({
      status: "error",
      message: err.toString(),
    });
  }
};

export const EmailVerified = async (req, res) => {
  try {
    const email = req.params.email;
    const data = await usersModel.findOne({ email: email });
    if (!data) {
      return res.status(404).json({
        status: "error",
        message: "User not found",
      });
    }
    const code = Math.floor(100000 + Math.random() * 900000);
    const EmailTo = data["email"];
    const mailText = "Your Code is " + code;
    const emailSubject = "Task Manager Verification code";
    const sent = await EmailSender(EmailTo, emailSubject, mailText);
    await UsersModel.updateOne({ email: email }, { otp: code });
    return res.json({
      status: "success",
      data: sent,
      Message: "User Email Verified successfully",
    });
  } catch (err) {
    return res.status(500).json({
      status: "error",
      message: err.toString(),
    });
  }
};
export const CodeVerified = async (req, res) => {
  try {
    const email = req.params.email;
    const code = req.params.code;
    const data = await usersModel.findOne({ email: email, otp: code });
    return res.json({
      status: "success",
      message: " code verification successful",
    });
  } catch (err) {
    return res.status(500).json({
      status: "error",
      message: err.toString(),
    });
  }
};
export const ResetPassword = async (req, res) => {
  try {
    const reqBody = req.body;
    const data = await UsersModel.findOne(
      { email: reqBody["email"] },
      { otp: reqBody["code"] }
    );
    if (!data) {
      return res.status(404).json({
        status: "error",
        data: data,
        message: "User not found or code is invalid",
      });
    }
    await UsersModel.updateOne(
      { email: reqBody["email"] },
      { otp: 0, password: reqBody["password"] }
    );
    return res.json({
      status: "success",
      message: "Password reset was successful",
    });
  } catch (err) {
    return res.status(500).json({
      status: "error",
      message: err.toString(),
    });
  }
};
