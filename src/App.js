import React, { Component, Fragment } from 'react';
import './App.css';
import Login from './components/loginComponent/login';
import Signup from './components/signupComponent/signup';
import { Button } from 'reactstrap';

class App extends Component{

  constructor(props){
    super(props);

    this.state={
      mainElement: <Fragment>
        <Login></Login>
        <div className="form-group" style={{textAlign:"center"}}>   
          <Button color="link" onClick={()=>this.signUp()}>Don't have an account? Sign up!</Button>
        </div>
      </Fragment>
    }


  }
  signUp(){
    this.setState({
      mainElement: <Fragment>
        <Signup></Signup>
        <div className="form-group" style={{textAlign:"center"}}>
          <Button color="link" onClick={()=>this.signIn()}>Already have an account? Login.</Button>
        </div>
      </Fragment>
    })
  }

  signIn(){
    this.setState({
      mainElement: <Fragment>
        <Login></Login>
        <div className="form-group" style={{textAlign:"center"}}>   
          <Button color="link" onClick={()=>this.signUp()}>Don't have an account? Sign up!</Button>
        </div>
      </Fragment>
    })
  }

  render(){
    return(
      <Fragment>
        {this.state.mainElement}
      </Fragment>
    );
  }
}

export default App;
