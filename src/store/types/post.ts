export interface IPayload {
    id: number | null,
    title: string,
    body: string,
    comments: Array<{
        id: number | null,
        postId: number | null,
        body: string
    }>
}

export interface postState {
    loading: boolean,
    post: IPayload,
    error: string,
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
    payload: IPayload
}

export interface IGetPostError {
    type: postActionTypes.GET_POST_ERROR,
    payload: string
}

export type PostAction =
    IGetPostStart |
    IGetPostSuccess |
    IGetPostError