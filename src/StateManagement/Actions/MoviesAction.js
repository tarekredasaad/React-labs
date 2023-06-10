import axios from "axios";

export const getMovies = (data) => (dispach) => {
    return axios.get("https://api.themoviedb.org/3/movie/popular?api_key=aa6fc65fcedb7431af3ac2fbe6484cd0")
        .then((res) => dispach({
            type: "GET_MOVIES_LIST",
            payload: res.data.results
        }))
        .catch((err) =>  console.log(err))    
}