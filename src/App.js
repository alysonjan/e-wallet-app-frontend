import React, { Component } from 'react'
import './App.css';
import { Navbar } from './components';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Homepage, LoginPage, SignUpPage, WalletPage } from './pages';
import { PrivateRoute } from './PrivateRoute';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = { value: " " };
}
render() {
  return (
    <>
      <Router>
        <Navbar/>
        <Switch>
          <Route path='/login' component={LoginPage} exact />
          <Route path='/signup' component={SignUpPage} exact />
          <PrivateRoute path='/' component={Homepage} exact />
          <PrivateRoute path='/wallet' component={WalletPage} exact />
        </Switch>
    </Router>
    </>
  )
}
}
export default App;
