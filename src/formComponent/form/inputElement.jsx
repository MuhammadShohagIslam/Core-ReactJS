import React from 'react';
import PropTypes from 'prop-types';
import '../../styleComponent/StyleComponent.css'

const InputElement = (props) =>{
    return(
        <>
            <div className={`form-group ${props.style}`}>
                <label htmlFor={props.id} style={{color:'black', display:'flex',fontSize:'17px',fontVariant:'all-small-caps'}}>{props.name}:</label>
                <input type={props.type} className="form-control" name={props.name} value={props.value} onChange={props.handleChanges} id={props.id} placeholder={`enter your ${props.name}`}/>
            </div>
        </>
    )
}
InputElement.propTypes ={
    style: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
    handleChange: PropTypes.func.isRequired
}

export default InputElement;