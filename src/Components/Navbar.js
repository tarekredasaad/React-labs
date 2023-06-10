import { Link } from "react-router-dom"
import '../Styles/style.css'
import { useSelector } from 'react-redux';
import { useContext } from "react";
import { ThemeContext } from "../Context/ThemeContext";

function Navbar() {

    const FavCounter = useSelector((state) => state.favRed.counter)
    const { contextTheme, setContextTheme } = useContext(ThemeContext)

    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark ">
            <div className="container-fluid">
                <a class="navbar-brand" href="#">
                    <img src="./image.jpeg" width="30" height="30" alt="" class="image-circle" />
                </a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <a className="nav-link active" aria-current="page" href="#">Home</a>
                        </li>

                        <li className="nav-item">
                            <Link className="nav-link" to="/login">Login</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/register">Register</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/movies">Movies</Link>
                        </li>

                        <li className="nav-item">
                            <Link className="nav-link" to="/favourits">Favourit <span class="badge badge-info text-info text-lg">{FavCounter}</span></Link>
                        </li>

                        <li class="nav-item dropdown">
                            <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Theme
                            </a>
                            <ul class="dropdown-menu">
                                <li><a class="dropdown-item" onClick={() => setContextTheme("light")}>light</a></li>
                                <li><a class="dropdown-item" onClick={() => setContextTheme("dark")}>dark</a></li>
                            </ul>
                        </li>

                    </ul>

                </div>
                <form class="form-inline">
                    <input class="inpt" type="search" placeholder="Search" aria-label="Search" />
                    <button class="btn btn-outline-info my-2 my-sm-0" type="submit">Search</button>
                </form>
            </div>
        </nav>
    )
}
export default Navbar;
