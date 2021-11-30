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

function App() {
  return (
      <>
          <BrowserRouter>
              <Home/>
            {/*<Routes>*/}
            {/*    <Route exact path='/' element={HomeHeader}/>*/}
            {/*    <Route path='/logowanie' element={Login}/>*/}
            {/*    <Route path='/rejestracja' element={HomeHeader}/>*/}
            {/*</Routes>*/}
          </BrowserRouter>
      </>
  );
}

export default App;
