import React, { Component } from 'react';
import Bio from '../componets/profile/Bio'
import Skill from '../componets/profile/Skill'
import SocialLinks from '../componets/profile/SocialLinks';

class PropsComponenet extends Component {
    /*
        Props: Props is a important keyword for React JS, which is used to pass any data from one
            component to another component
            * We can be passed Data From Prarent Component to Child Component
    
    */
    render() { 
        return(
            <>
                <div class="card" style={{width: "600px"}}>
                    <div class="card-body">
                        <Bio name="Muhummad Shohag" title="I am a student of Software Engineer"/>
                        <Skill skillA="Python" skillB="JavaScript"/>
                        <SocialLinks/>
                    </div>
                </div>
            
            </>
        )
    }
}
 
export default PropsComponenet;