
import TaskModel from "../models/TaskModel.js";
import mongoose from 'mongoose'


export const CreateTask = async (req, res) => {
  try {

    const user_id=req.headers['user_id']
    let reqBody = req.body;
    reqBody.user_id = user_id;
    await TaskModel.create(reqBody);
    return res.json({
      status: "success",
      Message: "Task registered successfully",
    });
  } catch (err) {
    return res.status(500).json({
      status: "error",
      message: err.toString(),
    });
  }
};
export const UpdateTaskStatus = async (req, res) => {
  try{
   const id = req.params.id
   const status = req.params.status
    const user_id=req.headers['user_id']

 await TaskModel.updateOne({"_id":id,"user_id":user_id},{
   status:status
    })
  return res.json({
    status: "success",
    message: "User Task status updated successfully",
  });

}catch (err)
{
  return res.status(500).json({
    status: "error",
    message: err.toString(),
  })
}
};
export const TaskListByStatus = async (req, res) => {
  return res.json({
    status: "success",
    Message: "User Task list by successfully",
  });
};
export const DeleteTask = async (req, res) => {
try {
  const id = req.params.id
  const user_id=req.headers['user_id']
 // const {_id} = await TaskModel.findOne({"user_id":user_id})
  await TaskModel.deleteOne({"_id":id, "user_id":user_id});
  return res.json({
    status: "success",
    message: "Task deleted successfully",
  });
}catch (err) {
  return res.status(500).json({
    status: "error",
    message: err.toString(),
  })
}

};
export const CountTask = async (req, res) => {
  let ObjectId = mongoose.Types.ObjectId;
  let user_id=req.headers['user_id']
  let user_id_object=new ObjectId(user_id)
  let data= await TaskModel.aggregate([
    {$match:{user_id:user_id_object}},
    {$group:{_id:"$status",sum:{$count:{}}}}
  ])
  return res.json({
    status: "success",
    data:data,
    message: "User task counted  successfully",

  });
};

