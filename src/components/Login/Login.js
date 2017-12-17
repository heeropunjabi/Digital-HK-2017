import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import DropDownMenu from 'material-ui/DropDownMenu';
import MenuItem from 'material-ui/MenuItem';
import axios from 'axios';
import DashboardScreen from '../Dashboard/DashboardScreen';
import Dashboard from '../Dashboard/Dashboard';

var apiBaseUrl = "loginRest.json";

class Login extends Component {
  constructor(props){
    super(props);
    var localloginComponent=[];
    localloginComponent.push(
      <MuiThemeProvider>
        <div>
         <TextField id="username"
           hintText="Enter  your Admin Id"
           floatingLabelText="Admin Id"
           onChange = {(event,newValue) => this.setState({username:newValue})}
           />
         <br/>
           <TextField id="password"
             type="password"
             hintText="Enter your Password"
             floatingLabelText="Password"
             onChange = {(event,newValue) => this.setState({password:newValue})}
             />
           <br/>
           <button  id ="SubmitBtn1" primary={true} style={style} onClick={(event) => this.handleClick(event)}>Submit</button>
       </div>
       </MuiThemeProvider>
    )
    this.state={
      username:'',
      password:'',
      menuValue:1,
      loginComponent:localloginComponent,
      loginRole:'student'
    }
  }
  componentWillMount(){
    console.log('component will mount');
    sessionStorage.clear();
  }
  handleClick(event){
    var self = this;
    debugger;
    sessionStorage.setItem("username",this.state.username);
    var payload={
      "userid":this.state.username,
	    "password":this.state.password,
      "role":this.state.loginRole
    }
    axios.post(apiBaseUrl, payload)
   .then(function (response) {
     console.log(response);
     if(response.data.code == 200){
       console.log("Login successfull");
     
     }
     else if(response.data.code == 204){
       console.log("Username password do not match");
       alert(response.data.success)
     }
     else{
       console.log("Username does not exists");
       alert("Username does not exist");
     }
   })
   .catch(function (error) {
     console.log(error);    
       var dashboardScreen=[];
       dashboardScreen.push(<Dashboard appContext={self.props.appContext} role={self.state.loginRole}/>)
       self.props.appContext.setState({loginPage:[],dashboardScreen:dashboardScreen})
   });
  }
  handleMenuChange(value){
    console.log("menuvalue",value);
    var loginRole;
    if(value==1){
      var localloginComponent=[];
      loginRole='admin';
      localloginComponent.push(
        <MuiThemeProvider>
          <div>
           <TextField id="adminId"
             hintText="Enter your Admin Id"
             floatingLabelText="Admin Id"
             onChange = {(event,newValue) => this.setState({username:newValue})}
             />
           <br/>
             <TextField id="password"
               type="password"
               hintText="Enter your Password"
               floatingLabelText="Password"
               onChange = {(event,newValue) => this.setState({password:newValue})}
               />
             <br/>
             <button  id ="loginSubmitButton" label="Submit" primary={true} style={style} onClick={(event) => this.handleClick(event)}>SUBMIT</button> 
         </div>
         </MuiThemeProvider>
      )
    }
    else if(value == 2){
      var localloginComponent=[];
      loginRole='user';
      localloginComponent.push(
        <MuiThemeProvider>
          <div>
           <TextField id="userId"
             hintText="Enter your user Id"
             floatingLabelText="User Id"
             onChange = {(event,newValue) => this.setState({username:newValue})}
             />
           <br/>
             <TextField  id="userPassword"
               type="password"
               hintText="Enter your Password"
               floatingLabelText="Password"
               onChange = {(event,newValue) => this.setState({password:newValue})}
               />
             <br/>
             <button  id ="userLoginSubmitButton" label="Submit" primary={true} style={style} onClick={(event) => this.handleClick(event)}>SUBMIT</button> 
             
         </div>
         </MuiThemeProvider>
      )
    }
    this.setState({menuValue:value,
                   loginComponent:localloginComponent,
                   loginRole:loginRole})
  }
  render() {
    return (
      <div>
        <MuiThemeProvider>
        <AppBar class="customTheme"
             title="Login"
           />
        </MuiThemeProvider>
        <MuiThemeProvider>
        <div>
        <p></p>
        <DropDownMenu id="selectUser" value={this.state.menuValue} onChange={(event,index,value)=>this.handleMenuChange(value)}>
          <MenuItem value={1} primaryText="Admin" />
          <MenuItem value={2} primaryText="User" />
        </DropDownMenu>
        </div>
        </MuiThemeProvider>
        {this.state.loginComponent}
        <footer class="footer"> <span class="left">@copyright Amdocs India      </span>   <span class="right"> Developed by: Hackaton-Winners</span></footer>
      </div>
    );
  }
}

const style = {
  margin: 15,
};

export default Login;