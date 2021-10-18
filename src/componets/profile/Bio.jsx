import React, { Component } from 'react';


class Bio extends Component {
    render() { 
        return(
            <>
              
                <h5 className="card-title" style={{fontSize: "24px",color:'black'}}>{this.props.name}</h5>
                <h6 className="card-subtitle mb-2 text-muted" style={{fontSize: "20px",color:'black'}}>{this.props.title}</h6>

            </>
        )
    }
}
 
export default Bio;