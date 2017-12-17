import React, { Component } from 'react';
import '../../App.css';
/*
Screen:LoginScreen

*/
import LoginScreen from '../Login/Loginscreen';
/*
Module:Material-UI
Material-UI is used for designing ui of the app
*/
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import RaisedButton from 'material-ui/RaisedButton';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import FontIcon from 'material-ui/FontIcon';
import {blue500, red500, greenA200} from 'material-ui/styles/colors';
import VerticalLinearStepper from '../Common/VerticalLinearStepper';
import ErrorHandler from '../Common/ErrorHandler';


var apiBaseUrl = "http://localhost:4000/api/";

var request = require('superagent');

class DashboardScreen extends Component {
  constructor(props){
    super(props);
    this.state={
      role:'admin',      
      draweropen:false      
    }
  }
  componentWillMount(){
 
  }
  
/*
  Function:handleClick
  Parameters: event
  Usage:This fxn is handler of submit button which is responsibel for place order
  to backend
*/
handleClick(event){
      alert("Success");
 
}

/*
  Function:cancelOrder
  Parameters: event
  Usage:This fn is handler of cancel order
 
*/
cancelOrder(event){
     //ErrorHandler.handleOpen();
     // var errorHandler=[];
     //   errorHandler.push(<ErrorHandler appContext={this.props.appContext} open={true}/>)
     //   this.props.appContext.setState({errorHandler:errorHandler})

 
}

/*
  Function:toggleDrawer
  Parameters: event
  Usage:This fxn is used to toggle drawer state
  */
toggleDrawer(event){
  // console.log("drawer click");
  this.setState({draweropen: !this.state.draweropen})
}

/*
  Function:handleDivClick
  Parameters: event
  Usage:This fxn is used to close the drawer when user clicks anywhere on the 
  main div
  */
handleDivClick(event){
  // console.log("event",event);
  if(this.state.draweropen){
    this.setState({draweropen:false})
  }
}

/*
  Function:handleLogout
  Parameters: event
  Usage:This fxn is used to end user session and redirect the user back to login page
  */
handleLogout(event){
  // console.log("logout event fired",this.props);
  var loginPage =[];
  loginPage.push(<LoginScreen appContext={this.props.appContext}/>);
  this.props.appContext.setState({loginPage:loginPage,DashboardScreen:[]})
}

  render() {
    return (
      <div className="Dashboard">

        <MuiThemeProvider>
           <VerticalLinearStepper></VerticalLinearStepper>
          </MuiThemeProvider>
  

           <MuiThemeProvider className="margin-height">
           <button id="placeOrder" label="Place Order" primary={true} style={style} onClick={(event) => this.handleClick(event)}>Place Order</button>
      
      <ErrorHandler>
          
       </ErrorHandler>
      </MuiThemeProvider>
         


                
          </div>
    );
  }
}

const style = {
  margin: 15,
};

export default DashboardScreen;