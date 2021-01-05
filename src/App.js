import React, {Component} from 'react';
import {Navbar,NavbarBrand} from 'reactstrap';
import './App.css';
import Menu from './components/MenuComponent';
import {DISHES} from './shared/dishes'
import {Greet} from './components/greet_function'
import Welcome from './components/welcome_class'
import Hello from './components/hello_with_without_using_js'
import Message from './components/message'
import Functionclick from './components/functionCLick'
import Classclick from './components/classClick'
import EventBind from './components/eventBinding'
import UserGreeting from './components/userGreeting_conditional_rendering'
import NameList from './components/NameList'
import StyleSheet from './components/Stylesheet'
import Inline from './components/inlinestyle'
import './components/css/appstyle.css'
import Styles from './components/css/appstyle.module.css'
import Form from './components/form.js'
import LifeCycleA from './components/lifeCycleA'
import Clickcounter from './components/Clickcounter'
import Hovercounter from './components/HoverCounter'
import NewComponentA from './components/newComponentA'
import { UserProvider } from './components/userContext';
import newComponentA from './components/newComponentA';

class App extends Component{
  constructor(props) {
    super(props);
    this.state = {
      dishes: DISHES
    };
  }
  
  render(){
      return(
        
        <div >
        {/* if u doesnot specify the write the userprovider it will take default value*/}
          <NewComponentA/>
        {/* if u specify the userprovider it will take that value*/}
          <UserProvider value="Saiteja">
          <NewComponentA />
          </UserProvider>
          <Hovercounter/>
          <Clickcounter/>
          <LifeCycleA/>
          <Form/>
          <h1 className='error'>sucess</h1>
          <h1 className={Styles.sucess}>sucess</h1>
          
          <Inline/>
          <StyleSheet secondary={false}/>
          <NameList/>
          <UserGreeting/>
          <EventBind/>
          <Classclick/>
          <Functionclick/>
        <Message/>
        <Navbar dark color="primary">
          <div className="container">
            <NavbarBrand href="/">Confusion</NavbarBrand>
          </div>
        </Navbar>
        <Menu dishes={this.state.dishes}/>
        <Greet name="asdsa">dfsddafda</Greet>
        <Greet name="dddas" heroname="sas">
          <button>Click</button>
        </Greet>
        <Welcome name="dddas" heroname="sas"/>
        <Welcome name="dddas" heroname="sas"/>
        <Hello/>
         </div>
    
      );
  }
}


export default App;
