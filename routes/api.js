import express from "express";
import * as UsersController from "../app/controllers/UsersController.js";
import * as TaskController from "../app/controllers/TaskController.js";


const router = express.Router();

//    Users routes

router.post("/Registration", UsersController.Registration);

router.post("/Login", UsersController.Login);
router.get("/ProfileDetails", UsersController.ProfileDetails);
router.post("/ProfileUpdate", UsersController.ProfileUpdate);
router.post("/EmailVerified", UsersController.EmailVerified);
router.get("/CodeVerified", UsersController.CodeVerified);
router.post("/ResetPassword", UsersController.ResetPassword);

//    Task routes
router.post("/CreateTask", TaskController.CreateTask);
router.get("/UpdateTaskStatus", TaskController.UpdateTaskStatus);
router.get("/TaskListByStatus", TaskController.TaskListByStatus);
router.post("/DeleteTask", TaskController.DeleteTask);
router.get("/CountTask", TaskController.CountTask);

export default router;
