import React, { Component } from 'react';
import styled from 'styled-components';
import '../styleComponent/StyleComponent.css';
import classes from '../styleComponent/StyleComponent.module.css'

/*
    Style Component: Style Component is a process of deal work with styling  through which we are styling represention layer in React JS App
        * There are four main method to style react js app
            1. Inline CSS
            2. CSS Class
            3. CSS Module
            4. JSS( Style Component )

*/
const objs ={
    color:'black',
    fontSize: '20px'
}

// this is a Style Component method or JSS
const Title = styled.h1`
    color: green;
    font-size: 25px;
`;
const Button = styled.button`
    color: black;
    font-size: 1em;
    margin: 1em;
    padding: 0.25em 1em;
    border: 2px solid green;
    border-radius: 3px;
`

class StyleComponent extends Component {
    render() { 
        return (
            <>
                {/* 
                    This is a Inline CSS method to style react js app
                        *if we want to do style just simple task, it is a good, otherwise it is not good.
                    <h1 style={{marginTop:"20px"}}>This Component is about Style Component</h1> 
                    <h1 style={objs}>This Component is about Style Component</h1>
                */}
                {/*
                    This is a CSS Class method to style react js app
                        * When we want to solve scope problem in CSS Class Method, we should be define unique name of CSS Class like name of 'title'
                    <h1 className='title'>This Component is about Style Component</h1>
                */}

                {/*
                    This is a CSS Module method to style react js app
                        *It is a best method for scoping
                    <h1 className={classes.title}>This Component is about Style Component</h1>
                */}
                
                {/*
                    This is a JSS( Style Component ) method to style react js app
                        
                    <Title>This Component is about Style Component</Title>
                    <Button>Clink Here</Button>
                */}

                <Title>This Component is about Style Component</Title>
                <Button>Clink Here</Button>
            
            </>
        
        )
    }
}
 
export default StyleComponent;