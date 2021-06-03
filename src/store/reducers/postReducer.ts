import {PostAction, postState, postActionTypes} from "../types/post";

const initialState: postState = {
    loading: false,
    post: {
        id: null,
        title: '',
        body: '',
        comments: []
    },
    error: ''
}

export const postReducer = (state = initialState, action: PostAction): postState => {
    switch (action.type) {
        case postActionTypes.GET_POST_START:
            return {...state, loading: true}
        case postActionTypes.GET_POST_SUCCESS:
            return {...state, post: action.payload, loading: false, error: ''}
        case postActionTypes.GET_POST_ERROR:
            return {...state, error: action.payload, loading: false}
        default:
            return state;
    }
}