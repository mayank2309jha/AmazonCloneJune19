import colorContext from "./colorContext";
import React from "react";
import { useState } from "react";

const colorState = (props) => {
  const [color, setColor] = new useState("all");

  const update = (color) => {
    setColor(color);
  };
  return (
    <div>
      <colorContext.Provider value={{ color, update }}>
        {props.children}
      </colorContext.Provider>
    </div>
  );
};

export default colorState;