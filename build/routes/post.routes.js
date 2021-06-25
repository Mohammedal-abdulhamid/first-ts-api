"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.postsRoutes = void 0;
var express_1 = __importDefault(require("express"));
var posts_controller_1 = require("../controllers/posts.controller");
var errors_controller_1 = require("../controllers/errors.controller");
exports.postsRoutes = express_1.default.Router();
exports.postsRoutes
    .route('/')
    .get(posts_controller_1.getPosts)
    .post(posts_controller_1.postPost)
    .all(errors_controller_1.errStatus405);
exports.postsRoutes
    .route('/:postId')
    .get(posts_controller_1.getPostById)
    .delete(posts_controller_1.deletePostById)
    .all(errors_controller_1.errStatus405);
