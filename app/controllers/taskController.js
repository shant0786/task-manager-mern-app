
import TaskModel from "../models/TaskModel.js";

export const CreateTask = async (req, res) => {
  try {
    const reqBody = req.body;
    await TaskModel.create(reqBody);
    return res.json({
      status: "success",
      Message: "User registered successfully",
    });
  } catch (err) {
    return res.status(500).json({
      status: "error",
      message: err.toString(),
    });
  }
};
export const UpdateTaskStatus = async (req, res) => {
  return res.json({
    status: "success",
    Message: "User task status updated successfully",
  });
};
export const TaskListByStatus = async (req, res) => {
  return res.json({
    status: "success",
    Message: "User Task list by successfully",
  });
};
export const DeleteTask = async (req, res) => {
  return res.json({
    status: "success",
    Message: "User task deleted successfully",
  });
};
export const CountTask = async (req, res) => {
  return res.json({
    status: "success",
    Message: "User task counted  successfully",
  });
};

