import { useState } from "react";
import cartData from "../../data/ShppingCartData";
import cartContext from "./cartContext";

const CartState = (props) => {
  const [cart, setCart] = useState(cartData);

  //Add an item to cart
  const addItem = (toAddItem) => {
    //First we will check if this object is present in the array.
    var presentAlready = false;
    for (var i = 0; i < cart.length; i++) {
      if (cart[i].id === toAddItem.id) {
        presentAlready = true;
      }
    }
    if (presentAlready) return;
    else {
      const newArray = cart.concat(toAddItem);
      setCart(newArray);
    }
  };
  //Delete an item from cart
  const deleteItem = (id) => {
    const newArray = cart.filter((obj) => obj.id !== id);
    setCart(newArray);
  };
  //Edit an item in a cart
  const addQty = (id) => {
    //How will I change the Quantity?
    //1. Get the cart value.
    //2. Get the index of the item i want to change
    //3. Make changes to this item.
    //setCart(updateArray).
    const updatedArray = [...cart];
    const index = updatedArray.findIndex((item) => item.id === id);
    updatedArray[index].quantity++;
    setCart(updatedArray);
  };

  const deleteQty = (id) => {
    //How will I change the Quantity?
    //1. Get the cart value.
    //2. Get the index of the item i want to change
    //3. Make changes to this item.
    //setCart(updateArray).
    const updatedArray = [...cart];
    const index = updatedArray.findIndex((item) => item.id === id);
    if (updatedArray[index].quantity == 1) {
      deleteItem(id);
    } else {
      updatedArray[index].quantity--;
      setCart(updatedArray);
    }
  };

  return (
    <cartContext.Provider
      value={{ cart, setCart, addItem, deleteItem, addQty, deleteQty }}
    >
      {props.children}
    </cartContext.Provider>
  );
};

export default CartState;
