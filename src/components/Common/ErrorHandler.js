import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import AppBar from 'material-ui/AppBar';
import FontIcon from 'material-ui/FontIcon';
import FlatButton from 'material-ui/FlatButton';
import Dialog from 'material-ui/Dialog';
import RaisedButton from 'material-ui/RaisedButton';
import {blue500, red500, greenA200} from 'material-ui/styles/colors';




class ErrorHandler extends Component {
 state = {
    open: false,
  };



  handleOpen = () => {
    this.setState({open: true});
  };

  handleClose = () => {
    this.setState({open: false});
  };

  render() {
    const actions = [
     
      <FlatButton
        label="Ok"
        primary={true}       
        onClick={this.handleClose}
      />,
    ];

    return (
      <div class="errorDiv">
        <button id="cancelOrder" label="Cancel" onClick={this.handleOpen} >Cancel Order</button>
        <Dialog
          title="Application Error"
          actions={actions}
          modal={true}
          open={this.state.open}
        >
         UUID : eadfefe1212-12121-sdasd-23weweasf-dsff.
        </Dialog>
      </div>
    );
  }
}

export default ErrorHandler;
