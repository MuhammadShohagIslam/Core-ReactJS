import React,{ Component } from 'react';


/*
    State: The state is a component's own Data as well as 
    State is a object of the JavaScript.
        **We can update state through setState() function
        **We can update state data from anywhere, it can be from function,
            it can be from Representation Layer, and so on.
        **We can use state data from anywhere, it can be from function,
            it can be from Representation Layer, and so on.

    **If we want to update View automatically, we should update State object
    Declare State Object: We can declare State Object two ways.
        1. Through use of Construction(), it is old way before 16's version of ReactJS
            Example(
                constructor(props){
                    super(props)
                    this.state={
                        array
                        function = it is worthless
                        track another object
                        any properties
                        Note: We should use state object clear way
                    }
                }
            )

        2. The way we have been declared an object in javaScript

        Example :(

            state={

            }

        )
        *** this.setState() function is a asynchronous, so we want to excute our updated data, we need to use callback function like
            Example: 
                this.setState((prev)=>{
                    return {
                        firstly, this code is excuted
                    }
                }, ()=>{
                    lastly, this code is excuted
                })


*/
class StateComponent extends Component {
    /*
        Declare Property Variable: We can declare properties variable two ways in ReactJS.
        *Through use of constructor(), if you use less than 16 version reactJS 
        *After 16 version reactJS, we can decalere any properties like(variable=value)

    */
    // constructor(props){
    //     super(props)
    //     this.count = 0
    // }
    // count =0

    state={
        count:0
    }


    render() { 
        return(
            <>
                <h1 style={{color:"black"}}>Why We Need To Know State of the ReactJS</h1>
                <p style={{color:"black"}}>{this.state.count}</p>
                {/* <button onClick={()=>{
                    this.setState({count:this.state.count+1})
                }}>Click</button> */}

                <button onClick={()=>{
                   this.setState(prev=>{
                       return{
                           count: prev.count+1
                       }
                   },()=>{
                       console.log(this.state.count)
                   })
                }}>Click</button>
            </>
        )
    }
}
 
export default StateComponent;