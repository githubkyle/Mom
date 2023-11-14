import React from "react";
import Project from "./pages/project";

const projects = [
  {
    title: "Writing 1",
    imageUrl: "Workouts.png",
    GithubRepo: "https://github.com/githubkyle/Workouts",
    DeployedPage: "https://workouts-9a2660eff0a7.herokuapp.com/"
  },
  {
    title: "Story 2",
    imageUrl: "servernotes.png",
    GithubRepo: "https://github.com/githubkyle/ServerNotes",
    DeployedPage: "https://githubkyle.github.io/ServerNotes/"
  },
  {
    title: "Novel 3",
    imageUrl: "weather.png",
    GithubRepo: "https://github.com/githubkyle/Weather-Dashboard",
    DeployedPage: "https://githubkyle.github.io/Weather-Dashboard/"
  },
  {
    title: "JavaScript Quiz",
    imageUrl: "jsq.png",
    GithubRepo: "https://github.com/githubkyle/Javascript-Quiz",
    DeployedPage: "https://githubkyle.github.io/Javascript-Quiz/"
  },

  {
    title: "Daily Planner",
    imageUrl: "planner.png",
    GithubRepo: "https://github.com/githubkyle/Planner",
    DeployedPage: "https://githubkyle.github.io/Planner/"
  },

  {
    title: "Password Generator",
    imageUrl: "password.png",
    GithubRepo: "https://github.com/githubkyle/Password-Generator",
    DeployedPage: "https://githubkyle.github.io/Password-Generator/"
  }
];

const Portfolio = () => {
  return (
    <div className="app">
      {projects.map((project, index) => (
        <Project
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
