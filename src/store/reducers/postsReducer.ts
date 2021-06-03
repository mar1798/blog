import {PostsAction, postsActionTypes, postsState} from "../types/posts";

const initialState: postsState = {
    loading: false,
    posts: [],
    error: ''
}

export const postsReducer = (state = initialState, action: PostsAction): postsState => {
    switch (action.type) {
        case postsActionTypes.GET_POSTS_START:
            return {...state, loading: true}
        case postsActionTypes.GET_POSTS_SUCCESS:
            return {...state, posts: action.payload, loading: false, error: ''}
        case postsActionTypes.GET_POSTS_ERROR:
            return {...state, error: action.payload, loading: false}
        default:
            return {...state}
    }
}