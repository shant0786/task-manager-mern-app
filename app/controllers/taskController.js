export const CreateTask = async (req, res) => {
  return res.json({
    stutus: "success",
    Message: "Task created successfully",
  });
};
export const UpdateTaskStatus = async (req, res) => {
  return res.json({
    stutus: "success",
    Message: "User task status updated successfully",
  });
};
export const TaskListByStatus = async (req, res) => {
  return res.json({
    stutus: "success",
    Message: "User Task list by successfully",
  });
};
export const DeleteTask = async (req, res) => {
  return res.json({
    stutus: "success",
    Message: "User task deleted successfully",
  });
};
export const CountTask = async (req, res) => {
  return res.json({
    stutus: "success",
    Message: "User task counted  successfully",
  });
};
