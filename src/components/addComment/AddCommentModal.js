import { Button, Modal } from "antd";
import { useState, useCallback, memo } from "react";
import CommentForm from "./CommentForm";
import { FaPlusCircle } from "react-icons/fa";

const AddCommentModal = ({ post }) => {
   console.log("comments modal is rendering");
  const [isModalVisible, setIsModalVisible] = useState(false);

  const showModal = () => {
    setIsModalVisible(true);
  };

  const modalCancelHandler = useCallback(() => {
    setIsModalVisible(false);
  }, [isModalVisible]);

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  return (
    <>
      <div onClick={showModal} className="btn btn-link">
        Add comment
      </div>

      <Modal
        title="Add Comment"
        visible={isModalVisible}
        onCancel={handleCancel}
        footer={null}
        getContainer={false}
      >
        <CommentForm onCancel={modalCancelHandler} post={post} />
      </Modal>
    </>
  );
};

export default memo(AddCommentModal);
