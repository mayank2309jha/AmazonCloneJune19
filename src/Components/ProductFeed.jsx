import React, { useContext } from "react";
import Product from "./Product";
import "../styles/ProductFeed.css";
import productContext from "../context/product/productContext";
import categoryContext from "../context/category/categoryContext";
import { useState } from "react";
import { useEffect } from "react";
import ratingContext from "../context/rating/ratingContext";
import colorContext from "../context/color/colorContext";
import priceContext from "../context/price/priceContext";
const ProductFeed = () => {
  const productData = useContext(productContext);
  const [productToShow, setProductToShow] = useState(productData.state);
  const { category } = useContext(categoryContext);
  const ratingData = useContext(ratingContext);
  const colorData = useContext(colorContext);
  const priceData = useContext(priceContext);
  //Filter by categories useEffect. Also to re render the productToShow once the productData is updated.
  useEffect(() => {
    var filteredProducts = productData.data.filter(
      (product) => product.category === category
    );
    filteredProducts.length === 0
      ? setProductToShow(productData.data)
      : setProductToShow(filteredProducts);
  }, [category, productData]);
  //To update product feed when ratings are changed.
  useEffect(() => {
    var filteredProducts = productData.data.filter(
      (product) => product.rating.rate >= ratingData.rating
    );
    filteredProducts.length === 0
      ? setProductToShow(productData.data)
      : setProductToShow(filteredProducts);
  }, [ratingData]);
  //To update product feed when colors are changed.
  useEffect(() => {
    var tempProducts = [];
    if (colorData.color === "blue") {
      tempProducts.push(productData.data[0]);
      tempProducts.push(productData.data[3]);
      tempProducts.push(productData.data[16]);
    } else if (colorData.color === "white") {
      tempProducts.push(productData.data[1]);
      tempProducts.push(productData.data[4]);
      tempProducts.push(productData.data[5]);
      tempProducts.push(productData.data[6]);
      tempProducts.push(productData.data[17]);
    } else if (colorData.color === "black") {
      tempProducts.push(productData.data[1]);
      tempProducts.push(productData.data[8]);
      tempProducts.push(productData.data[9]);
      tempProducts.push(productData.data[10]);
      tempProducts.push(productData.data[11]);
      tempProducts.push(productData.data[12]);
      tempProducts.push(productData.data[13]);
      tempProducts.push(productData.data[15]);
    } else if (colorData.color === "brown") {
      tempProducts.push(productData.data[2]);
    } else if (colorData.color === "violet") {
      tempProducts.push(productData.data[14]);
      tempProducts.push(productData.data[19]);
    } else if (colorData.color === "gold") {
      tempProducts.push(productData.data[7]);
    } else if (colorData.color === "red") {
      tempProducts.push(productData.data[18]);
    }
    var filteredProducts = tempProducts.filter((products) =>
      productData.data.includes(products)
    );
    filteredProducts.length === 0
      ? setProductToShow(productData.data)
      : setProductToShow(filteredProducts);
  }, [colorData]);
  //To update the product feed when the prices are changed.
  useEffect(() => {
    var filteredProducts = productData.data.filter(
      (product) => Math.ceil(product.price*10) >= priceData.price.min && Math.ceil(product.price*10) <= priceData.price.max
    );
    filteredProducts.length === 0
      ? setProductToShow(productData.data)
      : setProductToShow(filteredProducts);
  }, [priceData]);
  return (
    <div className="product-feed">
      <div className="products one">
        {productToShow.map(
          ({ id, title, price, description, category, image, rating }) => (
            <div>
              <Product
                id={id}
                title={title}
                price={price}
                description={description.substring(0, 100)}
                category={category}
                image={image}
                rating={rating}
              />
            </div>
          )
        )}
      </div>
    </div>
  );
};

export default ProductFeed;
