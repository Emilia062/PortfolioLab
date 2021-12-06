import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import "./scss/main.scss";
import reportWebVitals from './reportWebVitals';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Home from "./components/Home";
import HomeHeader from "./components/HomeHeader";
import Login from "./components/Login";
import Registration from "./components/Registration";
import Form from "./components/Form";

ReactDOM.render(
  <React.StrictMode>
      <BrowserRouter>
          <App/>
          <Routes>
              <Route exact path='/' component={App} />
              <Route exact path='/logowanie' component={Login} />
              <Route path='/rejestracja' component={Registration} />
              <Route path='/oddaj-rzeczy' component={Form}/>
          </Routes>
      </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
