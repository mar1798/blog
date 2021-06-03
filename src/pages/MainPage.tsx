import React, {useEffect, useState} from 'react';
import {useActions} from "../hooks/useActions";
import {useTypedSelector} from "../hooks/useTypedSelector";
import {Modal, notification, Spin,} from 'antd';

import Post from "../components/AllPosts/Post";
import EditPostForm from "../components/AllPosts/EditPostForm/EditPostForm";
import CreatePostForm from "../components/AllPosts/CreatePostForm/CreatePostForm";
import {IData} from "../store/types/posts";


const MainPage: React.FC = () => {

    const [postData, setPostData] = useState<IData | boolean>(false);
    const {getPostsFetch, createPostsFetch, deletePostFetch, changePostsFetch} = useActions()
    const {loading, posts, error} = useTypedSelector(state => state.postsState)


    const onDeleteHandler = async (id: number | null) => {
        await deletePostFetch(id)
        await getPostsFetch()
    }

    const onCreateHandler = async (data: IData) => {
        await createPostsFetch(data)
        await getPostsFetch()
    }

    const onCancelModalHandler = () => {
        setPostData(false)
    }


    const onOpenModalHandler = (data: IData) => {
        setPostData(data);
    }

    const onChangePostHandler = async (data: IData, id: number) => {
        setPostData(false)
        await changePostsFetch(data, id)
        await getPostsFetch()
    }

    useEffect(() => {
        getPostsFetch()
    }, [])


    return (
        <div className="container">
            {error && notification.error({message: error})}
            <Spin spinning={loading}>
                <CreatePostForm onSubmit={onCreateHandler}/>
                {posts.map(post =>
                    <Post
                        key={post.id}
                        change={() => onOpenModalHandler(post)}
                        onDelete={() => onDeleteHandler(post.id)}
                        title={post.title}
                        body={post.body}
                        id={post.id}/>
                )}

                <Modal
                    visible={!!postData}
                    title="Would you like to change this post?"
                    footer={null}
                    onCancel={onCancelModalHandler}
                >
                    <EditPostForm onSubmit={onChangePostHandler} data={postData}/>
                </Modal>
            </Spin>
        </div>
    );
}

export default MainPage;