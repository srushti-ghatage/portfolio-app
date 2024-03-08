import React, { Component } from "react";
import WORK_EX from "./data/workExperience";

class WorkEx extends Component {
  render() {
    const { role, location, duration, responsibilities, image } =
      this.props.workExperience;
    return (
      <div style={{ display: "flex", margin: 10, textAlign: "left" }}>
        <div>
          <img
            src={image}
            alt="profile"
            style={{ width: 300, height: 220, padding: "0px", objectFit: "contain" }}
          />
        </div>
        <div>
          <h2 id="role">{role}</h2>
          <h3 id="location">{location}</h3>
          <h3 id="duration">{duration}</h3>
          <p id="resp">{responsibilities}</p>
        </div>
      </div>
    );
  }
}

class WorkExperience extends Component {
  render() {
    return (
      <div>
        <h2>Professional Experience</h2>
        <div
          style={{
            display: "flex",
            justifyContent: "flex-start",
            alignItems: "center",
            flexDirection: "column",
          }}
        >
          {WORK_EX.map((WORK_EX) => {
            return <WorkEx key={WORK_EX.id} workExperience={WORK_EX} />;
          })}
        </div>
      </div>
    );
  }
}

export default WorkExperience;
