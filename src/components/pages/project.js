import React, { useState } from "react";
import Comment from "./Comment";

// const Project = ({ title, imageUrl, GithubRepo, DeployedPage }) => {
const Project = ({ title, imageUrl, GithubRepo, DeployedPage }) => {
  const [comments, setComments] = useState([]);

  const handleAddComment = newComment => {
    setComments([...comments, newComment]);
  };
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
      <Comment onAddComment={handleAddComment} />
      {comments.length > 0 && (
        <div>
          <h3>Comments:</h3>
          <ul>
            {comments.map((comment, index) => (
              <li key={index}>{comment}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Project;
