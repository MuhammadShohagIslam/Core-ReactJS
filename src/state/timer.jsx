import React, { Component } from 'react';


class TimerComponent extends Component {
    state={
        count:0
    }
    setIncreament=()=>{
        this.setState({count:this.state.count+1})
    }
    setDcreament=()=>{
        if(this.state.count > 0){
            this.setState({count:this.state.count-1})
        }
    }

    setIntervalId = null

    setTimer = () =>{
        if(this.state.count > 0 && !this.setIntervalId){
           this.setIntervalId=setInterval(()=>{
                this.setState({count:this.state.count-1},()=>{
                    if(this.state.count === 0){
                        alert('Timer Finished')
                        clearInterval(this.setIntervalId)
                        this.setIntervalId = null
                    }
                })  
            },1000)
        }
    }
    setStop = () =>{
        if(this.setIntervalId){
            clearInterval(this.setIntervalId)
            this.setIntervalId = null
        }
    }
    setReset = () =>{
        this.setState({
            count:0,
        })
        clearInterval(this.setIntervalId)
        this.setIntervalId = null
    }

    render() { 
        return (
            <>
                <h1 style={{color:"black"}}>Timer</h1>
                <div>
                    <button onClick={this.setDcreament}>-</button>
                    <p style={{color:"black"}}>{this.state.count}</p>
                    <button onClick={this.setIncreament}>+</button>
                </div>
                <div style={{paddingTop:"10px"}}>
                    <button style={{color:"black"}} onClick={this.setTimer}>Start</button>
                    <button style={{color:"black"}} onClick={this.setStop}>Stop</button>
                    <button style={{color:"black"}} onClick={this.setReset}>Reset</button>
                </div>

            </>
        )
    }
}
 
export default TimerComponent;