import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from "react-router-dom";


function AdminSignup() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const navigate = useNavigate();


  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleFirstNameChange = (event) => {
    setFirstName(event.target.value);
  };

  const handleLastNameChange = (event) => {
    setLastName(event.target.value);
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    axios.post('https://ticket-booking-7xzl.onrender.com/admin/signup', { email, password, firstName, lastName })
      .then((response) => {
        console.log(response.data);
        navigate('/admin/login')
        // Redirect to admin dashboard
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <div>
      <h1>Admin Signup</h1>
      <form onSubmit={handleFormSubmit}>
        <label>
          Email:
          <input type="email" value={email} onChange={handleEmailChange} />
        </label>
        <br />
        <label>
          Password:
          <input type="password" value={password} onChange={handlePasswordChange} />
        </label>
        <br />
        <label>
          First Name:
          <input type="text" value={firstName} onChange={handleFirstNameChange} />
        </label>
        <br />
        <label>
          Last Name:
          <input type="text" value={lastName} onChange={handleLastNameChange} />
        </label>
        <br />
        <button type="submit">Signup</button>
      </form>
    </div>
  );
}

export default AdminSignup;
