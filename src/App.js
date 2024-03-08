import React, { Component } from "react";
import "./App.css";
import Projects from "./Projects";
import SocialProfiles from "./SocialProfiles";
import ProfilePic from './assets/Profile Pic.jpg';
import WorkExperience from "./WorkExperience";

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
        <img src={ProfilePic} alt="ProfilePic" className="ProfilePic"/>
        <h1>Hello there!</h1>
        <p style={{margin:"0px"}}>My name is Srushti. I'm a software engineer. <br/>I'm always looking forword to working on meaningful projects.</p>
        {this.state.displayBio && (
          <div>
            <p>I live in Milpitas, California.<br/>
              I am pursuing master's in Information Systems at Northeastern
              University.
            <br/>
              I like to paint, sketch and decorate my room with paintings and
              flowers.
            </p>
          </div>
        )}
        <div>
          <button className="button-show" onClick={this.show}>
            {this.state.displayBio ? "Show less..." : "Read more..."}
          </button>
        </div>
        <hr />
        <WorkExperience/>
        <hr/>
        <Projects />
        <hr />
        <SocialProfiles/>
        
      </div>
    );
  }
}

export default App;