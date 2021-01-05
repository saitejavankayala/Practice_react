import React, { Component } from 'react'
import NewComponentB from './newComponentB'

class newComponentA extends Component{
    render(){
        return(
            <NewComponentB/>
        )
    }
}

export default newComponentA