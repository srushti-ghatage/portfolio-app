import React, { Component } from "react";
import PROJECTS from "./data/projects";

class Project extends Component {
  render() {
    console.log("this.props", this.props);
    const { title, image, description, techstack } = this.props.project;
    return (
      <div style={{ display: "inline-block", width: 300, margin: 10 }}>
        <h3>{title}</h3>
        <img src={image} alt="profile" style={{ width: 200, height: 120 }} />
        <h4>{description}</h4>
        <h4>{techstack}</h4>
      </div>
    );
  }
}

class Projects extends Component {
  render() {
    return (
      <div>
        <h2>Highlighted projects</h2>
        <div style={{ display: "flex", justifyContent: "space-evenly" }}>
          {PROJECTS.map((PROJECT) => {
            return <Project key={PROJECT.id} project={PROJECT} />;
          })}
        </div>
      </div>
    );
  }
}

export default Projects;
