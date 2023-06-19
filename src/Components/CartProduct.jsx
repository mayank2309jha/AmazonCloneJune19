import React, { useContext } from "react";
import { AiFillStar } from "react-icons/ai";
import {GrAdd} from "react-icons/gr";
import {AiOutlineMinus}  from "react-icons/ai";
import "../styles/CartProduct.css";
import cartContext from "../context/cart/cartContext";

const CartProduct = ({
  id,
  title,
  price,
  description,
  category,
  image,
  rating,
  quantity
}) => {
  const {deleteItem, addQty, deleteQty} = useContext(cartContext);

  const deleteFromBasket = (id) => {
    deleteItem(id);
  }

  const addItem = (id) => {
    addQty(id);
  }

  const removeItem = (id) => {
    deleteQty(id);
  }
  return (
    <div className="checkout-product">
      <div >
        <img alt="product" src={image} className="checkout-product-image" />
      </div>
      <div className = "product-information">
        <h3>{title}</h3>
        {Array(Math.ceil(rating.rate))
          .fill()
          .map((_, i) => (
            <AiFillStar className="star" />
          ))}
        <div>{description}...</div>
        <div className="price">INR {price * 80}</div>
      </div>
      <div className = "add-remove-buttons">
          <button className = "checkout-buttons " onClick = {() => {deleteFromBasket(id)}}>Remove from Basket</button>
          <div>
            <button className = "update-qty-buttons" onClick = {() => {addItem(id)}}><GrAdd/></button>
            <span className = "quantity">{quantity}</span>
            <button className = "update-qty-buttons" onClick = {() => {removeItem(id)}}><AiOutlineMinus/></button>
          </div>
      </div>
    </div>
  );
};

export default CartProduct;

