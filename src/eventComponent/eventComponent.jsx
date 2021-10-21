import React, { Component } from 'react';
import styled from 'styled-components';
import classes from '../styleComponent/StyleComponent.module.css'


/*
    Event: Event is an object which can be only triggers when something special happens
        and return an object to the listener which contians information related to that event.
    Example: Button Click, Input Elevent, Form Submission , Mosue Enter, Mosue Leave, and so on.

    Note: Event is the only way to interact with users and get users feedback.

    *Every Event Has -
        - Name
        - Listener Function

    Two-Way Data Binding: We are showing data from state data to Users and in the same time,
        when users changed data something, it is automatically update through setState(), it is called Two-Way-Data-Binding

*/
const Input = styled.input`
    margin-top: 10px

`
class EventComponent extends Component {
    state = {
        value: ''
    }

    clickHandelar = event => {
        console.log(event)
    }
    ChangeHandelar = event =>{
        this.setState({value:event.target.value})
    }
    FocusHandelar = event =>{
        console.log("It is Focusing")
    }
    BlurHandelar = event =>{
        if(!this.state.value){
            alert('Enter Text Something')
            console.log("Enter Yout Text")
        }
    }

    render() { 
        return(
            <>
                <h1 className={classes.title}>This is about Event Component</h1>
                <button onClick={this.clickHandelar}>Click Here</button>
                <Input
                    onFocus={this.FocusHandelar}
                    onChange={this.ChangeHandelar}
                    onBlur={this.BlurHandelar}
                    type="text" 
                    className="form-control" 
                    value={this.state.value}
                    placeholder="Enter Your Text"
                />
                {/* {this.state.value ? <h1 className={classes.title}>Marhaba: {this.state.value}</h1>: ''} */}
                {this.state.value && <h1 className={classes.title}>Marhaba: {this.state.value}</h1>}
            </>
        )
    }
}
 
export default EventComponent;