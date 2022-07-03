import React, {memo} from 'react'
import { usersApi } from '../Service/apiService';

const Comments = ({post}) => {
  console.log("comments is rendering ");
    const {userId, id} = post;
      const { data: comments, error, loading } = usersApi.useGetCommentsQuery({
        userId,
        postId:id,
      });
      
  return (
    <div>
      {comments &&
        comments.map((comment) => (
          <div key={comment.id} className="comment">
            <div className="header">
              <p> {comment.name} </p>
              <button className="btn btn-link"> {comment.email} </button>
            </div>
            <p> {comment.body} </p>
          </div>
        ))}
    </div>
  );
}

export default memo(Comments);