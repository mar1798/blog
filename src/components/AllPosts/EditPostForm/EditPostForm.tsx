import React, {ChangeEvent, useMemo, useState} from 'react';
import {Button, Form, Input} from "antd";
import {IData} from "../../../store/types/posts";
import style from "./EditPostForm.module.css"

const {TextArea} = Input;

interface IProps {
    data: any,
    onSubmit: (data: IData, id: number) => void
}


const EditPostForm: React.FC<IProps> = ({data, onSubmit}) => {


    const [input, setInput] = useState<{ title: string, body: string }>({
        title: data.title,
        body: data.body,
    });

    useMemo(() => {
        setInput({
            title: data.title,
            body: data.body
        })
    }, [data])

    const onChangeHandler = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setInput(prevState => (
            {...prevState, [e.target.name]: e.target.value}
        ))
    }


    return (
        <Form onFinish={() => onSubmit(input, data.id)}>
            <Form.Item label="Title">
                <Input
                    required={true}
                    name="title"
                    onChange={onChangeHandler}
                    value={input.title}
                />
            </Form.Item>
            <Form.Item label="Description">
                <TextArea
                    required={true}
                    name="body"
                    onChange={onChangeHandler}
                    value={input.body} rows={4}
                />
            </Form.Item>
            <Form.Item>
                <Button
                    className={style.btn}
                    htmlType="submit"
                    type="primary"
                >Change</Button>
            </Form.Item>
        </Form>
    );
};

export default EditPostForm;