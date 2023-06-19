import React, { useContext } from "react";
import "../styles/Checkout.css";
import Navbar from "./Navbar";
import cartContext from "../context/cart/cartContext";
import CartProduct from "../Components/CartProduct";

const Checkout = () => {
  const cartData = useContext(cartContext);
  var totalCost = 0;
  //Do something about this map i tried for loop but it gave error.
  // eslint-disable-next-line
  cartData.cart.map((item) => {
    totalCost += Math.ceil(item.price)*item.quantity;
  });
  return (
    <div>
      <Navbar />
      {/* We will create 2 divs one of them will be on the left side and other will be on the right side 
    only when the screen width exeeds a particular threshold. In the mobile screen the two divs will be on top of each other.*/}
    <main className="checkout-main">
        <div className="left-side">
          <img
            src="http://links.papareact.com/ikj"
            alt="more good days ahead"
            className="checkout-image"
          />
          <div className="shopping-basket">
            {cartData.cart.length > 0 ? (
              <h1 style = {{fontWeight: '400', borderBottom: 'solid 0.01px black', paddingBottom: '20px'}}>Your Shopping Basket</h1>
            ) : (
              <h1>Your Basket is Empty</h1>
            )}

            {cartData.cart.map((item) => {
              return (
                <div>
                  {" "}
                  <CartProduct
                    key={item.id}
                    id={item.id}
                    title={item.title}
                    price={Math.ceil(item.price)}
                    description={item.description.slice(0, 100)}
                    category={item.category}
                    image={item.image}
                    rating={item.rating}
                    quantity = {item.quantity}
                  />
                </div>
              );
            })}
          </div>
        </div>
        {/*Right part of the checkout. Payment area. */}
        <div className="right-side">
          {cartData.cart.length > 0 && (
            <>
              <h3>
                <div>Subtotal</div>
                <div> ({cartData.cart.length} items):</div>
                <span>INR {Math.ceil(totalCost) * 10}</span>
              </h3>
              <button className="checkout-button">
                {/*Note that you only want people to be able to checkout if they are logged in. */}
                Sign in to Checkout
              </button>
            </>
          )}
        </div>
      </main>
    </div>
  );
};

export default Checkout;
