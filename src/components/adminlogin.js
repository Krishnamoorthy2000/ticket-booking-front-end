import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from "react-router-dom";

// import './adminlogin.css'

function AdminLogin() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();


  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    axios.post('https://ticket-booking-7xzl.onrender.com/admin/login', { email, password })
      .then((response) => {
        console.log(response.data);
        navigate('adminhome');
        // Redirect to admin dashboard
      })
      .catch((error) => {
        console.error(error);
      });
  };
  const handleSignup=()=>
  {
    navigate('/admin/signup')
  }

  return (
    <div>
      <h1>Admin Login</h1>
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
        <button type="submit">Login</button>
        <p>don't have an account go to </p>
        <button onClick={handleSignup}>signup</button>
      </form>
    </div>
  );
}

export default AdminLogin;
