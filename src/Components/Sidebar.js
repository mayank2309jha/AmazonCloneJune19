import React, { useContext, useState } from "react";
import "../styles/Sidebar.css";
import { RiArrowDropDownLine } from "react-icons/ri";
import { GiClothes } from "react-icons/gi";
import { AiFillStar } from "react-icons/ai";
import { AiFillFormatPainter } from "react-icons/ai";
import { MdOutlineAttachMoney } from "react-icons/md";
import categoryContext from "../context/category/categoryContext";
import ratingContext from "../context/rating/ratingContext";
import colorContext from "../context/color/colorContext";
import priceContext from "../context/price/priceContext";
export const Sidebar = () => {
  const [category, setCategory] = useState(false);
  const [rating, setRating] = useState(false);
  const [color, setColor] = useState(false);
  const [price, setPrice] = useState(false);
  const [material, setMaterial] = useState(false);
  const [brand, setBrand] = useState(false);
  const { update } = useContext(categoryContext);
  const updateCategory = (newCategory) => {
    update(newCategory);
  };
  const ratingData = useContext(ratingContext);
  const colorData = useContext(colorContext);
  const priceData = useContext(priceContext);
  const [input1,setInput1] = useState();
  const [input2,setInput2] = useState();
  const handleSubmit = (event) => {
    priceData.update(input1,input2);
    event.preventDefault();
  };
  return (
    <div>
      <ul className="sidebar">
        <li className="filter-class">
          <div>
            <button className="dropdown" onClick={() => setCategory(!category)}>
              <RiArrowDropDownLine />
            </button>
            <span className="sidebar-text">Filter by Category</span>
            <span className="icon">
              <GiClothes />
            </span>
          </div>
          {category && (
            <div className="categories">
              <p onClick={() => updateCategory("men's clothing")}>
                Show Men's Clothing
              </p>
              <p onClick={() => updateCategory("jewelery")}>Show Jewellery</p>
              <p onClick={() => updateCategory("electronics")}>
                Show Electronics
              </p>
              <p onClick={() => updateCategory("women's clothing")}>
                Show Women's Clothing
              </p>
            </div>
          )}
        </li>
        <li className="filter-class">
          <div>
            <button className="dropdown" onClick={() => setRating(!rating)}>
              <RiArrowDropDownLine />
            </button>
            <span className="sidebar-text">Filter by Rating</span>
            <span className="icon">
              <AiFillStar />
            </span>
          </div>
          {rating && (
            <div className="categories">
              <p onClick={() => ratingData.updateRating(4)}>4 and above</p>
              <p onClick={() => ratingData.updateRating(3)}>3 and above</p>
              <p onClick={() => ratingData.updateRating(2)}>2 and above</p>
              <p onClick={() => ratingData.updateRating(1)}>1 and above</p>
            </div>
          )}
        </li>
        <li className="filter-class">
          <div>
            <button className="dropdown" onClick={() => setColor(!color)}>
              <RiArrowDropDownLine />
            </button>
            <span className="sidebar-text">Filter by Colour</span>
            <span className="icon">
              <AiFillFormatPainter />
            </span>
          </div>
          {color && (
            <div className="categories">
              <p onClick={() => colorData.update("blue")}>Blue</p>
              <p onClick={() => colorData.update("white")}>White</p>
              <p onClick={() => colorData.update("black")}>Black</p>
              <p onClick={() => colorData.update("brown")}>Brown</p>
              <p onClick={() => colorData.update("violet")}>Violet</p>
              <p onClick={() => colorData.update("gold")}>Gold</p>
              <p onClick={() => colorData.update("red")}>Red</p>
            </div>
          )}
        </li>
        <li className="filter-class">
          <div>
            <button className="dropdown" onClick={() => setPrice(!price)}>
              <RiArrowDropDownLine />
            </button>
            <span className="sidebar-text">Filter by Price</span>
            <span className="icon">
              <MdOutlineAttachMoney />
            </span>
          </div>
          {price && (
            <div className="categories">
              <p onClick = {() => priceData.update(0,100)}>Under ₹100</p>
              <p onClick = {() => priceData.update(100,500)}>₹100-₹500</p>
              <p onClick = {() => priceData.update(500,1000)}>₹500-₹1000</p>
              <p onClick = {() => priceData.update(1000,1000000)}>Over ₹1000</p>
              <form className="sidebar-form" onSubmit = {handleSubmit}>
                <span className = "symbol">₹</span>
                <span className = "input-wrapper">
                <input className="input-box" placeholder="Min" value = {input1} onChange = {(event) => setInput1(event.target.value)}/>
                </span>
                <span className = "symbol">₹</span>
                <span className = "input-wrapper">
                <input className="input-box" placeholder="Max" value = {input2} onChange = {(event) => setInput2(event.target.value)}/>
                </span>
                <button className="sidebar-price-button">Go</button>
              </form>
            </div>
          )}
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
