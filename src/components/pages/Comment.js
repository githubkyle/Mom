// Comment.js
import React, { useState } from "react";

const Comment = ({ onAddComment }) => {
  const [comment, setComment] = useState("");

  const handleAddComment = () => {
    if (comment.trim() !== "") {
      onAddComment(comment);
      setComment("");
    }
  };

  return (
    <div>
      <textarea
        value={comment}
        onChange={e => setComment(e.target.value)}
        placeholder="Leave a comment..."
      />
      <button onClick={handleAddComment}>Add Comment</button>
    </div>
  );
};

export default Comment;
