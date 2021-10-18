import React, { Component } from 'react';


class SocialLinks extends Component {
    render() { 
        return(
            <>
                <div class="card-header" style={{fontSize: "24px",color:'black'}}>
                    Social Links
                </div>
                <a href="#" className="card-link" style={{fontSize: "14px"}}>Facebook</a>
                <a href="#" className="card-link" style={{fontSize: "14px"}}>Twitter</a>
            
            </>
        )
    }
}
 
export default SocialLinks;