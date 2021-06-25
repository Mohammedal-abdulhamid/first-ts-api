"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.removePostById = exports.insertPost = exports.fetchPostById = exports.fetchPosts = void 0;
var uuid_1 = require("uuid");
var posts = [];
var fetchPosts = function () {
    return Promise.resolve(posts);
};
exports.fetchPosts = fetchPosts;
var fetchPostById = function (id) {
    var post = posts.filter(function (post) { return post.id == id; })[0];
    if (post)
        return Promise.resolve(post);
    else
        return Promise.reject({ status: 404, msg: 'Resource Not Found: post id does not exist.' });
};
exports.fetchPostById = fetchPostById;
var insertPost = function (post) {
    post.id = uuid_1.v4();
    posts.push(post);
    return Promise.resolve(posts[posts.length - 1]);
};
exports.insertPost = insertPost;
var removePostById = function (id) {
    var indexToDelete = posts.findIndex(function (post) { return post.id === id; });
    if (indexToDelete != -1) {
        var postToDelete = posts[indexToDelete];
        posts.splice(indexToDelete, 1);
        return Promise.resolve(postToDelete);
    }
    else
        return Promise.reject({ status: 404, msg: 'Resource Not Found: post id does not exist.' });
};
exports.removePostById = removePostById;
