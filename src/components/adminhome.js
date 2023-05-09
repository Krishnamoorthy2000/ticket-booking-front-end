import React from "react";
import { useNavigate } from "react-router-dom";

export default function Adminhome() {
  const navigate = useNavigate();

  return (
    <div className="button-container">
      <button onClick={() => navigate("/addtheater")}>Add Theater</button>
      <div>   </div>
      <button onClick={() => navigate("/addmovie")}>Add Movie</button>
    </div>
  );
}
