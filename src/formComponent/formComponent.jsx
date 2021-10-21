import React, { Component } from 'react';
import classes from '../styleComponent/StyleComponent.module.css'

class FormComponent extends Component {

    state ={
        name: '',
        email: '',
        country: '',
        gender: '',
        birthday: '',
        message: '',
        skills:[],
        agree: false
    }

    handleChange = event =>{
        this.setState({
            [event.target.name]: event.target.value
        })
    }
    handleCheckBox = event =>{
        this.setState({
            agree: event.target.checked
        })
    }
    handleSkillsCheckBox = event =>{
        if(event.target.checked){
            this.setState({
                skills : [...this.state.skills, event.target.value]
            })
        }else{
            const skills = this.state.skills.filter(skills=> skills !== event.target.value)
            console.log(skills)
            this.setState({skills})
        }
    }
    handleClink = event =>{
        console.log(this.state)
    }

    render() { 
        const {name, email, country, birthday, message, skills, agree} = this.state
        return(
            <>
                <h1 className={classes.title}>Form Component</h1>

                <form>
                    <div className="form-group">
                        <input type="text" className="form-control" name='name' value={name} onChange={this.handleChange} placeholder="Enter Your Name"/>
                    </div>
                    <div className="form-group" style={{paddingTop:'10px'}}>
                        <input type="email" className="form-control" name="email" value={email} onChange={this.handleChange} placeholder="Enter Your Email"/>
                    </div>
                    <div className="form-group" style={{paddingTop:'10px'}}>
                        <select className="form-control" name='country' value={country} onChange={this.handleChange}>
                            <option selected>Select Country</option>
                            <option>Saudia Arabia</option>
                            <option>Bangladesh</option>
                            <option>Pakistan</option>
                            <option>Oman</option>
                        </select>
                    </div>
                    <div className="form-check">
                        <input className="form-check-input" type="radio" name="gender" value='Male' onChange={this.handleChange}/>
                        <label style={{color:'black',fontSize:'20px'}} className="form-check-label">
                            Male
                        </label>
                        </div>
                    <div class="form-check">
                        <input className="form-check-input" type="radio" name="gender" value='Female' onChange={this.handleChange}/>
                        <label style={{color:'black',fontSize:'20px'}} className="form-check-label">
                            Female
                        </label>
                    </div>
                    <div class="form-check">
                        <input className="form-check-input" type="radio" name="gender" value='Other' onChange={this.handleChange}/>
                        <label style={{color:'black',fontSize:'20px'}} className="form-check-label">
                            Other
                        </label>
                    </div>
                    <div className="form-group" style={{paddingTop:'10px'}}>
                        <input type="date" className="form-control" name='birthday' value={birthday} onChange={this.handleChange}/>
                    </div>
                    <div className="form-group" style={{paddingTop:'10px'}}>
                        <h3 style={{color:'black',fontSize:'20px'}}>Skills</h3>
                    </div>
                    <div class="form-check">
                        <input className="form-check-input" type="checkbox" name="skills" value='Python' checked={skills.includes('Python')} onChange={this.handleSkillsCheckBox}/>
                        <label style={{color:'black',fontSize:'20px'}} className="form-check-label">
                            Python
                        </label>
                    </div>
                    <div class="form-check">
                        <input className="form-check-input" type="checkbox" name="skills" value='JavaScript' checked={skills.includes('JavaScript')} onChange={this.handleSkillsCheckBox}/>
                        <label style={{color:'black',fontSize:'20px'}} className="form-check-label">
                            JavaScript
                        </label>
                    </div>
                    <div class="form-check">
                        <input className="form-check-input" type="checkbox" name="skills" value='ReactJS' checked={skills.includes('ReactJS')} onChange={this.handleSkillsCheckBox}/>
                        <label style={{color:'black',fontSize:'20px'}} className="form-check-label">
                            ReactJS
                        </label>
                    </div>
                    <div className="form-group" style={{paddingTop:'10px'}}>
                        <textarea className="form-control" name='message' value={message} rows="3" placeholder="Enter Your Message" onChange={this.handleChange}></textarea>
                    </div>
                    <div class="form-check">
                        <input className="form-check-input" type="checkbox" name="agree" checked={agree} onChange={this.handleCheckBox}/>
                        <label style={{color:'black',fontSize:'20px'}} className="form-check-label">
                            Agree To The All Terms And Conditions
                        </label>
                    </div>
                    <button onClick={this.handleClink} style={{marginTop:'10px'}}>Submit</button>
                </form>
            </>
        )
    }
}
 
export default FormComponent;