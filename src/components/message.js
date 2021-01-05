import React,{Component} from 'react'  

class Message extends Component{
    constructor(){
        super()
        this.state={
            message:'welcome visitor',
            count:0
        }
        
    }
    changeMessage(){
        this.setState({
            message:'Thank you for subscribing'
        })
    }
    incrementCountervalue(){
      /*  this.setState({
            count:this.state.count+1
        })*/
        this.setState(prevState=>({
            count:prevState.count+1
        }))
    }
    decrementCountervalue(){
        this.setState({
            count:this.state.count-1
        },()=>{console.log('callback value',this.state.count)})
    }
    fiveIncrementCountervalue(){
       this.incrementCountervalue()
       this.incrementCountervalue()
       this.incrementCountervalue()
       this.incrementCountervalue()
       this.incrementCountervalue()
      }
    render(){
        return(
            <div>            
            <h1>{this.state.message}  </h1>
            <button onClick={()=>this.changeMessage()}>subscribe</button>
            <h1>---------------</h1>
        <h1>Count={this.state.count}</h1>
        <button onClick={()=>this.incrementCountervalue()}>Increment</button>
        <button onClick={()=>this.fiveIncrementCountervalue()}>fiveIncrement</button>
        <button onClick={()=>this.decrementCountervalue()}>Decrement</button>
        </div>
);
    }
}

export default Message;