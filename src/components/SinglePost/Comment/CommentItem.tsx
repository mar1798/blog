import React, {memo} from 'react';
import { Comment } from 'antd';

interface IProps {
    body: string | null;
}

const CommentItem:React.FC<IProps> = memo(({body}) => {
        return (
                <Comment content={body}/>
        );
})

export default CommentItem
