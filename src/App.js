import React, {Component} from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter , Router, Route, Switch} from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import HomePage from './pages/HomePage';
import RegisterPage from './pages/RegisterPage';


const App = () => {
  return (
    <React.Fragment>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={LoginPage} />
          <Route exact path="/home" component={HomePage}></Route>
          <Route exact path="/register" component={RegisterPage}></Route>
        </Switch>
      </BrowserRouter>
    </React.Fragment>
  )
}

export default App;