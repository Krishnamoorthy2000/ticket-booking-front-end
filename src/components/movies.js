import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './movies.css';
import { useNavigate } from 'react-router-dom';

const MovieList = () => {
  const [movies, setMovies] = useState([]);
  const navigate =useNavigate();


  useEffect(() => {
    async function fetchMovies() {
      try {
        const res = await axios.get('https://ticket-booking-7xzl.onrender.com/movies');
        setMovies(res.data);
      } catch (err) {
        console.error(err);
      }
    }
    fetchMovies();
  }, []);

  const handlebooking = (id) => {
    navigate(`/theaterlist/${id}`);
  }

  return (
    <div>
      <h1>Movie List</h1>
      <div className="card-container">
        {movies.map((movie) => (
          <div className="card" key={movie._id}>
            <img src={movie.poster} alt={movie.title} />
            <div className="card-info">
              <h2>{movie.title}</h2>
              <p>Release Date: {new Date(movie.releaseDate).toLocaleDateString()}</p>
              <p>Duration: {movie.duration} minutes</p>
              <p>Cast: {movie.cast.join(', ')}</p>
              <p>Directors: {movie.directors.join(', ')}</p>
              <p>Writers: {movie.writers.join(', ')}</p>
              <button onClick={()=>handlebooking(movie._id)}>book movie</button>
            </div>
            
          </div>
        ))}
      </div>
    </div>
  );
};

export default MovieList;
