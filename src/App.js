import './App.css';
import Home from "./components/Home";
import {
    BrowserRouter,
    Route,
    Routes,
    Link,
    Switch,
    NavLink,
} from 'react-router-dom';
import HomeHeader from "./components/HomeHeader";
import Login from "./components/Login";
import Registration from "./components/Registration";
import React from "react";
import Form from "./components/Form";

function App() {
  return (
      <>
          <Home/>
      </>
  );
}

export default App;
