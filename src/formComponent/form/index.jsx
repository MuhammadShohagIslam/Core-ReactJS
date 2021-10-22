import React, { Component } from 'react';
import classes from '../../styleComponent/StyleComponent.module.css';
import FromElement from './form';


class Form extends Component {
    state = {
        name: '',
        email: '',
        password: ''
    }

    handleChange = event => {
        this.setState({
            [event.target.name] : event.target.value
        })
    }

    handleSubmit = event => {
        event.preventDefault();
        console.log(this.state) 
        event.target.reset() 
        this.setState({
            name: '',
            email: '',
            password: ''
        })
    }
    render() { 
        return(
            <>
                <h1 className={classes.title}>Control Form(Like React Way Form)</h1>
                <FromElement 
                    value={this.state}
                    handleSubmit ={this.handleSubmit}
                    handleChange={this.handleChange}
                />
            
            </>
        )
    }
}
 
export default Form;