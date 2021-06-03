import {Dispatch} from "redux";
import axios from "../../axios"
import {
    IGetPostError,
    IGetPostStart,
    IGetPostSuccess, IPayload,
    PostAction,
    postActionTypes
} from "../types/post";


export const getPostFetch = (id: string) => async (dispatch: Dispatch<PostAction>) => {
    dispatch(getPostStart())
    try {
        const response = await axios.get(`/posts/${id}?_embed=comments`)
        dispatch(getPostSuccess(response.data));
    } catch (e) {
        dispatch(getPostError(e.message || e))
    }
}

export const createCommentFetch = (data: { postId: number | null, body: string }) => async (dispatch: Dispatch<PostAction>) => {
    try {
        await axios.post(`/comments`, data)
    } catch (e) {
        dispatch(getPostError(e.message || e))
    }
}

const getPostStart = (): IGetPostStart => ({
    type: postActionTypes.GET_POST_START
})


const getPostSuccess = (
    payload: IPayload): IGetPostSuccess => ({
    type: postActionTypes.GET_POST_SUCCESS,
    payload,
})

const getPostError = (payload: string): IGetPostError => ({
    type: postActionTypes.GET_POST_ERROR,
    payload,
})