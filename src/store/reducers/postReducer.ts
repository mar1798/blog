
import {PostAction, postState, postActionTypes} from "../types/post";

const initialState: postState = {
    loading: false,
    post: [
        {
            id: null,
            title: null,
            body: null,
            comments: [
                {
                    id: null,
                    postId: null,
                    body: null,
                }
            ]
        }
    ],
    error: null
}

export const postReducer = (state = initialState, action: PostAction): postState => {
    switch (action.type) {
        case postActionTypes.GET_POST_START:
            return {...state, loading: true}
        case postActionTypes.GET_POST_SUCCESS:
            return {...state, post: action.payload}
        case postActionTypes.GET_POST_ERROR:
            return {...state, error: action.payload}
        default:
            return {...state}
    }
}