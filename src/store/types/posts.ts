export interface IPayload {
    id: number | null,
    title: string,
    body: string
}

export interface IData {
    title: string,
    body: string
}

export interface postsState {
    loading: boolean,
    posts: Array<IPayload>,
    error: string,
}

export enum postsActionTypes {
    GET_POSTS_START = 'GET_POSTS_START',
    GET_POSTS_SUCCESS = 'GET_POSTS_SUCCESS',
    GET_POSTS_ERROR = 'GET_POSTS_ERROR',
}


export interface IGetPostsStart {
    type: postsActionTypes.GET_POSTS_START
}


export interface IGetPostsSuccess {
    type: postsActionTypes.GET_POSTS_SUCCESS,
    payload: Array<IPayload>
}

export interface IGetPostsError {
    type: postsActionTypes.GET_POSTS_ERROR,
    payload: string
}


export type PostsAction =
    IGetPostsStart |
    IGetPostsSuccess |
    IGetPostsError