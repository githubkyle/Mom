import React from "react";

const Project = ({ title, imageUrl, GithubRepo, DeployedPage }) => {
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
