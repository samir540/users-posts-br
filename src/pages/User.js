import React from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import { usersApi } from "../Service/apiService";

import AddPostModal from "../components/addPost/AddPostModal";
//Css file
import "../assets/styles/user.scss";
// Icons
import { AiFillDelete } from "react-icons/ai";
import { FaAngleRight } from "react-icons/fa";
import { FaPlusCircle } from "react-icons/fa";
import { FaArrowLeft } from "react-icons/fa";
import axios from "axios";
const User = () => {
  const { userId } = useParams();
  
  const { data: user, error, isLoading } = usersApi.useGetUserQuery(userId);
  const { data: posts } = usersApi.useGetPostsQuery(userId);
  const [deletePost] = usersApi.useDeletePostMutation();

  ///Back to Homepage
  const navigate = useNavigate();
  const backToHomePageHandler = () => {
    navigate("/");
  };

  /// post delete
  const postDeleteHandler = (post) => {
    const { userId, id } = post;
    deletePost({ postId: id });
  };

  return (
    <>
      {isLoading && <h3>Loading...</h3>}
      {error && <h3>Something went wrong. Try again, please</h3>}
      {user && (
        <div className="user">
          <div className="user__head">
            <div onClick={backToHomePageHandler} className="back">
              {" "}
              <FaArrowLeft /> Back{" "}
            </div>
            <h4> {user.userName}</h4>
            <div className="add">
              <AddPostModal user={user} />
            </div>
          </div>
          <div className="user__posts">
            {" "}
            {posts &&
              posts.map((post) => (
                <div className="post" key={post.id} >
                  <div
                    className="delete"
                    onClick={() => postDeleteHandler(post)}
                  >
                    {" "}
                    <AiFillDelete />
                  </div>
                  <Link to={`${post.id}`} key={post.id}>
                    <p>Post title: {post.title} </p>
                    <div className="right">
                      <FaAngleRight />
                    </div>
                  </Link>
                </div>
              ))}
          </div>
        </div>
      )}
    </>
  );
};

export default User;
