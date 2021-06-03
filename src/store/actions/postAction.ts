import {Dispatch} from "redux";
import axios from "../../axios"
import {
    IGetPostError,
    IGetPostStart,
    IGetPostSuccess,
    PostAction,
    postActionTypes
} from "../types/post";


export const getPostFetch = (id: number) => async (dispatch: Dispatch<PostAction>) => {
    dispatch(getPostStart())
    try {
        const response = await axios.get(`/posts/${id}_embed=comments`)
        dispatch(getPostSuccess(response.data))
    } catch (e) {
        dispatch(getPostError(e))
    }
}

export const postCommentFetch = (id: number, data: {postId: number, body: string}) =>async (dispatch: Dispatch<PostAction>) => {
    try {
        await axios.post(`/comments`, data)
        getPostFetch(id)
    }
    catch (e) {
        dispatch(getPostError(e))
    }
}

const getPostStart = (): IGetPostStart => ({
    type: postActionTypes.GET_POST_START
})


const getPostSuccess = (
    payload: Array<{
        id: number | null,
        title: string | null,
        body: string | null,
        comments: Array<{
            id: number | null,
            postId: number | null,
            body: string | null
        }>
    }>): IGetPostSuccess => ({
    type: postActionTypes.GET_POST_SUCCESS,
    payload,
})

const getPostError = (payload: string): IGetPostError => ({
    type: postActionTypes.GET_POST_ERROR,
    payload,
})