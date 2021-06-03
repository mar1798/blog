import * as postsActionCreators  from './postsAction'
import * as postActionCreators  from './postAction'

export const ActionCreator =   {
    ...postsActionCreators,
    ...postActionCreators
}