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

function App() {
  return (
      <>
          <BrowserRouter>
              <Home/>
            {/*<Routes>*/}
            {/*    <Route exact path='/' element={HomeHeader}/>*/}
            {/*    <Route exact path='/logowanie' element={Login}/>*/}
            {/*    <Route exact path='/rejestracja' element={Registration}/>*/}
            {/*</Routes>*/}
          </BrowserRouter>
      </>
  );
}

export default App;
