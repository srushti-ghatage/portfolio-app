import React, { Component } from "react";
import "./App.css";
import Projects from "./Projects";
import SocialProfiles from "./SocialProfiles";
import ProfilePic from "./assets/Profile Pic.jpg";
import WorkExperience from "./WorkExperience";
import Education from "./Education";

class App extends Component {
  constructor() {
    super();
    this.state = { displayBio: false };
  }
  show = () => {
    if (this.state.displayBio) {
      this.setState({ displayBio: false });
    } else {
      this.setState({ displayBio: true });
    }
  };
  render() {
    return (
      <div>
        <img src={ProfilePic} alt="ProfilePic" className="ProfilePic" />
        <h1>Hello there!</h1>
        <p style={{ margin: "0px", fontSize: "large", textWrap: "balance" }}>
          Welcome to my page! <br/> My name is Srushti Ghatage. I'm a software engineer. An enthusiastic developer and dedicated graduate student pursuing a Summer Internship/Co-op to apply and refine coding skills. Eager to contribute to innovative projects, achieve significant career milestones, and propel successful career growth through hands-on experience and continuous learning.
        </p>
        {this.state.displayBio && (
          <div>
            <p style={{fontSize: "large", textWrap: "balance"}}>
              While working at Icertis, a leading contract intelligence
              platform, I applied my skills in HTML5, MySQL, and CSS to develop,
              test, and maintain a web application for various clients. I worked
              with a cross-functional team of developers, designers, and
              business analysts to deliver high-quality solutions that met the
              client's requirements and expectations. I also contributed to the
              improvement of the internal processes and tools by providing
              feedback and suggestions. Currently, I am pursuing my master's
              degree in Information Systems at Northeastern University, where I
              am learning about the latest technologies and methodologies in the
              fields of data science, artificial intelligence, and cloud
              computing. My goal is to use my knowledge and experience to solve
              real-world problems and create positive social impact. I am a
              creative, open-minded, and diligent learner who never backs down
              from a challenge. I am actively seeking summer 2024 internship
              opportunities as a Software Development Engineer, where I can
              apply my skills and learn from the best in the industry.
              <br />I like to paint, sketch and decorate my room with paintings
              and flowers.
            </p>
          </div>
        )}
        <div>
          <button className="button-show" onClick={this.show}>
            {this.state.displayBio ? "Show less..." : "Read more..."}
          </button>
        </div>
        <hr />
        <WorkExperience />
        <hr />
        <Education />
        <hr />
        <Projects />
        <hr />
        <SocialProfiles />
      </div>
    );
  }
}

export default App;
