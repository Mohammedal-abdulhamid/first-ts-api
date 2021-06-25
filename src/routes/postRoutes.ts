import express from 'express';
import { getPosts, getPostById, postPost, deletePostById } from '../controllers/postsController';
import { errStatus405 } from '../controllers/errorsController';

export const postsRoutes = express.Router();

postsRoutes
.route('/')
.get(getPosts)
.post(postPost)
.all(errStatus405);

postsRoutes
.route('/:postId')
.get(getPostById)
.delete(deletePostById)
.all(errStatus405);

