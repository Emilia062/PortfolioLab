import './App.css';
import Home from "./components/Home";
import {
    BrowserRouter,
    Route,
    Switch,
} from 'react-router-dom';
import Login from "./components/Login";
import Registration from "./components/Registration";
import React from "react";
import Form from "./components/Form";
import LoggingOut from "./components/LoggingOut";

function App() {
  return (
      <>
          <BrowserRouter>
              <Switch>
                  <Route exact path='/' component={Home} />
                  <Route exact path='/logowanie' component={Login} />
                  <Route path='/rejestracja' component={Registration} />
                  <Route path='/wylogowano' component={LoggingOut} />
                  <Route path='/oddaj-rzeczy' component={Form}/>
              </Switch>
          </BrowserRouter>
      </>
  );
}

export default App;
