import React, { useContext } from "react";
import "../styles/Product.css";
import { AiFillStar } from "react-icons/ai";
import cartContext from "../context/cart/cartContext";

const Product = ({
  id,
  title,
  price,
  description,
  category,
  image,
  rating,
}) => {

  const {addItem} = useContext(cartContext);
  var quantity = 1;
  const addToBasket = () => {
      const toAdd = {id,title,price,description,category,image,rating,quantity};
      console.log()
      addItem(toAdd);
  };

  return (
    <div className="product-card">
      <p className="category">{category}</p>
      <p>{title}</p>
      <img src={image} alt = "productImage" className="product-image" />
      <div className="flex py-3">
        {Array(Math.ceil(rating.rate))
          .fill()
          .map(( i) => (
            <AiFillStar className="star" />
          ))}
        <div className="description">{description}...</div>
        <div className="price">INR {Math.ceil(price) * 10}</div>
        <button className="button" onClick={addToBasket}>
          Add to Basket
        </button>
      </div>
    </div>
  );
};

export default Product;
