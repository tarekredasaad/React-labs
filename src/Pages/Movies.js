import { useEffect, useState } from "react"
import React from 'react'
import axios from "axios";
import Image from "../Components/ImageCard";
import { useDispatch, useSelector } from "react-redux";
import { getMovies } from "../StateManagement/Actions/MoviesAction";
function Movies(){

    //const [movies, setMovies] = useState([]);
    const movies = useSelector(state => state.movieRed.list)
    const dispach = useDispatch()

    useEffect(() => {

        dispach(getMovies())
        // axios.get("https://api.themoviedb.org/3/movie/popular?api_key=aa6fc65fcedb7431af3ac2fbe6484cd0")
        // .then((res) => 
        // {
        //     console.log(res.data.results)
        //     setMovies(res.data.results)
        // })
        // .catch((err) =>  console.log(err))    
    },[])

    return(
        <div class="container-fluid">
            <h1 className="text-info text-center m-2"> Popular Movies </h1>   
            <div class="row p-5">
                {movies.map((movie, index) => {
                    return(
                        <div key={index} class="col"> 
                            {/* <Image poster_path={movie.poster_path} id={movie.id} /> */}
                            <Image Movie={movie} flag={true}/>
                        </div>
                    )
                })}
            </div>
        
        </div>
    )
}

export default Movies;