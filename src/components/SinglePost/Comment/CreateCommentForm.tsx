import React, {ChangeEvent, useState} from 'react';
import {Button, Form, Input} from "antd";

const {TextArea} = Input;

interface IProps {
    onSubmit: (data: string) => void,
}

const CreateCommentForm: React.FC<IProps> = ({onSubmit}) => {
    const [comment, setComment] = useState<string>('')
    const onChangeHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
        setComment(e.target.value)
    }

    const onFinish = () => {
        onSubmit(comment)
        setComment('')
    }
    return (
        <Form onFinish={onFinish}>
            <Form.Item>
                <TextArea
                    onChange={onChangeHandler}
                    value={comment}
                    rows={4}
                    placeholder="Write some unbelievable comment"
                />
            </Form.Item>
            <Form.Item>
                <Button htmlType="submit" type="primary">
                    Add Comment
                </Button>
            </Form.Item>
        </Form>
    );
};

export default CreateCommentForm;