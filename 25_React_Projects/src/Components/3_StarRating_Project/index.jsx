import { useState } from "react";
import { FaStar } from "react-icons/fa";
import "./style.css";

export default function Starrating({ noOfStars = 5 }) {
  const [hover, setHover] = useState(0);
  const [rating, setRating] = useState(0);

  function handleclick(getCurrentIndex) {
    console.log(getCurrentIndex);
    setRating(getCurrentIndex);
  }

  function handleHoverIn(getCurrentIndex) {
    console.log(getCurrentIndex);
    setHover(getCurrentIndex);
  }

  function handleHoverOut() {
    // setRating(rating);
    setHover(rating)
  }

  return (
    <div>
      <h1 className="flex flex-row justify-center text-3xl bg-green-900 mt-1 py-4 text-gray-400 ">
        Star Rating
      </h1>
      {[...Array(noOfStars)].map((_, index) => {
        index += 1;

        return (
          <FaStar
            key={index}
            className={index <= (hover || rating) ? "active" : "inactive"}
            onClick={() => handleclick(index)}
            onMouseMove={() => handleHoverIn(index)}
            onMouseLeave={() => handleHoverOut( )}
            size={40}
          />
        );
      })}
    </div>
  );
}
