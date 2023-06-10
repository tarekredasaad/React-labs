import { useEffect, useState } from "react"
import axios from "axios"
import { useParams } from "react-router-dom"
import '../Styles/style.css'

function Movie() {

    const movie = useParams()
    const [singleMovie, setSingleMovie] = useState({})

    useEffect(() => {
        axios.get(`https://api.themoviedb.org/3/movie/${movie.id}?api_key=aa6fc65fcedb7431af3ac2fbe6484cd0`)
            .then((res) => {
                console.log(res.data)
                setSingleMovie(res.data)
            })
            .catch((err) => console.log(err))
    }, [])

    return (
        <div class="container p-5 m-5">
            <div class="row">
                <div class="col-4">
                    <img class="shadow-lg mb-5 rounded image-card" src={`https://image.tmdb.org/t/p/w500${singleMovie.poster_path}`} />
                </div>
                <div class="col-5">
                    <p><strong class="text-info">Original title: </strong>{singleMovie.original_title}</p>
                    <p><strong class="text-info">Release date: </strong>{singleMovie.release_date}</p>
                    <p><strong class="text-info">Overview: </strong><small class="text-secondry">{singleMovie.overview}</small></p>
                </div>
            </div>
        </div>
    )
}

export default Movie;