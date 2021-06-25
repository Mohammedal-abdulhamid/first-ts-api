import { Request, Response } from 'express';

export const errInvalidPaths = (req: Request, resp: Response): void => {
    resp
    .status(404)
    .send({ msg: "Invalid URL: Your specified path does not exist."});
};

export const errStatus405 = (req:Request, resp: Response): void => {
    resp
    .status(405)
    .send({ msg: `Method Not Allowed: for HTTP ${req.method} at ${req.originalUrl}` });
}
