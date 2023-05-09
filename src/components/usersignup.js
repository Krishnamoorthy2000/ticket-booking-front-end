import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from "react-router-dom";

function UserSignup() {
  const [name, setName] = useState('');
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  
  const navigate = useNavigate();


  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    axios.post('https://ticket-booking-7xzl.onrender.com/user/signup', { name, username, email, password })
      .then((response) => {
        console.log(response.data);
        navigate('/user/login');
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <div>
      <h1>User Signup</h1>
      <form onSubmit={handleFormSubmit}>
        <label>
          Name:
          <input type="text" value={name} onChange={handleNameChange} />
        </label>
        <br />
        <label>
          Username:
          <input type="text" value={username} onChange={handleUsernameChange} />
        </label>
        <br />
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
        <button type="submit">Signup</button>
      </form>
    </div>
  );
}

export default UserSignup;
