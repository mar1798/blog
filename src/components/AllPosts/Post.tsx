import React, {memo} from 'react';
import {Button, Card, Space} from 'antd';
import {Link} from "react-router-dom";
import style from './Post.module.css'

interface IProps {
    title: string,
    body: string,
    id: number | null,
    change: () => void,
    onDelete: () => void,
}


const Post: React.FC<IProps> = memo(({title, body, change, onDelete, id}) => {


    return (
        <Card
            hoverable={true}
            className={style.card}
            type="inner"
            title={title}
            extra={<Link to={`/post/${id}`}>View More</Link>}
            bordered={true}
        >
            <p>{body}</p>
            <Space>
                <Button type="primary" onClick={change}>Change</Button>
                <Button type="primary" onClick={onDelete} danger>Delete</Button>
            </Space>
        </Card>
    );
})


export default Post;
