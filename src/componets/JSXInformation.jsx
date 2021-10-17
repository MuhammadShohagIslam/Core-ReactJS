import React from "react";
import react from "react";

// Custome Component
const MyCustomeComponent =()=>{
    return(
        <h1>I am a Custome Component</h1>
    )
}

class JSXInformation extends react.Component{
    /*
        JSX: JSX mean JavaScript XML. It is look like HTML Code, but it is a JavaScript Code
            *JSX allows us to write HTML in React. 
            *JSX makes it easier to write and add HTML in React.
            *We can use JavaScript Code in JSX, but it should be single statement,
                not multiple statement(like->if/else. function, for loop statement)

    */

/* 
    render(){
        return(
            React.createElement('div',{className:'App'},[
                React.createElement('h1',null,'I am a JSX'),
                React.createElement('p',null, "I am a JavaScript Extension or XML")
            ])
        )
        // return(
        //     <div className='App'>
        //         <h1>I am a JSX</h1>
        //         <p>I am a JavaScript Extension or XML</p>
        //     </div>
        // )
    }
*/
    // ========= How to Use JSX in React ============//

    render(){
        // object
        const obj ={
            title:'It is a JSX',
            id:'myid'
        }
        // variable
        const name = "JSX"
        const bio =(
            <div>
                <h1>It is a {name}</h1>
                <p>I am a JavaScript Extension or XML</p>
            </div>
        )

        return(
            // React.Fragment, it is a Dot Notation, we use also <> </> instend of React.Fragment
            <React.Fragment>
                <h1 { ...obj }>It is a {name}</h1>
                {bio}
                <p>{ new Date().toISOString }</p>
                <MyCustomeComponent/>
            </React.Fragment>
        )
    }
}
/*
    This is the shape of JSX object behind JSX for a element

*/
// const element ={
//     type: 'div',
//     props:{
//         className:'App',
//         title:"Text Me"
//     },
//     children:['h1','p','img'] | 'Text' | null

// }

export default JSXInformation;