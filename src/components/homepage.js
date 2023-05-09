import React from "react";
import { useNavigate } from "react-router-dom";

export default function Home() {
  const navigate = useNavigate();

  const handleadmin = () => {
    navigate("/admin/login");
  };

  const handleuser = () => {
    navigate("/user/login");
  };

  return (
    <div className="button-container">
            <button onClick={handleadmin}>admin</button>
      <button onClick={handleuser}>user</button>
    </div>
  );
}
