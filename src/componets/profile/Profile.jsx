import react from 'react'
import Bio from './Bio'
import Skill from './Skill'
import SocialLinks from './SocialLinks';

class Profile extends react.Component{
    bio={
            name:"Muhammad Shohag",
            title:"I am a Software Engineer",
            skillA:"Python",
            skillB:"JavaScript"
        }
        
    render(){
        return(
            <>
                <div class="card" style={{width: "600px"}}>
                    <div class="card-body">
                        <Bio name={this.bio.name} title={this.bio.title}/>
                        <Skill skillA={this.bio.skillA} skillB={this.bio.skillB}/>
                        <SocialLinks/>
                    </div>
                </div>
            </>
        )
    }
}

export default Profile