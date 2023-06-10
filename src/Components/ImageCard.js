import { Link } from "react-router-dom"
import React, { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import '../Styles/style.css'
import { useDispatch } from "react-redux";
import {useHistory} from "react-router-dom"
import { ChangeFavourit } from "../StateManagement/Actions/FavAction";

function Image(props) {
    const history = useHistory();
    const dispatch = useDispatch();
    const [favButton, setfavButton] = useState({ display: 'none' });

    const AddToFav = (Movie) => {
        dispatch(ChangeFavourit({ movie: Movie, flag: true }));
    }

    const RemoveFromFav = (Movie) => {
        dispatch(ChangeFavourit({ movie: Movie, flag: false }));
        history.push('/favourits')
    }
    return (
        <div className="image-container">
            <Link to={`/Movie/${props.Movie.id}`}>
                <img className="shadow-lg mb-5 rounded image-card" src={`https://image.tmdb.org/t/p/w500${props.Movie.poster_path}`}
                    onMouseEnter={e => {
                        setfavButton({ display: 'block' });
                    }}
                    onMouseLeave={e => {
                        setfavButton({ display: 'none' })
                    }} />
            </Link>

            {props.flag && <FontAwesomeIcon icon={faHeart} className="text-info icon" size="6x" style={favButton} />}

            {props.flag ? <button onClick={() => AddToFav(props.Movie)} className="btn btn-info btns">Add To Favourit</button>
                : <button onClick={() => RemoveFromFav(props.Movie)} className="btn btn-info btns-r">Remove From Favourit</button>}

        </div>
    )
}
export default Image;