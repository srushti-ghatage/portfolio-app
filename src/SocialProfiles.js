import React, { Component } from "react";
import SOCIAL_PROFILES from "./data/socialProfiles";

class SocialProfile extends Component {
    render(){
        const{ link, image } = this.props.socialProfiles;
        return(
            <span>
                <a href ={link}><img src={image} alt='social-profile' style={{width: 35, height: 35, margin: 10}}/></a>
            </span>
        )
    }
}

class SocialProfiles extends Component {
  render(){
    return(
        <div>
            <h2>Connect with me!</h2>
            <div>
                {
                    SOCIAL_PROFILES.map((SOCIAL_PROFILES)=> {
                        return (
                            <SocialProfile key={SOCIAL_PROFILES.id} socialProfiles = {SOCIAL_PROFILES}/>
                        )
                    }
                    )
                }
            </div>
        </div>
    );
  }
}

export default SocialProfiles;