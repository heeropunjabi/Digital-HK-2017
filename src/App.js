import React, { Component } from 'react';
import injectTapEventPlugin from 'react-tap-event-plugin';
import './App.css';
import Login from './components/Login/Login';
import LoginScreen from './components/Login/Loginscreen';
import DashboardScreen from './components/Dashboard/DashboardScreen';
import Dashboard from './components/Dashboard/Dashboard';
import VerticalLinearStepper from './components/Common/VerticalLinearStepper';
import ErrorHandler from './components/Common/ErrorHandler';
import $ from 'jquery';
import axios from 'axios';

injectTapEventPlugin();


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loginPage: [],
      dashboardScreen: [],
      errorHandler: []
    }
  }
  componentWillMount() {
    var loginPage = [];
    loginPage.push(<LoginScreen appContext={this} />);
    this.setState({
      loginPage: loginPage
    })
  }
  submitData(id, eventName) {
    var url = window.location.href;
    var apiBaseUrl = "http://localhost:3001/create-event";
    var d = new Date(); // for now
    var datetext = d.getHours() + ":" + d.getMinutes() + ":" + d.getSeconds();
    var today = new Date();
    var dd = today.getDate();
    var mm = today.getMonth() + 1; //January is 0!

    if (!sessionStorage.getItem("username")) {
      return;

    }
    var yyyy = today.getFullYear();
    if (dd < 10) {
      dd = '0' + dd;
    }
    if (mm < 10) {
      mm = '0' + mm;
    }

    var today1 = dd + ':' + mm + ':' + yyyy + ":" + today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds() + "_" + sessionStorage.getItem("username");

    var payload = {

      url: url,
      componentID: id,
      eventName: eventName,
      sessionID: today1

    };
    axios.post(apiBaseUrl, payload)
      .then(function (response) {
        console.log(response);
        if (response.CreateEventResponse.success) {
          console.log("Login successfull");
        }
        else {
          console.log("Username password do not match");
        }
      })
      .catch(function (error) {
        console.log(error);
      });
  }
  render() {
    var self = this;
    self.last = "";
    $(document).on('click', function (event) {

      var id = "";
      try {
        if (event.target.id) {
          id = event.target.id;
        }
        else if (event.target.parentElement && event.target.parentElement.id) {
          id = event.target.parentElement.id;
        }
        else if (event.target.parentElement.parentElement && event.target.parentElement.parentElement.id) {
          id = event.target.parentElement.parentElement.id

        }
        if(id!="" && id==self.last){
          return;
        }

      }
      catch (e) {

      }
      

      if (event.target.id) {
        self.submitData("" + event.target.id, 'click');
        self.last = id;
      }
      if (event.target.parentElement.id) {
        self.submitData(event.target.parentElement.id, 'click');
        self.last = id;
      }
      else if (event.target.parentElement.parentElement && event.target.parentElement.parentElement.id) {
        self.submitData(event.target.parentElement.parentElement.id, 'click');
        self.last = id;
      }
      


    });
    $(document).focusout(function (event) {
      if (event.target.nodeName === 'INPUT' && event.target.id && event.target.type != "checkbox" && event.target.type != "radio") {
        if (event.target.id == 'username') {
          sessionStorage.setItem("username", event.target.value);
        }
        self.submitData("" + event.target.id + ":" + event.target.value, 'inputFocusOut');
      }
    });
    return (
      <div className="App">
        {this.state.loginPage}
        {this.state.dashboardScreen}
        {this.state.errorHandler}
      </div>
    );
  }
}

const style = {
  margin: 15,
};

export default App;