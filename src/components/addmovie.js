import React, { useState } from 'react';
import axios from 'axios';

const AddMovieForm = () => {
  const [formData, setFormData] = useState({
    title: '',
    releaseDate: '',
    duration: '',
    cast: [],
    directors: [],
    writers: [],
    poster: '',
  });

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      await axios.post('https://ticket-booking-7xzl.onrender.com/movies', formData);
      alert('Movie added successfully!');
    } catch (err) {
      console.error(err);
      alert('Error adding movie!');
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    if (name === "cast" || name === "directors" || name === "writers") {
      // Split the input value by comma and remove any leading/trailing white spaces
      const array = value.split(",").map((item) => item.trim());
      setFormData((prevState) => ({
        ...prevState,
        [name]: array,
      }));
    } else {
      setFormData((prevState) => ({
        ...prevState,
        [name]: value,
      }));
    }
  };
  

  return (
    <div>
      <h1>Add Movie</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="title">Title:</label>
          <input type="text" id="title" name="title" value={formData.title} onChange={handleChange} required />
        </div>
       
        <div>
          <label htmlFor="releaseDate">Release Date:</label>
          <input type="date" id="releaseDate" name="releaseDate" value={formData.releaseDate} onChange={handleChange} required />
        </div>
        <div>
          <label htmlFor="duration">Duration (minutes):</label>
          <input type="number" id="duration" name="duration" value={formData.duration} onChange={handleChange} required />
        </div>
        <div>
          <label htmlFor="cast">Cast:</label>
          <input type="text" id="cast" name="cast" value={formData.cast} onChange={handleChange} required />
        </div>
        <div>
          <label htmlFor="directors">Directors:</label>
          <input type="text" id="directors" name="directors" value={formData.directors} onChange={handleChange} required />
        </div>
        <div>
          <label htmlFor="writers">Writers:</label>
          <input type="text" id="writers" name="writers" value={formData.writers} onChange={handleChange} required />
        </div>
     
        <div>
          <label htmlFor="poster">Poster URL:</label>
          <input type="text" id="poster" name="poster" value={formData.poster} onChange={handleChange} required />
        </div>
        <button type="submit">Add Movie</button>
      </form>
    </div>
  );
};

export default AddMovieForm;
