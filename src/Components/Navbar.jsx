import React, { useContext, useState } from "react";
import "../styles/Navbar.css";
import { AiOutlineSearch } from "react-icons/ai";
import { HiOutlineShoppingCart } from "react-icons/hi";
import { GiHamburgerMenu } from "react-icons/gi";
import { Link } from "react-router-dom";
import cartContext from "../context/cart/cartContext";
import categoryContext from "../context/category/categoryContext.js";
import Sidebar from "./Sidebar";
import productContext from "../context/product/productContext";
import { useEffect } from "react";

const Navbar = () => {
  const [showSideBar, setShowSideBar] = useState(false);
  const productData = useContext(productContext);
  const cartData = useContext(cartContext);
  const categoryData = useContext(categoryContext);

  const updateCategory = (newCategory) => {
    categoryData.update(newCategory);
  };

  const [search, setSearch] = useState("");
  const handleChange = (event) => {
    const input = event.target.value;
    setSearch(input);
  };
  const contains = (string, substring) => {
    const lowerCaseString = string.toLowerCase();
    const lowerCaseSubstring = substring.toLowerCase();
    return lowerCaseString.indexOf(lowerCaseSubstring) !== -1;
  };
  useEffect(() => {
    var filteredList = productData.data.filter((item) =>
      contains(item.title, search)
    );
    productData.update(filteredList);
  }, [search]);
  return (
    <div className="nav-bar">
      <div className="upper-nav">
        {/**Logo */}
        <Link to="/">
          <img
            className="logo"
            alt="amazon_logo"
            src="https://links.papareact.com/f90"
          />
        </Link>
        {/**Search bar */}
        <div className="search-bar upper-nav-search-bar">
          <input
            type="text"
            className="search-box"
            placeholder="Search Amazon.in"
            onChange={handleChange}
            value={search}
          />
          {/**Search Icon */}
          <AiOutlineSearch className="search-icon" />
        </div>

        <div id="right-nav" className="right-nav">
          <div className="right-nav-item">
            <p className=" text">Hello, Mayank</p>
            <p className="bold-text text">Account & Lists</p>
          </div>
          <div className="right-nav-item return">
            <p className="text">Return</p>
            <p className="bold-text text">& Orders</p>
          </div>
          <div className="right-nav-item" text>
            <div className="cart">
              <HiOutlineShoppingCart className="cart-logo" />
              <Link className="cart-text" to={"checkout"}>
                Cart
              </Link>

              <div className="cart-size">{cartData.cart.length}</div>
            </div>
          </div>
        </div>
      </div>

      {/* Lower Nav Bar */}
      <div className="lower-nav">
        <p
          className="navbar-dropdown"
          onClick={() => setShowSideBar(!showSideBar)}
        >
          <GiHamburgerMenu className="filter-icon" />
          More Filters
        </p>
        <p className="one all" onClick={() => updateCategory("all")}>
          Show All Categories
        </p>
        <p className="one" onClick={() => updateCategory("men's clothing")}>
          Show Men's Clothings
        </p>
        <p className="one" onClick={() => updateCategory("jewelery")}>
          Show Jewellery
        </p>
        <p className="one" onClick={() => updateCategory("electronics")}>
          Show Electronics
        </p>
        <p className="one" onClick={() => updateCategory("women's clothing")}>
          Show Women's Clothings
        </p>
        {/**Search bar */}
        <div className="search-bar lower-nav-search-bar">
          <input
            type="text"
            className="search-box"
            placeholder="Search Amazon.in"
            onChange={handleChange}
            value={search}
          />
          {/**Search Icon */}
          <AiOutlineSearch className="search-icon" />
        </div>
      </div>
      {showSideBar && <Sidebar />}
    </div>
  );
};

export default Navbar;
