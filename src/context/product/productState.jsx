import React, {useState, useEffect} from "react";
import ProductContext from "./productContext";

const ProductState = (props) => {
    
    const [item, setItem] = useState([]);
    useEffect(() => {
      fetch("https://fakestoreapi.com/products")
        .then((res) => res.json())
        .then((json) => setItem(json));
    }, []);
    const [data,setData] = useState([]);
    useEffect(() => {
        fetch("https://fakestoreapi.com/products")
          .then((res) => res.json())
          .then((json) => setData(json));
      }, []);

    const state = item;

    const update = (productList) => {
        setItem(productList);
    }

    return(
        <ProductContext.Provider value = {{data,state,update}}>
            {props.children}
        </ProductContext.Provider>
    )
}

export default ProductState;