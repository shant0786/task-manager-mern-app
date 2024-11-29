import mongoose from "mongoose";


const TaskSchema = new mongoose.Schema({
    title: { type: String, required: true },
    description: { type: String },
    status: { type: String, required: true},
    completed: { type: Boolean, default: false },
    user_id:{type:mongoose.Schema.Types.ObjectId,required:true},
},{
    versionKey:false,timestamps:true,
})



const TaskModel= mongoose.model("tasks", TaskSchema);
export default TaskModel;
