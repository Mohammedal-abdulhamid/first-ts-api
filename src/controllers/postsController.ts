import { Request, Response, NextFunction } from 'express';
import { PostData } from '../interfaces/PostData';
import  { fetchPosts, fetchPostById, insertPost, removePostById } from '../models/postsModels';

export const getPosts = async (req: Request, resp: Response, next: NextFunction ): Promise <void> => {

    try {
      const postsArray: Array<PostData> = await fetchPosts();
      resp.status(200).send({ posts: postsArray });

    } catch(err) {
      next(err);
    }
}

export const getPostById = async (req: Request, resp: Response, next: NextFunction ): Promise <void> => {
    try {
      const post:PostData = await fetchPostById(req.params.postId);
      resp.status(200).send({ post: post });

    } catch (err) {
      next(err);
    }
}

export const postPost = async (req: Request, resp: Response, next: NextFunction): Promise <void> => {

    try {
      const post:PostData = await insertPost(req.body.post);
      resp.status(201).send({ post: post });

    } catch (err) {
      next(err);
    }
}

export const deletePostById = async (req: Request, resp: Response, next: NextFunction): Promise <void> => {
    try {
      const post:PostData = await removePostById(req.params.postId);
      resp.status(202).send({ post: post });

    } catch (err) {
      next(err);
    }
}