import React from 'react';
import {Card} from "antd";
import {Link} from "react-router-dom";
import Title from "antd/es/typography/Title";

import style from "./PostCard.module.css"

interface IProps {
    title: string,
    body: string
}

const PostCard: React.FC<IProps> = ({title, body}) => {
    return (
        <Card
            className={style.card}
            cover={
                <div className={style.header}>
                    <Link to="/">&larr; Go back</Link>
                    <Title className={style.title} level={3}>{title}</Title>
                </div>
            }
        >
            <p>{body}</p>
        </Card>
    );
};

export default PostCard;