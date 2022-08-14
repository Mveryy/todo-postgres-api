import { Router } from "express";
import { CreateTaskController } from "../controllers/CreateTaskController";
import { DeleteTaskController } from "../controllers/DeleteTaskController";
import { GetAllTasksController } from "../controllers/GetAllTasksController";
import { GetTaskByIdController } from "../controllers/GetTaskByIdController";
import { UpdateTaskController } from "../controllers/UpdateTaskController";

const router = Router()

router.get('/task', GetAllTasksController)

router.get('/task/:id', GetTaskByIdController)

router.post('/task', CreateTaskController)

router.patch('/task/:id', UpdateTaskController)

router.delete('/task/:id', DeleteTaskController)

export {router}