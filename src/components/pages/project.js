import React, { useState, useEffect } from "react";
import Comment from "./server/models/Comment";

// const Project = ({ title, imageUrl, GithubRepo, DeployedPage }) => {
const Project = ({ title, imageUrl, GithubRepo, DeployedPage }) => {
  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState("");
  const [userName, setUserName] = useState("");

  const handleAddComment = () => {
    // Create a new comment object and add it to the comments array
    const newCommentObject = { name: userName, text: newComment };
    setComments([...comments, newCommentObject]);

    // Clear the input fields after adding the comment
    setNewComment("");
    setUserName("");
  };

  useEffect(() => {
    // Fetch comments when the component mounts
    fetch(`http://localhost:5000/api/comments/${title}`)
      .then(response => response.json())
      .then(data => setComments(data))
      .catch(error => console.error(error));
  }, [title]);

  return (
    <div className="project">
      <h3>{title}</h3>
      <img
        src={require(`../../assets/${imageUrl}`)}
        alt={title}
        style={{ maxWidth: "450px", height: "500px" }}
      />
      <a href={GithubRepo}>
        <h3>GitHub Repo</h3>
      </a>
      <a href={DeployedPage}>
        <h3>Deployed Page</h3>
      </a>
      <div>
        <label htmlFor="userName">Your Name:</label>
        <input
          type="text"
          id="userName"
          value={userName}
          onChange={e => setUserName(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="newComment">Your Comment:</label>
        <textarea
          id="newComment"
          value={newComment}
          onChange={e => setNewComment(e.target.value)}
        />
      </div>
      <button onClick={handleAddComment}>Add Comment</button>

      {comments.length > 0 && (
        <div>
          <h3>Comments:</h3>
          <ul>
            {comments.map(comment => (
              <Comment
                key={comment._id}
                name={comment.name}
                text={comment.text}
              />
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Project;
