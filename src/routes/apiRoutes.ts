import express from 'express';
import { postsRoutes } from './postRoutes';

export const apiRoutes = express.Router();

apiRoutes.use('/posts', postsRoutes);