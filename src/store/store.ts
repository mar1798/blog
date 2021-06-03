import {applyMiddleware, createStore, combineReducers, compose} from "redux";
import thunk from "redux-thunk";
import {postsReducer} from "./reducers/postsReducer";
import {postReducer} from "./reducers/postReducer";


declare global {
    interface Window {
        __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
    }
}

const composeEnhancers = (typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;

const rootReducer = combineReducers({
    postsState: postsReducer,
    postState: postReducer
})

export type RootState = ReturnType<typeof rootReducer>

export const store = createStore(rootReducer,composeEnhancers(applyMiddleware(thunk)))