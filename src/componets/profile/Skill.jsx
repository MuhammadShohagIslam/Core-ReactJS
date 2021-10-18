import React, { Component } from 'react';


class Skill extends Component {
    render() { 
        return(
            <>
                <div class="card-header" style={{fontSize: "24px",color:'black'}}>
                    Skills
                </div>
                <ul class="list-group list-group-flush">
                    <li class="list-group-item" style={{fontSize: "18px",color:'black'}}>{this.props.skillA}</li>
                    <li class="list-group-item" style={{fontSize: "18px",color:'black'}}>{this.props.skillB}</li>
                </ul>
            </>
        )
    }
}
 
export default Skill;