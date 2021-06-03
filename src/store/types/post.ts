



export interface postState {
    loading: boolean,
    post: Array<{
        id: number | null,
        title: string | null,
        body: string | null,
        comments: Array<{
            id: number | null,
            postId: number | null,
            body: string | null
        }>
    }>,
    error: null | string,
}

export enum postActionTypes {
    GET_POST_START = 'GET_POST_START',
    GET_POST_SUCCESS = 'GET_POST_SUCCESS',
    GET_POST_ERROR = 'GET_POST_ERROR',
}


export interface IGetPostStart {
    type: postActionTypes.GET_POST_START
}


export interface IGetPostSuccess {
    type: postActionTypes.GET_POST_SUCCESS,
    payload: Array<{
        id: number | null,
        title: string | null,
        body: string | null,
        comments: Array<{
            id: number | null,
            postId: number | null,
            body: string | null
        }>
    }>
}

export interface IGetPostError {
    type: postActionTypes.GET_POST_ERROR,
    payload: string
}

export type PostAction =
    IGetPostStart |
    IGetPostSuccess |
    IGetPostError