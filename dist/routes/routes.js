"use strict";
exports.__esModule = true;
exports.router = void 0;
var express_1 = require("express");
var CreateTaskController_1 = require("../controllers/CreateTaskController");
var DeleteTaskController_1 = require("../controllers/DeleteTaskController");
var GetAllTasksController_1 = require("../controllers/GetAllTasksController");
var GetTaskByIdController_1 = require("../controllers/GetTaskByIdController");
var UpdateTaskController_1 = require("../controllers/UpdateTaskController");
var router = (0, express_1.Router)();
exports.router = router;
router.get('/task', GetAllTasksController_1.GetAllTasksController);
router.get('/task/:id', GetTaskByIdController_1.GetTaskByIdController);
router.post('/task', CreateTaskController_1.CreateTaskController);
router.patch('/task/:id', UpdateTaskController_1.UpdateTaskController);
router["delete"]('/task/:id', DeleteTaskController_1.DeleteTaskController);
//# sourceMappingURL=routes.js.map