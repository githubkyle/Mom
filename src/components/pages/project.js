import React, { useState } from "react";
import Comment from "./Comment";

// const Project = ({ title, imageUrl, GithubRepo, DeployedPage }) => {
const Project = ({ title, imageUrl, GithubRepo, DeployedPage }) => {
  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState("");
  const [userName, setUserName] = useState("");

  // useEffect(() => {
  //   fetch("http://localhost:5000/items")
  //     .then(response => response.json())
  //     .then(data => setItems(data))
  //     .catch(error => console.error(error));
  // }, []);

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
    </div>
  );
};

export default Project;
