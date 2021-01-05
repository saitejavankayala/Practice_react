import React,{Component} from 'react'  

class Welcome extends Component{
    render(){
        return(
            <h1>Welcome from Class Component {this.props.name} dddd.... {this.props.heroname}</h1>
        );
    }
}

export default Welcome;