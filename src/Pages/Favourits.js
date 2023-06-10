import { useSelector } from "react-redux";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import Image from "../Components/ImageCard";
import '../Styles/style.css'

function Favourit() {

    const FavouritMovies = useSelector((state) => state.favRed.favouritMovies)

    return (
        <div>
            <div class="container-fluid">
            <h1 className="text-danger text-center mt-3"> <FontAwesomeIcon icon={faHeart} className="text-danger" size="3x"/> My Favourit Movies </h1>   
            <div class="row p-5">
                {FavouritMovies.map((movie, index) => {
                    return(
                        <div key={index} class="col"> 
                            <Image Movie={movie} flag={false}/>
                        </div>
                    )
                })}
            </div>
        
        </div>
        </div>
    )
}

export default Favourit;