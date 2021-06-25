import { PostData } from '../interfaces/PostData';
import { v4 as uuidv4 } from 'uuid';

const posts:Array<PostData> = [];

export const fetchPosts = (): Promise <Array<PostData>> => {
    return Promise.resolve(posts);
}

export const fetchPostById = (id: string): Promise <PostData> => {
    const [ post ] = posts.filter(post => post.id == id);

    if (post) return Promise.resolve(post);
    else return Promise.reject({ status: 404, msg: 'Resource Not Found: post id does not exist.' })
}

export const insertPost = (post: PostData) : Promise <PostData> => {
    post.id = uuidv4();
    posts.push(post);
    return Promise.resolve(posts[posts.length - 1]);
}

export const removePostById = (id: string): Promise <PostData> => {
    const indexToDelete = posts.findIndex(post => post.id === id);

    if (indexToDelete != -1 ) {
        const postToDelete = posts[indexToDelete];
        posts.splice(indexToDelete,1);
        return Promise.resolve(postToDelete);
    } else return Promise.reject({ status: 404, msg: 'Resource Not Found: post id does not exist.' })
}

