import React, { useState } from 'react';
import axios from 'axios';
// import './addtheaters.css';

const AddTheaterForm = () => {
  const [name, setName] = useState('');
  const [address, setAddress] = useState('');
  const [city, setCity] = useState('');
  const [state, setState] = useState('');
  const [zip, setZip] = useState('');

  const handleSubmit = async (e) => {
    // e.preventDefault();
    try {
      const res = await axios.post('https://ticket-booking-7xzl.onrender.com/theaters', { name, address, city, state, zip });
      console.log(res.data);
    } catch (err) {
      console.error(err);
    }
  };

  return (
       <div>
              <h3>ADD THEATERS</h3>
    <form onSubmit={handleSubmit}>
      <label htmlFor="name">Name:</label>
      <input type="text" id="name" value={name} onChange={(e) => setName(e.target.value)} />

      <label htmlFor="address">Address:</label>
      <input type="text" id="address" value={address} onChange={(e) => setAddress(e.target.value)} />

      <label htmlFor="city">City:</label>
      <input type="text" id="city" value={city} onChange={(e) => setCity(e.target.value)} />

      <label htmlFor="state">State:</label>
      <input type="text" id="state" value={state} onChange={(e) => setState(e.target.value)} />

      <label htmlFor="zip">Zip:</label>
      <input type="number" id="zip" value={zip} onChange={(e) => setZip(e.target.value)} />

      <button type="submit">Add Theater</button>
    </form>
    </div>
  );
};

export default AddTheaterForm;
