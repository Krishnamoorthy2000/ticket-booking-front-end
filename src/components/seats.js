import React, { useState, useEffect } from "react";
import "./seats.css";
import { MdOutlineChair } from "react-icons/md";
import axios from "axios";
import { useParams } from "react-router-dom";

function Seat() {
  const capacity = 150;
  const [selectedSeats, setSelectedSeats] = useState([]);
  const [soldSeats, setSoldSeats] = useState([]);
  const [count, setCount] = useState(0);

  const { movie_id, theater_id } = useParams();

  useEffect(() => {
    async function fetchSeat() {
      try {
        const res = await axios.get(
          `https://ticket-booking-7xzl.onrender.com/seat/${movie_id}/${theater_id}`
        );
        const sold = res.data;
        setSoldSeats([...soldSeats, ...sold]);
      } catch (err) {
        console.error(err);
      }
    }
    fetchSeat();
  }, []);

  const handleSeatSelection = (seat) => {
    if (selectedSeats.includes(seat)) {
      setSelectedSeats(selectedSeats.filter((s) => s !== seat));
      setCount(count - 1);
    } else {
      setSelectedSeats([...selectedSeats, seat]);
      setCount(count + 1);
    }
  };

  const handleBooking = () => {
    axios
      .post(
        `https://ticket-booking-7xzl.onrender.com/seat/${movie_id}/${theater_id}`,
        selectedSeats
      )

      .then((response) => {
        setSoldSeats([...soldSeats, ...selectedSeats]);

        console.log(response.data);
        setSelectedSeats([]);
        setCount(0);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const renderSeats = () => {
    const seats = [];
    for (let i = 1; i <= capacity; i++) {
      let status = "";
      if (soldSeats.includes(i)) {
        status = "sold";
      } else if (selectedSeats.includes(i)) {
        status = "selected";
      } else {
        status = "available";
      }
      seats.push(
        <div
          key={i}
          className={`icon ${status}`}
          onClick={() => handleSeatSelection(i)}
        >
          <MdOutlineChair />
        </div>
      );
    }
    return seats;
  };

  return (
    <div className="seat">
      <h1>Movie Theater Seat Booking</h1>
      <div className="seats-container">
        <div className="screen">Screen</div>

        <div className="seats">{renderSeats()}</div>
      </div>
      <div className="booking-info">
        <div className="legend">
          <div className="available available-icon"> </div>
          <div>Available</div>
          <div className="selected selected-icon"></div>
          <div>Selected </div>
          <div className="sold sold-icon"></div>
          <div> Sold </div>
        </div>
        <div className="booking-summary">
          <div>Selected Seats: {count}</div>
          {selectedSeats.length > 0 && (
            <div>
              {selectedSeats.map((s) => (
                <span key={s}>{s}, </span>
              ))}
            </div>
          )}
          <button className="seat-booking" onClick={handleBooking}>
            Book Now
          </button>
        </div>
      </div>
    </div>
  );
}

export default Seat;
