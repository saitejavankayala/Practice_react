import React, { Component } from 'react'

class classclick extends Component{
    clickHandler(){
        console.log("Click event handling")
    }
    render(){
    return(
        <div>
            <button onClick={this.clickHandler}>Class click</button>
        </div>
    )}
}
export default classclick