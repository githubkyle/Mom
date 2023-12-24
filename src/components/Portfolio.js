import React from "react";

import Project from "./pages/project";

const projects = [
  {
    id: 1,
    title: "Writing",
    imageUrl: "Paper.jpg",
    DeployedPage: "https://workouts-9a2660eff0a7.herokuapp.com/"
  },
  {
    id: 2,
    title: "Story",
    imageUrl: "Paper.jpg",
    DeployedPage: "https://githubkyle.github.io/ServerNotes/"
  },
  {
    id: 3,
    title: "Novel",
    imageUrl: "Paper.jpg",
    DeployedPage: "https://githubkyle.github.io/Weather-Dashboard/"
  },
  {
    id: 4,
    title: "Manuscript",
    imageUrl: "Paper.jpg",
    DeployedPage: "https://githubkyle.github.io/Javascript-Quiz/"
  },

  {
    id: 5,
    title: "Poem",
    imageUrl: "Paper.jpg",
    DeployedPage: "https://githubkyle.github.io/Planner/"
  },

  {
    id: 6,
    title: "Autobiography",
    imageUrl: "Paper.jpg",
    DeployedPage: "https://githubkyle.github.io/Password-Generator/"
  }
];

const Portfolio = () => {
  return (
    <div className="app">
      {projects.map((project, index) => (
        <Project
          projectId={project.id}
          key={index}
          title={project.title}
          imageUrl={project.imageUrl}
          GithubRepo={project.GithubRepo}
          DeployedPage={project.DeployedPage}
        />
      ))}
    </div>
  );
};

export default Portfolio;
