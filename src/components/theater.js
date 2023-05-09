import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate,useParams } from 'react-router-dom';


const TheatersList = () => {
  const [theaters, setTheaters] = useState([]);
  const navigate=useNavigate();
    const { movie_id } = useParams();
    console.log(movie_id);


  


  useEffect(() => {
    const fetchTheaters = async () => {
      try {
        const res = await axios.get('https://ticket-booking-7xzl.onrender.com/theaters');
        setTheaters(res.data);
      } catch (err) {
        console.error(err);
      }
    };
    fetchTheaters();
  }, []);
 

  const handleseat = (theater_id) => {
    navigate(`/seat/${movie_id}/${theater_id}`);
    console.log(theater_id);
  };
  
  

  return (
    <div>
      <h3>List of Theaters</h3>
      <ul>
        {theaters.map((theater) => (
          <li key={theater._id}>
            <p>Name: {theater.name}</p>
            <p>Address: {theater.address}</p>
            <p>City: {theater.city}</p>
            <p>State: {theater.state}</p>
            <p>Zip: {theater.zip}</p>
            <button onClick={() => handleseat(theater._id)}>book seat</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TheatersList;
