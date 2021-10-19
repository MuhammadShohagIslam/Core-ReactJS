import React, { Component } from 'react';

class Child extends React.Component {
    render() { 
        this.props.fun(this)
        return <div></div>;
    }
}
 
/*

    *** We can be pass any function from Parent Component to Child Component

*/
class PassFunctionAsProps extends Component {
    getContext(context){
        console.log(context)
    }
    render() { 
        return(
            <>
                <h1>This is about pass props as a Function to Child Component</h1>
                <Child fun={this.getContext}/>
            </>
        ) 
    }
}
 
export default PassFunctionAsProps;