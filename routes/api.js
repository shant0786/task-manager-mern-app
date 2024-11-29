import express from "express";
import * as UsersController from "../app/controllers/UsersController.js";
import * as TaskController from "../app/controllers/TaskController.js";
import AuthController from "../app/middlewares/AuthController.js";


const router = express.Router();

//    Users routes

router.post("/Registration", UsersController.Registration);

router.post("/Login", UsersController.Login);
router.get("/ProfileDetails",AuthController, UsersController.ProfileDetails);
router.post("/ProfileUpdate",AuthController, UsersController.ProfileUpdate);
router.post("/EmailVerified", UsersController.EmailVerified);
router.get("/CodeVerified", UsersController.CodeVerified);
router.post("/ResetPassword", UsersController.ResetPassword);

//    Task routes
router.post("/CreateTask",AuthController, TaskController.CreateTask);
router.get("/UpdateTaskStatus",AuthController, TaskController.UpdateTaskStatus);
router.get("/TaskListByStatus",AuthController, TaskController.TaskListByStatus);
router.post("/DeleteTask",AuthController, TaskController.DeleteTask);
router.get("/CountTask",AuthController, TaskController.CountTask);

export default router;
