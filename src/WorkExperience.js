import React, {Component} from "react";
import WORK_EX from "./data/workExperience";

class WorkEx extends Component {
    render(){
        const {role, location, duration, responsibilities, image} = this.props.workExperience
        return (
        <div style={{ display: 'inline-block', width: 300, margin: 10}}>
        <img src={image} alt='profile' style={{width: 200, height: 120}} />
        <h2>{role}</h2>
        <h3>{location}</h3>
        <h3>{duration}</h3>
        <p>{responsibilities}</p>
      </div>
        )
    }
}

class workExperience extends Component {
    render(){
        return(
            <div>
                <h2>Professional Experience</h2>
                {
                    WORK_EX.map((WORK_EX)=> {
                        return (
                             <WorkEx key={WORK_EX.id} workExperience = {WORK_EX}/>
                        )
                    }
                )
                }           
            </div>
        )
    }
}

export default workExperience;