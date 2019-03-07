import React, { Component } from 'react';
import './App.css';
import { BrowserRouter, Route } from 'react-router-dom'
import Login from './components/users/Login'
import Logout from './components/users/Logaut'
import Signup from './components/users/SignUp'
import DashboardContainer from './components/dashboard/DashboardContainer'

class App extends Component {
  render() {
    return (
      <BrowserRouter>
      <div>

        <Route exact path="/" component={Login} />
        <Route exact path="/dashboard" component={DashboardContainer} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/logout" component={Logout} />
        <Route exact path="/signup" component={Signup} />
        </div>
        
      </BrowserRouter>
    );
  }
}

export default App;
