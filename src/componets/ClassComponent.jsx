import react from 'react'

class ClassComponent extends react.Component{ 

/*
    Component: A component is one of the core building block of react
        *Component name have to write with Capital Letter like (ClassComponent)

    There are two layer into Component:
        *Data Layer(Optional)
        *Representation Layer(Required)

    As a Data Layer, you can work
        *State
        *Variables or Properties
        *Functions or Methods
        *Life Cycle Methods
    As a Representation Layer:
        *JSX(JavaScript Extension)- it is look like HTML Code, but ultimetly, JSX is a JavaScript Code

    **There are two different way to create React Component
        1. Class Componetnt (statefull Component / Smart Component)
        2. Functional Component / Stateless Component/ Dump Component.
            Note:
                Stateful Component: Only we can work with state into class based Component
                Stateless Component: Functional Componenet, you can not work with state
                Dumb Componenet: Since you can not work with the components of the Data Layer( State, Methods, Variables, Life Cycle Method), 
                it is called Dumb Component

*/

    render(){
        return(
            <h1>I am a Class Component</h1>
        )
    }
}

export default ClassComponent