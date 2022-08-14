"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
var express_1 = __importDefault(require("express"));
var cors_1 = __importDefault(require("cors"));
var routes_1 = require("./routes/routes");
var PORT = process.env.PORT || 3333;
var app = (0, express_1["default"])();
app.use(express_1["default"].json());
app.use((0, cors_1["default"])());
app.use(routes_1.router);
app.listen(PORT, function () { return console.log("Server running on port ".concat(PORT)); });
//# sourceMappingURL=index.js.map