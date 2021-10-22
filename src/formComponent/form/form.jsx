import React from 'react';
import PropTypes from 'prop-types';
import classes from '../../styleComponent/StyleComponent.module.css';
import InputElement from './inputElement';

const FromElement = (props) =>{
    return(
        <>
            <form onSubmit={props.handleSubmit}>
                <InputElement
                    style={classes.formControl}
                    id='name'
                    type='text'
                    name='name'
                    value={props.value.name}
                    handleChanges={props.handleChange}
                
                />
                <InputElement
                    style={classes.formControl}
                    id='name'
                    type='email'
                    name='email'
                    value={props.value.email}
                    handleChanges={props.handleChange}
                
                />
                <InputElement
                    style={classes.formControl}
                    id='name'
                    type='password'
                    name='password'
                    value={props.value.password}
                    handleChanges={props.handleChange}
                
                />
                <button type="submit" className={`btn btn-primary ${classes.formControl}`}>Submit</button>
            </form>
        </>
    )
}
InputElement.propTypes ={
    value: PropTypes.string.isRequired,
    handleSubmit: PropTypes.func.isRequired,
    handleChange: PropTypes.func.isRequired
}

export default FromElement;