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

function App() {
  return (
      <>
          {/*<BrowserRouter>*/}
              <Home/>
          {/*  <Switch>*/}
          {/*      <Route exact path='/' element={Home}/>*/}
          {/*      <Route path='/logowanie' element={HomeHeader}/>*/}
          {/*      <Route path='/rejestracja' element={HomeHeader}/>*/}
          {/*  </Switch>*/}
          {/*</BrowserRouter>*/}
      </>
  );
}

export default App;
