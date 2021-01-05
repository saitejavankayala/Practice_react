import React, { Component } from 'react'
import LifeCycleB from './lifeCycleB'

class lifeCycleA extends Component{
    constructor(props){
    super(props)
    this.state= {
        name:'Sai Teja'
    }
    console.log("lifeCycleA constructor")
   
    }
    static getDerivedStateFromProps(props,state){
        console.log('lifeCycleA getDrivedStateFromProps')
        return null  
    }
    componentDidMount(){
        console.log("lifecycle A componentDidMount")
    }
   render(){
    console.log('lifeCycleA render')
       return(
           <div>
               <LifeCycleB/>
           <div>
               lifeCyclea</div>
               </div>       )
   }
}

export default lifeCycleA