"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var apiRoutes_1 = require("./routes/apiRoutes");
var errorsController_1 = require("./controllers/errorsController");
var error_handler_1 = require("./middlewares/error-handler");
var app = express_1.default();
app.use(express_1.default.json());
app.use('/', apiRoutes_1.apiRoutes);
app.all('/*', errorsController_1.errInvalidPaths);
app.use(error_handler_1.handleCustomErrors);
app.use(error_handler_1.handleServerErrors);
app.listen(8000, function () {
    console.log('listening on port 8000');
});
