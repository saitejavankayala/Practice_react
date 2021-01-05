import React, { Component } from 'react'

class Form extends Component{
    constructor(props){
    super(props)
    this.state={
        Username:'',
        comments:''
    }
}
handerUsernamechange=(event)=>{
 this.setState(
     {
         Username:event.target.value
     }
 )
}
handerCommentschange=(event)=>{
    this.setState(
        {
            comments:event.target.value
        }
    )
   } 
render(){
        return(
            <form>
                <div>
                    <label>Username</label>
                    <input type='text' value={this.state.Username} onChange={this.handerUsernamechange}></input>
                    {this.state.Username}
                </div>
                
                <div>
                    <textarea>Comments</textarea>
                    <input type='textarea' value={this.state.comments} onChange={this.handerCommentschange}></input>
                    {this.state.Username}
                </div>
            </form>
        )
    }
}

export default Form