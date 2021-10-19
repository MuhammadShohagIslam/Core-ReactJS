import React from 'react';

const PassPropsByFunction = (props) => {
    return (  
        <>    
            <h5 className="card-title" style={{fontSize: "24px",color:'black'}}>{props.name}</h5>
            <h6 className="card-subtitle mb-2 text-muted" style={{fontSize: "20px",color:'black'}}>{props.title}</h6>
        </>
    )
}

export default PassPropsByFunction

