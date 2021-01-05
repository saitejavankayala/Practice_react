import React, { Component } from 'react'
import NewComponentC from './newComponentC'
import UserContext from './userContext'

class newComponentB extends Component{
    static contextType=UserContext
    render(){
        return(
            <div>
                new Component B context {this.context}
            <NewComponentC/>
            </div>
        )
        
    }
}

export default newComponentB