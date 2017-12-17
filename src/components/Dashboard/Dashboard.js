import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import AppBar from 'material-ui/AppBar';
import FontIcon from 'material-ui/FontIcon';
import {blue500, red500, greenA200} from 'material-ui/styles/colors';

import LoginScreen from '../Login/Loginscreen';
import DashboardScreen from './DashboardScreen';



class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {draweropen: false,currentScreen:[]};
  }
  componentDidMount(){
    var currentScreen=[];
    currentScreen.push(<DashboardScreen appContext={this.props.appContext} role={this.props.role}/>);
    this.setState({currentScreen})
  }
  /**
   * Toggle opening and closing of drawer
   * @param {*} event 
   */ 
  toggleDrawer(event){
  // console.log("drawer click");
  this.setState({draweropen: !this.state.draweropen})
  }
  handleMenuClick(event,page){
    switch(page){     
      case "logout":
      var loginPage =[];
      loginPage.push(<LoginScreen appContext={this.props.appContext}/>);
      this.props.appContext.setState({loginPage:loginPage,dashboardScreen:[]})
      break;
    }
    this.setState({draweropen:false})
  }
  render() {
    return (
      <div className="DasBoard">
        <MuiThemeProvider>
          <AppBar class="customHeader"
            title="New Order"
            onLeftIconButtonTouchTap={(event) => this.toggleDrawer(event)}
          />
        </MuiThemeProvider>
        <MuiThemeProvider>
          <Drawer open={this.state.draweropen}>
            <MenuItem>
              <div>
              User Profile
              <a href="#"><FontIcon
                className="material-icons drawerclosebutton"
                color={blue500}
                styles={{ top:10,}}
                onClick={(event) => this.toggleDrawer(event)}
              >clear</FontIcon></a>
              </div>
            </MenuItem>
              <div>
              <MenuItem onClick={(event) => this.handleMenuClick(event,"openprint")}>
                 New Order 
              </MenuItem>
              <MenuItem onClick={(event) => this.handleMenuClick(event,"openpast")}>
                  
              </MenuItem>
              <MenuItem onClick={(event) => this.handleMenuClick(event,"logout")}>
                  Logout
              </MenuItem>
              </div> 
          </Drawer>
        </MuiThemeProvider>
        <div>
          {this.state.currentScreen}
        </div>
         <footer class="footer"> <span class="left">@copyright Amdocs India </span>   <span class="right"> Developed by: Hackaton-Winners</span></footer>
      </div>
    );
  }
}

export default Dashboard;
