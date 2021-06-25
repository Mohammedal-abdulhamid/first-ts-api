"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.apiRoutes = void 0;
var express_1 = __importDefault(require("express"));
var post_routes_1 = require("./post.routes");
exports.apiRoutes = express_1.default.Router();
exports.apiRoutes.use('/posts', post_routes_1.postsRoutes);
