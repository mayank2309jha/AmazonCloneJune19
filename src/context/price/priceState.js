import priceContext from "./priceContext";
import React from "react";
import { useState } from "react";

const priceState = (props) => {
  const [price, setPrice] = new useState({
      "min" : 0,
      "max" : Number.MAX_SAFE_INTEGER
  });

  const update = (minPrice,maxPrice) => {
      setPrice({
          "min" : minPrice,
          "max" : maxPrice
      })
  };
  return (
    <div>
      <priceContext.Provider value={{ price, update }}>
        {props.children}
      </priceContext.Provider>
    </div>
  );
};

export default priceState;