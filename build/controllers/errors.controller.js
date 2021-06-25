"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.errStatus405 = exports.errInvalidPaths = void 0;
var errInvalidPaths = function (req, resp) {
    resp
        .status(404)
        .send({ msg: "Invalid URL: Your specified path does not exist." });
};
exports.errInvalidPaths = errInvalidPaths;
var errStatus405 = function (req, resp) {
    resp
        .status(405)
        .send({ msg: "Method Not Allowed: for HTTP " + req.method + " at " + req.originalUrl });
};
exports.errStatus405 = errStatus405;
