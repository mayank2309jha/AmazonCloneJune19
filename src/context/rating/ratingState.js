import React,{useState} from "react";
import ratingContext from "./ratingContext";

const ratingState = (props) => {
  const [rating, setRating] = new useState(0);

  const updateRating = (rate) => {
    setRating(rate);
  };
  return (
    <div>
      <ratingContext.Provider value={{ rating, updateRating }}>
        {props.children}
      </ratingContext.Provider>
    </div>
  );
}

export default ratingState;
