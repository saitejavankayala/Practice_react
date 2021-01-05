import React, { Component } from 'react'

class UserGreeting extends Component{
    constructor(props){
        super(props)
        this.state={
            isLoggedin:true
        }
    }
 render(){
   //short  circuit rendering
   return this.state.isLoggedin && <div>Welcome Saiteja !!!!</div>

   /*
    //tenerary operator
    return(
        this.state.isLoggedin?<div>Welcome Saiteja!!!</div>:<div>Welcome Guest!!!!</div>
    )
    */
    
    
    /* 
    //element variable approach 
    let message
    if(this.state.isLoggedin){
        message=<div>Welcome Saiteja!!!!</div>
    }
    else{
        message=<div>Welcome Guest!!!</div>
    }
    return <div>{message}</div>
     */



    /*
    //if conditional apporach
    if(this.state.isLoggedin){
         return(
             <div>Welcome Saiteja!!!!</div>
         )
     }
     else{
         return(<div>
             Guest isLoggedin
         </div>)
     }
     */
     /*
     return(
        <div>
        hello welcome to conditions world!!!
    </div>

     )
         */
     
 }
}

export default UserGreeting