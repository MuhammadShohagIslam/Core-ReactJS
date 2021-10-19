import React, { Component } from 'react';

class Child extends React.Component {
    render() { 
        return(
            <div>
                <h2>I am a Child Component</h2>
                <h5>It is time to be correct previous mistake</h5>
                {this.props.children}
            </div>
        )
    }
}
 
/*

    *** We can be pass Children Component from Parent Component to Child Component

*/

class RenderChildProps extends Component {
    render() { 
        return(
            <>
                <Child>
                    <h1>Hello, I am  from Parent</h1>
                    <h2>I am child of child Component</h2>
                </Child>
            </>
        )
    }
}
 
export default RenderChildProps;