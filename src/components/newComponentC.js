import React, { Component } from 'react'
import { UserConsumer } from './userContext'

class newComponentC extends Component{
    render(){
        return(
            <UserConsumer>
                {
                    (username)=>{
                        return <div>
                            Hello {username} using Content 
                        </div>
                    }
                }
            </UserConsumer>
        )
    }
}

export default newComponentC