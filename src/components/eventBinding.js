import React, { Component } from 'react'
 
class EventBind extends Component{
    constructor(props){
        super(props)
        this.state={
            message:'Hello'
        }
    this.clickHandler=this.clickHandler.bind(this)
    }
    clickHandler(){
        this.setState({

            message:"GoodBye"
        })
    }
    render(){
        return(
            <div>
                <div>{this.state.message} sai!!!</div>
{/*<button onClick={this.clickHandler.bind(this)}>Bindingclick</button>
<button onClick={()=>this.clickHandler()}>Arrow Bindingclick</button>
//mostly used apporach used and offical documnetation used this apporach

        */}
<button onClick={()=>this.clickHandler()}>Arrow with declaration in constructor and  Bindingclick</button>

                 </div>
        )
    }
}

export default EventBind