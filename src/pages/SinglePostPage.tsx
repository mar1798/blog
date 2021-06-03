import React, {useEffect} from 'react';
import {useTypedSelector} from "../hooks/useTypedSelector";
import {useActions} from "../hooks/useActions";
import {useParams} from "react-router-dom";
import {notification, Spin, Divider} from "antd";

import CommentItem from "../components/SinglePost/Comment/CommentItem";
import CreateCommentForm from "../components/SinglePost/Comment/CreateCommentForm";
import PostCard from "../components/SinglePost/PostCard/PostCard";


const SinglePostPage: React.FC = () => {
    const {loading, post, error} = useTypedSelector(state => state.postState)
    const {getPostFetch, createCommentFetch} = useActions()
    const {id} = useParams<{ id: string }>()


    const onSubmitHandler = async (body: string) => {
        await createCommentFetch({
            postId: post.id,
            body: body,
        })
        await getPostFetch(id)
    }

    useEffect(() => {
        getPostFetch(id);
    }, []);


    return (
        <div className="container">
            {error && notification.error({message: error})}
            <Spin spinning={loading}>
                <PostCard title={post.title} body={post.body}/>
                <Divider>Comments</Divider>
                {
                    post.comments.map(comment =>
                        <CommentItem key={comment.id} body={comment.body}/>
                    )
                }
                <CreateCommentForm onSubmit={onSubmitHandler}/>
            </Spin>
        </div>
    );
}

export default SinglePostPage;