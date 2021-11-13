import React, {Component} from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter , Router, Route, Switch} from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import HomePage from './pages/HomePage'


const App = () => {
  return (
    <React.Fragment>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/login" component={LoginPage}></Route>
        </Switch>
      </BrowserRouter>
    </React.Fragment>
  )
}

export default App;