import React from 'react';
import Title from "antd/es/typography/Title";
import {Button, Form, Input} from "antd";
import {IData} from "../../../store/types/posts";

import style from "./CreatePostForm.module.css"

const {TextArea} = Input;

interface IProps {
    onSubmit: (data: IData) => void
}


const CreatePostForm: React.FC<IProps> = ({onSubmit}) => {

    const [form] = Form.useForm();

    const onFinish = (data: IData) => {
        onSubmit(data)
        form.resetFields()
    }

    return (
        <Form
            className={style.form}
            labelCol={{span: 4}}
            wrapperCol={{span: 14}}
            layout="horizontal"
            onFinish={onFinish}
            validateMessages={{required: '${label} is required!'}}
            form={form}
        >
            <Title
                className={style.title} level={3}
            >Add a new post</Title>
            <Form.Item
                name='title'
                label="Title"
                rules={[{required: true}]}
            >
                <Input placeholder="Some awesome title"/>
            </Form.Item>
            <Form.Item
                name='body'
                label="Description"
                rules={[{required: true}]}
            >
                <TextArea placeholder="Some gorgeous description " rows={4}/>
            </Form.Item>
            <Form.Item className={style.title}>
                <Button type="primary" htmlType="submit">Submit</Button>
            </Form.Item>
        </Form>
    );
};

export default CreatePostForm;