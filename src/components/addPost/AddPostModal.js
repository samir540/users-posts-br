import { Button, Modal } from "antd";
import { useState, memo } from "react";
import PostForm from "../addPost/PostForm";
import { FaPlusCircle } from "react-icons/fa";

const AddPostModal = ({user}) => {
  const [isModalVisible, setIsModalVisible] = useState(false);

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  return (
    <>
      <div onClick={showModal}>
        <FaPlusCircle />
      </div>

      <Modal
      className="pr-[100px]"
        title="Add Post"
        visible={isModalVisible}
        onOk={handleOk}
        onCancel={handleCancel}
        footer={null}
        getContainer={false}
      >
        <PostForm onCancel={handleCancel} user={user} />
      </Modal>
    </>
  );
};

export default memo(AddPostModal);
