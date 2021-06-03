export interface postsState {
    loading: boolean,
    posts: Array<{
        id: number | null,
        title: string | null,
        body: string | null
    }>,
    error: null | string,
}

export enum postsActionTypes {
    GET_POSTS_START = 'GET_POSTS_START',
    GET_POSTS_SUCCESS = 'GET_POSTS_SUCCESS',
    GET_POSTS_ERROR = 'GET_POSTS_ERROR',
    DELETE_POST = 'DELETE_POST'
}


export interface IGetPostsStart {
    type: postsActionTypes.GET_POSTS_START
}


export interface IGetPostsSuccess {
    type: postsActionTypes.GET_POSTS_SUCCESS,
    payload: Array<{
        id: number,
        title: string,
        body: string
    }>
}

export interface IGetPostsError {
    type: postsActionTypes.GET_POSTS_ERROR,
    payload: string
}



export type PostsAction =
    IGetPostsStart |
    IGetPostsSuccess |
    IGetPostsError