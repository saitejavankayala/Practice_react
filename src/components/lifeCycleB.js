import React, { Component } from 'react'

class lifeCycleB extends Component{
    constructor(props){
    super(props)
    this.state= {
        name:'Sai Teja'
    }
    console.log("lifeCycleA constructor")
   
    }
    static getDrivedStateFromProps(props,state){
        console.log('lifeCycleA getDrivedStateFromProps')
        return null  
    }
    componentDidMount(){
        console.log("lifecycle A componentDidMount")
    }
   render(){
    console.log('lifeCycleA render')
       return(
           
           <div>lifeCyclea</div>
       )
   }
}

export default lifeCycleB