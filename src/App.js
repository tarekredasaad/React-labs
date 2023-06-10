import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Navbar from './Components/Navbar';
import LoginForm from './Components/Login';
import RegisterForm from './Components/RegisterForm';
import Movies from './Pages/Movies';
import Movie from './Pages/Movie';
import Favourit from './Pages/Favourits';
import { useState } from 'react';
import {ThemeContext} from './Context/ThemeContext'

function App() {

  const [contextTheme, setContextTheme] = useState("light")

  return (
      <div className={contextTheme == "dark" ? "bg-dark text-light" : "bg-light"}>
        <ThemeContext.Provider value={{ contextTheme, setContextTheme }}>
          <BrowserRouter>
            <Navbar />
            <Switch>
              <Route path={"/"} exact component={Movies} />
              <Route path={"/login"} exact component={LoginForm} />
              <Route path={"/register"} exact component={RegisterForm} />
              <Route path={"/movies"} exact component={Movies} />
              <Route path={"/movie/:id"} exact component={Movie} />
              <Route path={"/favourits"} exact component={Favourit} />
            </Switch>
          </BrowserRouter>
        </ThemeContext.Provider>
      </div>
  );
}

export default App;
