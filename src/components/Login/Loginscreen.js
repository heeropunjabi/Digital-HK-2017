import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import RaisedButton from 'material-ui/RaisedButton';

import Login from './Login';
import Register from '../Register/Register';
class Loginscreen extends Component {
  constructor(props){
    super(props);
    var loginButtons=[];
    loginButtons.push(
      
      <div>
      <MuiThemeProvider>
        <div>
           <RaisedButton id="registerBtn" label={"Register"} primary={true} style={style} onClick={(event) => this.handleClick(event,'admin')}/>
       </div>
       </MuiThemeProvider>
      
      </div>
    )
    this.state={
      username:'',
      password:'',
      loginscreen:[],
      loginmessage:'',
      loginButtons:loginButtons,
         isLogin:true
    }
  }
  componentWillMount(){
    var loginscreen=[];
    loginscreen.push(<Login parentContext={this} appContext={this.props.appContext}/>);
    var loginmessage = "Not registered yet, Register Now";
    this.setState({
                  loginscreen:loginscreen,
                  loginmessage:loginmessage
                    });
  }
  handleClick(event,userRole){
    console.log("event",userRole);
    var loginmessage;
    if(this.state.isLogin){
      var loginscreen=[];
      loginscreen.push(<Register parentContext={this} appContext={this.props.appContext} role={userRole}/>);
      loginmessage = "Already registered.Go to Login";
      var loginButtons=[];
      loginButtons.push(
        <div>
        <MuiThemeProvider>
          <div>
             <RaisedButton id="loginButton" label={"Login"} primary={true} style={style} onClick={(event) => this.handleClick(event,userRole)}/>
         </div>
         </MuiThemeProvider>
        </div>
      )
      this.setState({
                     loginscreen:loginscreen,
                     loginmessage:loginmessage,
                     loginButtons:loginButtons,
                     isLogin:false
                   })
    }
    else{
      var loginscreen=[],loginButtons=[];
      loginButtons.push(
        <div>
        <MuiThemeProvider>
          <div>
             <RaisedButton id="registerButton" label={"Register"} primary={true} style={style} onClick={(event) => this.handleClick(event,'user')}/>
         </div>
         </MuiThemeProvider>
       
        </div>
      )
      loginscreen.push(<Login parentContext={this} appContext={this.props.appContext} role={userRole}/>);
      loginmessage = "Not Registered yet.Go to registration";
      this.setState({
                     loginscreen:loginscreen,
                     loginmessage:loginmessage,
                     loginButtons:loginButtons,
                     isLogin:true
                   })
    }
  }
  render() {
    return (
      <div className="loginscreen">
        {this.state.loginscreen}
        <div class="customTheme">
          {this.state.loginmessage}
          {this.state.loginButtons}
        </div>
      </div>
    );
  }
}

const style = {
  margin: 15,
};

export default Loginscreen;