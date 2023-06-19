import "./App.css";
import Navbar from "./Components/Navbar";
import Banner from "./Components/Banner";
import ProductFeed from "./Components/ProductFeed";
import CategoryState from "./context/category/categoryState";

import { useState, useEffect } from "react";
import RatingState from "./context/rating/ratingState";
import ColorState from "./context/color/colorState";
import PriceState from "./context/price/priceState";
function App() {
  const [item, setItem] = useState([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((json) => setItem(json));
  }, []);

  return (
    <CategoryState>
      <RatingState>
      <ColorState>
      <PriceState>
      <div className="App">
          <Navbar />
          <Banner />
          <ProductFeed products={item} />
        </div>
        </PriceState>
      </ColorState>
      </RatingState>
    </CategoryState>
  );
}

export default App;
