import {Dispatch} from "redux";
import axios from "../../axios"
import {
    IData,
    IGetPostsError,
    IGetPostsStart,
    IGetPostsSuccess, IPayload,
    PostsAction,
    postsActionTypes
} from "../types/posts";


export const getPostsFetch = () => async (dispatch: Dispatch<PostsAction>) => {
    dispatch(getPostsStart())
    try {
        const response = await axios.get('/posts')
        dispatch(getPostsSuccess(response.data))
    } catch (e) {
        dispatch(getPostsError(e.data?.message || e))
    }
}

export const createPostsFetch = (data: IData) => async (dispatch: Dispatch<PostsAction>) => {
    try {
        await axios.post(`/posts`, data)
    } catch (e) {
        dispatch(getPostsError(e.data?.message || e))
    }
}

export const changePostsFetch = (data: IData, id: number) => async (dispatch: Dispatch<PostsAction>) => {
    try {
        await axios.put(`/posts/${id}`, data)
    } catch (e) {
        dispatch(getPostsError(e.message || e))
    }
}

export const deletePostFetch = (id: number | null) => async (dispatch: Dispatch<PostsAction>) => {
    try {
        await axios.delete(`/posts/${id}`)
    } catch (e) {
        dispatch(getPostsError(e.message || e))
    }
}


const getPostsStart = (): IGetPostsStart => ({
    type: postsActionTypes.GET_POSTS_START
})


const getPostsSuccess = (
    payload: Array<IPayload>): IGetPostsSuccess => ({
    type: postsActionTypes.GET_POSTS_SUCCESS,
    payload,
})

const getPostsError = (payload: string): IGetPostsError => ({
    type: postsActionTypes.GET_POSTS_ERROR,
    payload,
})
