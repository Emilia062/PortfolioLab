import './App.css';
import Home from "./components/Home";
import {
    HashRouter,
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
          <Home/>
          <HashRouter>
            <Routes>
                <Route exact path='/' element={Home}/>
                <Route path='/logowanie' element={HomeHeader}/>
                <Route path='/rejestracja' element={HomeHeader}/>
            </Routes>
          </HashRouter>
      </>
  );
}

export default App;
