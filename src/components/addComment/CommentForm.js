import { Button, Checkbox, Form, Input } from "antd";
import { useState, memo } from "react";
import { usersApi } from "../../Service/apiService";

const { TextArea } = Input;

const CommentForm = ({ onCancel, post }) => {
  console.log("comments form is rendering");
  const [addComment] = usersApi.useAddCommentMutation();

  const onFinish = (values) => {
    const { userId, id } = post;
    const data = { ...values, userId, postId: id };
    addComment(data);
  };

  //   const onFinishFailed = (errorInfo) => {
  //     console.log("Failed:", errorInfo);
  //   };

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
        name: "",
        email: "",
        body: "",
      }}
      onFinish={onFinish}
      //   onFinishFailed={onFinishFailed}
      autoComplete="off"
    >
      <Form.Item
        label="Name"
        name="name"
        rules={[
          {
            required: true,
            message: "Please input your name!",
          },
        ]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        label="Email"
        name="email"
        rules={[
          {
            type: "email",
            required: true,
            message: "Please input your email!",
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
          onClick={() => onCancel()}
        >
          Save
        </Button>
        <Button type="primary" htmlType="submit" onClick={() => onCancel()}>
          Cancel
        </Button>
      </Form.Item>
    </Form>
  );
};

export default CommentForm;
