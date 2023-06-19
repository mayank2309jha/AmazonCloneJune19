import categoryContext from "./categoryContext";
import React from "react";
import { useState } from "react";

const categoryState = (props) => {
  const [category, setCategory] = new useState("all");

  const update = (newCategory) => {
    setCategory(newCategory);
  };

  return (
    <div>
      <categoryContext.Provider value={{ category, update }}>
        {props.children}
      </categoryContext.Provider>
    </div>
  );
};

export default categoryState;
