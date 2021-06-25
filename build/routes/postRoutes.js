"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.postsRoutes = void 0;
var express_1 = __importDefault(require("express"));
var postsController_1 = require("../controllers/postsController");
var errorsController_1 = require("../controllers/errorsController");
exports.postsRoutes = express_1.default.Router();
exports.postsRoutes
    .route('/')
    .get(postsController_1.getPosts)
    .post(postsController_1.postPost)
    .all(errorsController_1.errStatus405);
exports.postsRoutes
    .route('/:postId')
    .get(postsController_1.getPostById)
    .delete(postsController_1.deletePostById)
    .all(errorsController_1.errStatus405);
