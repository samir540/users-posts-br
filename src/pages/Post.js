import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { usersApi } from "../Service/apiService";
import { FaArrowLeft } from "react-icons/fa";
import "../assets/styles/post.scss";
import AddCommentModal from "../components/addComment/AddCommentModal";
import Comments from "../components/Comments";

const Post = () => {
 
console.log("parent post is rendering")
  // get posts according to post and user id
  const userId = window.location.pathname.split("/").at(-2);
  const { postId } = useParams();
 
  const {
    data: posts,
    error,
    isLoading,
  } = usersApi.useGetPostQuery({ userId, postId });

  //// show comments
 const [showComments, setShowComments] = useState(false);
  const showCommentsHandler = () => {
    setShowComments(!showComments);
  };

  ///Back to Homepage
  const navigate = useNavigate();
  const backToHomePageHandler = () => {
    navigate(-1);
  
  };

  return (
    <>
      {isLoading && <h3>Loading...</h3>}
      {error && <h3>Something went wrong. Try again, please</h3>}
      {posts &&
        posts.map((post) => (
          <div key={post.id} className="post container ">
            <div className="post__head">
              <div onClick={backToHomePageHandler} className="back" >
                {" "}
                <FaArrowLeft /> Back{" "}
              </div>
              <h4>{post.userName}</h4>
              <div></div>
            </div>
            <div className="post__context">
              <h5>{post.title}</h5>
              <p>{post.body}</p>
            </div>
            <div className="post__buttons">
              <button
                className="post__show btn btn-info"
                onClick={showCommentsHandler}
              >
                {!showComments ? "Show comments" : "Hide comments"}
              </button>

              <button
                className="post__add btn btn-link"
             
              >
                <AddCommentModal post={post} />
              </button>
            </div>
            {showComments && (
              <div className="post__comments">
                <Comments post={post} />
              </div>
            )}
          </div>
        ))}
    </>
  );
};

export default Post;
