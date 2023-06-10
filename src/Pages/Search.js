import { useState } from 'react';
import React from 'react';

const searchUrl = "https://api.themoviedb.org/3/movie/popular?api_key=aa6fc65fcedb7431af3ac2fbe6484cd0&query="


function Search() {

    const [movies, setMovies] = useState([]);
    const [search, setSearch] = useState("");


    const submitForm = (e) => {
        e.preventDefault();

        fetch(searchUrl + search)
            .then(res => res.json())
            .then(data => {
                setMovies(data.results);
            })
        setSearch();
    }

    const searchQuery = (e) => {
        setSearch(e.target.value)
    }


    return (

        <form onSubmit={submitForm}>
            <i class="fas fa-search"></i>
            <label className="sr-only" htmlFor="searchMovie">Search for a movie</label>
            <input
                className="search"
                type="search"
                placeholder="Search for a movie.."
                value={search}
                onChange={searchQuery}
            />
        </form>




    )
}

export default Search;
