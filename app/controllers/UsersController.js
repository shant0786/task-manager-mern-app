export const Registration = async (req, res) => {
  return res.json({
    stutus: "success",
    Message: "User registered successfully",
  });
};
export const Login = async (req, res) => {
  return res.json({
    stutus: "success",
    Message: "User log-in successfully",
  });
};
export const ProfileDetails = async (req, res) => {
  return res.json({
    stutus: "success",
    Message: "User profileDetails successfully",
  });
};
export const ProfileUpdate = async (req, res) => {
  return res.json({
    stutus: "success",
    Message: "User updated successfully",
  });
};
export const EmailVerified = async (req, res) => {
  return res.json({
    stutus: "success",
    Message: "User Email Verified successfully",
  });
};
export const CodeVerified = async (req, res) => {
  return res.json({
    stutus: "success",
    Message: "User Code Verified successfully",
  });
};
export const PasswordReset = async (req, res) => {
  return res.json({
    stutus: "success",
    Message: "User password reset Verified successfully",
  });
};
