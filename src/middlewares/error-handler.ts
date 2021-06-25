import { ErrorRequestHandler } from 'express';

export const handleCustomErrors:ErrorRequestHandler  = (err, req, resp, next) => {
    if(err.status) resp.status(err.status).send({ msg: err.msg });
    else next(err);
}

export const handleServerErrors: ErrorRequestHandler = (err, req, resp, next) => {
    resp.status(500).send({ msg: "Internal Server Error"});
}

