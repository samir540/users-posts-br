import { Button, Checkbox, Form, Input } from "antd";
import { useState } from "react";
import { usersApi } from "../../Service/apiService";

const { TextArea } = Input;

const PostForm = ({ onCancel, user }) => {


  const [addPost] = usersApi.useAddPostMutation();

  const onFinish = (values) => {
    const { id, userName } = user;
    const data = { ...values, userId: id, userName };
    addPost(data);

  };
 

  // const onFinishFailed = (errorInfo) => {
  //   console.log("Failed:", errorInfo);
  // };

  return (
    <Form
      name="basic"
      labelCol={{
        span: 8,
      }}
      wrapperCol={{
        span: 16,
      }}
      initialValues={{
        title: "",
        body: "",
      }}
      onFinish={onFinish}
      // onFinishFailed={onFinishFailed}
      autoComplete="off"
    >
      <Form.Item
        label="Title"
        name="title"
        rules={[
          {
            required: true,
            message: "Please input post title!",
          },
        ]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="Body"
        name="body"
        rules={[
          {
            required: true,
            message: "Please input post text!",
          },
        ]}
      >
        <TextArea rows={4} />
      </Form.Item>

      <Form.Item
        wrapperCol={{
          offset: 8,
          span: 16,
        }}
      >
        <Button
          type="primary"
          htmlType="submit"
          className="mr-3"
          
        >
          Save
        </Button>

        <Button type="primary" htmlType="button" onClick={() => onCancel()}>
          Cancel
        </Button>
      </Form.Item>
    </Form>
  );
};

export default PostForm;
