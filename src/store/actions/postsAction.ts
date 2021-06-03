import {Dispatch} from "redux";
import axios from "../../axios"
import {
    IGetPostsError,
    IGetPostsStart,
    IGetPostsSuccess,
    PostsAction,
    postsActionTypes
} from "../types/posts";


export const getPostsFetch = () => async (dispatch: Dispatch<PostsAction>) => {
    dispatch(getPostsStart())
    try {
        const response = await axios.get('/posts')
        dispatch(getPostsSuccess(response.data))
    } catch (e) {
        dispatch(getPostsError(e))
    }
}

export const putPostsFetch = (data: {title: string, body: string}) => async (dispatch: Dispatch<PostsAction>) => {
    try {
        await axios.post(`/posts`, data)
        getPostsFetch()
    }
    catch (e) {
        dispatch(getPostsError(e))
    }
}

export const deletePostFetch = (id: number) => async (dispatch: Dispatch<PostsAction>) => {
    try {
        await axios.delete(`/posts/${id}`)
        await getPostsFetch()
    }
    catch (e) {
        dispatch(getPostsError(e))
    }
}

const getPostsStart = (): IGetPostsStart => ({
    type: postsActionTypes.GET_POSTS_START
})


const getPostsSuccess = (
    payload: Array<{
        id: number,
        title: string,
        body: string
    }>): IGetPostsSuccess => ({
    type: postsActionTypes.GET_POSTS_SUCCESS,
    payload,
})

const getPostsError = (payload: string): IGetPostsError => ({
    type: postsActionTypes.GET_POSTS_ERROR,
    payload,
})
