import React from 'react';
import './404.css';

function NotFound() {
  return (
    <div className="error-container not-found">
      <h1>404</h1>
      <h2>Page Not Found</h2>
      <p>The page you are looking for could not be found.</p>
    </div>
  );
}

export default NotFound;

