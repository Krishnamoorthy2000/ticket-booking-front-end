import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Seat from "./components/seats";
import AddTheaterForm from "./components/addtheaters";
import MovieList from "./components/movies";
import AddMovieForm from "./components/addmovie";
import AdminSignup from "./components/adminsignup";
import AdminLogin from "./components/adminlogin";
import UserLogin from "./components/userlogin";
import UserSignup from "./components/usersignup";
import Home from "./components/homepage";
import TheatersList from "./components/theater";
import NotFound from "./components/404";
import Adminhome from "./components/adminhome";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element ={<Home/>}></Route>
          <Route path="/admin/login" element={<AdminLogin />}></Route>
          <Route path="/admin/signup" element={<AdminSignup />}></Route>
          <Route path="/user/login" element={<UserLogin />}></Route>
          <Route path="/user/signup" element={<UserSignup />}></Route>
          <Route path="/movieslist" element={<MovieList />}></Route>
          <Route path="/theaterlist/:movie_id" element={<TheatersList />} />
          <Route path="/addtheater" element={<AddTheaterForm />}></Route>
          <Route path="/addmovie" element={<AddMovieForm />}></Route>
          <Route path="/seat/:movie_id/:theater_id" element={<Seat />} />
          <Route path='/adminhome' element={<Adminhome/>}/>
          <Route path="*" element={<NotFound/>}/>

        </Routes>
      </Router>
    </div>
  );
}

export default App;
