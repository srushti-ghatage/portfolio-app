import React, { Component } from "react";
import EDUCATION from "./data/education";

class Edu extends Component {
  render() {
    const { university, course, duration, subject, image } =
      this.props.education;
    return (
      <div style={{ display: "flex", margin: 10, textAlign: "left" }}>
        <div style={{padding: "30px"}}>
          <img
            src={image}
            alt="profile"
            style={{
              width: 200,
              height: 180,
              paddingRight: "10px",
              objectFit: "contain",
            }}
          />
        </div>
        <div>
          <h2 id="university">{university}</h2>
          <h3 id="course">{course}</h3>
          <h3 id="duration">{duration}</h3>
          <p id="subject">{subject}</p>
        </div>
      </div>
    );
  }
}

class Education extends Component {
  render() {
    return (
      <div>
        <h2>Education</h2>
        <div
          style={{
            display: "flex",
            justifyContent: "flex-start",
            alignItems: "center",
            flexDirection: "column",
          }}
        >
          {EDUCATION.map((item) => {
            return <Edu key={item.id} education={item} />;
          })}
        </div>
      </div>
    );
  }
}

export default Education;
