import React, { Component } from 'react';
import classes from '../../styleComponent/StyleComponent.module.css'

class UncontrolForm extends Component {
    handleSubmit = event =>{
        event.preventDefault()
        const data ={};
        data.name = event.target.name.value
        data.email = event.target.email.value
        data.password = event.target.password.value
        console.log(data)
        event.target.reset()
    }
    render() { 
        return(
            <>
                <h1 className={classes.title}>UnControl Form(Like Html Form)</h1>
                <form onSubmit={this.handleSubmit}>
                    <div className="form-group">
                        <label htmlFor="exampleInputName" style={{color:'black', display:'flex',fontSize:'17px'}}>Name:</label>
                        <input type="text" className="form-control" name='name' id="exampleInputName" placeholder="Enter Name"/>
                    </div>
                    <div className={`form-group ${classes.formControl}`}>
                        <label htmlFor="exampleInputEmail1" style={{color:'black', display:'flex',fontSize:'17px'}}>Email Address:</label>
                        <input type="email" className="form-control" id="exampleInputEmail1" name='email' aria-describedby="emailHelp" placeholder="Enter email"/>
                    </div>
                    <div className={`form-group ${classes.formControl}`}>
                        <label htmlFor="exampleInputPassword1" style={{color:'black', display:'flex',fontSize:'17px'}}>Password:</label>
                        <input type="password" className="form-control" name='password' id="exampleInputPassword1" placeholder="Password"/>
                    </div>
                    <button type="submit" className={`btn btn-primary ${classes.formControl}`}>Submit</button>
                </form>
            </>
        )
    }
}
 
export default UncontrolForm;