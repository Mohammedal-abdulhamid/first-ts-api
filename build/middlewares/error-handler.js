"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.handleServerErrors = exports.handleCustomErrors = void 0;
var handleCustomErrors = function (err, req, resp, next) {
    if (err.status)
        resp.status(err.status).send({ msg: err.msg });
    else
        next(err);
};
exports.handleCustomErrors = handleCustomErrors;
var handleServerErrors = function (err, req, resp, next) {
    resp.status(500).send({ msg: "Internal Server Error" });
};
exports.handleServerErrors = handleServerErrors;
